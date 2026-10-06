import { describe, expect, it } from 'vitest';
import { advance, advanceWithEvents, damageAfterResistance, estimateForgeCompletion, freshState, hitChance, loadState, ITEMS, MINING_DEPOSITS, MINING_STAGE_MODEL, FORGING_RECIPES, SMELTING_RECIPES, PROVISIONAL_FIRST_SLICE_COMBAT_VALUES, SAVE_KEY, selectDeposit, setCombatTarget, stageDensity, stageStrikes, startActivity, stopActivity, smithingActionTime, type SaveState } from '../game';
import { getCoreMaterialChance, getMiningPower, getPrimaryExpectedQuantity, resolvePrimaryQuantity } from './gameMath';
import { MELEE_WEAPONS } from '../content/combat/meleeWeapons';

const ORE = 'item.mining.copper_ore', INGOT = 'item.smithing.copper_ingot';
const SWORD = 'combat.weapon.melee.copper_sword', HELM = 'combat.armor.heavy.copper_helm', TROPHY = 'combat.loot.beast_trophy';

describe('Mining content and simulation', () => {
  it('resolves each active deposit and smithing recipe through registered item IDs', () => {
    for (const deposit of Object.values(MINING_DEPOSITS)) {
      expect(ITEMS[deposit.primary]).toBeDefined(); expect(ITEMS[deposit.requiredTool]).toBeDefined(); expect(deposit.unlockLevel).toBeGreaterThan(0);
      for(const item of [deposit.structuralItem,deposit.coreItem,...(deposit.gemPool??[]),...(deposit.additionalDrops??[]).map(drop=>drop.item)].filter(Boolean))expect(ITEMS[item!]).toBeDefined();
    }
    for (const recipe of Object.values(SMELTING_RECIPES)) {
      expect(ITEMS[recipe.output.item]).toBeDefined(); for (const input of recipe.inputs) expect(ITEMS[input.item]).toBeDefined();
    }
    for (const recipe of Object.values(FORGING_RECIPES)) {
      expect(ITEMS[recipe.output]).toBeDefined(); expect(recipe.unlockLevel).toBeGreaterThan(0); expect(recipe.workMultiplier).toBeGreaterThan(0);
      for (const input of recipe.inputs) expect(ITEMS[input.item]).toBeDefined();
    }
    expect(ITEMS['item.mining.copper_pickaxe'].equipment).toMatchObject({context:'profession',profession:'Mining',slot:'Pickaxe'});
    expect(ITEMS['item.smithing.copper_smithing_hammer'].equipment).toMatchObject({context:'profession',profession:'Smithing',slot:'Hammer'});
  });
  it('keeps the five canonical stages and the authored Copper and Fieldstone density curves', () => {
    expect(MINING_STAGE_MODEL.map((x) => x.name)).toEqual(['Outcrop', 'Shallow Vein', 'Main Vein', 'Deep Seam', 'Core']);
    expect([0,1,2,3,4].map(stageDensity)).toEqual([36,29,21,14,8]);
    expect([0,1,2,3,4].map((stage) => stageDensity(stage, 'mining.deposit.fieldstone_quarry'))).toEqual([42,33,25,16,9]);
    expect([0,1,2,3,4].map((stage) => stageStrikes(stage)).reduce((a,b) => a+b, 0)).toBe(20);
    expect([0,1,2,3,4].map((stage) => stageStrikes(stage, 6, 'mining.deposit.fieldstone_quarry')).reduce((a,b) => a+b, 0)).toBe(23);
    expect(getPrimaryExpectedQuantity(4, 'mining.deposit.copper_vein')).toBe(3.2);
  });
  it('completes mining stages, grants namespaced ore, then resets the cycle', () => {
    const s = freshState(); startActivity(s, 'mining');
    const result = advanceWithEvents(s, 20 * 2400);
    expect(result.state.mining.cycles).toBe(1); expect(result.state.mining.stage).toBe(0); expect(result.state.mining.density).toBe(36);
    expect(result.state.bank[ORE]).toBeGreaterThan(0); expect(result.state.skills.Mining.xp).toBeGreaterThan(0);
    expect(result.events.some((e) => e.type === 'stage-completed' && e.depositId === 'mining.deposit.copper_vein')).toBe(true);
  });
  it('preserves incomplete deposit density on stop and resets the abandoned stage when switching', () => {
    const s = freshState(); startActivity(s, 'mining'); let state = advance(s, 2 * 2400); stopActivity(state);
    expect(state.mining.density).toBe(24); state.skills.Mining.level = 5;
    expect(selectDeposit(state, 'mining.deposit.fieldstone_quarry')).toBe(true);
    expect(state.mining.density).toBe(42);
    expect(state.mining.deposits['mining.deposit.copper_vein']!.densityRemaining).toBe(36);
    expect(state.mining.deposits['mining.deposit.copper_vein']!.totalStagesCompleted).toBe(0);
  });
  it('resolves a late-game mining action with its tier tool and registered rare outputs',()=>{
    const s=freshState();s.skills.Mining.level=100;s.equipped.miningTool='item.mining.astralite_pickaxe';selectDeposit(s,'mining.deposit.astralite_vein');startActivity(s,'mining');
    const state=advance(s,4000);expect(state.mining.deposit).toBe('mining.deposit.astralite_vein');expect(state.mining.strikes).toBeGreaterThan(0);expect(ITEMS['item.mining.astral_prism']).toBeDefined();
  });
  it('keeps authored Fieldstone gem weighting and stage/tool core multipliers', () => {
    expect(MINING_DEPOSITS['mining.deposit.fieldstone_quarry'].gemPool).toEqual(['item.mining.opal','item.mining.sapphire']);
    expect(MINING_DEPOSITS['mining.deposit.copper_vein'].structuralChance).toBe(.08);
    expect(MINING_DEPOSITS['mining.deposit.copper_vein'].gemBaseChance).toBe(.0025);
    expect(MINING_DEPOSITS['mining.deposit.copper_vein'].coreBaseChance).toBe(.0005);
    expect([0,1,2,3,4].map((stage) => getCoreMaterialChance(.0005, stage, [0,0,1,5,25]))).toEqual([0,0,.0005,.0025,.0125]);
    expect(getCoreMaterialChance(.0005, 4, [0,0,1,5,25], 1.15)).toBeCloseTo(.014375);
  });
  it('uses deterministic quantity rolls mining power breakpoints', () => {
    expect(resolvePrimaryQuantity(1.25, 0, () => .5)).toBe(1);
    expect(resolvePrimaryQuantity(1.25, 0, () => .1)).toBe(2);
    expect(getMiningPower(6, 1)).toBe(6);
    expect(getMiningPower(6, 1.05)).toBeCloseTo(6.3);
    expect(getMiningPower(6, 1.1)).toBeCloseTo(6.6);
  });
  it('applies the Copper Pickaxe power and strike speed in real mining ticks', () => {
    const s = freshState(); s.skills.Mining.level = 5; s.bank['item.mining.copper_pickaxe'] = 1; s.equipped.miningTool = 'item.mining.copper_pickaxe';
    selectDeposit(s, 'mining.deposit.fieldstone_quarry'); startActivity(s, 'mining');
    const result = advanceWithEvents(s, 2450);
    expect(result.state.mining.density).toBe(34); expect(result.state.mining.timer).toBe(2450);
  });
});

