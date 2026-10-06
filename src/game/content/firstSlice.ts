/** Compatibility barrel. Domain content lives in items/, mining/, smithing/, and combat/. */
export { ITEMS } from './items/itemRegistry';
export { MINING_STAGE_MODEL, MINING_DEPOSITS, MINING_TOOLS } from './mining/miningContent';
export { SMELTING_RECIPES, FORGING_RECIPES, FORGE_HAMMERS } from './smithing/smithingContent';
export { ENEMIES, NORMAL_ENEMIES, RESISTANCES } from './combat/t1Enemies';
export type { EnemyAction, EnemyDefinition } from './combat/t1Enemies';
import { FORGING_RECIPES } from './smithing/forgingRecipes';
import type { RecipeId } from '../types/gameTypes';
/** Temporary read-only UI adapter; gameplay rules remain in the separate smelting/forging registries. */
export const RECIPES = Object.fromEntries(Object.entries(FORGING_RECIPES).map(([id, recipe]) => [id, { ...recipe, unlock: recipe.unlockLevel, work: recipe.workMultiplier, ingots: recipe.inputs.find((input) => input.item === 'item.smithing.copper_ingot')?.amount ?? 0 }])) as Record<Exclude<RecipeId, 'recipe.smithing.copper_ingot'>, (typeof FORGING_RECIPES)[keyof typeof FORGING_RECIPES] & { unlock: number; work: number; ingots: number }>;
export const recipeItem = (id: RecipeId) => FORGING_RECIPES[id as keyof typeof FORGING_RECIPES].output;
export const PROVISIONAL_FIRST_SLICE_XP_CURVE = (level: number) => Math.round(15 + Math.max(0, level - 1) * 2);
export const PROVISIONAL_FIRST_SLICE_COMBAT_VALUES = { wolfHp: 70, wolfInterval: 3000, wolfAccuracy: 160, wolfMaxHit: 10, wolfMeleeEvasion: 120, respawn: 3000, gold: 8 } as const;
