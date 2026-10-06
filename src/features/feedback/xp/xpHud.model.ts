import type { SkillId } from '../../../game/types/gameTypes';
import type { GameFeedbackEvent } from '../feedback.types';
import { XP_PULSE_MERGE_MS } from './xpHud.config';

export type XpPulse = { id: string; amount: number; occurredAt: number };
export type VisibleSkillXp = {
  skillId: SkillId;
  visibleSince: number;
  lastGainAt: number;
  phase: 'entering' | 'visible' | 'fading';
  pulses: XpPulse[];
  levelUp?: { from: number; to: number; startedAt: number };
};

export type XpHudEvent = { id: number; occurredAt: number; gains?: Array<{ skillId: SkillId; amount: number }>; levelUp?: { skillId: SkillId; from: number; to: number } };
export function xpEventsForHud(events: readonly GameFeedbackEvent[]): XpHudEvent[] {
  return events.flatMap<XpHudEvent>((event) => {
    if (event.type === 'xp') return [{ id: event.id, occurredAt: event.occurredAt, gains: [{ skillId: event.skillId, amount: event.amount }] }];
    if (event.type === 'xp-batch') return [{ id: event.id, occurredAt: event.occurredAt, gains: event.gains }];
    if (event.type === 'level-up') return [{ id: event.id, occurredAt: event.occurredAt, levelUp: { skillId: event.skillId, from: event.oldLevel, to: event.newLevel } }];
    return [];
  });
}

export function formatXpAmount(amount: number) {
  const value = Math.round(amount * 10) / 10;
  return Number.isInteger(value) ? value.toLocaleString('en-US') : value.toLocaleString('en-US', { maximumFractionDigits: 1 });
}

export function applyXpEvent(state: VisibleSkillXp[], event: XpHudEvent): VisibleSkillXp[] {
  const next = [...state];
  const upsert = (skillId: SkillId) => {
    const found = next.findIndex((entry) => entry.skillId === skillId);
    if (found >= 0) return found;
    next.push({ skillId, visibleSince: event.occurredAt, lastGainAt: event.occurredAt, phase: 'entering', pulses: [] });
    return next.length - 1;
  };
  for (const gain of event.gains ?? []) {
    const index = upsert(gain.skillId), entry = next[index]!;
    const previous = entry.pulses[entry.pulses.length - 1];
    const pulses = previous && event.occurredAt - previous.occurredAt <= XP_PULSE_MERGE_MS
      ? [...entry.pulses.slice(0, -1), { id: `${event.id}-${gain.skillId}`, amount: previous.amount + gain.amount, occurredAt: event.occurredAt }]
      : [...entry.pulses, { id: `${event.id}-${gain.skillId}`, amount: gain.amount, occurredAt: event.occurredAt }].slice(-3);
    next[index] = { ...entry, phase: entry.phase === 'entering' ? 'entering' : 'visible', lastGainAt: event.occurredAt, pulses };
  }
  if (event.levelUp) {
    const index = upsert(event.levelUp.skillId), entry = next[index]!;
    next[index] = { ...entry, phase: 'visible', lastGainAt: event.occurredAt, levelUp: { from: entry.levelUp?.from ?? event.levelUp.from, to: event.levelUp.to, startedAt: event.occurredAt } };
  }
  return next;
}
