import { describe, expect, it } from 'vitest';
import { XP_ORB_FADE_MS, XP_ORB_IDLE_MS } from './xpHud.config';

describe('XP HUD visibility timing', () => {
  it('keeps an XP circle visible for twenty seconds before fading', () => {
    expect(XP_ORB_IDLE_MS).toBe(20_000);
    expect(XP_ORB_FADE_MS).toBeGreaterThanOrEqual(900);
    expect(XP_ORB_FADE_MS).toBeLessThanOrEqual(1_200);
  });
});
