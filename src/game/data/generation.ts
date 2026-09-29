import type { TaskDefinition, RNGWeights } from '../../types/game';
export const ACTIVITY_WEIGHT_MODIFIERS: Record<string, number> = { mining: 1, woodcutting: 1, fishing: 1, combat: 1 };
export const LOCATION_WEIGHT_MODIFIERS: Record<string, number> = { copper_hills: 1, pinewood: 1, riverbank: 1, old_road: 1, greenhaven: 1 };
export function getTaskWeight(task: TaskDefinition, skillWeights: RNGWeights) {
  return task.baseWeight * Math.max(0, skillWeights[task.skillId] ?? 0) * (ACTIVITY_WEIGHT_MODIFIERS[task.activityId] ?? 1) * (LOCATION_WEIGHT_MODIFIERS[task.locationId] ?? 1);
}
