import type { ItemId } from '../../types/gameTypes';
import { FISHING_RODS, FISHING_SPOTS, FISH_SPECIES } from '../fishing/fishingContent';
import { COOKING_KNIVES, COOKING_RECIPES, PHASE1_PANTRY } from '../cooking/cookingContent';
export type ItemDefinition = { name: string; icon: string; category: string; desc: string; rarity?: 'Common' | 'Uncommon' | 'Rare'; tier?: number };
const BASE_ITEMS = {
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
} satisfies Record<Exclude<ItemId, `fishing.${string}` | `cooking.${string}`>, ItemDefinition>;
const FISHING_ITEMS = Object.fromEntries([
  ...FISH_SPECIES.map((fish) => [fish.id,{name:fish.name,icon:'fish',category:'Raw Fish',desc:`${fish.rarity} ${fish.cookingClass} · ${fish.xp} Fishing XP`,tier:fish.tier,rarity:fish.rarity==='Very Rare'?'Rare':fish.rarity==='Rare'?'Uncommon':'Common'}]),
  ...FISHING_SPOTS.map((spot) => [spot.findId,{name:spot.findName,icon:'ore',category:'Aquatic Finds',desc:`Cooking ingredient found at ${spot.name}.`,tier:spot.tier}]),
  ...FISHING_RODS.map((rod) => [rod.id,{name:rod.name,icon:'pick',category:'Profession Tools',desc:`Fishing Power ${rod.power} · Bite Speed +${Math.round(rod.biteSpeed*100)}%. ${rod.effect}`,tier:rod.unlockLevel===1?0:Math.ceil(rod.unlockLevel/10),rarity:'Common'}]),
  ...['worm','insect','fish_strip','shell','luminous'].map((bait)=>[`fishing.bait.${bait}`,{name:`${bait.split('_').map((part)=>part.charAt(0).toUpperCase()+part.slice(1)).join(' ')} Bait`,icon:'fish',category:'Bait',desc:'Optional Fishing bait.'}]),
  ...['cork_float','weighted_sinker','spinner_lure','fine_hook','double_hook','deepwater_rig','barbless_master_hook','aether_spinner','umbral_sinker','astral_lure'].map((id)=>[`fishing.tackle.${id}`,{name:id.split('_').map((x)=>x[0]?.toUpperCase()+x.slice(1)).join(' '),icon:'fish',category:'Profession Tools',desc:'Permanent Fishing tackle.'}]),
  ...COOKING_KNIVES.map((knife)=>[knife.id,{name:knife.name,icon:'knife',category:'Profession Tools',desc:`Prep Power ${knife.power} · Prep Speed +${Math.round(knife.prepSpeed*100)}% · ${knife.effect}`,tier:Math.ceil(knife.unlockLevel/10)}]),
  ...COOKING_RECIPES.map((recipe)=>[recipe.output,{name:recipe.outputName,icon:recipe.foodValue?'food':'ore',category:recipe.foodValue?'Food':'Cooking Utility',desc:recipe.foodValue?`Food Value ${recipe.foodValue} · Heal ${recipe.foodValue*10} · Satiety 20.`:'Cooking utility item.',tier:recipe.tier}]),
  ...Object.values(PHASE1_PANTRY).map((item)=>[item.id,{name:item.name,icon:'food',category:'Materials',desc:`Temporary Phase-1 Pantry bridge ingredient tagged ${item.name.replace('Field ','')}.`}]),
]);
export const ITEMS: Record<ItemId, ItemDefinition> = { ...BASE_ITEMS, ...FISHING_ITEMS } as Record<ItemId, ItemDefinition>;
