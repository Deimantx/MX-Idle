import { canUseWeapon, type SaveState } from '../game/game';

export type GameScreenId = 'Mining' | 'Smithing' | 'Fishing' | 'Cooking' | 'Equipment' | 'Combat' | 'Bank';

export const GAME_SCREENS: { id: GameScreenId; icon: string }[] = [
  { id: 'Mining', icon: 'mining' },
  { id: 'Smithing', icon: 'anvil' },
  { id: 'Fishing', icon: 'fish' },
  { id: 'Cooking', icon: 'food' },
  { id: 'Equipment', icon: 'helm' },
  { id: 'Combat', icon: 'combat' },
  { id: 'Bank', icon: 'bank' },
];

export function isScreenUnlocked(screen: GameScreenId, game: SaveState) {
  if (screen === 'Fishing' || screen === 'Cooking') return true;
  if (screen === 'Combat') return canUseWeapon(game,game.equipped.weapon);
  if (screen === 'Smithing') return (game.bank['item.mining.copper_ore'] ?? 0) + Object.values(game.mining.sessionOutputs).reduce<number>((sum, amount) => sum + (amount ?? 0), 0) > 0 || game.skills.Mining.xp > 0;
  return true;
}

export function screenLockReason(screen: GameScreenId, game: SaveState) {
  if (isScreenUnlocked(screen, game)) return undefined;
  return screen === 'Combat'
    ? 'Equip a weapon that meets its Attack requirement to unlock Combat.'
    : 'Mine the Copper Vein to find Ore and unlock Smithing.';
}
