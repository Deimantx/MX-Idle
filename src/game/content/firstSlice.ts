import type { ItemId, RecipeId } from '../types/gameTypes';

// Kept intentionally light so the first gear unlocks can be reached in one short session.
export const PROVISIONAL_FIRST_SLICE_XP_CURVE = (level: number) => Math.round(15 + Math.max(0, level - 1) * 2);
export const PROVISIONAL_FIRST_SLICE_COMBAT_VALUES = { wolfHp: 70, wolfInterval: 3000, wolfAccuracy: 160, wolfMaxHit: 10, wolfMeleeEvasion: 120, respawn: 3000, gold: 8 } as const;
export const STAGES = [
  { name: 'Outcrop', density: 1, qty: 1, xp: 1 },
  { name: 'Shallow Vein', density: .78, qty: 1.25, xp: 1.4 },
  { name: 'Main Vein', density: .58, qty: 1.6, xp: 2 },
  { name: 'Deep Seam', density: .38, qty: 2.2, xp: 3 },
  { name: 'Core', density: .2, qty: 3.2, xp: 4.5 },
] as const;
export const RESISTANCES = { Slash: 12, Stab: 18, Crush: 14, Pierce: 24, Puncture: 20, Air: 0, Fire: -5, Water: 8, Earth: -8 } as const;
export const ITEMS = {
  pickaxe: { name: 'Worn Pickaxe', icon: 'pick', category: 'Equipment', desc: 'A battered starter tool. Mining Power 6.' },
  hammer: { name: 'Worn Smithing Hammer', icon: 'hammer', category: 'Equipment', desc: 'Forge Power 5 · Strike time 2.20s.' },
  ore: { name: 'Copper Ore', icon: 'ore', category: 'Materials', desc: 'Raw copper from the Copper Vein. Smelt 2 into 1 Copper Ingot.' },
  ingot: { name: 'Copper Ingot', icon: 'ingot', category: 'Materials', desc: 'A warm, workable copper bar.' },
  sword: { name: 'Copper Sword', icon: 'sword', category: 'Equipment', desc: '1H Melee · Slash / Stab · Power 18 · Accuracy +84 · 2.40s · Crit +1 pp.' },
  helm: { name: 'Copper Helm', icon: 'helm', category: 'Equipment', desc: 'T1 Heavy · +2% physical resistance · +5/+6/+2 evasion.' },
  plate: { name: 'Copper Plate Armor', icon: 'armor', category: 'Equipment', desc: 'Heavy chest and leg protection.' },
  gloves: { name: 'Copper Gauntlets', icon: 'gloves', category: 'Equipment', desc: 'Copper hand protection.' },
  greaves: { name: 'Copper Greaves', icon: 'greaves', category: 'Equipment', desc: 'Copper leg protection.' },
  shield: { name: 'Copper Shield', icon: 'shield', category: 'Equipment', desc: 'One-handed melee off-hand.' },
  trophy: { name: 'Beast Trophy', icon: 'trophy', category: 'Combat Loot', desc: 'T1 offering · Offering Value 5.' },
} as const;
export const RECIPES: Record<RecipeId, { name: string; ingots: number; work: number; unlock: number; slot: string }> = { sword: { name: 'Copper Sword', ingots: 4, work: 1.1, unlock: 1, slot: 'Weapon' }, helm: { name: 'Copper Helm', ingots: 3, work: .9, unlock: 5, slot: 'Head' }, plate: { name: 'Copper Plate Armor', ingots: 12, work: 3.15, unlock: 5, slot: 'Armor' }, gloves: { name: 'Copper Gauntlets', ingots: 2, work: .7, unlock: 3, slot: 'Hands' }, greaves: { name: 'Copper Greaves', ingots: 2, work: .75, unlock: 3, slot: 'Feet' }, shield: { name: 'Copper Shield', ingots: 5, work: 1.25, unlock: 5, slot: 'Off-hand' } };
export const recipeItem = (id: RecipeId): ItemId => id;
