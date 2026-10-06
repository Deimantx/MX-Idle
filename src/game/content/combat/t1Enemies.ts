import type { DamageType, EnemyId, ItemId, SkillId, StatusType } from '../../types/gameTypes';

export const DAMAGE_TYPES: readonly DamageType[] = ['Slash', 'Stab', 'Crush', 'Pierce', 'Puncture', 'Air', 'Fire', 'Water', 'Earth'];
export const RESISTANCES: Record<DamageType, number> = { Slash: 12, Stab: 18, Crush: 14, Pierce: 24, Puncture: 20, Air: 0, Fire: -5, Water: 8, Earth: -8 };
export type Requirement = { type: 'skillLevel'; skill: SkillId; level: number } | { type: 'defeatAll'; targets: EnemyId[] } | { type: 'defeat'; target: EnemyId; count: number };
export type EnemyAction = { name: string; type: DamageType; multiplier: number; intervalMultiplier?: number; damageComponents?: Array<{ type: DamageType; ratio: number }>; status?: { type: StatusType; magnitude: number; durationMs: number } };
export type EnemyLootDrop = { item: ItemId; chance: number; min: number; max: number; guaranteed?: boolean };
export type EnemyPhase = { thresholdPct: number; sequence: readonly EnemyAction[] };
export type EnemyDefinition = { id: EnemyId; name: string; tier: number; rank: 'Light' | 'Normal' | 'Elite' | 'Boss'; kind: string; areaId: string; style: 'Melee' | 'Ranged' | 'Magic'; maxHp: number; accuracy: number; maxHit: number; intervalMs: number; evasion: number; resistances: Record<DamageType, number>; sequence: readonly EnemyAction[]; phases?: readonly EnemyPhase[]; xp: number; gold: number; loot: readonly EnemyLootDrop[]; firstKillReward?: readonly EnemyLootDrop[]; offering?: ItemId; unlockRequirements: readonly Requirement[]; eliteComponent?: string; bossComponent?: string; uniqueHook?: string };
export type CombatAreaDefinition = { id: string; name: string; tier: number; kind: 'area' | 'elite' | 'dungeon'; enemies: EnemyId[]; unlockRequirements: Requirement[] };

const all = (overrides: Partial<Record<DamageType, number>> = {}): Record<DamageType, number> => ({ ...RESISTANCES, ...overrides });
const trophy: EnemyLootDrop[] = [{ item: 'combat.loot.beast_trophy', chance: 1, min: 1, max: 1, guaranteed: true }];
export const NORMAL_ENEMIES: EnemyId[] = ['road-wolf', 'dust-rat', 'ragged-poacher', 'hedge-spark'];
export const ENEMIES: Record<EnemyId, EnemyDefinition> = {
  'road-wolf': { id: 'road-wolf', name: 'Road Wolf', tier: 1, rank: 'Normal', kind: 'Beast', areaId: 'broken-road', style: 'Melee', maxHp: 70, accuracy: 160, maxHit: 10, intervalMs: 3000, evasion: 120, resistances: all(), sequence: [{ name: 'Bite', type: 'Stab', multiplier: 1 }, { name: 'Bite', type: 'Stab', multiplier: 1 }, { name: 'Rending Fang', type: 'Stab', multiplier: 1.25, status: { type: 'Bleed', magnitude: .1, durationMs: 6000 } }], xp: 24, gold: 8, loot: trophy, offering: 'combat.loot.beast_trophy', unlockRequirements: [] },
  'dust-rat': { id: 'dust-rat', name: 'Dust Rat', tier: 1, rank: 'Light', kind: 'Beast', areaId: 'broken-road', style: 'Melee', maxHp: 46, accuracy: 108, maxHit: 7, intervalMs: 2500, evasion: 135, resistances: all({ Slash: 2, Stab: 10, Crush: -5 }), sequence: [{ name: 'Bite', type: 'Stab', multiplier: 1 }, { name: 'Quick Bite', type: 'Stab', multiplier: .7, intervalMultiplier: .75 }, { name: 'Bite', type: 'Stab', multiplier: 1 }], xp: 18, gold: 5, loot: trophy, unlockRequirements: [] },
  'ragged-poacher': { id: 'ragged-poacher', name: 'Ragged Poacher', tier: 1, rank: 'Normal', kind: 'Outlaw', areaId: 'broken-road', style: 'Ranged', maxHp: 82, accuracy: 124, maxHit: 9, intervalMs: 3300, evasion: 106, resistances: all({ Pierce: 10, Puncture: 8 }), sequence: [{ name: 'Arrow', type: 'Pierce', multiplier: 1 }, { name: 'Arrow', type: 'Pierce', multiplier: 1 }, { name: 'Barbed Shot', type: 'Pierce', multiplier: 1.15, status: { type: 'Bleed', magnitude: .08, durationMs: 6000 } }], xp: 30, gold: 10, loot: trophy, unlockRequirements: [] },
  'hedge-spark': { id: 'hedge-spark', name: 'Hedge Spark', tier: 1, rank: 'Normal', kind: 'Fey', areaId: 'broken-road', style: 'Magic', maxHp: 76, accuracy: 132, maxHit: 8, intervalMs: 3100, evasion: 112, resistances: all({ Air: 15, Fire: -12, Water: 10, Earth: -5 }), sequence: [{ name: 'Gust', type: 'Air', multiplier: 1 }, { name: 'Gust', type: 'Air', multiplier: 1 }, { name: 'Static Burst', type: 'Air', multiplier: 1.2, status: { type: 'AccuracyDown', magnitude: .08, durationMs: 5000 } }], xp: 28, gold: 9, loot: trophy, unlockRequirements: [] },
  'ironjaw-boar': { id: 'ironjaw-boar', name: 'Ironjaw Boar', tier: 1, rank: 'Elite', kind: 'Beast', areaId: 'broken-road', style: 'Melee', maxHp: 250, accuracy: 178, maxHit: 16, intervalMs: 3400, evasion: 142, resistances: all({ Crush: 26, Fire: -12 }), sequence: [{ name: 'Gore', type: 'Crush', multiplier: 1 }, { name: 'Gore', type: 'Crush', multiplier: 1 }, { name: 'Iron Charge', type: 'Crush', multiplier: 1.55, intervalMultiplier: 1.25, status: { type: 'Stun', magnitude: 1, durationMs: 1000 } }], phases: [{ thresholdPct: 50, sequence: [{ name: 'Furious Charge', type: 'Crush', multiplier: 1.7, intervalMultiplier: .9, status: { type: 'Stun', magnitude: 1, durationMs: 1200 } }] }], xp: 80, gold: 30, loot: [{ item: 'combat.loot.beast_trophy', chance: 1, min: 1, max: 1, guaranteed: true }], offering: 'combat.loot.beast_trophy', unlockRequirements: [{ type: 'defeatAll', targets: NORMAL_ENEMIES }, { type: 'skillLevel', skill: 'Attack', level: 10 }] },
};

