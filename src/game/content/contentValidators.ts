import { COMBAT_AREAS, DAMAGE_TYPES, DUNGEONS, ENEMIES, validateCombatContent } from './combat/t1Enemies';
import { BOSS_COMPONENTS, COMBAT_LOOT_ITEMS, ELITE_COMPONENTS, OFFERINGS } from './combat/combatLoot';
import { ITEMS } from './items/itemRegistry';
import { MINING_DEPOSITS } from './mining/miningDeposits';
import { MINING_STAGE_MODEL } from './mining/miningStages';
import { MINING_TOOLS } from './mining/miningTools';
import { FORGING_RECIPES } from './smithing/forgingRecipes';
import { FORGE_HAMMERS } from './smithing/smithingTools';
import { SMELTING_RECIPES } from './smithing/smeltingRecipes';
import type { ItemId } from '../types/gameTypes';

const hasItem = (id: ItemId) => Object.prototype.hasOwnProperty.call(ITEMS, id);
export function validateMiningContent() {
  const errors: string[] = [], seen = new Set<string>();
  for (const [key, deposit] of Object.entries(MINING_DEPOSITS)) {
    if (seen.has(deposit.id) || key !== deposit.id) errors.push(`Duplicate or mismatched Mining deposit ID: ${key}`); seen.add(deposit.id);
    if (!hasItem(deposit.primary)) errors.push(`${deposit.id} references missing primary item ${deposit.primary}`);
    if (!MINING_TOOLS[deposit.requiredTool as keyof typeof MINING_TOOLS]) errors.push(`${deposit.id} references missing pickaxe ${deposit.requiredTool}`);
    if (deposit.structuralItem && !hasItem(deposit.structuralItem)) errors.push(`${deposit.id} references missing structural item ${deposit.structuralItem}`);
    for (const item of [...(deposit.gemPool ?? []), ...(deposit.coreItem ? [deposit.coreItem] : []), ...(deposit.additionalDrops ?? []).map((drop) => drop.item)]) if (!hasItem(item)) errors.push(`${deposit.id} references missing reward item ${item}`);
    if (deposit.unlockLevel < 1 || deposit.unlockLevel > 100 || deposit.tier < 1 || deposit.tier > 10) errors.push(`${deposit.id} has an invalid level or tier`);
    if (!(deposit.baseDensity > 0) || !(deposit.strikeMs > 0) || MINING_STAGE_MODEL.some((stage) => !Number.isFinite(stage.densityMultiplier) || stage.densityMultiplier <= 0)) errors.push(`${deposit.id} has invalid stage density or action timing`);
  }
  return errors;
}

export function validateSmithingContent() {
  const errors: string[] = [], seen = new Set<string>(), outputByRecipe = new Map<string, string>();
  for (const recipe of Object.values(SMELTING_RECIPES)) {
    if (seen.has(recipe.id)) errors.push(`Duplicate Smithing recipe ID: ${recipe.id}`); seen.add(recipe.id);
    for (const input of recipe.inputs) if (!hasItem(input.item) || input.amount <= 0) errors.push(`${recipe.id} has an invalid input ${input.item}`);
    if (!hasItem(recipe.output.item) || recipe.unlockLevel < 1 || recipe.unlockLevel > 100 || recipe.unitTimeMs <= 0) errors.push(`${recipe.id} has invalid output, level, or timing`);
  }
  for (const recipe of Object.values(FORGING_RECIPES)) {
    if (seen.has(recipe.id)) errors.push(`Duplicate Smithing recipe ID: ${recipe.id}`); seen.add(recipe.id); outputByRecipe.set(recipe.output, recipe.id);
    for (const input of recipe.inputs) if (!hasItem(input.item) || input.amount <= 0) errors.push(`${recipe.id} has an invalid input ${input.item}`);
    if (!hasItem(recipe.output) || recipe.unlockLevel < 1 || recipe.unlockLevel > 100 || !['weapons','armor','offhand','tools'].includes(recipe.category) || !recipe.slot) errors.push(`${recipe.id} has invalid output, level, category, or slot`);
    if (recipe.slot === 'Pickaxe' && !Object.values(MINING_TOOLS).some((tool) => tool.item === recipe.output)) errors.push(`${recipe.id} output has no Mining tool definition`);
    if (recipe.slot === 'Hammer' && !Object.values(FORGE_HAMMERS).some((tool) => tool.item === recipe.output)) errors.push(`${recipe.id} output has no Hammer definition`);
  }
  const graph = new Map<string, string[]>();
  for (const recipe of Object.values(FORGING_RECIPES)) graph.set(recipe.output, recipe.inputs.flatMap((input) => outputByRecipe.has(input.item) ? [input.item] : []));
  const visiting = new Set<string>(), visited = new Set<string>();
  const visit = (item: string): boolean => { if (visiting.has(item)) return true; if (visited.has(item)) return false; visiting.add(item); for (const next of graph.get(item) ?? []) if (visit(next)) return true; visiting.delete(item); visited.add(item); return false; };
  for (const item of graph.keys()) if (visit(item)) { errors.push(`Smithing output dependency cycle includes ${item}`); break; }
  return errors;
}

