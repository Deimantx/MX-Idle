import { ITEMS, type ItemId, type SkillId } from '../../game/game';
import { MELEE_WEAPONS } from '../../game/content/combat/meleeWeapons';
import { HEAVY_ARMOR } from '../../game/content/combat/heavyArmor';
import { OFFHANDS } from '../../game/content/combat/offhands';
import { COOKING_RECIPES } from '../../game/content/cooking/cookingContent';
import { FISH_SPECIES } from '../../game/content/fishing/fishingContent';
import { MINING_DEPOSITS } from '../../game/content/mining/miningDeposits';

export type ItemTooltipContext = { owned?: number; equipped?: boolean; depositId?: keyof typeof MINING_DEPOSITS; skillLevels?: Partial<Record<SkillId, number>> };
export type ItemTooltipRow = { label: string; value: string | number; tone?: 'power'|'accuracy'|'defence'|'healing'|'warning' };
export type ItemTooltipSection = { title: string; rows: ItemTooltipRow[]; icon?: string };
export type ItemTooltipModel = { name: string; category: string; tier?: number; rarity: string; flags?: string[]; description: string; requirement?: { skill: SkillId; level: number; met?: boolean }; sections: ItemTooltipSection[]; owned?: number; equipped: boolean };

const titleCase = (value: string) => value.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[-_]/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
const readable = (value: string) => value
  .replace(/\u00c2\u00b7/g, ' / ')
  .replace(/\u00e2\u20ac\u2122/g, "'")
  .replace(/\u00e2\u20ac\u0153|\u00e2\u20ac\u009d/g, '"')
  .replace(/\u00c3\u0097|\u00c3\u2014/g, ' x ');
const semanticRows = (stats: Record<string, string|number>): ItemTooltipRow[] => Object.entries(stats).map(([label, value]) => ({
  label: titleCase(label), value,
  tone: /power|damage/i.test(label) ? 'power' : /accuracy|crit/i.test(label) ? 'accuracy' : /resist|evasion|defence/i.test(label) ? 'defence' : /heal/i.test(label) ? 'healing' : undefined,
}));

