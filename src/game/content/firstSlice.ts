import type { DamageType, DepositId, EnemyId, ItemId, RecipeId } from '../types/gameTypes';

export const PROVISIONAL_FIRST_SLICE_XP_CURVE = (level: number) => Math.round(15 + Math.max(0, level - 1) * 2);
export const PROVISIONAL_FIRST_SLICE_COMBAT_VALUES = { wolfHp: 70, wolfInterval: 3000, wolfAccuracy: 160, wolfMaxHit: 10, wolfMeleeEvasion: 120, respawn: 3000, gold: 8 } as const;
export type MiningStage = { name: string; density: number; qty: number; xp: number };
export type MiningDeposit = { id: DepositId; name: string; resource: ItemId; resourceName: string; baseQty: number; baseDensity: number; strikeMs: number; xp: number; unlock: number; stages: readonly MiningStage[] };
const copperMultipliers = [1, .78, .58, .38, .2] as const;
export const MINING_DEPOSITS: Record<DepositId, MiningDeposit> = {
  'copper-vein': { id: 'copper-vein', name: 'Copper Vein', resource: 'ore', resourceName: 'Copper Ore', baseQty: 1, baseDensity: 36, strikeMs: 2400, xp: 6, unlock: 1, stages: [
    { name: 'Outcrop', density: 1, qty: 1, xp: 1 }, { name: 'Shallow Vein', density: .78, qty: 1.25, xp: 1.4 }, { name: 'Main Vein', density: .58, qty: 1.6, xp: 2 }, { name: 'Deep Seam', density: .38, qty: 2.2, xp: 3 }, { name: 'Core', density: .2, qty: 3.2, xp: 4.5 },
  ] },
  'fieldstone-quarry': { id: 'fieldstone-quarry', name: 'Fieldstone Quarry', resource: 'stone', resourceName: 'Stone', baseQty: 3, baseDensity: 42, strikeMs: 2500, xp: 5, unlock: 5, stages: [
    { name: 'Loose Scree', density: 1, qty: 3, xp: 1 }, { name: 'Broken Shelf', density: .81, qty: 3.7, xp: 1.4 }, { name: 'Grey Seam', density: .60, qty: 4.5, xp: 2 }, { name: 'Deep Cut', density: .405, qty: 5.7, xp: 3 }, { name: 'Quarry Heart', density: .19, qty: 7.4, xp: 4.5 },
  ] },
};
export const STAGES = MINING_DEPOSITS['copper-vein'].stages;
export const MINING_TOOLS: Record<'pickaxe' | 'copperPickaxe', { item: ItemId; name: string; power: number; speed: number; equipLevel: number }> = {
  pickaxe: { item: 'pickaxe', name: 'Worn Pickaxe', power: 6, speed: 0, equipLevel: 1 },
  copperPickaxe: { item: 'copperPickaxe', name: 'Copper Pickaxe', power: 8, speed: .02, equipLevel: 5 },
};
export const FORGE_HAMMERS: Record<'hammer' | 'copperHammer', { item: ItemId; name: string; power: number; strikeMs: number; equipLevel: number }> = {
  hammer: { item: 'hammer', name: 'Worn Smithing Hammer', power: 5, strikeMs: 2200, equipLevel: 1 },
  copperHammer: { item: 'copperHammer', name: 'Copper Smithing Hammer', power: 7, strikeMs: 2140, equipLevel: 5 },
};
export const RESISTANCES: Record<DamageType, number> = { Slash: 12, Stab: 18, Crush: 14, Pierce: 24, Puncture: 20, Air: 0, Fire: -5, Water: 8, Earth: -8 };
export const ITEMS: Record<ItemId, { name: string; icon: string; category: string; desc: string }> = {
  pickaxe: { name: 'Worn Pickaxe', icon: 'pick', category: 'Equipment', desc: 'A battered starter tool. Mining Power 6.' },
  copperPickaxe: { name: 'Copper Pickaxe', icon: 'pick', category: 'Equipment', desc: 'Mining Power 8 · Mining Speed +2%.' },
  hammer: { name: 'Worn Smithing Hammer', icon: 'hammer', category: 'Equipment', desc: 'Forge Power 5 · Strike time 2.20s.' },
  copperHammer: { name: 'Copper Smithing Hammer', icon: 'hammer', category: 'Equipment', desc: 'Forge Power 7 · Strike time 2.14s. Equip at Smithing 5.' },
  ore: { name: 'Copper Ore', icon: 'ore', category: 'Materials', desc: 'Raw copper from the Copper Vein. Smelt 2 into 1 Copper Ingot.' },
  stone: { name: 'Stone', icon: 'ore', category: 'Materials', desc: 'Fieldstone from the Quarry. A common T1 building and smithing material.' },
  ingot: { name: 'Copper Ingot', icon: 'ingot', category: 'Materials', desc: 'A warm, workable copper bar.' },
  sword: { name: 'Copper Sword', icon: 'sword', category: 'Equipment', desc: 'Balanced 1H Melee · Slash / Stab · Precision Lunge.' },
  axe: { name: 'Copper Battle Axe', icon: 'sword', category: 'Equipment', desc: 'Slow, powerful Slash weapon · Executioner’s Chop.' },
  mace: { name: 'Copper Mace', icon: 'sword', category: 'Equipment', desc: 'Crush weapon · Concussive Blow weakens resistance.' },
  helm: { name: 'Copper Helm', icon: 'helm', category: 'Equipment', desc: 'T1 Heavy · +2% physical resistance.' },
  plate: { name: 'Copper Plate Armor', icon: 'armor', category: 'Equipment', desc: 'Heavy copper body protection.' },
  gloves: { name: 'Copper Gauntlets', icon: 'gloves', category: 'Equipment', desc: 'Copper hand protection.' },
  greaves: { name: 'Copper Greaves', icon: 'greaves', category: 'Equipment', desc: 'Copper leg protection.' },
  shield: { name: 'Copper Shield', icon: 'shield', category: 'Equipment', desc: 'One-handed melee off-hand. Adds defense and a 0.20s attack interval penalty.' },
  trophy: { name: 'Beast Trophy', icon: 'trophy', category: 'Combat Loot', desc: 'T1 offering · Offering Value 5.' },
};
export type Recipe = { id: RecipeId; name: string; ingots: number; work: number; unlock: number; slot: string; output: ItemId; special?: string };
export const RECIPES: Record<RecipeId, Recipe> = {
  sword: { id: 'sword', name: 'Copper Sword', ingots: 4, work: 1.1, unlock: 1, slot: 'Weapon', output: 'sword', special: 'Precision Lunge' },
  axe: { id: 'axe', name: 'Copper Battle Axe', ingots: 7, work: 1.8, unlock: 5, slot: 'Weapon', output: 'axe', special: "Executioner's Chop" },
  mace: { id: 'mace', name: 'Copper Mace', ingots: 6, work: 1.6, unlock: 5, slot: 'Weapon', output: 'mace', special: 'Concussive Blow' },
  helm: { id: 'helm', name: 'Copper Helm', ingots: 3, work: .9, unlock: 5, slot: 'Head', output: 'helm' },
  plate: { id: 'plate', name: 'Copper Plate Armor', ingots: 12, work: 3.15, unlock: 5, slot: 'Armor', output: 'plate' },
  gloves: { id: 'gloves', name: 'Copper Gauntlets', ingots: 2, work: .7, unlock: 3, slot: 'Hands', output: 'gloves' },
  greaves: { id: 'greaves', name: 'Copper Greaves', ingots: 2, work: .75, unlock: 3, slot: 'Feet', output: 'greaves' },
  shield: { id: 'shield', name: 'Copper Shield', ingots: 5, work: 1.25, unlock: 5, slot: 'Off-hand', output: 'shield' },
  copperPickaxe: { id: 'copperPickaxe', name: 'Copper Pickaxe', ingots: 6, work: 1.45, unlock: 5, slot: 'Tool', output: 'copperPickaxe' },
  copperHammer: { id: 'copperHammer', name: 'Copper Smithing Hammer', ingots: 5, work: 1.35, unlock: 5, slot: 'Tool', output: 'copperHammer' },
};
export const recipeItem = (id: RecipeId): ItemId => RECIPES[id].output;

