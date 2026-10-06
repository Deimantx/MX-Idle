export type OffhandId=`combat.offhand.melee.${string}`;
import type { DamageType } from '../../types/gameTypes';
export type OffhandDefinition={id:OffhandId;name:string;style:'Melee';offhandType:'shield';smithingLevel:number;resistances:Record<DamageType,number>;attackIntervalPenaltyMs:number;meleePower:number;rangedPower:number};
const metals=['copper','iron','cobalt','argent','emberite','frostsilver','stormiron','aetherite','umbral','astralite'],names=['Copper','Iron','Cobalt','Argent','Emberite','Frostsilver','Stormiron','Aetherite','Umbral','Astralite'];
const levels=[5,15,25,35,45,55,65,75,85,95],meleeRes=[4,5,6,7,8,9,10,11,12,14],rangedRes=[3,3,4,4,5,6,7,8,9,10],meleePower=[8,10,12,14,17,20,23,26,30,35],rangedPower=[6,7,8,10,12,14,16,18,21,24];
const damageTypes:DamageType[]=['Slash','Stab','Crush','Pierce','Puncture','Air','Fire','Water','Earth'];
const rows=metals.map((m,i)=>{const id=`combat.offhand.melee.${m}_shield` as OffhandId;const resistances=Object.fromEntries(damageTypes.map(type=>[type,type==='Slash'||type==='Stab'||type==='Crush'?meleeRes[i]!:type==='Pierce'||type==='Puncture'?rangedRes[i]!:0])) as Record<DamageType,number>;return[id,{id,name:`${names[i]} Shield`,style:'Melee' as const,offhandType:'shield' as const,smithingLevel:levels[i]!,resistances,attackIntervalPenaltyMs:100,meleePower:meleePower[i]!,rangedPower:rangedPower[i]!}]});
export const OFFHANDS:Record<OffhandId,OffhandDefinition>=Object.fromEntries(rows) as Record<OffhandId,OffhandDefinition>;
