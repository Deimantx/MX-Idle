import { describe, expect, it } from 'vitest';
import { calculateAutoScale, normalizeAppSettings } from './settingsStorage';

describe('application interface settings', () => {
  it('computes the documented auto scale from CSS viewport dimensions', () => {
    expect(calculateAutoScale(1366, 768)).toBe(.9);
    expect(calculateAutoScale(1920, 1080)).toBe(1);
    expect(calculateAutoScale(2560, 1440)).toBe(1.35);
    expect(calculateAutoScale(3440, 1440)).toBe(1.35);
    expect(calculateAutoScale(3840, 2160)).toBe(1.5);
  });
  it('clamps and quantizes manual scale and text size while preserving separate global options', () => {
    const settings = normalizeAppSettings({ interface: { scaleMode: 'manual', manualScale: 1.63, textScale: 1.14 }, audio: { muted: true, masterVolume: 2 }, accessibility: { reducedMotion: 'on' } });
    expect(settings.interface).toEqual({ scaleMode: 'manual', manualScale: 1.6, textScale: 1.1, customCursor: true });
    expect(settings.audio).toEqual({ muted: true, masterVolume: 1 });
    expect(settings.accessibility.reducedMotion).toBe('on');
    expect(normalizeAppSettings({ interface: { manualScale: .1, textScale: 9 } }).interface).toEqual({ scaleMode: 'auto', manualScale: .8, textScale: 1.4, customCursor: true });
    expect(normalizeAppSettings({ feedback: { showXpDrops: false } }).feedback).toEqual({ showXpDrops: false, showXpOrb: true, showItemGainFeed: true, levelUpEffects: true, systemToasts: true });
  });
});
