export type SkillId = 'mining' | 'woodcutting' | 'fishing' | 'combat';
export interface RewardDefinition { itemId: string; quantity: number }
export interface RequirementDefinition { skillId: SkillId; level: number }
export interface TaskDefinition {
  id: string; name: string; skillId: SkillId; activityId: string; locationId: string;
  minQuantity: number; maxQuantity: number; actionDurationMs: number; xpPerAction: number;
  rewards: RewardDefinition[]; baseWeight: number; requirements?: RequirementDefinition[];
}
export interface GeneratedTask { instanceId: string; taskDefinitionId: string; quantity: number; completedActions: number; generatedAt: number }
export interface TaskChoiceRow { rowId: string; choices: GeneratedTask[]; selectedTaskInstanceId?: string }
export interface RNGWeights { mining: number; woodcutting: number; fishing: number; combat: number }
export interface GameState {
  gameTime: number; currentLocationId: string; currentTask: GeneratedTask | null; queue: TaskChoiceRow[];
  skillXp: Record<SkillId, number>; inventory: Record<string, number>; weights: RNGWeights;
  phase: 'idle' | 'travelling' | 'task' | 'waiting'; travelRemainingMs: number; actionRemainingMs: number;
  rngState: number; saveTimestamp: number; lastOfflineSummary: OfflineSummary | null;
}
export interface GameSave { saveVersion: number; savedAt: number; gameState: GameState }
export interface OfflineSummary { elapsedMs: number; completedTasks: number; xpGained: Partial<Record<SkillId, number>>; itemsGained: Record<string, number> }
export type RandomProvider = () => number;
