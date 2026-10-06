import { FORGING_RECIPES } from '../../content/smithing/forgingRecipes';
import { SMELTING_RECIPES } from '../../content/smithing/smeltingRecipes';
import { FORGE_HAMMERS } from '../../content/smithing/smithingTools';
import type { ForgingRecipeId, SaveState } from '../../types/gameTypes';

const equippedHammer = (s: SaveState) => FORGE_HAMMERS[(s.equipped.smithingHammer ?? 'item.smithing.worn_smithing_hammer') as keyof typeof FORGE_HAMMERS];
export function getForgeWorkRequired(recipeId: ForgingRecipeId) { const recipe = FORGING_RECIPES[recipeId]; return Math.round(recipe.workBase * recipe.workMultiplier); }
export function smithingActionTime(s: SaveState, _recipeId: ForgingRecipeId) { return equippedHammer(s).strikeMs; }
export const selectedSmeltRecipe = (s: SaveState) => SMELTING_RECIPES[s.smithing.smeltRecipe] ?? SMELTING_RECIPES['recipe.smithing.copper_ingot']!;
export function smeltingWarmupTime(s: SaveState) { return selectedSmeltRecipe(s).warmupMs; }
export function smeltingUnitTime(s: SaveState) { return selectedSmeltRecipe(s).unitTimeMs; }
