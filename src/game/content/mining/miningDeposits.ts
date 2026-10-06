import type { DepositId, ItemId } from '../../types/gameTypes';

export type MiningDepositDefinition = {
  id: DepositId; name: string; tier: number; category: 'Ore' | 'Quarry' | 'Catalyst' | 'Gem' | 'Essence' | 'Deep-Core';
  primary: ItemId; resourceName: string; baseQuantity: number; baseDensity: number; strikeMs: number; stageOneXp: number; unlockLevel: number; requiredTool: ItemId;
  structuralChance?: number; structuralItem?: ItemId; gemBaseChance?: number; gemPool?: readonly ItemId[]; gemWeights?: readonly number[];
  coreBaseChance?: number; coreStageMultipliers?: readonly number[]; coreItem?: ItemId;
  gemStageWeights?: readonly (readonly number[])[]; dustBaseChance?: number; additionalDrops?: readonly {item:ItemId;chance:number;stageScaled?:boolean;coreOnly?:boolean}[]; endgameGated?:boolean;
};

const metals = ['copper','iron','cobalt','argent','emberite','frostsilver','stormiron','aetherite','umbral','astralite'] as const;
const rows: Array<[string,string,number,number,string,string,number,number,number,number,MiningDepositDefinition['category']]> = [
  ['copper_vein','Copper Vein',1,1,'copper_ore','Copper Ore',1,36,2400,6,'Ore'],
  ['fieldstone_quarry','Fieldstone Quarry',1,5,'stone','Stone',3,42,2500,5,'Quarry'],
  ['iron_vein','Iron Vein',2,11,'iron_ore','Iron Ore',1,48,2550,10,'Ore'],
  ['coal_seam','Coal Seam',2,15,'coal','Coal',2,48,2700,9,'Catalyst'],
  ['shallow_geode_field','Shallow Geode Field',2,18,'gem_roll','Gem Roll',1,56,2900,12,'Gem'],
  ['cobalt_vein','Cobalt Vein',3,21,'cobalt_ore','Cobalt Ore',1,66,2700,16,'Ore'],
  ['raw_essence_seam','Raw Essence Seam',1,1,'raw_essence','Raw Essence',1,55,3000,8.5,'Essence'],
  ['argent_vein','Argent Vein',4,31,'argent_ore','Argent Ore',1,84,2850,24,'Ore'],
  ['granite_shelf','Granite Shelf',4,35,'granite','Granite',2,98,3100,22,'Quarry'],
  ['emberite_vein','Emberite Vein',5,41,'emberite_ore','Emberite Ore',1,108,3000,35,'Ore'],
  ['fluxstone_vein','Fluxstone Vein',5,45,'fluxstone','Fluxstone',1,126,3250,32,'Catalyst'],
  ['prismatic_gem_vein','Prismatic Gem Vein',5,48,'gem_roll','Gem Roll',1,144,3350,40,'Gem'],
  ['frostsilver_vein','Frostsilver Vein',6,51,'frostsilver_ore','Frostsilver Ore',1,132,3150,49,'Ore'],
  ['runic_crystal_seam','Runic Crystal Seam',4,31,'runic_crystal','Runic Crystal',1,110,3500,32,'Essence'],
  ['stormiron_vein','Stormiron Vein',7,61,'stormiron_ore','Stormiron Ore',1,162,3300,67,'Ore'],
  ['blackstone_quarry','Blackstone Quarry',7,65,'blackstone','Blackstone',2,189,3650,60,'Quarry'],
  ['aetherite_vein','Aetherite Vein',8,71,'aetherite_ore','Aetherite Ore',1,198,3450,89,'Ore'],
  ['celestial_geode','Celestial Geode',8,78,'gem_roll','Gem Roll',1,264,3850,98,'Gem'],
  ['umbral_vein','Umbral Vein',9,81,'umbral_ore','Umbral Ore',1,240,3600,116,'Ore'],
  ['aether_essence_core','Aether Essence Core',7,61,'aether_essence','Aether Essence',1,260,4050,96,'Essence'],
  ['astralite_vein','Astralite Vein',10,91,'astralite_ore','Astralite Ore',1,288,3800,149,'Ore'],
  ['aetherstone_quarry','Aetherstone Quarry',10,95,'aetherstone','Aetherstone',1,384,4200,140,'Quarry'],
  ['worldheart_deposit','Worldheart Deposit',10,100,'worldstone','Worldstone',1,580,4500,200,'Deep-Core'],
];
const oreGems=['opal','sapphire','garnet','emerald','ruby','topaz','amethyst','aquamarine','diamond','astral_prism'];
const coreByTier=(tier:number)=>tier<=3?'mineral_core_fragment':tier<=6?'refined_core_fragment':tier<=9?'prismatic_core_fragment':'astral_core_fragment';
const dedicatedWeights:Record<string,readonly (readonly number[])[]>={
 shallow_geode_field:[[.55,.35,.10],[.50,.35,.15],[.45,.35,.20],[.40,.35,.25],[.35,.35,.30]],
 prismatic_gem_vein:[[.40,.30,.20,.10],[.35,.30,.22,.13],[.30,.30,.25,.15],[.25,.28,.27,.20],[.20,.25,.30,.25]],
 celestial_geode:[[.60,.30,.10],[.55,.32,.13],[.48,.34,.18],[.40,.37,.23],[.30,.40,.30]],
};
function toolFor(tier:number, key:string) { if(key==='worldheart_deposit')return 'astralite_pickaxe'; if(tier<=1)return 'worn_pickaxe'; return `${metals[Math.min(tier-2,8)]}_pickaxe`; }
export const MINING_DEPOSITS: Record<DepositId, MiningDepositDefinition> = Object.fromEntries(rows.map(([key,name,tier,unlock,item,nameItem,qty,density,strike,xp,category])=>{
  const isGem=category==='Gem';
  const definition:MiningDepositDefinition={id:`mining.deposit.${key}`,name,tier,category,primary:`item.mining.${item}`,resourceName:nameItem,baseQuantity:qty,baseDensity:density,strikeMs:strike,stageOneXp:xp,unlockLevel:unlock,requiredTool:`item.mining.${toolFor(tier,key)}`};
  if(category==='Ore'){const rubble=tier<=3?'stone':tier<=6?'granite':tier<=9?'blackstone':'aetherstone';definition.structuralChance=.08;definition.structuralItem=`item.mining.${rubble}`;definition.gemBaseChance=.0025;definition.gemPool=[`item.mining.${oreGems[tier-1]}`];definition.coreBaseChance=.0005;definition.coreStageMultipliers=[0,0,1,5,25];definition.coreItem=`item.mining.${coreByTier(tier)}`;}
  if(category==='Quarry'){const pools:Record<string,string[]>={fieldstone_quarry:['opal','sapphire'],granite_shelf:['emerald','ruby'],blackstone_quarry:['amethyst','aquamarine'],aetherstone_quarry:['diamond','astral_prism']};definition.gemBaseChance=.001;definition.gemPool=pools[key]!.map(x=>`item.mining.${x}` as ItemId);definition.gemWeights=[1,1];definition.coreBaseChance=.0005;definition.coreStageMultipliers=[0,0,1,5,25];definition.coreItem=`item.mining.${coreByTier(tier)}`;}
  if(category==='Catalyst'){const config=key==='coal_seam'?{rubble:'stone',gems:['sapphire'],chance:.0012,core:'mineral_core_fragment'}:{rubble:'granite',gems:['ruby','topaz'],chance:.0012,core:'refined_core_fragment'};definition.structuralChance=.06;definition.structuralItem=`item.mining.${config.rubble}`;definition.gemBaseChance=config.chance;definition.gemPool=config.gems.map(x=>`item.mining.${x}` as ItemId);definition.gemWeights=config.gems.map(()=>1);definition.coreBaseChance=.0005;definition.coreStageMultipliers=[0,0,1,5,25];definition.coreItem=`item.mining.${config.core}`;}
  if(category==='Essence'){definition.coreBaseChance=.0005;definition.coreStageMultipliers=[0,0,1,5,25];definition.coreItem=`item.mining.${coreByTier(tier)}`;definition.additionalDrops=key==='raw_essence_seam'?[{item:'item.mining.runic_shard',chance:.002,stageScaled:true}]:key==='runic_crystal_seam'?[{item:'item.mining.runic_shard',chance:.003,stageScaled:true}]:[{item:'item.mining.runic_shard',chance:.005,stageScaled:true},{item:'item.mining.astral_prism',chance:.0008,stageScaled:true}];}
  if(isGem){definition.gemPool=(key==='shallow_geode_field'?['opal','sapphire','garnet']:key==='prismatic_gem_vein'?['emerald','ruby','topaz','amethyst']:['aquamarine','diamond','astral_prism']).map(x=>`item.mining.${x}` as ItemId);definition.gemStageWeights=dedicatedWeights[key];definition.dustBaseChance=.0075;}
  if(key==='worldheart_deposit'){definition.coreBaseChance=.0005;definition.coreStageMultipliers=[0,0,1,5,25];definition.coreItem='item.mining.astral_core_fragment';definition.additionalDrops=[{item:'item.mining.astral_prism',chance:.005,stageScaled:true},{item:'item.mining.worldheart_shard',chance:.04,coreOnly:true}];}
  return [definition.id,definition];
})) as Record<DepositId,MiningDepositDefinition>;
