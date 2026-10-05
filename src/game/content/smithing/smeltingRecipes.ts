import type { ItemId } from '../../types/gameTypes';
export type SmeltingRecipe = { id: 'recipe.smithing.copper_ingot'; name: string; unlockLevel: number; inputs: { item: ItemId; amount: number }[]; output: { item: ItemId; amount: number }; heatRequirement: number; unitTimeMs: number; warmupMs: number; smithingXp: number; category: 'smelting' };
export const SMELTING_RECIPES: Record<'recipe.smithing.copper_ingot', SmeltingRecipe> = {
  'recipe.smithing.copper_ingot': { id: 'recipe.smithing.copper_ingot', name: 'Copper Ingot', unlockLevel: 1, inputs: [{ item: 'item.mining.copper_ore', amount: 2 }], output: { item: 'item.smithing.copper_ingot', amount: 1 }, heatRequirement: 26, unitTimeMs: 3000, warmupMs: 3040, smithingXp: 7, category: 'smelting' },
};
