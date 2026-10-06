import type { DamageType } from '../../types/gameTypes';
export type MeleeWeaponId=`combat.weapon.melee.${string}`;
export type WeaponStance = { id: string; name: string; damageType: DamageType; accuracyMultiplier?: number; maxHitMultiplier?: number; penetrationPp?: number };
export type MeleeWeaponDefinition={id:MeleeWeaponId;name:string;power:number;accuracyBonus:number;intervalMs:number;attackLevel:number;style:DamageType;handedness:'1H'|'2H';allowedOffhandTypes?:readonly string[];defaultStance:string;stances:readonly WeaponStance[];critRateBonus:number;critDamageBonus:number;penetrationType?:DamageType;penetrationPp?:number;special:{name:string;stamina:number;multiplier:number;type:DamageType;damageComponents?:Array<{type:DamageType;multiplier:number}>;accuracyBonus:number;executeBonus?:number;resistanceDownPp?:number}};
const metals=['copper','iron','cobalt','argent','emberite','frostsilver','stormiron','aetherite','umbral','astralite'];
const names=['Copper','Iron','Cobalt','Argent','Emberite','Frostsilver','Stormiron','Aetherite','Umbral','Astralite'];
const levels=[1,15,25,35,45,55,65,75,85,95];
const power=[18,24,31,39,48,58,69,81,94,108], swordAcc=[84,105,131,163,200,242,289,341,399,462], axePower=[21,28,36,45,56,67,80,94,109,125], axeAcc=[72,90,112,140,171,207,248,292,342,396], macePower=[19,25,33,41,51,61,73,86,100,114], maceAcc=[77,96,120,149,182,221,264,312,365,422], pen=[3,3,4,4,5,5,6,6,7,8];
const definitions:MeleeWeaponDefinition[]=[];
for(let i=0;i<metals.length;i++){
 const metal=metals[i]!,label=names[i]!;
 definitions.push({id:`combat.weapon.melee.${metal}_sword`,name:`${label} Sword`,power:power[i]!,accuracyBonus:swordAcc[i]!,intervalMs:2400,attackLevel:levels[i]!,style:'Slash',handedness:'1H',allowedOffhandTypes:['shield'],defaultStance:'slash',stances:[{id:'slash',name:'Slash',damageType:'Slash'},{id:'stab',name:'Stab',damageType:'Stab'}],critRateBonus:.01,critDamageBonus:0,special:{name:'Precision Lunge',stamina:35,multiplier:1.35,type:'Stab',accuracyBonus:.25}});
 definitions.push({id:`combat.weapon.melee.${metal}_battle_axe`,name:`${label} Battle Axe`,power:axePower[i]!,accuracyBonus:axeAcc[i]!,intervalMs:2800,attackLevel:i===0?5:levels[i]!,style:'Slash',handedness:'1H',allowedOffhandTypes:['shield'],defaultStance:'slash',stances:[{id:'slash',name:'Slash',damageType:'Slash'}],critRateBonus:0,critDamageBonus:.1,special:{name:"Executioner's Chop",stamina:50,multiplier:1.65,type:'Slash',accuracyBonus:0,executeBonus:.25}});
 definitions.push({id:`combat.weapon.melee.${metal}_mace`,name:`${label} Mace`,power:macePower[i]!,accuracyBonus:maceAcc[i]!,intervalMs:2700,attackLevel:i===0?5:levels[i]!,style:'Crush',handedness:'1H',allowedOffhandTypes:['shield'],defaultStance:'crush',stances:[{id:'crush',name:'Crush',damageType:'Crush'}],critRateBonus:0,critDamageBonus:0,penetrationType:'Crush',penetrationPp:pen[i]!,special:{name:'Concussive Blow',stamina:45,multiplier:1.35,type:'Crush',accuracyBonus:0,resistanceDownPp:15}});
}
export const MELEE_WEAPONS:Record<MeleeWeaponId,MeleeWeaponDefinition>=Object.fromEntries(definitions.map(x=>[x.id,x])) as Record<MeleeWeaponId,MeleeWeaponDefinition>;
