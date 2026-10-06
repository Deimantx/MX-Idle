import type { DamageType, EnemyId, ItemId, SkillId, StatusType } from '../../types/gameTypes';
import { COMBAT_WORLD_SOURCE } from './combatWorldSource';
import { COMBAT_CLASS_MULTIPLIERS, PROVISIONAL_PHASE1_COMBAT_BUDGETS } from './combatTierBudgets';
import { DAMAGE_TYPES, RESISTANCE_PROFILES } from './resistanceProfiles';
import { BOSS_COMPONENTS, ELITE_COMPONENTS, UNIQUE_HOOK_IDS } from './combatLoot';

export { DAMAGE_TYPES, RESISTANCE_PROFILES };
export type Requirement = { type:'skillLevel';skill:SkillId;level:number } | {type:'defeatAll';targets:EnemyId[]} | {type:'defeat';target:EnemyId;count:number};
export type EnemyAction = { name:string;type:DamageType;multiplier:number;intervalMultiplier?:number;accuracyMultiplier?:number;hits?:number;separateHitRolls?:boolean;damageComponents?:Array<{type:DamageType;ratio:number}>;status?:{type:StatusType;magnitude:number;durationMs:number};resistanceDownTypes?:DamageType[];selfResistancePp?:number;selfResistanceActions?:number;selfResistanceTypes?:DamageType[];selfResistanceScope?:'Melee'|'Ranged'|'Magic'|'Melee/Ranged'|'all';healSelfPct?:number;penetrationPp?:number;dynamicTypeRule?:'sequenceElement'|'lowestPlayerElementResistance' };
export type EnemyLootDrop = {item:ItemId;chance:number;min:number;max:number;guaranteed?:boolean;firstKillOnly?:boolean;protected?:boolean};
export type EnemyPhase = {thresholdPct:number;sequence:readonly EnemyAction[]};
export type EnemyClass='Light'|'Normal'|'Heavy'|'Elite'|'Dungeon'|'Boss';
export type EnemyDefinition = {id:EnemyId;name:string;tier:number;rank:EnemyClass;combatClass:EnemyClass;kind:string;tags:string[];areaId:string;style:'Melee'|'Ranged'|'Magic';basicDamageType:DamageType;maxHp:number;accuracy:number;minHit:number;maxHit:number;intervalMs:number;evasion:number;evasions:{Melee:number;Ranged:number;Magic:number};resistanceProfile:string;resistances:Record<DamageType,number>;sequence:readonly EnemyAction[];phases?:readonly EnemyPhase[];xp:number;gold:number;loot:readonly EnemyLootDrop[];firstKillReward?:readonly EnemyLootDrop[];offering?:ItemId;unlockRequirements:readonly Requirement[];eliteComponent?:string;bossComponent?:string;uniqueHook?:string};
export type CombatAreaDefinition={id:string;name:string;tier:number;kind:'area'|'elite'|'dungeon';enemies:EnemyId[];unlockRequirements:Requirement[]};
export type CombatDungeonDefinition={id:string;name:string;tier:number;encounters:EnemyId[];bossId:EnemyId;unlockRequirements:Requirement[];bossComponent:ItemId;uniqueHook:string;completionReward?:number};

