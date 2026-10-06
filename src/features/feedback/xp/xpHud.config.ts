import type { SkillId } from '../../../game/types/gameTypes';

export type SkillPresentation = { icon: string; accent: string; label: string };

export const SKILL_PRESENTATION: Record<SkillId, SkillPresentation> = {
  Mining: { icon: 'mining', accent: 'mining', label: 'MIN' },
  Smithing: { icon: 'anvil', accent: 'smithing', label: 'SMI' },
  Fishing: { icon: 'fish', accent: 'fishing', label: 'FSH' },
  Cooking: { icon: 'food', accent: 'cooking', label: 'COO' },
  Attack: { icon: 'sword', accent: 'attack', label: 'ATK' },
  Defence: { icon: 'shield', accent: 'defence', label: 'DEF' },
  Hitpoints: { icon: 'heart', accent: 'hitpoints', label: 'HP' },
};

export const XP_ORB_IDLE_MS = 10_000;
export const XP_ORB_FADE_MS = 750;
export const XP_PULSE_MERGE_MS = 400;
export const XP_PULSE_LIFETIME_MS = 1_400;
