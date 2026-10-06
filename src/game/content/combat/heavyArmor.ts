export type HeavyArmorId=`combat.armor.heavy.${string}`;
import type { DamageType } from '../../types/gameTypes';
export type HeavyArmorDefinition={id:HeavyArmorId;name:string;slot:'head'|'armor'|'hands'|'feet';smithingLevel:number;evasion:number;resistances:Record<DamageType,number>};
const metals=['copper','iron','cobalt','argent','emberite','frostsilver','stormiron','aetherite','umbral','astralite'];
const names=['Copper','Iron','Cobalt','Argent','Emberite','Frostsilver','Stormiron','Aetherite','Umbral','Astralite'];
const levels=[5,15,25,35,45,55,65,75,85,95];
// Authored as Slash/Stab/Crush, Pierce/Puncture, and elemental resistance.
const table=[
 [[2,2,0],[4,6,0],[2,2,0],[2,2,0]],[[2,3,0],[6,8,1],[2,2,0],[2,2,0]],[[3,4,0],[7,8,1],[2,3,0],[2,3,0]],[[3,4,0],[9,10,2],[2,3,0],[2,3,0]],[[4,4,0],[8,12,2],[3,3,0],[3,3,0]],[[4,5,1],[10,12,2],[3,4,0],[3,4,0]],[[4,6,1],[12,14,1],[3,4,1],[3,4,1]],[[5,6,1],[11,16,2],[4,4,1],[4,4,1]],[[5,7,1],[14,17,3],[4,5,1],[4,5,1]],[[6,8,2],[16,18,4],[4,6,1],[4,6,1]],
] as const;
const damageTypes:DamageType[]=['Slash','Stab','Crush','Pierce','Puncture','Air','Fire','Water','Earth'];
const defs:HeavyArmorDefinition[]=[];
for(let i=0;i<metals.length;i++)for(const [suffix,label,slot,index] of [['helm','Helm','head',0],['armor','Plate Armor','armor',1],['gauntlets','Gauntlets','hands',2],['greaves','Greaves','feet',3]] as const){const res=table[i]![index]!;const resistances=Object.fromEntries(damageTypes.map(type=>[type,type==='Slash'||type==='Stab'||type==='Crush'?res[0]:type==='Pierce'||type==='Puncture'?res[1]:res[2]])) as Record<DamageType,number>;defs.push({id:`combat.armor.heavy.${metals[i]}_${suffix}`,name:`${names[i]} ${label}`,slot,smithingLevel:levels[i]!,evasion:0,resistances});}
export const HEAVY_ARMOR:Record<HeavyArmorId,HeavyArmorDefinition>=Object.fromEntries(defs.map(x=>[x.id,x])) as Record<HeavyArmorId,HeavyArmorDefinition>;