export type EnemyAction = { name: string; type: DamageType; multiplier: number; intervalMultiplier?: number; status?: { type: 'Bleed' | 'AccuracyDown' | 'Stun'; magnitude: number; durationMs: number } };
export type EnemyDefinition = { id: EnemyId; name: string; rank: 'Light' | 'Normal' | 'Elite'; kind: string; style: 'Melee' | 'Ranged' | 'Magic'; hp: number; accuracy: number; maxHit: number; intervalMs: number; evasion: number; resistance: Partial<Record<DamageType, number>>; sequence: readonly EnemyAction[]; xp: number; gold: number; unlock: number; loot: ItemId };
export const ENEMIES: Record<EnemyId, EnemyDefinition> = {
  'road-wolf': { id: 'road-wolf', name: 'Road Wolf', rank: 'Normal', kind: 'Beast', style: 'Melee', hp: 70, accuracy: 160, maxHit: 10, intervalMs: 3000, evasion: 120, resistance: RESISTANCES, sequence: [{ name: 'Bite', type: 'Stab', multiplier: 1 }, { name: 'Bite', type: 'Stab', multiplier: 1 }, { name: 'Rending Fang', type: 'Stab', multiplier: 1.25, status: { type: 'Bleed', magnitude: .1, durationMs: 6000 } }], xp: 24, gold: 8, unlock: 1, loot: 'trophy' },
  'dust-rat': { id: 'dust-rat', name: 'Dust Rat', rank: 'Light', kind: 'Beast', style: 'Melee', hp: 46, accuracy: 108, maxHit: 7, intervalMs: 2500, evasion: 135, resistance: { ...RESISTANCES, Slash: 2, Stab: 10, Crush: -5 }, sequence: [{ name: 'Bite', type: 'Stab', multiplier: 1 }, { name: 'Quick Bite', type: 'Stab', multiplier: .7, intervalMultiplier: .75 }, { name: 'Bite', type: 'Stab', multiplier: 1 }], xp: 18, gold: 5, unlock: 1, loot: 'trophy' },
  'ragged-poacher': { id: 'ragged-poacher', name: 'Ragged Poacher', rank: 'Normal', kind: 'Outlaw', style: 'Ranged', hp: 82, accuracy: 124, maxHit: 9, intervalMs: 3300, evasion: 106, resistance: { ...RESISTANCES, Pierce: 10, Puncture: 8 }, sequence: [{ name: 'Arrow', type: 'Pierce', multiplier: 1 }, { name: 'Arrow', type: 'Pierce', multiplier: 1 }, { name: 'Barbed Shot', type: 'Pierce', multiplier: 1.15, status: { type: 'Bleed', magnitude: .08, durationMs: 6000 } }], xp: 30, gold: 10, unlock: 1, loot: 'trophy' },
  'hedge-spark': { id: 'hedge-spark', name: 'Hedge Spark', rank: 'Normal', kind: 'Fey', style: 'Magic', hp: 76, accuracy: 132, maxHit: 8, intervalMs: 3100, evasion: 112, resistance: { ...RESISTANCES, Air: 15, Fire: -12, Water: 10, Earth: -5 }, sequence: [{ name: 'Gust', type: 'Air', multiplier: 1 }, { name: 'Gust', type: 'Air', multiplier: 1 }, { name: 'Static Burst', type: 'Air', multiplier: 1.2, status: { type: 'AccuracyDown', magnitude: .08, durationMs: 5000 } }], xp: 28, gold: 9, unlock: 1, loot: 'trophy' },
  'ironjaw-boar': { id: 'ironjaw-boar', name: 'Ironjaw Boar', rank: 'Elite', kind: 'Beast', style: 'Melee', hp: 250, accuracy: 178, maxHit: 16, intervalMs: 3400, evasion: 142, resistance: { ...RESISTANCES, Crush: 26, Fire: -12 }, sequence: [{ name: 'Gore', type: 'Crush', multiplier: 1 }, { name: 'Gore', type: 'Crush', multiplier: 1 }, { name: 'Iron Charge', type: 'Crush', multiplier: 1.55, intervalMultiplier: 1.25, status: { type: 'Stun', magnitude: 1, durationMs: 1000 } }], xp: 80, gold: 30, unlock: 5, loot: 'trophy' },
};
export const NORMAL_ENEMIES: EnemyId[] = ['road-wolf', 'dust-rat', 'ragged-poacher', 'hedge-spark'];
