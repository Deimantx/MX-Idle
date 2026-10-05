import type { ItemId, SkillId } from '../../game/types/gameTypes';

export type GameFeedbackEvent =
  | { id: number; type: 'xp'; skillId: SkillId; amount: number; occurredAt: number }
  | { id: number; type: 'level-up'; skillId: SkillId; oldLevel: number; newLevel: number; occurredAt: number }
  | { id: number; type: 'item'; itemId: ItemId; amount: number; source: string; occurredAt: number }
  | { id: number; type: 'gold'; amount: number; source: string; occurredAt: number }
  | { id: number; type: 'system'; message: string; tone: 'unlock' | 'error' | 'defeat' | 'milestone'; occurredAt: number };

export type FeedbackSettings = { showXpDrops: boolean; showXpOrb: boolean; showItemGainFeed: boolean; levelUpEffects: boolean; systemToasts: boolean };
