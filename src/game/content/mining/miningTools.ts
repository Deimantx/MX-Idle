import type { ItemId, MiningToolId } from '../../types/gameTypes';
export type MiningToolDefinition = { item: ItemId; name: string; power: number; speed: number; extraQuantityChance: number; equipLevel: number; icon: string };
export const MINING_TOOLS: Record<MiningToolId, MiningToolDefinition> = {
  'item.mining.worn_pickaxe': { item: 'item.mining.worn_pickaxe', name: 'Worn Pickaxe', power: 6, speed: 0, extraQuantityChance: 0, equipLevel: 1, icon: 'pick' },
  'item.mining.copper_pickaxe': { item: 'item.mining.copper_pickaxe', name: 'Copper Pickaxe', power: 8, speed: .02, extraQuantityChance: 2, equipLevel: 5, icon: 'pick' },
};
