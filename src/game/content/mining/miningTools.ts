import type { ItemId, MiningToolId } from '../../types/gameTypes';
export type MiningToolEffects = { primaryExtraPp?: number; byproductMultiplier?: number; deepCorePowerMultiplier?: number; gemCrystalMultiplier?: number; coreChanceMultiplier?: number; stage5RareMultiplier?: number };
export type MiningToolDefinition = { item: ItemId; name: string; power: number; speed: number; extraQuantityChance: number; equipLevel: number; icon: string; effect:string; effects: MiningToolEffects };
const rows = [
  ['worn',1,6,0,'None',{}], ['copper',5,8,.02,'Primary extra chance +2 pp',{primaryExtraPp:2}], ['iron',15,11,.04,'Primary extra chance +4 pp',{primaryExtraPp:4}],
  ['cobalt',25,14,.06,'By-product chance +5% mult',{byproductMultiplier:1.05}], ['argent',35,18,.08,'Deep/Core Power +5%',{deepCorePowerMultiplier:1.05}],
  ['emberite',45,22,.10,'Primary extra chance +7 pp',{primaryExtraPp:7}], ['frostsilver',55,27,.12,'Gem/Crystal chance +8% mult',{gemCrystalMultiplier:1.08}],
  ['stormiron',65,33,.14,'Deep/Core Power +10%',{deepCorePowerMultiplier:1.10}], ['aetherite',75,40,.16,'All by-product +10% mult',{byproductMultiplier:1.10}],
  ['umbral',85,48,.18,'Core-material chance +15% mult',{coreChanceMultiplier:1.15}], ['astralite',95,58,.20,'Stage-5 rare +15%; Primary +10 pp',{stage5RareMultiplier:1.15,primaryExtraPp:10}],
] as const;
export const MINING_TOOLS: Record<MiningToolId, MiningToolDefinition> = Object.fromEntries(rows.map(([metal,equipLevel,power,speed,effect,effects])=>{
 const key=metal==='worn'?'worn_pickaxe':`${metal}_pickaxe`; return [`item.mining.${key}`,{item:`item.mining.${key}`,name:`${metal==='worn'?'Worn':metal[0]!.toUpperCase()+metal.slice(1)} Pickaxe`,power,speed,extraQuantityChance:speed?Math.round(speed*100):0,equipLevel,icon:'pick',effect,effects}];
})) as Record<MiningToolId,MiningToolDefinition>;