export const COMBAT_AREAS: Record<string, CombatAreaDefinition> = {
  'broken-road': { id: 'broken-road', name: 'Broken Road', tier: 1, kind: 'area', enemies: Object.keys(ENEMIES), unlockRequirements: [] },
};

export function activeSequence(enemy: EnemyDefinition, hp = enemy.maxHp) {
  const phase = activePhaseIndex(enemy, hp);
  return phase >= 0 ? enemy.phases![phase]!.sequence : enemy.sequence;
}
export function activePhaseIndex(enemy: EnemyDefinition, hp = enemy.maxHp) {
  const phases = enemy.phases ?? [], active = phases.map((phase, index) => ({ phase, index })).filter(({ phase }) => hp / enemy.maxHp * 100 <= phase.thresholdPct).sort((a, b) => a.phase.thresholdPct - b.phase.thresholdPct)[0];
  return active?.index ?? -1;
}

export function validateCombatContent(enemies: Record<string, EnemyDefinition>, areas: Record<string, CombatAreaDefinition>) {
  const errors: string[] = [], ids = new Set<string>();
  for (const [key, enemy] of Object.entries(enemies)) {
    if (ids.has(enemy.id) || key !== enemy.id) errors.push(`Duplicate or mismatched enemy ID: ${key}`); ids.add(enemy.id);
    if (!areas[enemy.areaId]) errors.push(`${enemy.id} references missing area ${enemy.areaId}`);
    if (!enemy.sequence.length || enemy.sequence.some((action) => !DAMAGE_TYPES.includes(action.type))) errors.push(`${enemy.id} needs valid sequence actions`);
    if (DAMAGE_TYPES.some((type) => !Number.isFinite(enemy.resistances[type]))) errors.push(`${enemy.id} is missing typed resistance values`);
    for (const drop of enemy.loot) if (!Number.isFinite(drop.chance) || drop.chance < 0 || drop.chance > 1 || !Number.isInteger(drop.min) || !Number.isInteger(drop.max) || drop.min < 0 || drop.max < drop.min) errors.push(`${enemy.id} has invalid loot`);
  }
  for (const area of Object.values(areas)) for (const id of area.enemies) if (!enemies[id]) errors.push(`${area.id} references missing enemy ${id}`);
  return errors;
}