describe('Smithing registries and simulation', () => {
  it('keeps Smelting and Forging in separate typed registries with canonical ingot values', () => {
    const ingot = SMELTING_RECIPES['recipe.smithing.copper_ingot'];
    expect(ingot).toMatchObject({ unlockLevel: 1, smithingXp: 7, heatRequirement: 26, unitTimeMs: 3000, warmupMs: 3040 });
    expect(ingot.inputs).toEqual([{ item: ORE, amount: 2 }]); expect(ingot.output).toEqual({ item: INGOT, amount: 1 });
    expect(FORGING_RECIPES['recipe.smithing.copper_sword'].inputs).toEqual([{ item: INGOT, amount: 4, preservable: true }]);
    expect(FORGING_RECIPES['recipe.smithing.copper_pickaxe'].inputs).toHaveLength(2);
  });
  it('warms the Field Forge, then consumes exactly two ore per ingot', () => {
    const s = freshState(); s.bank[ORE] = 2; startActivity(s, 'smelting');
    let state = advance(s, 3040); expect(state.smithing.warm).toBe(true); expect(state.bank[ORE]).toBe(2);
    state = advance(state, 3000); expect(state.bank[ORE]).toBeUndefined(); expect(state.bank[INGOT]).toBe(1); expect(state.activity).toBeNull();
  });
  it('reserves forging inputs and completes a canonical Copper Sword', () => {
    const s = freshState(); s.skills.Smithing.level = 5; s.bank[INGOT] = 4; startActivity(s, 'forging');
    expect(s.smithing.reserved).toBe(4); expect(s.bank[INGOT]).toBeUndefined();
    const state = advance(s, 60_000);
    expect(state.bank[SWORD]).toBe(1); expect(state.smithing.reserved).toBe(0); expect(state.objectives.sword).toBe(true);
  });
  it('completes a T10 forging pattern after resolving its authored material transaction',()=>{
    const s=freshState();s.skills.Smithing.level=100;s.smithing.recipe='recipe.smithing.astralite_sword';
    for(const input of FORGING_RECIPES[s.smithing.recipe].inputs)s.bank[input.item]=input.amount;
    startActivity(s,'forging');const state=advance(s,120_000);expect(state.bank['combat.weapon.melee.astralite_sword']).toBe(1);expect(state.smithing.reserved).toBe(0);
  });
  it('reserves the equipped worn tool atomically and auto-equips the Copper Pickaxe output', () => {
    const s = freshState(); s.skills.Smithing.level = 5; s.bank[INGOT] = 3; s.smithing.recipe = 'recipe.smithing.copper_pickaxe'; startActivity(s, 'forging');
    expect(s.equipped.miningTool).toBeNull(); expect(s.smithing.reservedEquipment).toBe('item.mining.worn_pickaxe');
    const loaded = loadState(JSON.stringify({ version: 3, savedAt: s.savedAt, state: s }), s.savedAt).state;
    const state = advance(loaded, 60_000);
    expect(state.equipped.miningTool).toBe('item.mining.copper_pickaxe'); expect(state.bank['item.mining.copper_pickaxe']).toBeUndefined();
    expect(state.smithing.reservedEquipment).toBeNull();
  });
  it('rejects smelting and forging starts with missing inputs without changing inventory', () => {
    const s = freshState(); s.bank[ORE] = 1; startActivity(s, 'smelting');
    expect(s.activity).toBeNull(); expect(s.smithing.message).toBe('Not enough smelting inputs'); expect(s.bank[ORE]).toBe(1);
    s.smithing.recipe = 'recipe.smithing.copper_sword'; startActivity(s, 'forging'); expect(s.activity).toBeNull(); expect(s.bank[ORE]).toBe(1);
  });
  it('estimates forge completion with the equipped hammer and reheating', () => {
    const s = freshState(); s.equipped.smithingHammer = 'item.smithing.copper_smithing_hammer'; s.smithing.work = 14; s.smithing.heat = 30; s.smithing.timer = 2140;
    expect(estimateForgeCompletion(s)).toBe(8420);
    s.smithing.reheat = true; s.smithing.timer = 700; s.smithing.heat = 20; s.smithing.work = 14;
    expect(estimateForgeCompletion(s)).toBe(4980);
  });
  it('uses hammer action time and per-unit preservation transactionally', () => {
    const s = freshState(); s.skills.Smithing.level = 5; s.bank[INGOT] = 4;
    expect(smithingActionTime(s, s.smithing.recipe)).toBe(2200);
    s.smithing.forcePreservation = true; startActivity(s, 'forging'); const state = advance(s, 60_000);
    expect(state.bank[SWORD]).toBe(1); expect(state.bank[INGOT]).toBe(4); expect(state.smithing.reserved).toBe(0);
    const smelt = freshState(); smelt.bank[ORE] = 2; smelt.smithing.forcePreservation = true; startActivity(smelt, 'smelting');
    const smelted = advance(smelt, 6040); expect(smelted.bank[ORE]).toBe(2); expect(smelted.bank[INGOT]).toBe(1);
  });
});

