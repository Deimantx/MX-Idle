export type ItemId = 'pickaxe' | 'copperPickaxe' | 'hammer' | 'copperHammer' | 'ore' | 'stone' | 'ingot' | 'sword' | 'axe' | 'mace' | 'helm' | 'plate' | 'gloves' | 'greaves' | 'shield' | 'trophy';
export type SkillId = 'Mining' | 'Smithing' | 'Attack' | 'Defence' | 'Hitpoints';
export type Activity = 'mining' | 'smelting' | 'forging' | 'combat' | null;
export type DepositId = 'copper-vein' | 'fieldstone-quarry';
export type RecipeId = 'sword' | 'axe' | 'mace' | 'helm' | 'plate' | 'gloves' | 'greaves' | 'shield' | 'copperPickaxe' | 'copperHammer';
export type EnemyId = 'road-wolf' | 'dust-rat' | 'ragged-poacher' | 'hedge-spark' | 'ironjaw-boar';
export type DamageType = 'Slash' | 'Stab' | 'Crush' | 'Pierce' | 'Puncture' | 'Air' | 'Fire' | 'Water' | 'Earth';
export type StatusType = 'Bleed' | 'Stun' | 'AccuracyDown' | 'ResistanceDown';
export type ActiveStatus = { id: string; type: StatusType; sourceId: string; remainingMs: number; stacks?: number; magnitude?: number; tickMs?: number };
export type GameEvent =
  | { type: 'xp-gained'; skill: SkillId; amount: number }
  | { type: 'level-up'; skill: SkillId; level: number }
  | { type: 'item-gained'; item: ItemId; amount: number; source: string }
  | { type: 'gold-gained'; amount: number; source: string }
  | { type: 'enemy-killed'; enemyId: EnemyId }
  | { type: 'stage-completed'; depositId: DepositId; stage: number }
  | { type: 'craft-completed'; recipeId: RecipeId; item: ItemId }
  | { type: 'unlock'; id: string; label: string }
  | { type: 'error'; message: string }
  | { type: 'combat-defeat'; enemyId: EnemyId }
  | { type: 'first-steps-complete' };
export type SaveState = {
  version: 1 | 2; savedAt: number; rng: number; page: string; activity: Activity;
  skills: Record<SkillId, { xp: number; level: number }>; bank: Partial<Record<ItemId, number>>;
  gold: number; equipped: { tool: boolean; hammer: boolean; miningTool: 'pickaxe' | 'copperPickaxe'; smithingHammer: 'hammer' | 'copperHammer'; weapon: ItemId | null; offhand: ItemId | null; head: ItemId | null; armor: ItemId | null; hands: ItemId | null; feet: ItemId | null };
  mining: { deposit: DepositId; stage: number; density: number; timer: number; cycles: number; strikes: number; sessionOre: number; sessionXp: number };
  smithing: { mode: 'smelting' | 'forging'; recipe: RecipeId; timer: number; warm: boolean; produced: number; work: number; heat: number; reserved: number; reheat: boolean; message: string };
  combat: { targetId: EnemyId; stance: DamageType; playerHp: number; enemyHp: number; playerTimer: number; enemyTimer: number; sequenceIndex: number; playerActionSerial: number; enemyActionSerial: number; statuses: ActiveStatus[]; kills: number; xp: number; gold: number; trophies: number; elapsed: number; respawn: number; log: string[]; stamina: number; queuedSpecial: boolean; specialMode: 'Auto' | 'Manual' | 'Off'; defeated: Partial<Record<EnemyId, number>> };
  objectives: { dismissed: boolean; firstCycle: boolean; firstIngot: boolean; sword: boolean; helm: boolean; victory: boolean; firstStepsCompleteSeen?: boolean };
  settings: { muted: boolean; volume: number; reducedMotion: boolean | null };
  /** v1 compatibility only; runtime notifications are transient typed events. */
  lastEvent: string; lastSaved: number;
};
export type SimulationResult = { state: SaveState; events: GameEvent[] };
