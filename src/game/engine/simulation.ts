import { TASKS } from '../data/tasks';
import type { GameState, OfflineSummary, SkillId } from '../../types/game';
import { getTravelDuration } from './travelEngine';
import { generateChoiceRow, generateTask } from './taskGenerator';
import { randomFromState } from './random';
import { advanceQueue } from './taskQueue';

export function activateCurrentTask(state: GameState) {
  if (!state.currentTask) { state.phase = 'waiting'; return; }
  const task = TASKS.find(def => def.id === state.currentTask!.taskDefinitionId)!;
  const travel = getTravelDuration(state.currentLocationId, task.locationId);
  state.travelRemainingMs = travel;
  state.phase = travel > 0 ? 'travelling' : 'task';
  state.actionRemainingMs = travel > 0 ? 0 : task.actionDurationMs;
}
export function createInitialState(seed = 8675309, now = Date.now()): GameState {
  const state: GameState = {
    gameTime: now, currentLocationId: 'greenhaven', currentTask: null, queue: [],
    skillXp: { mining: 0, woodcutting: 0, fishing: 0, combat: 0 },
    inventory: {}, weights: { mining: 1, woodcutting: 1, fishing: 1, combat: 1 },
    phase: 'waiting', travelRemainingMs: 0, actionRemainingMs: 0, rngState: seed >>> 0,
    saveTimestamp: now, lastOfflineSummary: null
  };
  const random = randomFromState(state);
  state.currentTask = generateTask(state, random);
  state.queue = Array.from({ length: 5 }, (_, i) => generateChoiceRow(state, random, i));
  activateCurrentTask(state);
  return state;
}
export function setTaskWeights(state: GameState, weights: GameState['weights']): GameState {
  const next = structuredClone(state);
  for (const key of Object.keys(weights) as SkillId[]) {
    if (!Number.isFinite(weights[key])) throw new Error('Task weights must be valid numbers.');
    next.weights[key] = Math.max(0, Math.min(10, weights[key]));
  }
  if (Object.values(next.weights).every(weight => weight === 0)) throw new Error('Keep at least one skill weight above zero so new tasks can be generated.');
  return next;
}
export function rerollRow(state: GameState, rowId: string): GameState {
  const next = structuredClone(state); const row = next.queue.find(r => r.rowId === rowId);
  if (!row) throw new Error('Task choice row was not found.');
  if (row.selectedTaskInstanceId) throw new Error('A selected row cannot be rerolled.');
  const random = randomFromState(next); const index = next.queue.indexOf(row);
  next.queue[index] = generateChoiceRow(next, random, index); return next;
}
export function advanceGame(state: GameState, deltaMs: number): GameState {
  if (!Number.isFinite(deltaMs) || deltaMs < 0) throw new Error('Simulation time must be a non-negative number.');
  const next = structuredClone(state); let remaining = deltaMs; let safety = 0;
  while (remaining > 0 && safety++ < 100000) {
    if (!next.currentTask) { next.gameTime += remaining; remaining = 0; break; }
    if (next.phase === 'waiting') { next.gameTime += remaining; remaining = 0; break; }
    const timer = next.phase === 'travelling' ? next.travelRemainingMs : next.actionRemainingMs;
    const step = Math.min(remaining, Math.max(0, timer));
    next.gameTime += step; remaining -= step;
    if (next.phase === 'travelling') {
      next.travelRemainingMs -= step;
      if (next.travelRemainingMs <= 0) {
        next.currentLocationId = TASKS.find(t => t.id === next.currentTask!.taskDefinitionId)!.locationId;
        next.phase = 'task'; next.actionRemainingMs = TASKS.find(t => t.id === next.currentTask!.taskDefinitionId)!.actionDurationMs;
      }
    } else {
      next.actionRemainingMs -= step;
      if (next.actionRemainingMs <= 0) {
        completeAction(next);
        const definition = TASKS.find(t => t.id === next.currentTask!.taskDefinitionId)!;
        if (next.currentTask!.completedActions >= next.currentTask!.quantity) {
          advanceQueue(next);
        } else next.actionRemainingMs = definition.actionDurationMs;
      }
    }
  }
  if (safety >= 100000) throw new Error('Simulation exceeded its safety limit.');
  return next;
}
function completeAction(state: GameState) {
  const definition = TASKS.find(task => task.id === state.currentTask!.taskDefinitionId)!;
  state.currentTask!.completedActions++;
  state.skillXp[definition.skillId] += definition.xpPerAction;
  for (const reward of definition.rewards) state.inventory[reward.itemId] = (state.inventory[reward.itemId] ?? 0) + reward.quantity;
}
export function simulateOffline(state: GameState, now: number): { state: GameState; summary: OfflineSummary } {
  const elapsedMs = Math.max(0, now - state.saveTimestamp); const beforeXp = { ...state.skillXp }; const beforeItems = { ...state.inventory };
  const before = state;
  const advanced = advanceGame(before, elapsedMs); advanced.saveTimestamp = now;
  const xpGained: OfflineSummary['xpGained'] = {}; const itemsGained: Record<string, number> = {};
  (Object.keys(advanced.skillXp) as SkillId[]).forEach(skill => { const gain = advanced.skillXp[skill] - beforeXp[skill]; if (gain) xpGained[skill] = gain; });
  Object.entries(advanced.inventory).forEach(([id, qty]) => { const gain = qty - (beforeItems[id] ?? 0); if (gain) itemsGained[id] = gain; });
  const completedTasks = Math.max(0, countCompletedByProgress(before, advanced));
  const summary = { elapsedMs, completedTasks, xpGained, itemsGained };
  advanced.lastOfflineSummary = elapsedMs >= 60_000 ? summary : null;
  return { state: advanced, summary };
}
function countCompletedByProgress(before: GameState, after: GameState) {
  const initialQueue = before.queue.map(row => row.rowId); const finalQueue = new Set(after.queue.map(row => row.rowId));
  return initialQueue.filter(id => !finalQueue.has(id)).length;
}
