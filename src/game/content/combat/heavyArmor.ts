export type HeavyArmorId=`combat.armor.heavy.${string}`;
import type { DamageType } from '../../types/gameTypes';
export type HeavyArmorDefinition={id:HeavyArmorId;name:string;slot:'head'|'armor'|'hands'|'feet';smithingLevel:number;defenceLevel:number;evasions:{Melee:number;Ranged:number;Magic:number};resistances:Record<DamageType,number>};
const metals=['copper','iron','cobalt','argent','emberite','frostsilver','stormiron','aetherite','umbral','astralite'];
const names=['Copper','Iron','Cobalt','Argent','Emberite','Frostsilver','Stormiron','Aetherite','Umbral','Astralite'];
const levels=[1,15,25,35,45,55,65,75,85,95], defenceLevels=[1,15,25,35,45,55,65,75,85,95];
// Authored as Slash/Stab/Crush, Pierce/Puncture, and elemental resistance.
const table=[
 [[2,2,0],[4,6,0],[2,2,0],[2,2,0]],[[2,3,0],[6,8,1],[2,2,0],[2,2,0]],[[3,4,0],[7,8,1],[2,3,0],[2,3,0]],[[3,4,0],[9,10,2],[2,3,0],[2,3,0]],[[4,4,0],[8,12,2],[3,3,0],[3,3,0]],[[4,5,1],[10,12,2],[3,4,0],[3,4,0]],[[4,6,1],[12,14,1],[3,4,1],[3,4,1]],[[5,6,1],[11,16,2],[4,4,1],[4,4,1]],[[5,7,1],[14,17,3],[4,5,1],[4,5,1]],[[6,8,2],[16,18,4],[4,6,1],[4,6,1]],
] as const;
const evasions = [
 [[5,6,2],[11,16,4],[4,4,1],[4,4,1]], [[6,8,2],[16,18,4],[4,6,2],[4,6,2]], [[7,9,2],[18,23,6],[6,7,2],[6,7,2]], [[9,11,3],[22,29,8],[7,8,2],[7,8,2]], [[11,14,4],[27,34,8],[8,10,3],[8,10,3]], [[13,16,4],[31,40,12],[10,12,3],[10,12,3]], [[15,19,5],[38,47,14],[11,14,4],[11,14,4]], [[17,22,7],[44,55,16],[13,16,5],[13,16,5]], [[20,25,8],[50,62,20],[15,19,6],[15,19,6]], [[23,28,10],[57,72,24],[17,21,7],[17,21,7]],
] as const;
const damageTypes:DamageType[]=['Slash','Stab','Crush','Pierce','Puncture','Air','Fire','Water','Earth'];
const defs:HeavyArmorDefinition[]=[];
for(let i=0;i<metals.length;i++)for(const [suffix,label,slot,index] of [['helm','Helm','head',0],['armor','Plate Armor','armor',1],['gauntlets','Gauntlets','hands',2],['greaves','Greaves','feet',3]] as const){const res=table[i]![index]!, eva=evasions[i]![index]!;const resistances=Object.fromEntries(damageTypes.map(type=>[type,type==='Slash'||type==='Stab'||type==='Crush'?res[0]:type==='Pierce'||type==='Puncture'?res[1]:res[2]])) as Record<DamageType,number>;defs.push({id:`combat.armor.heavy.${metals[i]}_${suffix}`,name:`${names[i]} ${label}`,slot,smithingLevel:levels[i]!,defenceLevel:defenceLevels[i]!,evasions:{Melee:eva[0],Ranged:eva[1],Magic:eva[2]},resistances});}
export const HEAVY_ARMOR:Record<HeavyArmorId,HeavyArmorDefinition>=Object.fromEntries(defs.map(x=>[x.id,x])) as Record<HeavyArmorId,HeavyArmorDefinition>;
