export const ITEM_IDS = [
  'item.mining.worn_pickaxe','item.mining.copper_pickaxe','item.smithing.worn_smithing_hammer','item.smithing.copper_smithing_hammer',
  'item.mining.copper_ore','item.mining.stone','item.mining.opal','item.mining.mineral_core_fragment','item.smithing.copper_ingot',
  'combat.weapon.melee.copper_sword','combat.weapon.melee.copper_battle_axe','combat.weapon.melee.copper_mace',
  'combat.armor.heavy.copper_helm','combat.armor.heavy.copper_armor','combat.armor.heavy.copper_gauntlets','combat.armor.heavy.copper_greaves',
  'combat.offhand.melee.copper_shield','combat.loot.beast_trophy',
] as const;
export type ItemId = typeof ITEM_IDS[number] | `item.mining.${string}` | `item.smithing.${string}` | `combat.weapon.melee.${string}` | `combat.armor.heavy.${string}` | `combat.offhand.melee.${string}` | `fishing.fish.${string}` | `fishing.find.${string}` | `fishing.bait.${string}` | `fishing.tool.${string}` | `fishing.tackle.${string}` | `cooking.food.${string}` | `cooking.utility.${string}` | `cooking.tool.${string}`;
export type MiningToolId = `item.mining.${string}`;
export type SmithingToolId = `item.smithing.${string}`;
export type SkillId = 'Mining' | 'Smithing' | 'Fishing' | 'Cooking' | 'Attack' | 'Defence' | 'Hitpoints';
export type Activity = 'mining' | 'smelting' | 'forging' | 'fishing' | 'cooking' | 'combat' | null;
export type DepositId = `mining.deposit.${string}`;
export type RecipeId = `recipe.smithing.${string}` | `cooking.recipe.${string}`;
export type ForgingRecipeId = `recipe.smithing.${string}`;
/** Enemy IDs are registry-validated at runtime so expanding content does not require a manual union edit. */
export type EnemyId = string;
export type DamageType = 'Slash' | 'Stab' | 'Crush' | 'Pierce' | 'Puncture' | 'Air' | 'Fire' | 'Water' | 'Earth';
export type StatusType = 'Stun' | 'Bleed' | 'Burn' | 'Poison' | 'Chill' | 'ResistanceDown' | 'AccuracyDown' | 'EvasionDown';
export type ItemStack = { item: ItemId; amount: number };
export type ActiveStatus = { id: string; type: StatusType; sourceId: string; target: 'player' | 'enemy'; remainingMs: number; stacks?: number; magnitude?: number; tickMs?: number; tickTimerMs?: number; remainingDamage?: number };
export type GameEvent =
  | { type: 'xp-gained'; skill: SkillId; amount: number }
  | { type: 'level-up'; skill: SkillId; level: number }
  | { type: 'item-gained'; item: ItemId; amount: number; source: string }
  | { type: 'gold-gained'; amount: number; source: string }
  | { type: 'enemy-killed'; enemyId: EnemyId }
  | { type: 'stage-completed'; depositId: DepositId; stage: number }
  | { type: 'craft-completed'; recipeId: RecipeId; item: ItemId }
  | { type: 'fishing-bite-complete'; spotId: string }
  | { type: 'fish-selected'; fishId: string }
  | { type: 'fish-landed'; fishId: string; amount: number }
  | { type: 'aquatic-find'; item: ItemId }
  | { type: 'bait-preserved'; bait: string }
  | { type: 'fishing-double-catch'; fishId: string }
  | { type: 'cooking-prep-complete'; recipeId: RecipeId }
  | { type: 'cooking-craft-complete'; recipeId: RecipeId; item: ItemId; amount: number }
  | { type: 'ingredient-preserved'; item: ItemId }
  | { type: 'extra-serving'; item: ItemId }
  | { type: 'food-consumed'; item: ItemId; heal: number; satiety: number; automatic: boolean }
  | { type: 'auto-eat'; item: ItemId }
  | { type: 'manual-eat'; item: ItemId }
  | { type: 'overeat-triggered' }
  | { type: 'combat-stopped-food-empty' }
  | { type: 'unlock'; id: string; label: string }
  | { type: 'error'; message: string }
  | { type: 'combat-defeat'; enemyId: EnemyId }
  | { type: 'first-steps-complete' };

export type DepositRuntimeState = { stageIndex: number; densityRemaining: number; cyclesCompleted: number; totalPrimary: number; totalStagesCompleted: number };
export type SaveState = {
  version: 5; savedAt: number; rng: number; page: string; activity: Activity;
  skills: Record<SkillId, { xp: number; level: number }>; bank: Partial<Record<ItemId, number>>;
  gold: number;
  equipped: { miningTool: ItemId | null; smithingHammer: ItemId | null; weapon: ItemId | null; offhand: ItemId | null; head: ItemId | null; armor: ItemId | null; hands: ItemId | null; feet: ItemId | null };
  mining: { deposit: DepositId; stage: number; density: number; timer: number; cycles: number; strikes: number; sessionOutputs: Partial<Record<ItemId, number>>; sessionXp: number; deposits: Partial<Record<DepositId, DepositRuntimeState>> };
  smithing: { mode: 'smelting' | 'forging'; recipe: ForgingRecipeId; smeltRecipe: string; timer: number; warm: boolean; produced: number; work: number; heat: number; reserved: number; reservedItems: Partial<Record<ItemId, number>>; reservedEquipment: ItemId | null; reheat: boolean; message: string; category: 'weapons' | 'armor' | 'offhand' | 'tools'; forcePreservation?: boolean };
  fishing: { spot: string; phase: 'bite' | 'landing'; timer: number; actionSerial: number; selectedFish: string | null; rod: ItemId; bait: string | null; tackle: string | null; specialization: string | null; preferredSpecies: string | null; forceDouble: boolean; forceFind: boolean; forceSpecies: string | null; sessionFish: Partial<Record<ItemId, number>>; sessionXp: number };
  cooking: { recipe: string; phase: 'prep' | 'cook'; timer: number; actionSerial: number; warm: boolean; specialization: string | null; knife: ItemId; forcePreservation: boolean; forceExtraServing: boolean; selectedInputs: Partial<Record<string, string>>; reservedInputs: Array<{item: ItemId; amount: number}>; sessionOutputs: Partial<Record<ItemId, number>>; sessionXp: number; message: string };
  food: { slots: Array<{ item: ItemId | null; enabled: boolean; reserve: number }>; satiety: number; autoEat: boolean; threshold: number; minimumIntervalMs: number; autoEatIntervalMs: number; eatCooldownMs: number; foodLockMs: number; stunMs: number; activePriority: number; feedback: string };
  combat: { targetId: EnemyId; areaId: string; dungeonId: string | null; encounterIndex: number; runState: 'idle' | 'active' | 'ended'; stance: DamageType; playerHp: number; enemyHp: number; playerTimer: number; enemyTimer: number; sequenceIndex: number; activePhaseIndex: number; playerActionSerial: number; enemyActionSerial: number; statuses: ActiveStatus[]; kills: number; xp: number; gold: number; elapsed: number; respawn: number; log: string[]; stamina: number; queuedSpecial: boolean; specialMode: 'Auto' | 'Manual' | 'Off'; defeated: Partial<Record<EnemyId, number>> };
  objectives: { dismissed: boolean; firstCycle: boolean; firstIngot: boolean; sword: boolean; helm: boolean; victory: boolean; firstStepsCompleteSeen?: boolean };
  lastSaved: number;
};
export type SimulationResult = { state: SaveState; events: GameEvent[] };