export function validateCombatRegistry() {
  const errors = validateCombatContent(ENEMIES, COMBAT_AREAS);
  for (const enemy of Object.values(ENEMIES)) for (const drop of [...enemy.loot,...(enemy.firstKillReward??[])]) if (!hasItem(drop.item)) errors.push(`${enemy.id} references missing loot item ${drop.item}`);
  for (const enemy of Object.values(ENEMIES)) if (enemy.offering && !hasItem(enemy.offering)) errors.push(`${enemy.id} references missing Offering item ${enemy.offering}`);
  if (DAMAGE_TYPES.length !== 9) errors.push('Combat must define nine typed damage resistances');
  if(Object.keys(ENEMIES).filter(id=>ENEMIES[id]!.rank==='Boss').length!==10)errors.push('Expected 10 Combat bosses');
  if(Object.keys(ENEMIES).filter(id=>ENEMIES[id]!.rank==='Elite').length!==10)errors.push('Expected 10 Combat Elites');
  if(Object.keys(ENEMIES).filter(id=>ENEMIES[id]!.rank==='Dungeon').length!==20)errors.push('Expected 20 Dungeon-only enemies');
  if(Object.keys(ENEMIES).filter(id=>['Light','Normal','Heavy'].includes(ENEMIES[id]!.rank)).length!==40)errors.push('Expected 40 normal Area enemies');
  if(Object.keys(DUNGEONS).length!==10)errors.push('Expected 10 Dungeons');
  for(const dungeon of Object.values(DUNGEONS)){if(dungeon.encounters.length!==4)errors.push(`${dungeon.id} must have 4 ordered encounters`);if(dungeon.encounters[2]!==Object.values(ENEMIES).find(e=>e.tier===dungeon.tier&&e.rank==='Elite')?.id)errors.push(`${dungeon.id} must place the Elite third`);if(dungeon.encounters[3]!==dungeon.bossId)errors.push(`${dungeon.id} must place its Boss fourth`);}
  if(OFFERINGS.length!==30)errors.push('Expected 30 Offering items');
  if(ELITE_COMPONENTS.length!==10)errors.push('Expected 10 Elite Components');
  if(BOSS_COMPONENTS.length!==10)errors.push('Expected 10 protected Boss Components');
  if(COMBAT_LOOT_ITEMS.some(item=>!hasItem(item.id)))errors.push('A generated Combat reward has no registered item definition');
  for(const enemy of Object.values(ENEMIES)){if(!enemy.tags.length||!enemy.resistanceProfile||!['Melee','Ranged','Magic'].includes(enemy.style))errors.push(`${enemy.id} is missing Bestiary identity data`);for(const action of [...enemy.sequence,...(enemy.phases??[]).flatMap(phase=>phase.sequence)]){if(action.damageEnabled&&(!Number.isFinite(action.multiplier)||action.multiplier!<=0))errors.push(`${enemy.id}/${action.name} has an invalid multiplier`);if(action.status&&(!Number.isFinite(action.status.durationMs)||action.status.durationMs<=0||!Number.isFinite(action.status.magnitude)))errors.push(`${enemy.id}/${action.name} has an invalid effect`);if(action.hits!==undefined&&action.hits<1)errors.push(`${enemy.id}/${action.name} has invalid hit count`);if(action.damageComponents&&action.damageComponents.some(part=>!DAMAGE_TYPES.includes(part.type)||!Number.isFinite(part.ratio)||part.ratio<=0))errors.push(`${enemy.id}/${action.name} has invalid damage components`);}}
  return errors;
}

export function validateCoreContent() { return [...validateMiningContent(), ...validateSmithingContent(), ...validateCombatRegistry()]; }
