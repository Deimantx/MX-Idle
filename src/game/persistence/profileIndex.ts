import type { SaveState } from '../types/gameTypes';

export const PROFILE_INDEX_KEY = 'mx-idle-profile-index-v1';
export type ProfileSlotId = 1 | 2 | 3;
export type ProfileSummary = { miningLevel: number; smithingLevel: number; attackLevel: number; defenceLevel: number; hitpointsLevel: number; activity: string; firstWolfKill: boolean };
export type ProfileRecord = { id: string; slot: ProfileSlotId; name: string; createdAt: number; lastPlayedAt: number; activePlayTimeMs: number; summary: ProfileSummary };
export type ProfileIndex = { version: 1; slots: [ProfileRecord | null, ProfileRecord | null, ProfileRecord | null] };

export const emptyProfileIndex = (): ProfileIndex => ({ version: 1, slots: [null, null, null] });
export function profileSummary(state: SaveState): ProfileSummary {
  return { miningLevel: state.skills.Mining.level, smithingLevel: state.skills.Smithing.level, attackLevel: state.skills.Attack.level, defenceLevel: state.skills.Defence.level, hitpointsLevel: state.skills.Hitpoints.level, activity: state.activity ?? 'idle', firstWolfKill: state.combat.kills > 0 };
}
export function parseProfileIndex(raw: string | null): ProfileIndex {
  if (raw === null) return emptyProfileIndex();
  let parsed: any;
  try { parsed = JSON.parse(raw); } catch { throw new Error('Profile list is damaged. Your save files are still present. Try reloading, or back up browser data before resetting anything.'); }
  if (parsed?.version !== 1 || !Array.isArray(parsed.slots) || parsed.slots.length !== 3) throw new Error('Profile list is damaged. Your save files are still present. Try reloading, or back up browser data before resetting anything.');
  const slots = parsed.slots.map((slot: any, index: number) => {
    if (slot === null) return null;
    if (!slot || typeof slot.id !== 'string' || typeof slot.name !== 'string' || slot.name.trim().length < 1 || slot.name.trim().length > 24 || slot.slot !== index + 1 || !slot.summary || typeof slot.summary !== 'object' || !Number.isFinite(slot.createdAt) || !Number.isFinite(slot.lastPlayedAt) || !Number.isFinite(slot.activePlayTimeMs) || slot.activePlayTimeMs < 0) throw new Error(`Profile Slot ${index + 1} details are damaged. Its save file has not been changed.`);
    const summary = slot.summary;
    return {
      ...slot,
      name: /^(existing save(?: profile \d+)?)$/i.test(slot.name.trim()) ? 'Adventurer' : slot.name.trim(),
      summary: {
        miningLevel: positiveLevel(summary.miningLevel), smithingLevel: positiveLevel(summary.smithingLevel), attackLevel: positiveLevel(summary.attackLevel), defenceLevel: positiveLevel(summary.defenceLevel), hitpointsLevel: positiveLevel(summary.hitpointsLevel),
        activity: ['idle', 'mining', 'smelting', 'forging', 'combat'].includes(summary.activity) ? summary.activity : 'idle', firstWolfKill: summary.firstWolfKill === true,
      },
    } as ProfileRecord;
  }) as ProfileIndex['slots'];
  return { version: 1, slots };
}

function positiveLevel(value: unknown) { const number = Number(value); return Number.isFinite(number) && number >= 1 ? Math.floor(number) : 1; }
