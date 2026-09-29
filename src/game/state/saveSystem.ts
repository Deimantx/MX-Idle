import type { GameSave, GameState } from '../../types/game';
import { createInitialState, simulateOffline } from '../engine/simulation';
import { migrateSave } from './migrations';
export const SAVE_KEY = 'greenhaven-idle-save';
export const SAVE_VERSION = 1;
export function serializeSave(state: GameState, now = Date.now()): string {
  const copy = structuredClone(state); copy.saveTimestamp = now;
  return JSON.stringify({ saveVersion: SAVE_VERSION, savedAt: now, gameState: copy } satisfies GameSave);
}
export function restoreSave(raw: string | null, now = Date.now()): { state: GameState; error?: string } {
  if (!raw) return { state: createInitialState(undefined, now) };
  try {
    const parsed = migrateSave(JSON.parse(raw) as Partial<GameSave>);
    if (!parsed.gameState || typeof parsed.savedAt !== 'number') throw new Error('Unrecognized save format.');
    const candidate = parsed.gameState as GameState;
    if (!candidate.skillXp || !candidate.inventory || !Array.isArray(candidate.queue) || !candidate.weights) throw new Error('Save data is incomplete.');
    candidate.saveTimestamp = parsed.savedAt;
    const resumed = simulateOffline(candidate, now);
    return { state: resumed.state };
  } catch (error) {
    return { state: createInitialState(undefined, now), error: error instanceof Error ? error.message : 'Could not load save.' };
  }
}
export function saveToStorage(state: GameState, storage: Pick<Storage, 'setItem'> = localStorage, now = Date.now()) { storage.setItem(SAVE_KEY, serializeSave(state, now)); }
export function loadFromStorage(storage: Pick<Storage, 'getItem'> = localStorage, now = Date.now()) { return restoreSave(storage.getItem(SAVE_KEY), now); }
