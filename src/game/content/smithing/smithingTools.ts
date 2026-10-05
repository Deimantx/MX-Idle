import type { ItemId, SmithingToolId } from '../../types/gameTypes';
export type SmithingToolDefinition = { item: ItemId; name: string; power: number; strikeMs: number; equipLevel: number };
export const FORGE_HAMMERS: Record<SmithingToolId, SmithingToolDefinition> = {
  'item.smithing.worn_smithing_hammer': { item: 'item.smithing.worn_smithing_hammer', name: 'Worn Smithing Hammer', power: 5, strikeMs: 2200, equipLevel: 1 },
  'item.smithing.copper_smithing_hammer': { item: 'item.smithing.copper_smithing_hammer', name: 'Copper Smithing Hammer', power: 7, strikeMs: 2140, equipLevel: 5 },
};
