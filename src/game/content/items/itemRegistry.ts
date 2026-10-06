import type { ItemId } from '../../types/gameTypes';
import { FISHING_RODS, FISHING_SPOTS, FISH_SPECIES, FISHING_TACKLE } from '../fishing/fishingContent';
import { COOKING_KNIVES, COOKING_RECIPES, PHASE1_PANTRY } from '../cooking/cookingContent';
import { MINING_DEPOSITS } from '../mining/miningDeposits';
import { MINING_TOOLS } from '../mining/miningTools';
import { SMELTING_RECIPES } from '../smithing/smeltingRecipes';
import { FORGING_RECIPES } from '../smithing/forgingRecipes';
import { FORGE_HAMMERS } from '../smithing/smithingTools';
import { MELEE_WEAPONS } from '../combat/meleeWeapons';
import { HEAVY_ARMOR } from '../combat/heavyArmor';
import { OFFHANDS } from '../combat/offhands';
export type EquipmentMeta = { context:'combat'|'profession'; slot:string; profession?:'Mining'|'Smithing'|'Fishing'|'Cooking'; skill:'Attack'|'Defence'|'Mining'|'Smithing'|'Fishing'|'Cooking'; requiredLevel:number; tier:number; stats:Record<string,string|number>; handedness?:'1H'|'2H'; allowedOffhandTypes?:readonly string[]; offhandType?:string };
export type ItemDefinition = { name: string; icon: string; category: string; desc: string; rarity?: 'Common' | 'Uncommon' | 'Rare'; tier?: number; equipment?:EquipmentMeta; offeringValue?:number };
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
  'combat.loot.beast_trophy': { name: 'Beast Trophy', icon: 'trophy', category: 'Combat Loot', desc: 'A mark of a dangerous hunt.', tier: 1, offeringValue:5 },
} satisfies Record<Exclude<ItemId, `fishing.${string}` | `cooking.${string}`>, ItemDefinition>;
const FISHING_ITEMS = Object.fromEntries([
  ...FISH_SPECIES.map((fish) => [fish.id,{name:fish.name,icon:'fish',category:'Raw Fish',desc:`${fish.rarity} ${fish.cookingClass} · ${fish.xp} Fishing XP`,tier:fish.tier,rarity:fish.rarity==='Very Rare'?'Rare':fish.rarity==='Rare'?'Uncommon':'Common'}]),
  ...FISHING_SPOTS.map((spot) => [spot.findId,{name:spot.findName,icon:'ore',category:'Aquatic Finds',desc:`Cooking ingredient found at ${spot.name}.`,tier:spot.tier}]),
  ...FISHING_RODS.map((rod) => [rod.id,{name:rod.name,icon:'pick',category:'Profession Tools',desc:`Fishing Power ${rod.power} · Bite Speed +${Math.round(rod.biteSpeed*100)}%. ${rod.effect}`,tier:Math.max(1,Math.ceil(rod.unlockLevel/10)),rarity:'Common',equipment:{context:'profession',profession:'Fishing',slot:'Rod',skill:'Fishing',requiredLevel:rod.unlockLevel,tier:Math.max(1,Math.ceil(rod.unlockLevel/10)),stats:{Power:rod.power,'Bite Speed':`+${Math.round(rod.biteSpeed*100)}%`,Effect:rod.effect}}}]),
  ...['worm','insect','fish_strip','shell','luminous'].map((bait)=>[`fishing.bait.${bait}`,{name:`${bait.split('_').map((part)=>part.charAt(0).toUpperCase()+part.slice(1)).join(' ')} Bait`,icon:'fish',category:'Bait',desc:'Optional Fishing bait.'}]),
  ...FISHING_TACKLE.map((tackle,i)=>[tackle.id,{name:tackle.name,icon:'fish',category:'Profession Tools',desc:`Permanent Fishing tackle. ${tackle.effect}`,tier:i+1,equipment:{context:'profession',profession:'Fishing',slot:'Tackle',skill:'Fishing',requiredLevel:tackle.level,tier:i+1,stats:{Effect:tackle.effect}}}]),
  ...COOKING_KNIVES.map((knife)=>[knife.id,{name:knife.name,icon:'knife',category:'Profession Tools',desc:`Prep Power ${knife.power} · Prep Speed +${Math.round(knife.prepSpeed*100)}% · ${knife.effect}`,tier:Math.ceil(knife.unlockLevel/10),equipment:{context:'profession',profession:'Cooking',slot:'Knife',skill:'Cooking',requiredLevel:knife.unlockLevel,tier:Math.ceil(knife.unlockLevel/10),stats:{Power:knife.power,'Prep Speed':`+${Math.round(knife.prepSpeed*100)}%`,Effect:knife.effect}}}]),
  ...COOKING_RECIPES.map((recipe)=>[recipe.output,{name:recipe.outputName,icon:recipe.foodValue?'food':'ore',category:recipe.foodValue?'Food':'Cooking Utility',desc:recipe.foodValue?`Food Value ${recipe.foodValue} · Heal ${recipe.foodValue*10} · Satiety 20.`:'Cooking utility item.',tier:recipe.tier}]),
  ...Object.values(PHASE1_PANTRY).map((item)=>[item.id,{name:item.name,icon:'food',category:'Materials',desc:`Cooking ingredient tagged ${item.name.replace('Field ','')}.`}]),
]);
const MINING_ITEMS=Object.fromEntries([
 ...Object.values(MINING_TOOLS).map(tool=>[tool.item,{name:tool.name,icon:'pick',category:'Profession Tools',desc:`Mining Power ${tool.power} · Speed +${Math.round(tool.speed*100)}% · ${tool.effect}`,tier:Math.max(1,Math.ceil(tool.equipLevel/10)),equipment:{context:'profession',profession:'Mining',slot:'Pickaxe',skill:'Mining',requiredLevel:tool.equipLevel,tier:Math.max(1,Math.ceil(tool.equipLevel/10)),stats:{Power:tool.power,Speed:`+${Math.round(tool.speed*100)}%`,Effect:tool.effect}}}]),
 ...Object.values(MINING_DEPOSITS).flatMap(d=>[d.primary,d.structuralItem,d.coreItem,...(d.gemPool??[]),...(d.additionalDrops??[]).map(x=>x.item)].filter(Boolean).map(id=>[id,{name:String(id).split('.').slice(-1)[0]?.split('_').map(x=>x[0]?.toUpperCase()+x.slice(1)).join(' '),icon:'ore',category:'Mining Materials',desc:`Material gathered from ${d.name}.`,tier:d.tier}])) ,
 ...['coal','granite','blackstone','fluxstone','aetherstone','raw_essence','runic_crystal','aether_essence','worldstone','worldheart_shard','mineral_core_fragment','refined_core_fragment','prismatic_core_fragment','astral_core_fragment','runic_shard','prismatic_dust','opal','sapphire','garnet','emerald','ruby','topaz','amethyst','aquamarine','diamond','astral_prism'].map((key,i)=>[`item.mining.${key}`,{name:key.split('_').map(x=>x[0]?.toUpperCase()+x.slice(1)).join(' '),icon:'ore',category:'Mining Materials',desc:`Mining material from the ${key.replace(/_/g,' ')} progression.`,tier:Math.min(10,i+1)}]),
]);
function forgeEquipment(output:ItemId,tier:number):EquipmentMeta|undefined{
 if(output in MINING_TOOLS){const tool=MINING_TOOLS[output as keyof typeof MINING_TOOLS];return{context:'profession',profession:'Mining',slot:'Pickaxe',skill:'Mining',requiredLevel:tool.equipLevel,tier,stats:{Power:tool.power,Speed:`+${Math.round(tool.speed*100)}%`,Effect:tool.effect}};}
 if(output in FORGE_HAMMERS){const tool=FORGE_HAMMERS[output as keyof typeof FORGE_HAMMERS];return{context:'profession',profession:'Smithing',slot:'Hammer',skill:'Smithing',requiredLevel:tool.equipLevel,tier,stats:{Power:tool.power,Strike:`${(tool.strikeMs/1000).toFixed(2)}s`,Effect:Object.keys(tool.effects).join(', ')||'None'}};}
 if(output in MELEE_WEAPONS){const weapon=MELEE_WEAPONS[output as keyof typeof MELEE_WEAPONS];return{context:'combat',slot:'Weapon',skill:'Attack',requiredLevel:weapon.attackLevel,tier,handedness:weapon.handedness,allowedOffhandTypes:weapon.allowedOffhandTypes,stats:{Power:weapon.power,Accuracy:weapon.accuracyBonus,Interval:`${(weapon.intervalMs/1000).toFixed(2)}s`,Handedness:weapon.handedness,Special:weapon.special.name}};}
 if(output in HEAVY_ARMOR){const armor=HEAVY_ARMOR[output as keyof typeof HEAVY_ARMOR];return{context:'combat',slot:armor.slot,skill:'Defence',requiredLevel:armor.smithingLevel,tier,stats:{'Slash Resistance':`${armor.resistances.Slash}%`,'Ranged Resistance':`${armor.resistances.Pierce}%`,'Magic Resistance':`${armor.resistances.Fire}%`}};}
 if(output in OFFHANDS){const offhand=OFFHANDS[output as keyof typeof OFFHANDS];return{context:'combat',slot:'Off-hand',skill:'Smithing',requiredLevel:offhand.smithingLevel,tier,offhandType:offhand.offhandType,stats:{'Melee Resistance':`${offhand.resistances.Slash}%`,'Ranged Resistance':`${offhand.resistances.Pierce}%`,Interval:`+${(offhand.attackIntervalPenaltyMs/1000).toFixed(2)}s`}};}
}
const SMITHING_ITEMS=Object.fromEntries([
 ...Object.values(SMELTING_RECIPES).map(recipe=>[recipe.output.item,{name:recipe.name,icon:'ingot',category:recipe.category==='alloy'?'Alloys':'Ingots',desc:`Smithing output · Smithing ${recipe.unlockLevel}.`,tier:Math.min(10,Math.ceil(recipe.unlockLevel/10))}]),
 ...Object.values(FORGE_HAMMERS).map(tool=>[tool.item,{name:tool.name,icon:'hammer',category:'Profession Tools',desc:`Forge Power ${tool.power} · Strike ${(tool.strikeMs/1000).toFixed(2)}s.`,tier:Math.max(1,Math.ceil(tool.equipLevel/10)),equipment:{context:'profession',profession:'Smithing',slot:'Hammer',skill:'Smithing',requiredLevel:tool.equipLevel,tier:Math.max(1,Math.ceil(tool.equipLevel/10)),stats:{Power:tool.power,Strike:`${(tool.strikeMs/1000).toFixed(2)}s`,Effect:Object.keys(tool.effects).join(', ')||'None'}}}]),
 ...Object.values(FORGING_RECIPES).map(recipe=>{const tier=Math.min(10,Math.ceil(recipe.unlockLevel/10));return[recipe.output,{name:recipe.name,icon:recipe.slot==='Weapon'?'sword':recipe.slot==='Off-hand'?'shield':recipe.slot==='Pickaxe'?'pick':recipe.slot==='Hammer'?'hammer':'armor',category:'Equipment',desc:`${recipe.slot} · Smithing ${recipe.unlockLevel}.`,tier,equipment:forgeEquipment(recipe.output,tier)}]}),
]);
export const ITEMS: Record<ItemId, ItemDefinition> = { ...BASE_ITEMS, ...FISHING_ITEMS, ...MINING_ITEMS, ...SMITHING_ITEMS } as Record<ItemId, ItemDefinition>;
