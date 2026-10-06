import type { ForgingRecipeId, ItemId } from '../../types/gameTypes';
export type ForgeCategory='weapons'|'armor'|'offhand'|'tools';
export type ForgingRecipe={id:ForgingRecipeId;name:string;unlockLevel:number;inputs:{item:ItemId;amount:number;preservable?:boolean}[];output:ItemId;workMultiplier:number;category:ForgeCategory;slot:string;family:string;workBase:number;xpPerStrike:number;dependencyBridge?:{missingCanonicalDependency:string;replacementPhase:string}};
const metals=['copper','iron','cobalt','argent','emberite','frostsilver','stormiron','aetherite','umbral','astralite'];
const names=['Copper','Iron','Cobalt','Argent','Emberite','Frostsilver','Stormiron','Aetherite','Umbral','Astralite'];
const levels=[1,11,21,31,41,51,61,71,81,91];
const recipes:ForgingRecipe[]=[];
const gear:[string,string,ForgeCategory,string,string,number,number][]=[
 ['sword','Sword','weapons','Weapon','Sword',4,1.10],['battle_axe','Battle Axe','weapons','Weapon','Battle Axe',4,1.15],['mace','Mace','weapons','Weapon','Mace',4,1.10],['shield','Shield','offhand','Off-hand','Shield',5,1.25],
 ['helm','Helm','armor','Head','Head',3,.90],['armor','Heavy Armor','armor','Armor','Body',12,3.15],['gauntlets','Gauntlets','armor','Hands','Hands',2,.70],['greaves','Greaves','armor','Feet','Feet',2,.75],
];
for(let i=0;i<metals.length;i++){
 const metal=metals[i]!,label=names[i]!,ingot=`item.smithing.${metal}_ingot` as ItemId,baseLevel=i===0?5:levels[i]!+4;
 for(const [key,title,category,slot,family,amount,workMultiplier] of gear){const oldCopper=metal==='copper';const outputKey=key==='armor'?'armor':key;const output=`combat.${category==='weapons'?'weapon.melee':category==='armor'?'armor.heavy':'offhand.melee'}.${metal}_${outputKey}` as ItemId;const name=key==='armor'?`${label} Plate Armor`:key==='helm'?`${label} Helm`:key==='gauntlets'?`${label} Gauntlets`:key==='greaves'?`${label} Greaves`:key==='shield'?`${label} Shield`:`${label} ${title}`;const unlock=oldCopper&&key==='sword'?1:oldCopper?5:baseLevel;
  recipes.push({id:`recipe.smithing.${metal}_${key}`,name,unlockLevel:unlock,inputs:[{item:ingot,amount,preservable:true}],output,workMultiplier,category,slot,family,workBase:28,xpPerStrike:2+Math.floor(i*1.7)});
 }
 const prevPick=i===0?'item.mining.worn_pickaxe':`item.mining.${metals[i-1]}_pickaxe` as ItemId, pick=`item.mining.${metal}_pickaxe` as ItemId, prevHammer=i===0?'item.smithing.worn_smithing_hammer':`item.smithing.${metals[i-1]}_smithing_hammer` as ItemId, hammer=`item.smithing.${metal}_smithing_hammer` as ItemId;
 recipes.push({id:`recipe.smithing.${metal}_pickaxe`,name:`${label} Pickaxe`,unlockLevel:i===0?5:levels[i]!+4,inputs:[{item:prevPick,amount:1},{item:ingot,amount:i===0?3:2,preservable:true}],output:pick,workMultiplier:1.45,category:'tools',slot:'Pickaxe',family:'Pickaxe',workBase:28,xpPerStrike:2+Math.floor(i*1.7),dependencyBridge:{missingCanonicalDependency:'Utility Blank',replacementPhase:'Woodcutting / Fletching'}});
 recipes.push({id:`recipe.smithing.${metal}_smithing_hammer`,name:`${label} Smithing Hammer`,unlockLevel:i===0?5:levels[i]!+4,inputs:[{item:prevHammer,amount:1},{item:ingot,amount:2,preservable:true}],output:hammer,workMultiplier:1.35,category:'tools',slot:'Hammer',family:'Smithing Hammer',workBase:28,xpPerStrike:2+Math.floor(i*1.7),dependencyBridge:{missingCanonicalDependency:'Utility Blank',replacementPhase:'Woodcutting / Fletching'}});
}
export const FORGING_RECIPES:Record<ForgingRecipeId,ForgingRecipe>=Object.fromEntries(recipes.map(r=>[r.id,r])) as Record<ForgingRecipeId,ForgingRecipe>;
