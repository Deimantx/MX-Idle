import { TASKS } from '../data/tasks';
import { getLevelFromXp } from '../data/skills';
import { getTaskWeight } from '../data/generation';
import type { GameState, GeneratedTask, RandomProvider, TaskChoiceRow } from '../../types/game';

export function eligibleTasks(state: Pick<GameState, 'skillXp' | 'weights'>) {
  return TASKS.filter(task => (task.requirements ?? []).every(req => getLevelFromXp(state.skillXp[req.skillId]) >= req.level));
}
function weightedPick<T extends typeof TASKS[number]>(items: T[], weights: GameState['weights'], random: RandomProvider): T {
  const total = items.reduce((sum, item) => sum + getTaskWeight(item, weights), 0);
  if (total <= 0) throw new Error('Cannot generate a task: every eligible task has zero weight.');
  let roll = random() * total;
  for (const item of items) { roll -= getTaskWeight(item, weights); if (roll < 0) return item; }
  return items[items.length - 1];
}
export function generateTask(state: Pick<GameState, 'skillXp' | 'weights' | 'gameTime'>, random: RandomProvider): GeneratedTask {
  const candidates = eligibleTasks(state).filter(task => getTaskWeight(task, state.weights) > 0);
  return generateFromCandidates(state, random, candidates);
}
function generateFromCandidates(state: Pick<GameState, 'skillXp' | 'weights' | 'gameTime'>, random: RandomProvider, candidates: typeof TASKS): GeneratedTask {
  if (!candidates.length) throw new Error('No eligible tasks have a positive generation weight.');
  const definition = weightedPick(candidates, state.weights, random);
  const quantity = definition.minQuantity + Math.floor(random() * (definition.maxQuantity - definition.minQuantity + 1));
  return { instanceId: `task-${Math.floor(random() * 0x100000000).toString(16)}-${state.gameTime}`, taskDefinitionId: definition.id, quantity, completedActions: 0, generatedAt: state.gameTime };
}
export function generateChoiceRow(state: Pick<GameState, 'skillXp' | 'weights' | 'gameTime'>, random: RandomProvider, rowNumber = 0): TaskChoiceRow {
  const all = eligibleTasks(state).filter(task => getTaskWeight(task, state.weights) > 0);
  const choices: GeneratedTask[] = []; const picked = new Set<string>();
  for (let i = 0; i < 3; i++) {
    const remaining = all.filter(task => !picked.has(task.id));
    const choice = generateFromCandidates(state, random, remaining.length ? remaining : all);
    choice.instanceId = `${choice.instanceId}-${i + 1}`;
    picked.add(choice.taskDefinitionId); choices.push(choice);
  }
  return { rowId: `row-${state.gameTime}-${rowNumber}-${Math.floor(random() * 0xffffff).toString(16)}`, choices };
}
