export const ITEM_IDS = [
  'item.mining.worn_pickaxe','item.mining.copper_pickaxe','item.smithing.worn_smithing_hammer','item.smithing.copper_smithing_hammer',
  'item.mining.copper_ore','item.mining.stone','item.mining.opal','item.mining.mineral_core_fragment','item.smithing.copper_ingot',
  'combat.weapon.melee.copper_sword','combat.weapon.melee.copper_battle_axe','combat.weapon.melee.copper_mace',
  'combat.armor.heavy.copper_helm','combat.armor.heavy.copper_armor','combat.armor.heavy.copper_gauntlets','combat.armor.heavy.copper_greaves',
  'combat.offhand.melee.copper_shield','combat.loot.beast_trophy',
] as const;
export type ItemId = typeof ITEM_IDS[number];
export type MiningToolId = 'item.mining.worn_pickaxe' | 'item.mining.copper_pickaxe';
export type SmithingToolId = 'item.smithing.worn_smithing_hammer' | 'item.smithing.copper_smithing_hammer';
export type SkillId = 'Mining' | 'Smithing' | 'Attack' | 'Defence' | 'Hitpoints';
export type Activity = 'mining' | 'smelting' | 'forging' | 'combat' | null;
export type DepositId = 'mining.deposit.copper_vein' | 'mining.deposit.fieldstone_quarry';
export type RecipeId = 'recipe.smithing.copper_ingot' | 'recipe.smithing.copper_sword' | 'recipe.smithing.copper_battle_axe' | 'recipe.smithing.copper_mace' | 'recipe.smithing.copper_helm' | 'recipe.smithing.copper_armor' | 'recipe.smithing.copper_gauntlets' | 'recipe.smithing.copper_greaves' | 'recipe.smithing.copper_shield' | 'recipe.smithing.copper_pickaxe' | 'recipe.smithing.copper_smithing_hammer';
export type ForgingRecipeId = Exclude<RecipeId, 'recipe.smithing.copper_ingot'>;
export type EnemyId = 'road-wolf' | 'dust-rat' | 'ragged-poacher' | 'hedge-spark' | 'ironjaw-boar';
export type DamageType = 'Slash' | 'Stab' | 'Crush' | 'Pierce' | 'Puncture' | 'Air' | 'Fire' | 'Water' | 'Earth';
export type StatusType = 'Bleed' | 'Stun' | 'AccuracyDown' | 'ResistanceDown';
export type MasteryProgress = { xp: number; level: number };
export type ItemStack = { item: ItemId; amount: number };
export type ActiveStatus = { id: string; type: StatusType; sourceId: string; target: 'player' | 'enemy'; remainingMs: number; stacks?: number; magnitude?: number; tickMs?: number; tickTimerMs?: number; remainingDamage?: number };
export type GameEvent =
  | { type: 'xp-gained'; skill: SkillId; amount: number }
  | { type: 'level-up'; skill: SkillId; level: number }
  | { type: 'mastery-xp-gained'; domain: 'mining' | 'smithing'; key: DepositId | RecipeId; amount: number }
  | { type: 'mastery-level-up'; domain: 'mining' | 'smithing'; key: DepositId | RecipeId; level: number }
  | { type: 'mastery-milestone'; domain: 'mining' | 'smithing'; key: DepositId | RecipeId; milestone: number; effect: string }
  | { type: 'item-gained'; item: ItemId; amount: number; source: string }
  | { type: 'gold-gained'; amount: number; source: string }
  | { type: 'enemy-killed'; enemyId: EnemyId }
  | { type: 'stage-completed'; depositId: DepositId; stage: number }
  | { type: 'craft-completed'; recipeId: RecipeId; item: ItemId }
  | { type: 'unlock'; id: string; label: string }
  | { type: 'error'; message: string }
  | { type: 'combat-defeat'; enemyId: EnemyId }
  | { type: 'first-steps-complete' };

export type DepositRuntimeState = { stageIndex: number; densityRemaining: number; cyclesCompleted: number; totalPrimary: number; totalStagesCompleted: number; mastery: MasteryProgress };
export type SaveState = {
  version: 3; savedAt: number; rng: number; page: string; activity: Activity;
  skills: Record<SkillId, { xp: number; level: number }>; bank: Partial<Record<ItemId, number>>;
  gold: number;
  equipped: { miningTool: ItemId | null; smithingHammer: ItemId | null; weapon: ItemId | null; offhand: ItemId | null; head: ItemId | null; armor: ItemId | null; hands: ItemId | null; feet: ItemId | null };
  mining: { deposit: DepositId; stage: number; density: number; timer: number; cycles: number; strikes: number; sessionOutputs: Partial<Record<ItemId, number>>; sessionXp: number; deposits: Partial<Record<DepositId, DepositRuntimeState>> };
  smithing: { mode: 'smelting' | 'forging'; recipe: ForgingRecipeId; timer: number; warm: boolean; produced: number; work: number; heat: number; reserved: number; reservedItems: Partial<Record<ItemId, number>>; reservedEquipment: ItemId | null; reheat: boolean; message: string; category: 'weapons' | 'armor' | 'offhand' | 'tools'; mastery: Partial<Record<RecipeId, MasteryProgress>>; forcePreservation?: boolean };
  combat: { targetId: EnemyId; stance: DamageType; playerHp: number; enemyHp: number; playerTimer: number; enemyTimer: number; sequenceIndex: number; playerActionSerial: number; enemyActionSerial: number; statuses: ActiveStatus[]; kills: number; xp: number; gold: number; trophies: number; elapsed: number; respawn: number; log: string[]; stamina: number; queuedSpecial: boolean; specialMode: 'Auto' | 'Manual' | 'Off'; defeated: Partial<Record<EnemyId, number>>; eliteUnlocked: boolean };
  objectives: { dismissed: boolean; firstCycle: boolean; firstIngot: boolean; sword: boolean; helm: boolean; victory: boolean; firstStepsCompleteSeen?: boolean };
  lastSaved: number;
};
export type SimulationResult = { state: SaveState; events: GameEvent[] };
