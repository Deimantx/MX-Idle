import type { GameSave } from '../../types/game';
import { SAVE_VERSION } from './saveSystem';
export function migrateSave(input: Partial<GameSave>): GameSave {
  if (!input || typeof input.saveVersion !== 'number') throw new Error('Save has no version.');
  let save = input as GameSave;
  if (save.saveVersion > SAVE_VERSION) throw new Error('Save was created by a newer game version.');
  while (save.saveVersion < SAVE_VERSION) {
    const migration = migrations[save.saveVersion];
    if (!migration) throw new Error(`No migration exists from save version ${save.saveVersion}.`);
    save = migration(save);
  }
  return save;
}
const migrations: Record<number, (save: GameSave) => GameSave> = {};
