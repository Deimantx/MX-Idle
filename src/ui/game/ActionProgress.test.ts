import { describe, expect, it } from 'vitest';
import { interpolateProgress } from './ActionProgress';

describe('action progress interpolation', () => {
  it('advances from authoritative remaining time using the game speed multiplier', () => {
    expect(interpolateProgress(1500, 250, 2000, 2)).toBeCloseTo(.5);
  });
  it('clamps at zero and holds at completion until a new snapshot arrives', () => {
    expect(interpolateProgress(200, 500, 1000)).toBe(1);
    expect(interpolateProgress(1200, 0, 1000)).toBe(0);
  });
  it('never divides by an invalid duration', () => {
    expect(interpolateProgress(0, 1, 0)).toBe(1);
  });
});
