import { COOKING_KNIVES, COOKING_METHOD_UNLOCK, COOKING_RECIPES } from '../../content/cooking/cookingContent';
import { FISH_SPECIES } from '../../content/fishing/fishingContent';
import type { ItemId, SaveState } from '../../types/gameTypes';

const itemTagName = (id: string) => id.split('.').slice(-1)[0]?.split('_').join(' ').toLowerCase() ?? '';
function itemTagMatches(item: string, tag: string) {
  const normalized = tag.toLowerCase(), key = normalized.split(' ').join('_');
  if (item.startsWith('fishing.fish.')) {
    const fish = FISH_SPECIES.find((candidate) => candidate.id === item);
    return !!fish && (fish.cookingClass.toLowerCase() === normalized || (normalized === 'small fish' && fish.cookingClass === 'Small / Schooling'));
  }
  if (item.startsWith('fishing.find.')) return itemTagName(item) === normalized;
  if (item.startsWith('cooking.utility.pantry_')) return item.slice('cooking.utility.pantry_'.length) === key;
  if (item.startsWith('cooking.food.') || item.startsWith('cooking.utility.')) return itemTagName(item) === normalized;
  return false;
}

export function resolveCookingInput(s: SaveState, tag: string, excluded: string[] = []) {
  const candidates = Object.keys(s.bank).filter((id) => !excluded.includes(id) && itemTagMatches(id, tag) && (s.bank[id as ItemId] ?? 0) > 0);
  return candidates.sort((a, b) => {
    const fa = FISH_SPECIES.find((fish) => fish.id === a), fb = FISH_SPECIES.find((fish) => fish.id === b);
    return (fa?.tier ?? -1) - (fb?.tier ?? -1) || a.localeCompare(b);
  })[0] ?? null;
}

export function resolveRecipeInputs(s: SaveState, recipeId = s.cooking.recipe) {
  const recipe = COOKING_RECIPES.find((candidate) => candidate.id === recipeId);
  if (!recipe) return null;
  const allocated: Partial<Record<ItemId, number>> = {}, resolved: Array<{ item: ItemId; amount: number; tag: string }> = [];
  const sorted = (tag: string) => Object.keys(s.bank).filter((id) => itemTagMatches(id, tag) && (s.bank[id as ItemId] ?? 0) > (allocated[id as ItemId] ?? 0)).sort((a, b) => {
    const fa = FISH_SPECIES.find((fish) => fish.id === a), fb = FISH_SPECIES.find((fish) => fish.id === b);
    return (fa?.tier ?? -1) - (fb?.tier ?? -1) || a.localeCompare(b);
  });
  for (const input of recipe.inputs) {
    const options = input.type === 'single' ? [{ tag: input.tag, amount: input.amount }] : input.options;
    const chosen = options.find((option) => sorted(option.tag).reduce((total, id) => total + (s.bank[id as ItemId] ?? 0) - (allocated[id as ItemId] ?? 0), 0) >= option.amount);
    if (!chosen) return null;
    let remaining = chosen.amount;
    for (const id of sorted(chosen.tag)) {
      if (remaining <= 0) break;
      const item = id as ItemId, take = Math.min(remaining, (s.bank[item] ?? 0) - (allocated[item] ?? 0));
      allocated[item] = (allocated[item] ?? 0) + take;
      resolved.push({ item, amount: take, tag: chosen.tag }); remaining -= take;
    }
  }
  return resolved;
}

export function canStartCooking(s: SaveState) {
  const recipe = COOKING_RECIPES.find((candidate) => candidate.id === s.cooking.recipe);
  return !!recipe && s.skills.Cooking.level >= recipe.unlockLevel && s.skills.Cooking.level >= (COOKING_METHOD_UNLOCK[recipe.method] ?? 1) && resolveRecipeInputs(s, recipe.id) !== null;
}

export function cookingPrepTime(s: SaveState) {
  const recipe = COOKING_RECIPES.find((candidate) => candidate.id === s.cooking.recipe)!;
  const knife = COOKING_KNIVES.find((candidate) => candidate.id === s.cooking.knife) ?? COOKING_KNIVES[0]!, base = recipe.prepSeconds * recipe.complexity * 1000;
  let modifier = knife.effects.prepTimeMultiplier ?? 1;
  const tags = recipe.inputs.flatMap((input) => input.type === 'single' ? [input.tag] : input.options.map((option) => option.tag));
  if (tags.some((tag) => /fish|crayfish|mussel/i.test(tag))) modifier *= knife.effects.fishPrepTimeMultiplier ?? 1;
  if (s.cooking.specialization === 'Hearth Chef') modifier *= recipe.foodValue > 0 ? .92 : 1.05;
  if (s.cooking.specialization === 'Provisioner' && recipe.method === 'Banquet Station') modifier *= 1.05;
  if (s.cooking.specialization === 'Gourmet Chef') modifier *= .88;
  return Math.max (base * .3, base * (10 / (10 + knife.power)) * (1 - knife.prepSpeed) * modifier);
}

export function cookingMethodTime(s: SaveState) {
  const recipe = COOKING_RECIPES.find((candidate) => candidate.id === s.cooking.recipe)!;
  if (recipe.method === 'Prep Table') return 0;
  const knife = COOKING_KNIVES.find((candidate) => candidate.id === s.cooking.knife) ?? COOKING_KNIVES[0]!;
  let modifier = recipe.method === 'Grill' || recipe.method === 'Oven' ? knife.effects.grillOvenCookMultiplier ?? 1 : recipe.method === 'Pot' || recipe.method === 'Smokehouse' ? knife.effects.potSmokehouseCookMultiplier ?? 1 : 1;
  if (s.cooking.specialization === 'Provisioner' && recipe.method === 'Smokehouse') modifier *= .88;
  if (s.cooking.specialization === 'Hearth Chef' && (recipe.method === 'Grill' || recipe.method === 'Oven')) modifier *= .88;
  if (s.cooking.specialization === 'Gourmet Chef' && recipe.method === 'Banquet Station') modifier *= .9;
  if (s.cooking.specialization === 'Gourmet Chef' && recipe.complexity <= 2) modifier *= 1.05;
  return Math.max (1000, recipe.cookSeconds * 1000 * modifier);
}
