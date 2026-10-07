import { MINING_DEPOSITS } from '../../content/mining/miningDeposits';
import { MINING_STAGE_MODEL } from '../../content/mining/miningStages';
import { MINING_TOOLS } from '../../content/mining/miningTools';
import type { DepositId, GameEvent, ItemId, SaveState, SkillId } from '../../types/gameTypes';
import { getCoreMaterialChance, getDepositStageDensity, getMiningPower, getPrimaryExpectedQuantity, resolvePrimaryQuantity } from '../gameMath';

export type MiningHooks={rand:(state:SaveState)=>number;gain:(state:SaveState,item:ItemId,amount:number,events?:GameEvent[],source?:string)=>void;addXp:(state:SaveState,skill:SkillId,amount:number,events?:GameEvent[])=>void};
export function runtimeDeposit(s:SaveState,id:DepositId){const def=MINING_DEPOSITS[id];return s.mining.deposits[id] ??= {stageIndex:0,densityRemaining:def.baseDensity,cyclesCompleted:0,totalPrimary:0,totalStagesCompleted:0};}
export function syncMining(s:SaveState){const d=runtimeDeposit(s,s.mining.deposit);s.mining.stage=d.stageIndex;s.mining.density=d.densityRemaining;s.mining.cycles=d.cyclesCompleted;}
export function canMineDeposit(s:SaveState,id:DepositId){const next=MINING_DEPOSITS[id];if(!next||s.skills.Mining.level<next.unlockLevel||next.endgameGated)return false;const required=MINING_TOOLS[next.requiredTool as keyof typeof MINING_TOOLS],equipped=MINING_TOOLS[(s.equipped.miningTool ?? 'item.mining.worn_pickaxe') as keyof typeof MINING_TOOLS];return Boolean(required&&equipped&&equipped.power>=required.power);}
export function selectDeposit(s:SaveState,id:DepositId){const next=MINING_DEPOSITS[id];if(!next||!canMineDeposit(s,id))return false;if(s.mining.deposit===id)return true;if(s.activity==='mining')s.activity=null;s.mining.deposit=id;runtimeDeposit(s,id);s.mining.timer=0;syncMining(s);return true;}

export function miningHit(s:SaveState,events:GameEvent[],hooks:MiningHooks){
 const m=s.mining,id=m.deposit,deposit=MINING_DEPOSITS[id],runtime=runtimeDeposit(s,id),stageIndex=runtime.stageIndex,stage=MINING_STAGE_MODEL[stageIndex]!,tool=MINING_TOOLS[(s.equipped.miningTool ?? 'item.mining.worn_pickaxe') as keyof typeof MINING_TOOLS];
 const power=getMiningPower(tool.power,stageIndex>=3?(tool.effects.deepCorePowerMultiplier ?? 1):1);runtime.densityRemaining=Math.max (0,runtime.densityRemaining-power);m.strikes++;events.push({type:'mining-strike',depositId:id,stage:stageIndex,power,remaining:runtime.densityRemaining});
 if(runtime.densityRemaining>0){syncMining(s);return;}
 const extraChance=tool.extraQuantityChance+(tool.effects.primaryExtraPp ?? 0),primaryQuantity=resolvePrimaryQuantity(getPrimaryExpectedQuantity(stageIndex,id),extraChance,()=>hooks.rand(s));
 if(deposit.category==='Gem'&&deposit.gemPool?.length){const weights=deposit.gemStageWeights?.[stageIndex] ?? deposit.gemWeights ?? deposit.gemPool.map(()=>1);for(let n=0;n<primaryQuantity;n++){let roll=hooks.rand(s),item=deposit.gemPool[deposit.gemPool.length-1]!;for(let i=0;i<deposit.gemPool.length;i++){roll-=weights[i] ?? 0;if(roll<=0){item=deposit.gemPool[i]!;break;}}hooks.gain(s,item,1,events,`mining:${id}:gem-roll`);}runtime.totalPrimary+=primaryQuantity;}
 else{hooks.gain(s,deposit.primary,primaryQuantity,events,`mining:${id}`);runtime.totalPrimary+=primaryQuantity;}
 const xp=deposit.stageOneXp*stage.xpMultiplier;hooks.addXp(s,'Mining',xp,events);m.sessionOutputs[deposit.primary]=(m.sessionOutputs[deposit.primary] ?? 0)+primaryQuantity;m.sessionXp+=xp;
 const byproductMod=tool.effects.byproductMultiplier ?? 1;
 if(deposit.structuralItem&&deposit.structuralChance&&hooks.rand(s)<deposit.structuralChance*byproductMod)hooks.gain(s,deposit.structuralItem,1,events,`mining:${id}:rubble`);
 const gemChance=(deposit.gemBaseChance ?? 0)*stage.rareMultiplier*byproductMod*(tool.effects.gemCrystalMultiplier ?? 1)*(stageIndex===4?(tool.effects.stage5RareMultiplier ?? 1):1);
 if(deposit.category!=='Gem'&&deposit.gemPool?.length&&hooks.rand(s)<gemChance){const total=deposit.gemWeights?.reduce((a,b)=>a+b,0) ?? deposit.gemPool.length;let roll=hooks.rand(s)*total,index=0;for(;index<deposit.gemPool.length-1;index++){roll-=deposit.gemWeights?.[index] ?? 1;if(roll<0)break;}hooks.gain(s,deposit.gemPool[index]!,1,events,`mining:${id}:gem`);}
 if(deposit.dustBaseChance&&hooks.rand(s)<deposit.dustBaseChance*stage.rareMultiplier*byproductMod*(tool.effects.gemCrystalMultiplier ?? 1))hooks.gain(s,'item.mining.prismatic_dust',1,events,`mining:${id}:dust`);
 for(const drop of deposit.additionalDrops ?? []){if(drop.coreOnly&&stageIndex!==4)continue;const chance=drop.chance*(drop.stageScaled?stage.rareMultiplier:1)*byproductMod*(drop.item==='item.mining.astral_prism'?tool.effects.gemCrystalMultiplier ?? 1:tool.effects.coreChanceMultiplier ?? 1);if(hooks.rand(s)<chance)hooks.gain(s,drop.item,1,events,`mining:${id}:bonus`);}
 const coreChance=getCoreMaterialChance(deposit.coreBaseChance ?? 0,stageIndex,deposit.coreStageMultipliers ?? [],byproductMod*(tool.effects.coreChanceMultiplier ?? 1));if(deposit.coreItem&&hooks.rand(s)<coreChance)hooks.gain(s,deposit.coreItem,1,events,`mining:${id}:core`);
 runtime.totalStagesCompleted++;events.push({type:'stage-completed',depositId:id,stage:stageIndex});if(stageIndex===MINING_STAGE_MODEL.length-1){runtime.stageIndex=0;runtime.cyclesCompleted++;s.objectives.firstCycle=true;}else runtime.stageIndex++;runtime.densityRemaining=getDepositStageDensity(runtime.stageIndex,id);syncMining(s);
}
