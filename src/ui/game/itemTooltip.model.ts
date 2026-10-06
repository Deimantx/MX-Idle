import { ITEMS, type ItemId, type SkillId } from '../../game/game';
import { MELEE_WEAPONS } from '../../game/content/combat/meleeWeapons';
import { HEAVY_ARMOR } from '../../game/content/combat/heavyArmor';
import { OFFHANDS } from '../../game/content/combat/offhands';
import { COOKING_RECIPES } from '../../game/content/cooking/cookingContent';

export type ItemTooltipContext = { owned?: number; equipped?: boolean; skillLevels?: Partial<Record<SkillId, number>> };
export type ItemTooltipRow = { label: string; value: string | number; tone?: 'power'|'accuracy'|'defence'|'healing'|'warning' };
export type ItemTooltipSection = { title: string; rows: ItemTooltipRow[] };
export type ItemTooltipModel = { name: string; category: string; tier?: number; rarity: string; description: string; requirement?: { skill: SkillId; level: number; met?: boolean }; sections: ItemTooltipSection[]; owned?: number; equipped: boolean };

const titleCase = (value: string) => value.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[-_]/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
const readable = (value: string) => value
  .replace(/\u00c2\u00b7/g, '·')
  .replace(/\u00e2\u20ac\u2122/g, '’')
  .replace(/\u00e2\u20ac\u0153/g, '“')
  .replace(/\u00e2\u20ac\u009d/g, '”')
  .replace(/\u00c3\u0097/g, '×');
const semanticRows = (stats: Record<string, string|number>): ItemTooltipRow[] => Object.entries(stats).map(([label, value]) => ({
  label: titleCase(label), value,
  tone: /power|damage/i.test(label) ? 'power' : /accuracy|crit/i.test(label) ? 'accuracy' : /resist|evasion|defence/i.test(label) ? 'defence' : /heal/i.test(label) ? 'healing' : undefined,
}));

export function getItemTooltipModel(id: ItemId, context: ItemTooltipContext = {}): ItemTooltipModel {
  const item = ITEMS[id];
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
    sections.push({ title: `SPECIAL · ${special.name.toUpperCase()}`, rows: [
      { label: 'Stamina', value: special.stamina }, { label: 'Damage', value: `${special.multiplier.toFixed(2)}× ${special.type}`, tone: 'power' },
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
  if (!sections.length && item.offeringValue !== undefined) sections.push({ title: 'VALUE', rows: [{ label: 'Offering value', value: item.offeringValue }] });
  const food = COOKING_RECIPES.find((recipe) => recipe.output === id && recipe.foodValue);
  if (food) {
    sections.push({ title: 'NUTRITION', rows: [{ label: 'Heal', value: food.foodValue! * 10, tone: 'healing' }, { label: 'Satiety', value: 20 }, { label: 'Food value', value: food.foodValue! }] });
  }
  const requirement = equipment ? { skill: equipment.skill, level: equipment.requiredLevel, met: context.skillLevels?.[equipment.skill] === undefined ? undefined : context.skillLevels[equipment.skill]! >= equipment.requiredLevel } : undefined;
  return { name: item.name, category: `${equipment?.family ?? item.category}${equipment?.handedness ? ` · ${equipment.handedness}` : ''}`, tier: item.tier ?? equipment?.tier, rarity: item.rarity ?? 'Common', description: readable(item.desc), ...(requirement ? { requirement } : {}), sections, ...(context.owned !== undefined ? { owned: context.owned } : {}), equipped: context.equipped ?? false };
}
