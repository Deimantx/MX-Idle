import { describe, expect, it } from 'vitest';
import { applyXpEvent, formatXpAmount, xpEventsForHud } from './xpHud.model';

describe('global XP HUD event model', () => {
  it('expands multi-skill batches into independent temporary skills', () => {
    const events = xpEventsForHud([{ id: 1, type:'xp-batch', occurredAt:1000, gains:[{skillId:'Attack',amount:8},{skillId:'Hitpoints',amount:2},{skillId:'Defence',amount:2}] }]);
    const state = events.reduce(applyXpEvent, []);
    expect(state.map((entry) => entry.skillId)).toEqual(['Attack','Hitpoints','Defence']);
    expect(state.map((entry) => entry.pulses[0]?.amount)).toEqual([8,2,2]);
  });

  it('merges rapid gains for the same skill and keeps readable precision', () => {
    const [first, second] = xpEventsForHud([
      { id: 1, type:'xp', occurredAt:1000, skillId:'Mining', amount:3 },
      { id: 2, type:'xp', occurredAt:1350, skillId:'Mining', amount:2.5 },
    ]);
    const state = applyXpEvent(applyXpEvent([], first!), second!);
    expect(state[0]?.pulses[state[0]!.pulses.length - 1]?.amount).toBe(5.5);
    expect(formatXpAmount(10)).toBe('10');
    expect(formatXpAmount(1240)).toBe('1,240');
    expect(formatXpAmount(2.5)).toBe('2.5');
  });
});
