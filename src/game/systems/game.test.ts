import { describe, expect, it } from 'vitest';
import { advance, damageAfterResistance, freshState, hitChance, loadState, PROVISIONAL_FIRST_SLICE_COMBAT_VALUES, SAVE_KEY, stageDensity, stageStrikes, startActivity, stopActivity, type SaveState } from '../game';

describe('Mining', () => {
  it('uses the authored five-stage Copper curve and expected twenty strikes', () => {
    expect([0,1,2,3,4].map(stageDensity)).toEqual([36,29,21,14,8]);
    expect([0,1,2,3,4].map((stage) => stageStrikes(stage))).toEqual([6,5,4,3,2]);
    expect([0,1,2,3,4].reduce((n, stage) => n + stageStrikes(stage), 0)).toBe(20);
  });
  it('advances all layers, awards Copper, and resets Core to Outcrop', () => {
    let s = freshState(); startActivity(s, 'mining'); s = advance(s, 20 * 2400);
    expect(s.mining.cycles).toBe(1); expect(s.mining.stage).toBe(0); expect(s.mining.density).toBe(36);
    expect(s.bank.ore).toBeGreaterThan(0); expect(s.skills.Mining.xp).toBeGreaterThan(0);
  });
  it('preserves stage density when stopped and resumed', () => {
    let s = freshState(); startActivity(s, 'mining'); s = advance(s, 2400 * 2); stopActivity(s);
    expect(s.mining.stage).toBe(0); expect(s.mining.density).toBe(24);
    startActivity(s, 'mining'); s = advance(s, 2400 * 4);
    expect(s.mining.stage).toBe(1);
  });
});

describe('Smithing', () => {
  it('warms the Field Forge and consumes exactly two Ore per Ingot', () => {
    let s = freshState(); s.bank.ore = 2; startActivity(s, 'smelting');
    s = advance(s, 3040); expect(s.smithing.warm).toBe(true); expect(s.bank.ore).toBe(2);
    s = advance(s, 3000); expect(s.bank.ore).toBeUndefined(); expect(s.bank.ingot).toBe(1); expect(s.activity).toBeNull();
  });
  it('reserves recipe inputs once, reheats, then completes a real Copper Sword', () => {
    let s = freshState(); s.bank.ingot = 4; s.smithing.recipe = 'sword'; startActivity(s, 'forging');
    expect(s.smithing.reserved).toBe(4); expect(s.bank.ingot).toBeUndefined();
    s = advance(s, 60_000);
    expect(s.bank.sword).toBe(1); expect(s.smithing.reserved).toBe(0); expect(s.objectives.sword).toBe(true);
  });
  it('lets the opening seven ingots unlock and forge a Copper Helm without developer boosts', () => {
    let s = freshState(); s.bank.ore = 14; startActivity(s, 'smelting'); s = advance(s, 60_000);
    expect(s.bank.ingot).toBe(7); expect(s.skills.Smithing.level).toBeGreaterThanOrEqual(3);
    s.smithing.recipe = 'sword'; startActivity(s, 'forging'); s = advance(s, 60_000);
    expect(s.bank.sword).toBe(1); expect(s.skills.Smithing.level).toBeGreaterThanOrEqual(4);
    s.bank.ore = 4; startActivity(s, 'smelting'); s = advance(s, 20_000);
    expect(s.skills.Smithing.level).toBe(5);
    s.smithing.recipe = 'helm'; startActivity(s, 'forging'); s = advance(s, 60_000);
    expect(s.bank.helm).toBe(1); expect(s.skills.Smithing.level).toBe(5);
  });
  it('cannot consume Ore into negative quantities', () => {
    const s = freshState(); s.bank.ore = 1; startActivity(s, 'smelting');
    expect(s.activity).toBeNull(); expect(s.smithing.message).toBe('Not enough Copper Ore'); expect(s.bank.ore).toBe(1);
  });
});

