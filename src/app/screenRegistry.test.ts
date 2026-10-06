import { describe, expect, it } from 'vitest';
import { freshState } from '../game/game';
import { isScreenUnlocked, screenLockReason } from './screenRegistry';

describe('screen availability', () => {
  it('explains why Smithing and Combat are locked, then unlocks them from game state', () => {
    const game = freshState();
    expect(isScreenUnlocked('Smithing', game)).toBe(false);
    expect(screenLockReason('Smithing', game)).toContain('Copper Vein');
    expect(isScreenUnlocked('Combat', game)).toBe(false);
    expect(screenLockReason('Combat', game)).toContain('weapon');

    game.bank['item.mining.copper_ore'] = 1;
    expect(isScreenUnlocked('Smithing', game)).toBe(true);
    game.skills.Attack.level = 5;
    game.equipped.weapon = 'combat.weapon.melee.copper_sword';
    expect(isScreenUnlocked('Combat', game)).toBe(true);
  });
});
