import type { GameState, GeneratedTask } from '../../types/game';
import { generateChoiceRow } from './taskGenerator';
import { activateCurrentTask } from './simulation';
import { randomFromState } from './random';

export function selectTask(state: GameState, rowId: string, taskInstanceId: string): GameState {
  const next = structuredClone(state); const row = next.queue.find(r => r.rowId === rowId);
  if (!row) throw new Error('Task choice row was not found.');
  if (row.selectedTaskInstanceId) throw new Error('This row already has a selected task.');
  if (!row.choices.some(task => task.instanceId === taskInstanceId)) throw new Error('Task is not an option in this row.');
  row.selectedTaskInstanceId = taskInstanceId;
  if (!next.currentTask && next.queue[0]?.rowId === rowId) {
    next.currentTask = row.choices.find(task => task.instanceId === taskInstanceId)!;
    activateCurrentTask(next);
  }
  return next;
}
export function advanceQueue(state: GameState): GameState {
  const next = state; const first = next.queue.shift();
  const selected: GeneratedTask | undefined = first?.choices.find(task => task.instanceId === first.selectedTaskInstanceId);
  next.currentTask = selected ?? null;
  const random = randomFromState(next);
  next.queue.push(generateChoiceRow(next, random, next.queue.length));
  next.phase = 'waiting'; next.travelRemainingMs = 0; next.actionRemainingMs = 0;
  if (next.currentTask) activateCurrentTask(next);
  return next;
}
