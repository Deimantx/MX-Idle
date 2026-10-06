import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { freshState } from '../state/initialState';
import { startActivity } from '../systems/simulation';
import { createProfile, deleteProfile, initializeProfiles, loadProfile, profileSaveKey, readProfileIndex, renameProfile, saveProfile } from './profileStorage';
import { PROFILE_INDEX_KEY } from './profileIndex';

class MemoryStorage {
  values = new Map<string, string>();
  get length() { return this.values.size; }
  clear() { this.values.clear(); }
  getItem(key: string) { return this.values.get(key) ?? null; }
  key(index: number) { return [...this.values.keys()][index] ?? null; }
  removeItem(key: string) { this.values.delete(key); }
  setItem(key: string, value: string) { this.values.set(key, String(value)); }
}
const originalStorage = globalThis.localStorage;
let memory: MemoryStorage;
beforeEach(() => { memory = new MemoryStorage(); Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: memory }); });
afterEach(() => { Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: originalStorage }); });

describe('three save profiles', () => {
  it('creates independent profiles, renames one, and deletes only its own slot', () => {
    initializeProfiles();
    createProfile(1, '  Rowan  '); createProfile(2, 'Rowan');
    const state = freshState(); state.gold = 42; saveProfile(1, state, 12_000);
    expect(readProfileIndex ().slots.map((item) => item?.name ?? null)).toEqual(['Rowan', 'Rowan', null]);
    expect(readProfileIndex ().slots[0]?.activePlayTimeMs).toBe(12_000);
    renameProfile(1, 'Rowan II'); deleteProfile(1);
    expect(readProfileIndex ().slots[0]).toBeNull();
    expect(readProfileIndex ().slots[1]?.name).toBe('Rowan');
    expect(memory.getItem(profileSaveKey(2))).not.toBeNull();
  });

  it('loads a current v6 profile after creating it',()=>{
    initializeProfiles();createProfile(1,'Current');
    expect(JSON.parse(memory.getItem(profileSaveKey(1))!).version).toBe(6);
    expect(loadProfile(1).profile.name).toBe('Current');
  });

  it('migrates a valid legacy save without simulating or removing it', () => {
    const state = freshState(1000); state.gold = 17;
    const legacy = JSON.stringify({ version: 1, savedAt: 1000, state }); memory.setItem('mx-idle-save-v1', legacy);
    const index= initializeProfiles();
    expect(index.slots[0]?.name).toBe('Adventurer');
    expect(memory.getItem('mx-idle-save-v1')).toBe(legacy);
    expect(JSON.parse(memory.getItem(profileSaveKey(1))!).state.gold).toBe(17);
    expect(JSON.parse(memory.getItem(profileSaveKey(1))!).savedAt).toBe(1000);
  });

  it('normalizes old placeholder profile names for already-migrated indexes', () => {
    const index= initializeProfiles(); createProfile(1, 'Miner');
    const saved = JSON.parse(memory.getItem(PROFILE_INDEX_KEY)!);
    saved.slots[0].name = 'Existing Save Profile 1';
    memory.setItem(PROFILE_INDEX_KEY, JSON.stringify(saved));
    expect(readProfileIndex ().slots[0]?.name).toBe('Adventurer');
    void index;
  });

  it('simulates offline progress only after the selected profile loads', () => {
    initializeProfiles(); createProfile(1, 'Miner'); createProfile(2, 'Idle');
    const savedAt = Date.now() - 60_000, state = freshState(savedAt); startActivity(state, 'mining');
    memory.setItem(profileSaveKey(1), JSON.stringify({ version: 1, savedAt, state }));
    const loaded = loadProfile(1, savedAt + 60_000);
    expect(loaded.awayMs).toBe(60_000);
    expect(loaded.state.mining.strikes).toBeGreaterThan(0);
    expect(JSON.parse(memory.getItem(profileSaveKey(2))!).state.mining.strikes).toBe(0);
  });

  it('surfaces corrupt legacy saves and corrupt profile loads without replacing their data', () => {
    memory.setItem('mx-idle-save-v1', '{broken');
    expect(() => initializeProfiles()).toThrow(/could not be read safely/i);
    expect(memory.getItem('mx-idle-save-v1')).toBe('{broken');
    memory.removeItem('mx-idle-save-v1'); initializeProfiles(); createProfile(3, 'Mira');
    memory.setItem(profileSaveKey(3), '{broken');
    expect(() => loadProfile(3)).toThrow(/save is damaged/i);
    expect(memory.getItem(profileSaveKey(3))).toBe('{broken');
  });

  it('does not replace a damaged profile index  with empty slots', () => {
    memory.setItem(PROFILE_INDEX_KEY, '{broken');
    expect(() => initializeProfiles()).toThrow(/profile list is damaged/i);
    expect(memory.getItem(PROFILE_INDEX_KEY)).toBe('{broken');
  });
});