describe('Combat compatibility', () => {
  it('stores canonical melee stats and passive effects in the combat registry', () => {
    expect(MELEE_WEAPONS['combat.weapon.melee.copper_sword']).toMatchObject({ power: 18, accuracyBonus: 84, intervalMs: 2400, critRateBonus: .01 });
    expect(MELEE_WEAPONS['combat.weapon.melee.copper_battle_axe']).toMatchObject({ power: 21, accuracyBonus: 72, intervalMs: 2800, critDamageBonus: .1 });
    expect(MELEE_WEAPONS['combat.weapon.melee.copper_mace']).toMatchObject({ power: 19, accuracyBonus: 77, intervalMs: 2700, penetrationType: 'Crush', penetrationPp: 3 });
    expect(MELEE_WEAPONS['combat.weapon.melee.copper_mace'].special.resistanceDownPp).toBe(15);
  });
  it('uses canonical hit chance and resistance calculations', () => {
    expect(hitChance(100,100)).toBe(.5); expect(hitChance(10,100)).toBe(.05); expect(hitChance(1000,10)).toBe(.95);
    expect(damageAfterResistance(20, 12)).toBe(17); expect(damageAfterResistance(20, -8)).toBe(21);
    expect(PROVISIONAL_FIRST_SLICE_COMBAT_VALUES.wolfHp).toBe(70);
  });
  it('keeps deterministic combat and awards namespaced trophies', () => {
    const s = freshState(); s.skills.Attack.level = 5; s.equipped.weapon = SWORD; s.equipped.head = HELM; startActivity(s, 'combat');
    const a = advance(s, 60_000), b = advance(s, 60_000);
    expect(a.rng).toBe(b.rng); expect(a.combat.kills).toBeGreaterThan(0); expect(a.bank[TROPHY]).toBe(a.combat.kills);
    expect(a.gold).toBe(a.combat.kills * PROVISIONAL_FIRST_SLICE_COMBAT_VALUES.gold); expect(a.skills.Attack.xp).toBeGreaterThan(0);
  });
  it('reveals the Ironjaw Boar after each normal enemy has been defeated', () => {
    const s = freshState(); s.skills.Attack.level = 10; expect(setCombatTarget(s, 'ironjaw-boar')).toBe(false);
    for (const target of ['road-wolf','dust-rat','ragged-poacher','hedge-spark'] as const) s.combat.defeated[target] = 1;
    expect(setCombatTarget(s, 'ironjaw-boar')).toBe(true); expect(s.combat.enemyHp).toBeGreaterThan(0);
  });
});

