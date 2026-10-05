import { describe, expect, it } from 'vitest';
import { freshState } from '../game/game';
import { isScreenUnlocked, screenLockReason } from './screenRegistry';

describe('screen availability', () => {
  it('explains why Smithing and Combat are locked, then unlocks them from game state', () => {
    const game = freshState();
    expect(isScreenUnlocked('Smithing', game)).toBe(false);
    expect(screenLockReason('Smithing', game)).toContain('Copper Vein');
    expect(isScreenUnlocked('Combat', game)).toBe(false);
    expect(screenLockReason('Combat', game)).toContain('Copper weapon and armor');

    game.bank['item.mining.copper_ore'] = 1;
    expect(isScreenUnlocked('Smithing', game)).toBe(true);
    game.objectives.sword = true;
    game.objectives.helm = true;
    expect(isScreenUnlocked('Combat', game)).toBe(true);
  });
});
