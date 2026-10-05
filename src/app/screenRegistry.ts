import type { SaveState } from '../game/game';

export type GameScreenId = 'Mining' | 'Smithing' | 'Equipment' | 'Combat' | 'Bank';

export const GAME_SCREENS: { id: GameScreenId; icon: string }[] = [
  { id: 'Mining', icon: 'mining' },
  { id: 'Smithing', icon: 'anvil' },
  { id: 'Equipment', icon: 'helm' },
  { id: 'Combat', icon: 'combat' },
  { id: 'Bank', icon: 'bank' },
];

export function isScreenUnlocked(screen: GameScreenId, game: SaveState) {
  if (screen === 'Combat') return game.objectives.sword && game.objectives.helm;
  if (screen === 'Smithing') return (game.bank['item.mining.copper_ore'] ?? 0) + Object.values(game.mining.sessionOutputs).reduce((sum, amount) => sum + (amount ?? 0), 0) > 0 || game.skills.Mining.xp > 0;
  return true;
}

export function screenLockReason(screen: GameScreenId, game: SaveState) {
  if (isScreenUnlocked(screen, game)) return undefined;
  return screen === 'Combat'
    ? 'Forge your first Copper weapon and armor piece to unlock Combat.'
    : 'Mine the Copper Vein to find Ore and unlock Smithing.';
}