describe('Persistence and offline parity', () => {
  it('migrates legacy v1 bank, equipped gear, deposit state, and recipe IDs to v6', () => {
    const legacy = { version: 1, savedAt: 1000, state: { version: 1, skills: { Mining: { xp: 0, level: 1 } }, bank: { ore: 8, ingot: 2, sword: 1 }, equipped: { tool: true, weapon: 'sword' }, mining: { deposit: 'copper-vein', stage: 2, density: 13 }, smithing: { recipe: 'sword' }, activity: null } };
    const loaded = loadState(JSON.stringify(legacy), 1000);
    expect(loaded.fresh).toBe(false); expect(loaded.state.version).toBe(6); expect(loaded.state.skills.Fishing.level).toBe(1); expect(loaded.state.skills.Cooking.level).toBe(1); expect(loaded.state.bank[ORE]).toBe(8); expect(loaded.state.bank[INGOT]).toBe(2);
    expect(loaded.state.equipped.weapon).toBe(SWORD); expect(loaded.state.mining.deposit).toBe('mining.deposit.copper_vein'); expect(loaded.state.mining.density).toBe(13);
    expect(loaded.state.smithing.recipe).toBe('recipe.smithing.copper_sword');
  });
  it('migrates v4 while dropping Mastery fields and clamping Auto Eat to 99%',()=>{
    const legacy:any=freshState(2000);
    legacy.version=4;legacy.mining.mastery={deposit:100};legacy.smithing.mastery={recipe:100};legacy.fishing.mastery={fish:100};legacy.cooking.mastery={recipe:100};legacy.food.threshold=100;
    const state=loadState(JSON.stringify({version:4,savedAt:2000,state:legacy}),2000).state;
    expect(state.version).toBe(6);expect(state.food.threshold).toBe(99);for(const record of [state.mining,state.smithing,state.fishing,state.cooking])expect('mastery'in record).toBe(false);
  });
  it('round-trips current saves and safely falls back from corrupt JSON', () => {
    const original = freshState(1000); original.skills.Mining.xp = 27; original.bank[ORE] = 19; original.mining.stage = 2; original.mining.density = 13;
    original.mining.deposits[original.mining.deposit]!.stageIndex = 2; original.mining.deposits[original.mining.deposit]!.densityRemaining = 13;
    const loaded = loadState(JSON.stringify({ version: 3, savedAt: 1000, state: original }), 1000).state;
    expect(loaded.skills.Mining.xp).toBe(27); expect(loaded.bank[ORE]).toBe(19); expect(loaded.mining).toMatchObject({ stage: 2, density: 13 });
    expect(loadState('{broken').fresh).toBe(true); expect(SAVE_KEY).toBe('mx-idle-save-v6');
  });
  it('matches batched simulation with repeated active ticks for Mining and Smelting', () => {
    const mining = freshState(); startActivity(mining, 'mining'); const onlineMine = tick(mining, 60_000), offlineMine = advance(mining, 60_000);
    expect(offlineMine.bank[ORE]).toBe(onlineMine.bank[ORE]); expect(offlineMine.mining.stage).toBe(onlineMine.mining.stage); expect(offlineMine.rng).toBe(onlineMine.rng);
    const smelting = freshState(); smelting.bank[ORE] = 30; startActivity(smelting, 'smelting'); const onlineSmelt = tick(smelting, 90_000), offlineSmelt = advance(smelting, 90_000);
    expect(offlineSmelt.bank[INGOT]).toBe(onlineSmelt.bank[INGOT]); expect(offlineSmelt.bank[ORE]).toBe(onlineSmelt.bank[ORE]);
  });
});

function tick(input: SaveState, ms: number) { let state = structuredClone(input); for (let t = 0; t < ms; t += 250) state = advance(state, Math.min(250, ms - t)); return state; }
