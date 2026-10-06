import { COMBAT_AREAS, ENEMIES, type Requirement } from '../../content/combat/t1Enemies';
import { HEAVY_ARMOR } from '../../content/combat/heavyArmor';
import { MELEE_WEAPONS } from '../../content/combat/meleeWeapons';
import { OFFHANDS } from '../../content/combat/offhands';
import { ITEMS } from '../../content/items/itemRegistry';
import type { DamageType, EnemyId, ItemId, SaveState } from '../../types/gameTypes';
import { hitChance } from '../gameMath';

export function evaluateRequirements(game: SaveState, requirements: readonly Requirement[] = []) {
  return requirements.every((requirement) => requirement.type === 'skillLevel'
    ? game.skills[requirement.skill].level >= requirement.level
    : requirement.type === 'defeat'
      ? (game.combat.defeated[requirement.target] ?? 0) >= requirement.count
      : requirement.targets.every((id) => (game.combat.defeated[id] ?? 0) > 0));
}

export function getPlayerAttackInterval(game: SaveState) {
  const weapon = game.equipped.weapon ? MELEE_WEAPONS[game.equipped.weapon as keyof typeof MELEE_WEAPONS] : undefined;
  const offhand = game.equipped.offhand ? OFFHANDS[game.equipped.offhand as keyof typeof OFFHANDS] : undefined;
  return (weapon?.intervalMs ?? 2400) + (offhand?.attackIntervalPenaltyMs ?? 0);
}
export function getWeaponSpecial(game: SaveState) {
  const special = game.equipped.weapon ? MELEE_WEAPONS[game.equipped.weapon as keyof typeof MELEE_WEAPONS]?.special : undefined;
  return special ? { ...special, cost: special.stamina, accuracy: special.accuracyBonus, resistanceDown: special.resistanceDownPp } : null;
}
export function getPlayerAccuracy(game: SaveState) {
  const weapon = game.equipped.weapon ? MELEE_WEAPONS[game.equipped.weapon as keyof typeof MELEE_WEAPONS] : undefined;
  const down = game.combat.statuses.some((status) => status.target === 'player' && status.type === 'AccuracyDown') ? .08 : 0;
  return (100 + game.skills.Attack.level * 6 + (weapon?.accuracyBonus ?? 0)) * (1 - down);
}
export function getPlayerEvasion(game: SaveState) {
  const down = game.combat.statuses.filter((status) => status.target === 'player' && status.type === 'EvasionDown').reduce((total, status) => total + (status.magnitude ?? 0), 0);
  return Math.max(0, 100 + game.skills.Defence.level * 5 - down);
}
export function getPlayerResistances(game: SaveState): Record<DamageType, number> {
  const result: Record<DamageType, number> = { Slash: 0, Stab: 0, Crush: 0, Pierce: 0, Puncture: 0, Air: 0, Fire: 0, Water: 0, Earth: 0 };
  for (const id of [game.equipped.head, game.equipped.armor, game.equipped.hands, game.equipped.feet, game.equipped.offhand]) {
    if (!id) continue;
    const armor = HEAVY_ARMOR[id as keyof typeof HEAVY_ARMOR], offhand = OFFHANDS[id as keyof typeof OFFHANDS];
    const resistance = armor?.resistances ?? offhand?.resistances;
    if (resistance) for (const type of Object.keys(result) as DamageType[]) result[type] += resistance[type];
  }
  return result;
}
export function getPlayerMaxHit(game: SaveState, type: DamageType = game.combat.stance) {
  const weapon = game.equipped.weapon ? MELEE_WEAPONS[game.equipped.weapon as keyof typeof MELEE_WEAPONS] : undefined;
  return Math.max(0, Math.floor((weapon?.power ?? 0) * (1 + game.skills.Attack.level / 100) * (1 + (weapon?.style === type ? 0 : 0))));
}
export function canUseWeapon(game: SaveState, item: ItemId | null): boolean {
  if (!item) return false;
  const weapon = MELEE_WEAPONS[item as keyof typeof MELEE_WEAPONS];
  return Boolean(weapon && game.skills.Attack.level >= weapon.attackLevel);
}
export function canEquip(game: SaveState, item: ItemId, slot?: string, requireOwned = true): boolean {
  const definition = ITEMS[item], meta = definition?.equipment;
  if (!meta || meta.context !== 'combat' || (requireOwned && (game.bank[item] ?? 0) < 1) || game.skills[meta.skill].level < meta.requiredLevel) return false;
  if (slot && meta.slot.toLowerCase().replace('-', '') !== slot.toLowerCase().replace('-', '')) return false;
  if (meta.slot === 'Off-hand') {
    const weapon = game.equipped.weapon ? MELEE_WEAPONS[game.equipped.weapon as keyof typeof MELEE_WEAPONS] : undefined;
    const offhand = OFFHANDS[item as keyof typeof OFFHANDS];
    if (!weapon || weapon.handedness !== '1H' || !weapon.allowedOffhandTypes?.includes(offhand?.offhandType ?? '')) return false;
  }
  return Boolean(MELEE_WEAPONS[item as keyof typeof MELEE_WEAPONS] || HEAVY_ARMOR[item as keyof typeof HEAVY_ARMOR] || OFFHANDS[item as keyof typeof OFFHANDS]);
}
export function isValidEquipmentForSlot(game: SaveState, item: ItemId, slot: string): boolean {
  const meta=ITEMS[item]?.equipment;
  if(!meta||meta.context!=='combat'||meta.slot.toLowerCase().replace('-','')!==slot.toLowerCase().replace('-',''))return false;
  const registered=Boolean(MELEE_WEAPONS[item as keyof typeof MELEE_WEAPONS]||HEAVY_ARMOR[item as keyof typeof HEAVY_ARMOR]||OFFHANDS[item as keyof typeof OFFHANDS]);
  if(!registered)return false;
  if(meta.slot==='Off-hand'){
    const weapon=game.equipped.weapon?MELEE_WEAPONS[game.equipped.weapon as keyof typeof MELEE_WEAPONS]:undefined;
    const offhand=OFFHANDS[item as keyof typeof OFFHANDS];
    return Boolean(weapon?.handedness==='1H'&&weapon.allowedOffhandTypes?.includes(offhand?.offhandType??''));
  }
  return true;
}
export function canStartCombat(game: SaveState) { return canUseWeapon(game, game.equipped.weapon); }
export function enemyUnlocked(game: SaveState, id: EnemyId) { const enemy = ENEMIES[id]; return Boolean(enemy && evaluateRequirements(game, enemy.unlockRequirements)); }
export function areaUnlocked(game: SaveState, areaId: string) { const area = COMBAT_AREAS[areaId]; return Boolean(area && evaluateRequirements(game, area.unlockRequirements)); }
export function getCombatHitChance(accuracy: number, evasion: number) { return hitChance(accuracy, evasion); }
