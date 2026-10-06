import { describe, expect, it } from 'vitest';
import { activeSequence, advanceWithEvents, canEquip, canMineDeposit, COMBAT_AREAS, ENEMIES, freshState, getPlayerAttackInterval, getPlayerResistances, getWeaponSpecial, loadState, MELEE_WEAPONS, MINING_DEPOSITS, SAVE_KEY, selectDeposit, setCombatTarget, SMELTING_RECIPES, startActivity, validateCoreContent } from '../game';

describe('pre-combat expansion readiness', () => {
  it('validates the current Mining, Smithing, and Combat registries', () => {
    expect(validateCoreContent()).toEqual([]);
    expect(Object.keys(MINING_DEPOSITS)).toHaveLength(23);
    expect(Object.keys(SMELTING_RECIPES).length).toBeGreaterThan(19);
    expect(Object.keys(COMBAT_AREAS).length).toBeGreaterThan(0);
  });

  it('normalizes stale v4 profession IDs and unknown equipped/target IDs without discarding profile data', () => {
    const old: any = freshState(1200);
    old.version = 4; old.skills.Mining = { xp: 321, level: 18 }; old.bank['item.mining.iron_ore'] = 12;
    old.mining.deposit = 'mining.deposit.removed'; old.mining.deposits['mining.deposit.copper_vein']!.totalPrimary = 17;
    old.smithing.recipe = 'recipe.smithing.removed'; old.smithing.smeltRecipe = 'recipe.smithing.removed';
    old.fishing.spot = 'fishing.spot.removed'; old.cooking.recipe = 'cooking.recipe.removed'; old.equipped.weapon = 'combat.weapon.removed';
    old.combat.targetId = 'enemy.removed'; old.combat.mastery = { xp: 99 }; old.mastery = { skill: 100 };
    const loaded = loadState(JSON.stringify({ version: 4, savedAt: 1200, state: old }), 1200).state;
    expect(loaded.version).toBe(6); expect(SAVE_KEY).toBe('mx-idle-save-v6');
    expect(loaded.skills.Mining).toEqual({ xp: 321, level: 18 }); expect(loaded.bank['item.mining.iron_ore']).toBe(12);
    expect(loaded.mining.deposit).toBe(freshState(1200).mining.deposit); expect(loaded.mining.deposits['mining.deposit.copper_vein']?.totalPrimary).toBe(17);
    expect(loaded.smithing.recipe).toBe(freshState(1200).smithing.recipe); expect(loaded.smithing.smeltRecipe).toBe(freshState(1200).smithing.smeltRecipe);
    expect(loaded.fishing.spot).toBe(freshState(1200).fishing.spot); expect(loaded.cooking.recipe).toBe(freshState(1200).cooking.recipe);
    expect(loaded.equipped.weapon).toBeNull(); expect(loaded.combat.targetId).toBe('road-wolf');
    expect('mastery' in loaded).toBe(false); expect('mastery' in loaded.combat).toBe(false);
  });

  it('requires the registered Mining tool for late deposits and resolves late smelting', () => {
    const s = freshState(); s.skills.Mining.level = 100;
    expect(canMineDeposit(s, 'mining.deposit.astralite_vein')).toBe(false);
    expect(selectDeposit(s, 'mining.deposit.astralite_vein')).toBe(false);
    s.equipped.miningTool = 'item.mining.astralite_pickaxe'; expect(selectDeposit(s, 'mining.deposit.astralite_vein')).toBe(true);
    s.skills.Smithing.level = 100; s.smithing.smeltRecipe = 'recipe.smithing.astralite_ingot'; s.bank['item.mining.astralite_ore'] = 2;
    startActivity(s, 'smelting'); const result = advanceWithEvents(s, 12_000).state;
    expect(result.bank['item.smithing.astralite_ingot']).toBe(1);
    expect(selectDeposit(result, 'mining.deposit.worldheart_deposit')).toBe(true);
    startActivity(result, 'mining');
    expect(result.activity).toBe('mining');
    expect(advanceWithEvents(result, 5_000).state.mining.deposits['mining.deposit.worldheart_deposit']).toBeDefined();
  });

  it('uses weapon and off-hand metadata for requirements and the shared attack interval', () => {
    const s = freshState(); s.skills.Attack.level = 100; s.skills.Defence.level = 100;
    s.equipped.weapon = 'combat.weapon.melee.astralite_sword';
    expect(getPlayerAttackInterval(s)).toBe(MELEE_WEAPONS['combat.weapon.melee.astralite_sword'].intervalMs);
    expect(canEquip(s, 'combat.offhand.melee.astralite_shield', 'offhand', false)).toBe(true);
    s.equipped.offhand = 'combat.offhand.melee.astralite_shield'; expect(getPlayerAttackInterval(s)).toBe(2500);
    s.equipped.weapon = 'combat.weapon.melee.astralite_battle_axe';
    expect(MELEE_WEAPONS['combat.weapon.melee.astralite_battle_axe'].handedness).toBe('1H');
    expect(canEquip(s, 'combat.offhand.melee.astralite_shield', 'offhand', false)).toBe(true);
    expect(getWeaponSpecial(s)?.name).toBe(MELEE_WEAPONS['combat.weapon.melee.astralite_battle_axe'].special.name);
  });

  it('aggregates all nine equipped resistance types from the same model used in combat', () => {
    const s = freshState();
    for (const slot of ['head', 'armor', 'hands', 'feet'] as const) s.equipped[slot] = `combat.armor.heavy.astralite_${slot === 'head' ? 'helm' : slot === 'armor' ? 'armor' : slot === 'hands' ? 'gauntlets' : 'greaves'}`;
    const resistance = getPlayerResistances(s);
    expect(resistance).toEqual({ Slash: 30, Stab: 30, Crush: 30, Pierce: 38, Puncture: 38, Air: 8, Fire: 8, Water: 8, Earth: 8 });
  });

  it('unlocks the T1 Elite after its four normal enemies and does not invent an Ironjaw phase', () => {
    const s = freshState(); expect(setCombatTarget(s, 'ironjaw-boar')).toBe(false);
    for (const id of ['road-wolf', 'dust-rat', 'ragged-poacher', 'hedge-spark']) s.combat.defeated[id] = 1;
    expect(setCombatTarget(s, 'ironjaw-boar')).toBe(true);
    expect(ENEMIES['ironjaw-boar'].phases).toBeUndefined();
    expect(activeSequence(ENEMIES['ironjaw-boar']).map(action=>action.name)).toEqual(['Gore','Gore','Iron Charge']);
    expect(COMBAT_AREAS['broken-road']?.enemies).toEqual(['road-wolf','dust-rat','ragged-poacher','hedge-spark']);
  });

  it('ends offline combat on death, preserves earned state, and does not replay rewards after reload', () => {
    const s = freshState(); s.equipped.weapon = 'combat.weapon.melee.copper_sword';
    s.combat.targetId = 'ironjaw-boar'; s.combat.enemyHp = ENEMIES['ironjaw-boar'].maxHp; s.combat.playerHp = 1; s.combat.enemyTimer = 1; s.activity = 'combat'; s.combat.runState = 'active';
    const result = advanceWithEvents(s, 60_000);
    expect(result.events.some((event) => event.type === 'combat-defeat')).toBe(true);
    expect(result.state.activity).toBeNull(); expect(result.state.combat.runState).toBe('ended');
    expect(result.state.combat.playerHp).toBeGreaterThan(0); expect(result.state.combat.elapsed).toBeLessThan(60_000);
    const bank = structuredClone(result.state.bank), gold = result.state.gold, kills = result.state.combat.kills;
    const loaded = loadState(JSON.stringify({ version: 6, savedAt: result.state.savedAt, state: result.state }), result.state.savedAt + 60_000).state;
    expect(loaded.bank).toEqual(bank); expect(loaded.gold).toBe(gold); expect(loaded.combat.kills).toBe(kills); expect(loaded.activity).toBeNull();
  });
});
