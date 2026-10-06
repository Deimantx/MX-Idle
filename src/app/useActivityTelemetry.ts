import { useMemo, useState } from 'react';
import type { GameEvent, ItemId, SaveState, SkillId } from '../game/types/gameTypes';
type Sample = { key: string; elapsedMs: number; skills: Record<SkillId, number>; outputs: Partial<Record<ItemId, number>>; kills: number; forged: number };
const blank = (key = ''): Sample => ({ key, elapsedMs: 0, skills: { Mining: 0, Smithing: 0, Fishing: 0, Cooking: 0, Attack: 0, Defence: 0, Hitpoints: 0 }, outputs: {}, kills: 0, forged: 0 });
export function activitySetupKey(s: SaveState) { return s.activity === 'mining' ? `mining:${s.mining.deposit}:${s.equipped.miningTool}` : s.activity === 'smelting' ? `smithing:smelt:${s.smithing.smeltRecipe}` : s.activity === 'forging' ? `smithing:forge:${s.smithing.recipe}:${s.equipped.smithingHammer}` : s.activity === 'fishing' ? `fishing:${s.fishing.spot}:${s.fishing.rod}:${s.fishing.bait}:${s.fishing.tackle}` : s.activity === 'cooking' ? `cooking:${s.cooking.recipe}` : s.activity === 'combat' ? `combat:${s.combat.targetId}:${s.equipped.weapon}:${s.equipped.offhand}` : ''; }
export function useActivityTelemetry() {
  const [sample, setSample] = useState<Sample>(blank);
  const record = (before: SaveState, after: SaveState, events: GameEvent[], elapsedMs: number) => {
    const key = activitySetupKey(before), nextKey = activitySetupKey(after);
    if (!before.activity) { if (nextKey) setSample((old) => old.key === nextKey ? old : blank(nextKey)); return; }
    if (nextKey && nextKey !== key) { setSample(blank(nextKey)); return; }
    setSample((old) => { const base=old.key===key?old:blank(key),skills={...base.skills},outputs={...base.outputs};let forged=0,kills=0;
      for(const event of events){if(event.type==='xp-gained')skills[event.skill]+=event.amount;if(event.type==='item-gained'){outputs[event.item]=(outputs[event.item]??0)+event.amount;if(event.source==='forging')forged+=event.amount;}if(event.type==='enemy-killed')kills++;}
      return {...base,elapsedMs:base.elapsedMs+elapsedMs,skills,outputs,kills:base.kills+kills,forged:base.forged+forged}; });
  };
  const metrics=useMemo(()=>{const perHour=(n:number)=>sample.elapsedMs>=8000?n*3_600_000/sample.elapsedMs:0;const skills=Object.fromEntries((['Mining','Smithing','Fishing','Cooking','Attack','Defence','Hitpoints'] as const).map(id=>[id,{sessionXp:sample.skills[id],xpHour:perHour(sample.skills[id])}]));const outputs=Object.fromEntries(Object.entries(sample.outputs).map(([id,n])=>[id,perHour(n??0)])) as Partial<Record<ItemId,number>>;return {...skills,key:sample.key,activeMs:sample.elapsedMs,outputs,killsHour:perHour(sample.kills),forged:sample.forged} as Record<SkillId,{sessionXp:number;xpHour:number}> & {key:string;activeMs:number;outputs:Partial<Record<ItemId,number>>;killsHour:number;forged:number};},[sample]);
  return {record,metrics};
}
