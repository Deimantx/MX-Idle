import type { ItemId } from '../../types/gameTypes';
export type ItemDefinition = { name: string; icon: string; category: string; desc: string; rarity?: 'Common' | 'Uncommon' | 'Rare'; tier?: number };
export const ITEMS: Record<ItemId, ItemDefinition> = {
  'item.mining.worn_pickaxe': { name: 'Worn Pickaxe', icon: 'pick', category: 'Tools', desc: 'A battered starter tool. Mining Power 6.', tier: 1 },
  'item.mining.copper_pickaxe': { name: 'Copper Pickaxe', icon: 'pick', category: 'Tools', desc: 'Mining Power 8 · Mining Speed +2% · Primary extra quantity +2 pp.', tier: 1, rarity: 'Uncommon' },
  'item.smithing.worn_smithing_hammer': { name: 'Worn Smithing Hammer', icon: 'hammer', category: 'Tools', desc: 'Forge Power 5 · Strike time 2.20s.', tier: 1 },
  'item.smithing.copper_smithing_hammer': { name: 'Copper Smithing Hammer', icon: 'hammer', category: 'Tools', desc: 'Forge Power 7 · Strike time 2.14s. Equip at Smithing 5.', tier: 1, rarity: 'Uncommon' },
  'item.mining.copper_ore': { name: 'Copper Ore', icon: 'ore', category: 'Materials', desc: 'Raw copper from the Copper Vein. Smelt 2 into 1 Copper Ingot.', tier: 1 },
  'item.mining.stone': { name: 'Stone', icon: 'ore', category: 'Materials', desc: 'Fieldstone from the Quarry; also appears as Copper Vein rubble.', tier: 1 },
  'item.mining.opal': { name: 'Uncut Opal', icon: 'ore', category: 'Materials', desc: 'A rare T1 mineral gem recovered from Copper Vein strata.', tier: 1, rarity: 'Rare' },
  'item.mining.mineral_core_fragment': { name: 'Mineral Core Fragment', icon: 'ore', category: 'Materials', desc: 'A rare fragment released from deep mineral cores.', tier: 1, rarity: 'Rare' },
  'item.smithing.copper_ingot': { name: 'Copper Ingot', icon: 'ingot', category: 'Materials', desc: 'A warm, workable copper bar.', tier: 1 },
  'combat.weapon.melee.copper_sword': { name: 'Copper Sword', icon: 'sword', category: 'Equipment', desc: 'Balanced 1H Melee · Slash / Stab · Precision Lunge.', tier: 1 },
  'combat.weapon.melee.copper_battle_axe': { name: 'Copper Battle Axe', icon: 'sword', category: 'Equipment', desc: 'Slash · Power 21 · Executioner’s Chop.', tier: 1 },
  'combat.weapon.melee.copper_mace': { name: 'Copper Mace', icon: 'sword', category: 'Equipment', desc: 'Crush · Power 19 · Concussive Blow.', tier: 1 },
  'combat.armor.heavy.copper_helm': { name: 'Copper Helm', icon: 'helm', category: 'Equipment', desc: 'T1 Heavy head protection.', tier: 1 },
  'combat.armor.heavy.copper_armor': { name: 'Copper Plate Armor', icon: 'armor', category: 'Equipment', desc: 'Heavy copper body protection.', tier: 1 },
  'combat.armor.heavy.copper_gauntlets': { name: 'Copper Gauntlets', icon: 'gloves', category: 'Equipment', desc: 'Copper hand protection.', tier: 1 },
  'combat.armor.heavy.copper_greaves': { name: 'Copper Greaves', icon: 'greaves', category: 'Equipment', desc: 'Copper leg protection.', tier: 1 },
  'combat.offhand.melee.copper_shield': { name: 'Copper Shield', icon: 'shield', category: 'Equipment', desc: '1H Melee off-hand · +0.10s attack interval.', tier: 1 },
  'combat.loot.beast_trophy': { name: 'Beast Trophy', icon: 'trophy', category: 'Combat Loot', desc: 'T1 offering · Offering Value 5.', tier: 1 },
};