describe('Equipment, combat, and activity', () => {
  it('enforces a single activity slot and switches to the new activity', () => {
    const s = freshState(); s.bank.ore = 2; startActivity(s, 'mining'); startActivity(s, 'smelting');
    expect(s.activity).toBe('smelting'); expect(s.mining.density).toBe(36);
  });
  it('uses canonical hit chance, resistance, and provisional enemy data', () => {
    expect(hitChance(100,100)).toBe(.5); expect(hitChance(10,100)).toBe(.05); expect(hitChance(1000,10)).toBe(.95);
    expect(damageAfterResistance(20, 12)).toBe(17); expect(damageAfterResistance(20, -8)).toBe(21);
    expect(PROVISIONAL_FIRST_SLICE_COMBAT_VALUES.wolfHp).toBe(70);
  });
  it('keeps a deterministic combat timeline and grants combat loot on kills', () => {
    const s = freshState(); s.equipped.weapon = 'sword'; s.equipped.head = 'helm'; startActivity(s, 'combat');
    const a = advance(s, 60_000), b = advance(s, 60_000);
    expect(a.rng).toBe(b.rng); expect(a.combat.kills).toBe(b.combat.kills);
    expect(a.combat.kills).toBeGreaterThan(0); expect(a.bank.trophy).toBe(a.combat.kills); expect(a.gold).toBe(a.combat.kills * PROVISIONAL_FIRST_SLICE_COMBAT_VALUES.gold);
    expect(a.skills.Attack.xp).toBeGreaterThan(0); expect(a.skills.Hitpoints.xp).toBeGreaterThan(0); expect(a.skills.Defence.xp).toBeGreaterThan(0);
  });
});

describe('Save and offline simulation', () => {
  it('fills missing fields and safely falls back from corrupted data', () => {
    const partial = JSON.stringify({ version: 1, savedAt: Date.now(), state: { skills: { Mining: { xp: 0, level: 1 } }, bank: {}, activity: null } });
    const loaded = loadState(partial); expect(loaded.state.equipped.tool).toBe(true); expect(loaded.state.skills.Smithing.level).toBe(1);
    expect(loadState('{broken').fresh).toBe(true);
  });
  it('round-trips versioned save data without losing progression', () => {
    const original = freshState(); original.skills.Mining.xp = 27; original.bank.ore = 19; original.gold = 8; original.mining.stage = 2; original.mining.density = 13;
    const loaded = loadState(JSON.stringify({ version: 1, savedAt: original.savedAt, state: original })).state;
    expect(loaded.skills.Mining.xp).toBe(27); expect(loaded.bank.ore).toBe(19); expect(loaded.gold).toBe(8); expect(loaded.mining).toMatchObject({ stage: 2, density: 13 });
  });
  it('matches active tick advancement and offline event advancement for Mining', () => {
    const initial = freshState(); startActivity(initial, 'mining');
    const online = tick(initial, 60_000), offline = advance(initial, 60_000);
    expect(offline.bank.ore).toBe(online.bank.ore); expect(offline.mining.stage).toBe(online.mining.stage); expect(offline.rng).toBe(online.rng);
  });
  it('matches active tick advancement and offline event advancement for Smithing', () => {
    const initial = freshState(); initial.bank.ore = 30; startActivity(initial, 'smelting');
    const online = tick(initial, 90_000), offline = advance(initial, 90_000);
    expect(offline.bank.ingot).toBe(online.bank.ingot); expect(offline.bank.ore).toBe(online.bank.ore); expect(offline.skills.Smithing.xp).toBe(online.skills.Smithing.xp);
  });
  it('matches active tick advancement and offline event advancement for Combat', () => {
    const initial = freshState(); initial.equipped.weapon = 'sword'; initial.equipped.head = 'helm'; startActivity(initial, 'combat');
    const online = tick(initial, 60_000), offline = advance(initial, 60_000);
    expect(offline.combat.kills).toBe(online.combat.kills); expect(offline.combat.playerHp).toBeCloseTo(online.combat.playerHp); expect(offline.bank.trophy).toBe(online.bank.trophy); expect(offline.rng).toBe(online.rng);
    expect(SAVE_KEY).toBe('mx-idle-save-v1');
  });
});

function tick(input: SaveState, ms: number) { let state = structuredClone(input); for (let t = 0; t < ms; t += 250) state = advance(state, Math.min(250, ms - t)); return state; }