export function getItemTooltipModel(id: ItemId, context: ItemTooltipContext = {}): ItemTooltipModel {
  const item = ITEMS[id];
  const fish = FISH_SPECIES.find((entry) => entry.id === id);
  const equipment = item.equipment;
  const weapon = MELEE_WEAPONS[id as keyof typeof MELEE_WEAPONS];
  const armor = HEAVY_ARMOR[id as keyof typeof HEAVY_ARMOR];
  const offhand = OFFHANDS[id as keyof typeof OFFHANDS];
  const sections: ItemTooltipSection[] = [];
  if (equipment) {
    sections.push({ title: equipment.context === 'combat' ? equipment.slot.toUpperCase() : `${equipment.profession?.toUpperCase() ?? 'PROFESSION'} TOOL`, rows: semanticRows(equipment.stats) });
  }
  if (weapon) {
    const special = weapon.special;
    sections.push({ title: 'OFFENSE', rows: [
      { label: 'Damage style', value: weapon.style }, { label: 'Critical chance', value: `${Math.round(weapon.critRateBonus * 100)}%`, tone: 'accuracy' },
      { label: 'Critical damage', value: `+${Math.round(weapon.critDamageBonus * 100)}%`, tone: 'power' },
    ] });
    sections.push({ title: 'SPECIAL · ' + special.name.toUpperCase(), rows: [
      { label: 'Stamina', value: special.stamina }, { label: 'Damage', value: special.multiplier.toFixed(2) + ' x ' + special.type, tone: 'power' },
      { label: 'Accuracy', value: `${special.accuracyBonus >= 0 ? '+' : ''}${Math.round(special.accuracyBonus * 100)}%`, tone: 'accuracy' },
      ...(special.executeBonus ? [{ label: 'Execute', value: `+${Math.round(special.executeBonus * 100)}%` }] : []),
      ...(special.resistanceDownPp ? [{ label: 'Resistance break', value: `${special.resistanceDownPp} points` }] : []),
    ] });
  }
  if (armor || offhand) {
    const source = armor ?? offhand!;
    sections.push({ title: 'EVASION', rows: Object.entries(source.evasions).map(([label, value]) => ({ label, value, tone: 'defence' })) });
    sections.push({ title: 'RESISTANCES', rows: Object.entries(source.resistances).map(([label, value]) => ({ label, value: `${value > 0 ? '+' : ''}${value}%`, tone: 'defence' })) });
    if (offhand) sections.push({ title: 'TRADE-OFF', rows: [{ label: 'Attack interval', value: `+${(offhand.attackIntervalPenaltyMs / 1000).toFixed(2)}s`, tone: 'warning' }] });
  }
  if (context.depositId) {
    const deposit = MINING_DEPOSITS[context.depositId];
    if (deposit?.primary === id) sections.unshift({ title: 'DEPOSIT PROFILE', icon: 'pick', rows: [
      { label: 'Deposit', value: deposit.name }, { label: 'Resource', value: deposit.resourceName },
      { label: 'Mining tier', value: `T${deposit.tier}` }, { label: 'Base yield', value: deposit.baseQuantity },
      { label: 'Strike time', value: `${(deposit.strikeMs / 1000).toFixed(2)}s` },
      { label: 'Required pickaxe', value: ITEMS[deposit.requiredTool]?.name ?? 'Pickaxe' },
    ] });
  }
  if (!sections.length && item.offeringValue !== undefined) sections.push({ title: 'VALUE', icon: 'gold', rows: [{ label: 'Offering value', value: item.offeringValue }] });
  const food = COOKING_RECIPES.find((recipe) => recipe.output === id && recipe.foodValue);
  if (food) {
    sections.push({ title: 'NUTRITION', icon: 'food', rows: [{ label: 'Heal', value: food.foodValue! * 10, tone: 'healing' }, { label: 'Satiety', value: 20 }, { label: 'Food value', value: food.foodValue! }] });
  }
  if (fish) {
    const baitId = `fishing.bait.${fish.preferredBait}` as ItemId;
    sections.unshift({ title: 'CATCH PROFILE', icon: 'fish', rows: [
      { label: 'Water', value: fish.water },
      { label: 'Fishing XP', value: fish.xp }, { label: 'Catch quantity', value: fish.quantity },
      { label: 'Fight', value: fish.fight },
      { label: 'Preferred bait', value: ITEMS[baitId]?.name ?? titleCase(fish.preferredBait) },
    ] });
    sections.push({ title: 'COOKING', icon: 'food', rows: [{ label: 'Cooking class', value: fish.cookingClass }] });
  }
  const requirement = equipment
    ? { skill: equipment.skill, level: equipment.requiredLevel, met: context.skillLevels?.[equipment.skill] === undefined ? undefined : context.skillLevels[equipment.skill]! >= equipment.requiredLevel }
    : fish ? { skill: 'Fishing' as const, level: fish.unlockLevel, met: context.skillLevels?.Fishing === undefined ? undefined : context.skillLevels.Fishing >= fish.unlockLevel } : undefined;
  const deposit = context.depositId ? MINING_DEPOSITS[context.depositId] : undefined;
  const foodRole = COOKING_RECIPES.find((recipe) => recipe.output === id && recipe.foodValue)?.role;
  const description = deposit?.primary === id ? deposit.resourceName + ' from ' + deposit.name + '.'
    : fish ? 'A raw ' + fish.water.toLowerCase() + ' catch.'
      : foodRole ?? readable(item.desc);
  return {
    name: fish?.name ?? item.name,
    category: fish ? 'RAW FISH' : foodRole ? 'FOOD' : (equipment?.family ?? item.category) + (equipment?.handedness ? ' / ' + equipment.handedness : ''),
    tier: fish?.tier ?? item.tier ?? equipment?.tier, rarity: fish?.rarity ?? item.rarity ?? 'Common',
    ...(fish?.predator ? { flags: ['PREDATOR'] } : {}), description,
    ...(requirement ? { requirement } : {}), sections,
    ...(context.owned !== undefined ? { owned: context.owned } : {}), equipped: context.equipped ?? false,
  };
}
