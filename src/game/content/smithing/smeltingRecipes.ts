import type { ItemId } from '../../types/gameTypes';
export type SmeltingRecipe = { id: `recipe.smithing.${string}`; name: string; unlockLevel: number; inputs: { item: ItemId; amount: number }[]; output: { item: ItemId; amount: number }; heatRequirement: number; unitTimeMs: number; warmupMs: number; smithingXp: number; category: 'smelting' | 'alloy' };
const metals=['copper','iron','cobalt','argent','emberite','frostsilver','stormiron','aetherite','umbral','astralite'];
const names=['Copper','Iron','Cobalt','Argent','Emberite','Frostsilver','Stormiron','Aetherite','Umbral','Astralite'];
const levels=[1,11,21,31,41,51,61,71,81,91], heats=[26,34,42,50,58,66,74,82,90,100], times=[3000,3300,3600,3900,4200,4500,4800,5100,5400,5800], xp=[7,11,17,25,36,50,68,90,118,152];
const recipes:SmeltingRecipe[] = metals.map((metal,i)=>({id:`recipe.smithing.${metal}_ingot`,name:`${names[i]} Ingot`,unlockLevel:levels[i]!,inputs:[{item:`item.mining.${metal}_ore`,amount:2}],output:{item:`item.smithing.${metal}_ingot`,amount:1},heatRequirement:heats[i]!,unitTimeMs:times[i]!,warmupMs:times[i]!+40,smithingXp:xp[i]!,category:'smelting'}));
const alloys:[string,string,number,[string,number][],number][]=[
 ['hardened_iron','Hardened Iron',18,[['iron_ingot',2],['coal',1]],12],['cobalt_steel','Cobalt Steel',28,[['cobalt_ingot',1],['iron_ingot',1],['coal',1]],18],
 ['argentsteel','Argentsteel',38,[['argent_ingot',1],['cobalt_ingot',1],['coal',1]],26],['embersteel','Embersteel',48,[['emberite_ingot',1],['iron_ingot',1],['fluxstone',1]],38],
 ['frostbound_alloy','Frostbound Alloy',58,[['frostsilver_ingot',1],['argent_ingot',1],['fluxstone',1]],52],['stormsilver','Stormsilver',68,[['stormiron_ingot',1],['frostsilver_ingot',1],['fluxstone',1]],70],
 ['aethersteel','Aethersteel',78,[['aetherite_ingot',1],['runic_crystal',1],['fluxstone',1]],92],['umbralsteel','Umbralsteel',88,[['umbral_ingot',1],['stormiron_ingot',1],['aether_essence',1]],120],
 ['astral_alloy','Astral Alloy',98,[['astralite_ingot',1],['aetherite_ingot',1],['aether_essence',1],['fluxstone',1]],154],['worldforged_alloy','Worldforged Alloy',100,[['astral_alloy',2],['worldstone',2],['worldheart_shard',1]],200],
];
for(const [key,name,unlock,inputs,recipeXp] of alloys) recipes.push({id:`recipe.smithing.${key}`,name,unlockLevel:unlock,inputs:inputs.map(([item,amount])=>({item:`${item.endsWith('_ingot')||['astral_alloy'].includes(item)?'item.smithing':'item.mining'}.${item}` as ItemId,amount})),output:{item:`item.smithing.${key}`,amount:2},heatRequirement:Math.min(100,unlock+10),unitTimeMs:3600,warmupMs:3640,smithingXp:recipeXp,category:'alloy'});
export const SMELTING_RECIPES: Record<string,SmeltingRecipe> = Object.fromEntries(recipes.map(recipe=>[recipe.id,recipe]));
