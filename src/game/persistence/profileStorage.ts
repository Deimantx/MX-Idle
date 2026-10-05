import { freshState } from '../state/initialState';
import type { SaveState } from '../types/gameTypes';
import { decodeSave, loadState } from './saveStorage';
import { emptyProfileIndex, parseProfileIndex, profileSummary, PROFILE_INDEX_KEY, type ProfileIndex, type ProfileRecord, type ProfileSlotId } from './profileIndex';

export const profileSaveKey = (slot: ProfileSlotId) => `mx-idle-profile-${slot}-v1`;
const legacyKey = 'mx-idle-save-v1';
const storage = () => localStorage;
export function readProfileIndex(): ProfileIndex { return parseProfileIndex(storage().getItem(PROFILE_INDEX_KEY)); }
function writeIndex(index: ProfileIndex) { storage().setItem(PROFILE_INDEX_KEY, JSON.stringify(index)); }
function uid() { return globalThis.crypto?.randomUUID?.() ?? `profile-${Date.now()}-${Math.random().toString(36).slice(2)}`; }
function makeRecord(slot: ProfileSlotId, name: string, state: SaveState, now: number, previous?: ProfileRecord): ProfileRecord {
  return { id: previous?.id ?? uid(), slot, name, createdAt: previous?.createdAt ?? now, lastPlayedAt: now, activePlayTimeMs: previous?.activePlayTimeMs ?? 0, summary: profileSummary(state) };
}

export function initializeProfiles(): ProfileIndex {
  const savedIndex = storage().getItem(PROFILE_INDEX_KEY);
  if (savedIndex !== null) return parseProfileIndex(savedIndex);
  const index = emptyProfileIndex();
  const legacy = storage().getItem(legacyKey);
  if (legacy !== null) {
    const decoded = decodeSave(legacy);
    if (!decoded) throw new Error('Your existing save could not be read safely. It has not been changed. Back up browser data before trying to recover it.');
    const record = makeRecord(1, 'Adventurer', decoded.state, Date.now());
    const key = profileSaveKey(1);
    const previous = storage().getItem(key);
    try {
      storage().setItem(key, JSON.stringify({ version: 4, savedAt: decoded.state.savedAt, state: decoded.state }));
      index.slots[0] = record;
      writeIndex(index);
    } catch (error) {
      if (previous === null) storage().removeItem(key); else storage().setItem(key, previous);
      throw new Error(`Could not migrate the existing save: ${error instanceof Error ? error.message : 'storage is unavailable'}. The original save was kept.`);
    }
    return index;
  }
  writeIndex(index);
  return index;
}

export function createProfile(slot: ProfileSlotId, name: string): ProfileRecord {
  const clean = name.trim();
  if (clean.length < 1 || clean.length > 24) throw new Error('Name must be between 1 and 24 characters.');
  const index = readProfileIndex();
  if (index.slots[slot - 1]) throw new Error(`Slot ${slot} already contains a profile.`);
  const now = Date.now(), state = freshState(now), record = makeRecord(slot, clean, state, now);
  const key = profileSaveKey(slot), old = storage().getItem(key);
  try {
    storage().setItem(key, JSON.stringify({ version: 4, savedAt: now, state }));
    index.slots[slot - 1] = record;
    writeIndex(index);
  } catch (error) {
    if (old === null) storage().removeItem(key); else storage().setItem(key, old);
    throw new Error(`Could not create profile: ${error instanceof Error ? error.message : 'storage is unavailable'}.`);
  }
  return record;
}

export function readProfileSource(slot: ProfileSlotId) {
  const record = readProfileIndex().slots[slot - 1];
  if (!record) throw new Error(`Slot ${slot} is empty.`);
  const raw = storage().getItem(profileSaveKey(slot));
  return { profile: record, raw };
}

export function validateProfileSource(raw: string | null) {
  try {
    const envelope = JSON.parse(raw ?? 'null');
    if (![1, 2, 3, 4].includes(envelope?.version) || !envelope.state || typeof envelope.state !== 'object') throw Error();
  } catch { throw new Error('This profile could not be loaded because its save is damaged. The file was preserved. Return to Profile Select and retry after restoring a backup.'); }
}

export function migrateProfileSource(raw: string | null) {
  const decoded = decodeSave(raw);
  if (!decoded) throw new Error('This profile could not be migrated safely. The file was preserved. Return to Profile Select and retry after restoring a backup.');
  return decoded;
}

export function simulateProfile(slot: ProfileSlotId, profile: ProfileRecord, raw: string | null, decoded: { state: SaveState; savedAt: number }, now = Date.now()) {
  const loaded = loadState(raw, now);
  if (loaded.fresh) throw new Error(`Slot ${slot} could not be validated. Its save file was preserved.`);
  saveProfile(slot, loaded.state, 0);
  const index = readProfileIndex();
  return { profile: index.slots[slot - 1] ?? profile, state: loaded.state, awayMs: loaded.awayMs, before: decoded.state };
}

export function loadProfile(slot: ProfileSlotId, now = Date.now()) {
  const source = readProfileSource(slot); validateProfileSource(source.raw); const decoded = migrateProfileSource(source.raw);
  return simulateProfile(slot, source.profile, source.raw, decoded, now);
}

export function saveProfile(slot: ProfileSlotId, state: SaveState, activeDeltaMs = 0) {
  const index = readProfileIndex(), record = index.slots[slot - 1];
  if (!record) throw new Error(`Slot ${slot} no longer exists.`);
  const now = Date.now(), value = { ...state, savedAt: now };
  const key = profileSaveKey(slot), previous = storage().getItem(key);
  try {
    storage().setItem(key, JSON.stringify({ version: 4, savedAt: now, state: value }));
    index.slots[slot - 1] = { ...record, lastPlayedAt: now, activePlayTimeMs: record.activePlayTimeMs + Math.max(0, activeDeltaMs), summary: profileSummary(value) };
    writeIndex(index);
  } catch (error) {
    if (previous === null) storage().removeItem(key); else storage().setItem(key, previous);
    throw error;
  }
}

export function renameProfile(slot: ProfileSlotId, name: string) {
  const clean = name.trim();
  if (clean.length < 1 || clean.length > 24) throw new Error('Name must be between 1 and 24 characters.');
  const index = readProfileIndex(), record = index.slots[slot - 1];
  if (!record) throw new Error(`Slot ${slot} is empty.`);
  index.slots[slot - 1] = { ...record, name: clean }; writeIndex(index);
  return index.slots[slot - 1]!;
}

export function deleteProfile(slot: ProfileSlotId) {
  const index = readProfileIndex(), record = index.slots[slot - 1];
  if (!record) return;
  const key = profileSaveKey(slot), raw = storage().getItem(key);
  try { storage().removeItem(key); index.slots[slot - 1] = null; writeIndex(index); }
  catch (error) { if (raw !== null) storage().setItem(key, raw); throw error; }
}
