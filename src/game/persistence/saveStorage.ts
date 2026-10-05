import { freshState } from '../state/initialState';
import { advance } from '../systems/simulation';
import type { SaveState } from '../types/gameTypes';

export const SAVE_KEY = 'mx-idle-save-v1';
export function decodeSave(raw: string | null, now = Date.now()): { state: SaveState; savedAt: number } | null {
  if (!raw) return null;
  try {
    const envelope = JSON.parse(raw);
    if (envelope.version !== 1 || !envelope.state || typeof envelope.state !== 'object') return null;
    const d = freshState(now), state = envelope.state;
    const objectFields = ['skills', 'bank', 'equipped', 'mining', 'smithing', 'combat', 'objectives', 'settings'];
    if (objectFields.some((field) => state[field] !== undefined && (!state[field] || typeof state[field] !== 'object' || Array.isArray(state[field])))) return null;
    if (state.skills && Object.values(state.skills).some((skill: any) => !skill || typeof skill !== 'object' || (skill.xp !== undefined && (typeof skill.xp !== 'number' || !Number.isFinite(skill.xp) || skill.xp < 0)) || (skill.level !== undefined && (typeof skill.level !== 'number' || !Number.isFinite(skill.level) || skill.level < 1)))) return null;
    if (state.bank && Object.values(state.bank).some((quantity: any) => typeof quantity !== 'number' || !Number.isFinite(quantity) || quantity < 0)) return null;
    if (state.activity !== undefined && ![null, 'mining', 'smelting', 'forging', 'combat'].includes(state.activity)) return null;
    const numericFields: Record<string, string[]> = { mining: ['stage', 'density', 'timer', 'cycles', 'strikes', 'sessionOre', 'sessionXp'], smithing: ['timer', 'produced', 'work', 'heat', 'reserved'], combat: ['playerHp', 'wolfHp', 'playerTimer', 'enemyTimer', 'seq', 'bleed', 'bleedTicks', 'bleedTimer', 'kills', 'xp', 'gold', 'trophies', 'elapsed', 'respawn'] };
    if (Object.entries(numericFields).some(([group, fields]) => state[group] && fields.some((field) => state[group][field] !== undefined && (typeof state[group][field] !== 'number' || !Number.isFinite(state[group][field]))))) return null;
    const s = { ...d, ...state, version: 1, skills: { ...d.skills, ...state.skills }, bank: state.bank ?? d.bank, equipped: { ...d.equipped, ...state.equipped }, mining: { ...d.mining, ...state.mining }, smithing: { ...d.smithing, ...state.smithing }, combat: { ...d.combat, ...state.combat }, objectives: { ...d.objectives, ...state.objectives }, settings: { ...d.settings, ...state.settings }, rng: Number.isFinite(state.rng) ? state.rng : d.rng } as SaveState;
    if (!s.skills.Mining || !s.bank || !s.combat || typeof (envelope.savedAt ?? s.savedAt) !== 'number' || !Number.isFinite(envelope.savedAt ?? s.savedAt) || (state.gold !== undefined && (typeof state.gold !== 'number' || !Number.isFinite(state.gold) || state.gold < 0))) return null;
    const savedAt = envelope.savedAt ?? s.savedAt;
    s.savedAt = savedAt;
    if (!['Mining', 'Smithing', 'Equipment', 'Combat', 'Bank'].includes(s.page)) s.page = 'Mining';
    return { state: s, savedAt };
  } catch { return null; }
}

export function loadState(raw: string | null, now = Date.now()): { state: SaveState; awayMs: number; fresh: boolean } {
  if (!raw) return { state: freshState(now), awayMs: 0, fresh: true };
  const decoded = decodeSave(raw, now);
  if (!decoded) return { state: freshState(now), awayMs: 0, fresh: true };
  const awayMs = Math.max(0, now - decoded.savedAt);
  return { state: advance(decoded.state, awayMs), awayMs, fresh: false };
}