const AREA_NAMES=['Broken Road','Thornfen','Ironcliff Pass','Moonlit Barrows','Cinder Wastes','Frostbound Vale','Stormreach Heights','Aetherfall Expanse','Umbral Depths','Astral Verge'];
const DUNGEON_NAMES=['Ruined Watch','Drowned Burrow','Hollow Forge','Mooncrypt','Embervault','Frostspire','Tempest Bastion','Aetherglass Sanctum','Umbral Citadel','Astral Nexus'];
const slug=(value:string)=>value.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const damageTypes=[...DAMAGE_TYPES] as DamageType[];
const familyId=(tier:number,family:string)=>`combat.loot.t${tier}_${family==='Beast'?'beast_trophy':family==='War'?'war_mark':'arcane_remnant'}` as ItemId;
const thresholdFrom=(condition:string)=>Math.max(0,...(condition.match(/[0-9]+/g)??[]).map(Number));
function actionFrom(name:string,text:string,fallback:DamageType):EnemyAction {
  const escaped=name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const expression=new RegExp(`(?:^|; )${escaped} = ([\\s\\S]*?)(?=; [A-Z][\\wâ€™' -]+ = |$)`);
  const detail=text.match(expression)?.[1]??'';
  const multiHit=detail.match(/([2-9])\s*×\s*([0-9]+(?:\.[0-9]+)?)×/);const multiplier=Number(multiHit?.[2]??detail.match(/([0-9]+(?:\.[0-9]+)?)×/)?.[1]??1);
  const primary=(detail.match(/×\s*(Slash|Stab|Crush|Pierce|Puncture|Air|Fire|Water|Earth)/)?.[1]??name.match(/\b(Slash|Stab|Crush|Pierce|Puncture|Air|Fire|Water|Earth)\b/)?.[1]??fallback) as DamageType;
  const components:Array<{type:DamageType;ratio:number}>=[{type:primary,ratio:1}];
  for(const hit of detail.matchAll(/\+\s*([0-9]+(?:\.[0-9]+)?)×\s*(Slash|Stab|Crush|Pierce|Puncture|Air|Fire|Water|Earth)/g)) components.push({type:hit[2] as DamageType,ratio:Number(hit[1])});
  let status:EnemyAction['status'];
  const duration=(detail.match(/([0-9]+(?:\.[0-9]+)?)s/)?.[1]);
  const dot=detail.match(/(Bleed|Burn|Poison)\s*([0-9]+)%/);
  if(dot)status={type:dot[1] as StatusType,magnitude:Number(dot[2])/100,durationMs:Number(duration??6)*1000};
  else if(/Stun/.test(detail))status={type:'Stun',magnitude:1,durationMs:Number(duration??1)*1000};
  else if(/Chill/.test(detail))status={type:'Chill',magnitude:Number(detail.match(/Chill\s*([0-9]+)%/)?.[1]??0)/100,durationMs:Number(duration??5)*1000};
  else if(/Accuracy Down/.test(detail))status={type:'AccuracyDown',magnitude:Number(detail.match(/Accuracy Down\s*([0-9]+)%/)?.[1]??0)/100,durationMs:Number(duration??5)*1000};
  else if(/Evasion Down/.test(detail))status={type:'EvasionDown',magnitude:Number(detail.match(/Evasion Down\s*([0-9]+)%/)?.[1]??0)/100,durationMs:Number(duration??5)*1000};
  else if(/Resistance/.test(detail)&&/pp/.test(detail))status={type:'ResistanceDown',magnitude:Math.abs(Number(detail.match(/([-+][0-9]+)\s*pp/)?.[1]??0)),durationMs:Number(duration??8)*1000};
  const selfResistancePp=Number(detail.match(/self\s*\+([0-9]+)\s*pp/)?.[1]??0)||undefined;const selfResistanceScope=detail.match(/self[^;]*all .*?Resistance/i)?'all':detail.match(/self[^;]*Melee\/Ranged Resistance/i)?'Melee/Ranged':detail.match(/self[^;]*Melee Resistance/i)?'Melee':detail.match(/self[^;]*Ranged Resistance/i)?'Ranged':detail.match(/self[^;]*Magic Resistance/i)?'Magic':undefined;const selfResistanceTypes=selfResistancePp?damageTypes.filter(t=>new RegExp(`\\b${t}\\b`).test(detail)):undefined;const healSelfPct=Number(detail.match(/heal\s*([0-9]+)%/)?.[1]??0)||undefined;const dynamicTypeRule=/lowest .*?Resistance|lowest current Magic Resistance|lowest elemental Resistance/i.test(detail)?'lowestPlayerElementResistance':/sequence element|matching element/i.test(detail)?'sequenceElement':undefined;
  let resistanceDownTypes=status?.type==='ResistanceDown'?damageTypes.filter(t=>new RegExp(`\\b${t}\\b`).test(detail)):undefined;
  if(status?.type==='ResistanceDown'&&/Magic Resistance/i.test(detail))resistanceDownTypes=damageTypes.filter(t=>['Air','Fire','Water','Earth'].includes(t));
  const accuracyMultiplier=detail.match(/\+([0-9]+)% Accuracy/) ? 1+Number(detail.match(/\+([0-9]+)% Accuracy/)?.[1])/100 : undefined;
  const hits=Number(multiHit?.[1]??detail.match(/([2-9]) hits?/)?.[1]??1);const penetrationPp=Number(detail.match(/\+([0-9]+) pp [^;]*Penetration/i)?.[1]??0)||undefined;
  return {name,type:primary,multiplier,...(detail.match(/([0-9]+(?:\.[0-9]+)?)× time/)?{intervalMultiplier:Number(detail.match(/([0-9]+(?:\.[0-9]+)?)× time/)?.[1])}:{}),...(accuracyMultiplier?{accuracyMultiplier}:{}),...(hits>1?{hits,separateHitRolls:true}:{}),...(components.length>1?{damageComponents:components}:{}),...(status?{status}:{}),...(resistanceDownTypes?.length?{resistanceDownTypes}:{}),...(selfResistancePp?{selfResistancePp,selfResistanceActions:Number(detail.match(/next\s*([0-9]+) actions/)?.[1]??1),selfResistanceTypes,selfResistanceScope}:{}) ,...(healSelfPct?{healSelfPct}:{}),...(penetrationPp?{penetrationPp}:{}),...(dynamicTypeRule?{dynamicTypeRule}:{})};
}
function sequence(names:string,fallback:DamageType,actions:string):EnemyAction[]{return names.split('|').filter(x=>x&&x!=='repeat').map(name=>actionFrom(name.trim(),actions,fallback));}
const allEnemies:EnemyDefinition[]=[];
const normalAreaIds:string[][]=[];
const eliteIds:string[]=[];
const dungeonOnlyIds:string[][]=[];
const bossIds:string[]=[];
const dungeons:CombatDungeonDefinition[]=[];
for(const row of COMBAT_WORLD_SOURCE as readonly any[]){
  const t=row.tier, areaId=t===1?'broken-road':`t${t}-${slug(AREA_NAMES[t-1]!)}`, eliteId=t===1?'ironjaw-boar':`t${t}-${slug(row.elite)}`, bossId=t===1?'captain-veyr':`t${t}-${slug(row.bossName)}`;
  const data=PROVISIONAL_PHASE1_COMBAT_BUDGETS[t-1]!, normals:EnemyId[]=[], dungeonEnemies:EnemyId[]=[];
  const make=(entry:any,cls:EnemyClass,id:string,encounterArea=areaId):EnemyDefinition=>{
    const profile=RESISTANCE_PROFILES[entry.profile]??RESISTANCE_PROFILES['M-C']!,resistances={...profile};
    for(const match of entry.overrides.matchAll(/(Slash|Stab|Crush|Pierce|Puncture|Air|Fire|Water|Earth)\s*([+-][0-9]+)/g))resistances[match[1] as DamageType]=Number(match[2]);
    const magical=entry.overrides.match(/(?:All Magic Res(?: treated as)?|Magic resistances?)\s*\+?([0-9]+)/i);
    if(magical)for(const type of ['Air','Fire','Water','Earth'] as DamageType[])resistances[type]=Number(magical[1]);
    const mod=COMBAT_CLASS_MULTIPLIERS[cls],rankedId=id;
    const main=sequence(entry.sequence,entry.damageType as DamageType,row.actions[entry.name]??'');
    const offering=familyId(t,entry.offering);
    const maxHit=Math.max(1,Math.round(data.maxHit*mod.damage));return {id:rankedId,name:entry.name,tier:t,rank:cls,combatClass:cls,kind:entry.tags[0]??'Enemy',tags:[...entry.tags],areaId:encounterArea,style:entry.style,basicDamageType:entry.damageType,maxHp:Math.max(1,Math.round(data.hp*mod.hp)),accuracy:Math.round(data.accuracy*mod.accuracy),minHit:Math.ceil(maxHit*.72),maxHit,intervalMs:3000,evasion:data.evasion,evasions:{Melee:data.evasion,Ranged:data.evasion,Magic:data.evasion},resistanceProfile:entry.profile,resistances,sequence:main,xp:Math.round(data.hp*.32),gold:Math.round((t===1?8:t*4)*mod.damage),loot:[{item:offering,chance:.3,min:1,max:1},...(id==='road-wolf'?[{item:'combat.loot.beast_trophy' as ItemId,chance:1,min:1,max:1,guaranteed:true}]:[])],offering,unlockRequirements:[]};
  };
  row.roster.forEach((entry:any,index:number)=>{
    if(index<4){const id=t===1?['road-wolf','dust-rat','ragged-poacher','hedge-spark'][index]!:`t${t}-${slug(entry.name)}`;const cls=entry.combatClass as EnemyClass;allEnemies.push(make(entry,cls,id));normals.push(id);}
    else if(index===4){const id=eliteId,definition=make(entry,'Elite',id);definition.firstKillReward=[{item:ELITE_COMPONENTS[t-1]!.id,chance:1,min:1,max:1,guaranteed:true,firstKillOnly:true,protected:true}];definition.eliteComponent=ELITE_COMPONENTS[t-1]!.name;definition.unlockRequirements=[{type:'defeatAll',targets:normals}];allEnemies.push(definition);eliteIds.push(id);}
    else {const id=`t${t}-${slug(entry.name)}`;allEnemies.push(make(entry,'Dungeon',id,`t${t}-${slug(DUNGEON_NAMES[t-1]!)}`));dungeonEnemies.push(id);}
  });
  const bossEntry:{name:string;combatClass:string;style:'Melee'|'Ranged'|'Magic';damageType:DamageType;profile:string;overrides:string}={name:row.bossName,combatClass:'Boss',style:row.bossStyle,damageType:row.bossDamageType,profile:row.bossProfile,overrides:row.bossOverrides};
  const bossSequence=sequence(row.bossSequence,bossEntry.damageType,row.bossActions);
  const boss=make({...bossEntry,sequence:row.bossSequence,tags:['Boss','Dungeon']},'Boss',bossId,`t${t}-${slug(DUNGEON_NAMES[t-1]!)}`);boss.sequence=bossSequence;boss.bossComponent=BOSS_COMPONENTS[t-1]!.name;boss.uniqueHook=UNIQUE_HOOK_IDS[t-1]!;boss.firstKillReward=[{item:BOSS_COMPONENTS[t-1]!.id,chance:1,min:1,max:1,guaranteed:true,firstKillOnly:true,protected:true}];
  const phaseRows=(row.phases as any[]).slice(1).filter(p=>thresholdFrom(p.condition)>0);boss.phases=phaseRows.map(p=>({thresholdPct:thresholdFrom(p.condition),sequence:sequence(p.sequence,bossEntry.damageType,row.bossActions)}));
  allEnemies.push(boss);bossIds.push(bossId);normalAreaIds.push(normals);dungeonOnlyIds.push(dungeonEnemies);
  dungeons.push({id:`t${t}-${slug(DUNGEON_NAMES[t-1]!)}`,name:DUNGEON_NAMES[t-1]!,tier:t,encounters:[...dungeonEnemies,eliteId,bossId],bossId,unlockRequirements:[],bossComponent:BOSS_COMPONENTS[t-1]!.id,uniqueHook:UNIQUE_HOOK_IDS[t-1]!});
}
export const ENEMIES:Record<EnemyId,EnemyDefinition>=Object.fromEntries(allEnemies.map(e=>[e.id,e])) as Record<EnemyId,EnemyDefinition>;
export const NORMAL_ENEMIES=normalAreaIds[0]!;
export const COMBAT_AREAS:Record<string,CombatAreaDefinition>=Object.fromEntries(AREA_NAMES.flatMap((name,i)=>{const tier=i+1,ids=normalAreaIds[i]!,elite=eliteIds[i]!,dungeon=dungeons[i]!;const area={id:tier===1?'broken-road':`t${tier}-${slug(name)}`,name,tier,kind:'area' as const,enemies:ids,unlockRequirements:[]};const eliteArea={id:`t${tier}-${slug(elite.replace(/^t\d+-/,''))}-elite`,name:`${ENEMIES[elite]!.name} Â· Elite`,tier,kind:'elite' as const,enemies:[elite],unlockRequirements:[{type:'defeatAll' as const,targets:ids}]};const dungeonArea={id:dungeon.id,name:dungeon.name,tier,kind:'dungeon' as const,enemies:dungeon.encounters,unlockRequirements:[]};return [[area.id,area],[eliteArea.id,eliteArea],[dungeonArea.id,dungeonArea]];}));
export const DUNGEONS:Record<string,CombatDungeonDefinition>=Object.fromEntries(dungeons.map(d=>[d.id,d]));
export function activeSequence(enemy:EnemyDefinition,hp=enemy.maxHp){const phase=activePhaseIndex(enemy,hp);return phase>=0?enemy.phases![phase]!.sequence:enemy.sequence;}
export function activePhaseIndex(enemy:EnemyDefinition,hp=enemy.maxHp){const phases=enemy.phases??[];return phases.map((phase,index)=>({phase,index})).filter(({phase})=>hp/enemy.maxHp*100<=phase.thresholdPct).sort((a,b)=>a.phase.thresholdPct-b.phase.thresholdPct)[0]?.index??-1;}
export function validateCombatContent(enemies:Record<string,EnemyDefinition>,areas:Record<string,CombatAreaDefinition>){const errors:string[]=[],ids=new Set<string>();for(const[key,enemy]of Object.entries(enemies)){if(ids.has(enemy.id)||key!==enemy.id)errors.push(`Duplicate or mismatched enemy ID: ${key}`);ids.add(enemy.id);if(!areas[enemy.areaId])errors.push(`${enemy.id} references missing area ${enemy.areaId}`);if(!enemy.sequence.length||enemy.sequence.some(a=>!DAMAGE_TYPES.includes(a.type)))errors.push(`${enemy.id} needs valid sequence actions`);if(DAMAGE_TYPES.some(t=>!Number.isFinite(enemy.resistances[t])))errors.push(`${enemy.id} is missing resistance values`);if(!enemy.tags.length)errors.push(`${enemy.id} is missing tags`);for(const d of enemy.loot)if(!Number.isFinite(d.chance)||d.chance<0||d.chance>1)errors.push(`${enemy.id} has invalid loot`);}for(const area of Object.values(areas))for(const id of area.enemies)if(!enemies[id])errors.push(`${area.id} references missing enemy ${id}`);if(Object.values(areas).filter(a=>a.kind==='area').length!==10)errors.push('Expected 10 normal combat areas');if(Object.keys(enemies).length!==80)errors.push(`Expected 80 enemies, found ${Object.keys(enemies).length}`);if(dungeons.length!==10||dungeons.some(d=>d.encounters.length!==4))errors.push('Expected ten four-encounter dungeons');return errors;}


