import { describe, expect, it } from 'vitest';
import { createInitialState, advanceGame, activateCurrentTask, simulateOffline } from './simulation';
import { generateChoiceRow } from './taskGenerator';
import { selectTask, advanceQueue } from './taskQueue';
import { getTravelDuration } from './travelEngine';
import { restoreSave, serializeSave } from '../state/saveSystem';
import type { GameState, RandomProvider } from '../../types/game';

const fixed = (value = .2): RandomProvider => () => value;
describe('task generation', () => {
  it('creates three eligible distinct choices when possible', () => {
    const state = createInitialState(4, 1000); const row = generateChoiceRow(state, fixed(), 0);
    expect(row.choices).toHaveLength(3); expect(new Set(row.choices.map(c => c.taskDefinitionId)).size).toBe(3);
  });
  it('gives every option a distinct instance ID even with a fixed RNG provider', () => {
    const row = generateChoiceRow(createInitialState(4, 1000), fixed(), 0);
    expect(new Set(row.choices.map(c => c.instanceId)).size).toBe(3);
  });
  it('respects skill weights and does not generate zero-weight skills', () => {
    const state = createInitialState(4, 1000); state.weights = { mining: 1, woodcutting: 0, fishing: 0, combat: 0 };
    const row = generateChoiceRow(state, fixed(.85)); expect(row.choices.every(c => c.taskDefinitionId.startsWith('mine_'))).toBe(true);
    state.weights.mining = 0; expect(() => generateChoiceRow(state, fixed())).toThrow(/positive generation weight/);
  });
});
describe('queue selection and advancement', () => {
  it('selects one task and rejects another selection for the same row', () => {
    const state = createInitialState(12, 1000); const row = state.queue[0]; const chosen = row.choices[0];
    const selected = selectTask(state, row.rowId, chosen.instanceId);
    expect(selected.queue[0].selectedTaskInstanceId).toBe(chosen.instanceId);
    expect(() => selectTask(selected, row.rowId, row.choices[1].instanceId)).toThrow(/already has/);
  });
  it('shifts the chosen task into current and generates a new bottom row', () => {
    const state = createInitialState(22, 1000); const originalIds = state.queue.map(r => r.rowId); const row = state.queue[0];
    state.queue[0].selectedTaskInstanceId = row.choices[1].instanceId;
    const next = advanceQueue(state);
    expect(next.currentTask?.instanceId).toBe(row.choices[1].instanceId);
    expect(next.queue).toHaveLength(5); expect(next.queue.slice(0, 4).map(r => r.rowId)).toEqual(originalIds.slice(1));
    expect(next.queue[4].rowId).not.toBe(originalIds[4]);
  });
});
describe('travel and action rewards', () => {
  function withCurrentTask(taskId: string): GameState {
    const state = createInitialState(2, 1000);
    state.currentTask = { instanceId: 'test-current', taskDefinitionId: taskId, quantity: 1, completedActions: 0, generatedAt: 1000 };
    state.currentLocationId = 'greenhaven'; activateCurrentTask(state); return state;
  }
  it('waits until travel finishes before beginning task actions', () => {
    const state = withCurrentTask('mine_copper'); const travel = getTravelDuration('greenhaven', 'copper_hills');
    expect(state.phase).toBe('travelling');
    const mid = advanceGame(state, travel - 1); expect(mid.phase).toBe('travelling'); expect(mid.currentTask?.completedActions).toBe(0);
    const arrived = advanceGame(mid, 1); expect(arrived.phase).toBe('task'); expect(arrived.currentLocationId).toBe('copper_hills'); expect(arrived.currentTask?.completedActions).toBe(0);
  });
  it('starts immediately at the task location and grants XP plus item on each action', () => {
    const state = withCurrentTask('mine_copper'); state.currentLocationId = 'copper_hills'; activateCurrentTask(state);
    expect(state.phase).toBe('task'); const progressed = advanceGame(state, 3000);
    expect(progressed.skillXp.mining).toBe(8); expect(progressed.inventory.copper_ore).toBe(1);
  });
});
describe('offline simulation and saves', () => {
  it('advances actions and stops at an unselected queue row', () => {
    const state = createInitialState(5, 1000); const advanced = advanceGame(state, 60 * 60 * 1000);
    expect(advanced.phase).toBe('waiting'); expect(advanced.currentTask).toBeNull(); expect(Object.values(advanced.skillXp).some(x => x > 0)).toBe(true);
    const away = createInitialState(8, 0); const result = simulateOffline(away, 60_000);
    expect(result.state.gameTime).toBeGreaterThan(0); expect(result.summary.elapsedMs).toBe(60_000);
  });
  it('completes several selected tasks during one offline simulation', () => {
    let state = createInitialState(51, 0); const originalRowIds = state.queue.map(row => row.rowId);
    for (const row of [...state.queue]) state = selectTask(state, row.rowId, row.choices[0].instanceId);
    const result = simulateOffline(state, 60 * 60 * 1000);
    expect(result.summary.completedTasks).toBeGreaterThan(1);
    expect(result.summary.itemsGained).not.toEqual({});
    expect(result.state.queue.some(row => originalRowIds.includes(row.rowId))).toBe(false);
  });
  it('serializes and restores state; invalid data gets a safe default', () => {
    const state = createInitialState(7, 1000); const raw = serializeSave(state, 1000); const loaded = restoreSave(raw, 1000);
    expect(loaded.state.currentTask?.taskDefinitionId).toBe(state.currentTask?.taskDefinitionId);
    expect(restoreSave('{bad', 2000).state.queue).toHaveLength(5);
    expect(restoreSave(null, 2000).state.currentLocationId).toBe('greenhaven');
  });
});
