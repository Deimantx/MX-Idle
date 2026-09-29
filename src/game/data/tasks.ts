import type { TaskDefinition } from '../../types/game';
export const TASKS: TaskDefinition[] = [
  { id: 'mine_copper', name: 'Mine Copper', skillId: 'mining', activityId: 'mining', locationId: 'copper_hills', minQuantity: 12, maxQuantity: 24, actionDurationMs: 3000, xpPerAction: 8, rewards: [{ itemId: 'copper_ore', quantity: 1 }], baseWeight: 1 },
  { id: 'mine_tin', name: 'Mine Tin', skillId: 'mining', activityId: 'mining', locationId: 'copper_hills', minQuantity: 12, maxQuantity: 24, actionDurationMs: 2700, xpPerAction: 7, rewards: [{ itemId: 'tin_ore', quantity: 1 }], baseWeight: 1 },
  { id: 'chop_pine', name: 'Chop Pine', skillId: 'woodcutting', activityId: 'woodcutting', locationId: 'pinewood', minQuantity: 12, maxQuantity: 24, actionDurationMs: 2800, xpPerAction: 7, rewards: [{ itemId: 'pine_logs', quantity: 1 }], baseWeight: 1 },
  { id: 'chop_oak', name: 'Chop Oak', skillId: 'woodcutting', activityId: 'woodcutting', locationId: 'pinewood', minQuantity: 10, maxQuantity: 20, actionDurationMs: 3400, xpPerAction: 9, rewards: [{ itemId: 'oak_logs', quantity: 1 }], baseWeight: 1 },
  { id: 'fish_shrimp', name: 'Fish Shrimp', skillId: 'fishing', activityId: 'fishing', locationId: 'riverbank', minQuantity: 12, maxQuantity: 24, actionDurationMs: 2500, xpPerAction: 6, rewards: [{ itemId: 'shrimp', quantity: 1 }], baseWeight: 1 },
  { id: 'fish_trout', name: 'Fish Trout', skillId: 'fishing', activityId: 'fishing', locationId: 'riverbank', minQuantity: 10, maxQuantity: 20, actionDurationMs: 3600, xpPerAction: 10, rewards: [{ itemId: 'trout', quantity: 1 }], baseWeight: 1 },
  { id: 'kill_rat', name: 'Kill Rat', skillId: 'combat', activityId: 'combat', locationId: 'old_road', minQuantity: 10, maxQuantity: 20, actionDurationMs: 3200, xpPerAction: 8, rewards: [{ itemId: 'rat_hide', quantity: 1 }], baseWeight: 1 },
  { id: 'kill_wolf', name: 'Kill Wolf', skillId: 'combat', activityId: 'combat', locationId: 'old_road', minQuantity: 8, maxQuantity: 16, actionDurationMs: 4200, xpPerAction: 12, rewards: [{ itemId: 'wolf_hide', quantity: 1 }], baseWeight: 0.8, requirements: [{ skillId: 'combat', level: 1 }] }
];
