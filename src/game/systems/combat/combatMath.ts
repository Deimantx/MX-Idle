import { COMBAT_AREAS, DAMAGE_TYPES, DUNGEONS, ENEMIES, type Requirement } from '../../content/combat/t1Enemies';
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
  const down = game.combat.statuses.filter((status) => status.target === 'player' && status.type === 'AccuracyDown').reduce((sum,status)=>sum+(status.magnitude??0),0);
  return (100 + game.skills.Attack.level * 6 + (weapon?.accuracyBonus ?? 0)) * (1 - down);
}
export function getCurrentPlayerBasicDamageType(game:SaveState):DamageType {
  const weapon=game.equipped.weapon?MELEE_WEAPONS[game.equipped.weapon as keyof typeof MELEE_WEAPONS]:undefined;
  return weapon?.stances.find(stance=>stance.damageType===game.combat.pendingStance)?.damageType??weapon?.stances.find(stance=>stance.id===weapon.defaultStance)?.damageType??game.combat.pendingStance;
}
export function getPlayerEvasion(game: SaveState) {
  return getPlayerEvasions(game).Melee;
}
export function getPlayerEvasions(game: SaveState) {
  const result = { Melee: 100 + game.skills.Defence.level * 4, Ranged: 100 + game.skills.Defence.level * 4, Magic: 100 + game.skills.Defence.level * 4 };
  for (const id of [game.equipped.head, game.equipped.armor, game.equipped.hands, game.equipped.feet, game.equipped.offhand]) {
    if (!id) continue;
    const armor = HEAVY_ARMOR[id as keyof typeof HEAVY_ARMOR], offhand = OFFHANDS[id as keyof typeof OFFHANDS];
    const evasion = armor?.evasions ?? offhand?.evasions;
    if (evasion) { result.Melee += evasion.Melee; result.Ranged += evasion.Ranged; result.Magic += evasion.Magic; }
  }
  const down = game.combat.statuses.filter((status) => status.target === 'player' && status.type === 'EvasionDown').reduce((total, status) => total + (status.magnitude ?? 0), 0);
  for (const key of Object.keys(result) as Array<keyof typeof result>) result[key] = Math.max(0, result[key] * (1 - Math.min(1, down)));
  return result;
}
export function getPlayerResistances(game: SaveState): Record<DamageType, number> {
  const result: Record<DamageType, number> = { Slash: 0, Stab: 0, Crush: 0, Pierce: 0, Puncture: 0, Air: 0, Fire: 0, Water: 0, Earth: 0 };
  for (const id of [game.equipped.head, game.equipped.armor, game.equipped.hands, game.equipped.feet, game.equipped.offhand]) {
    if (!id) continue;
    const armor = HEAVY_ARMOR[id as keyof typeof HEAVY_ARMOR], offhand = OFFHANDS[id as keyof typeof OFFHANDS];
    const resistance = armor?.resistances ?? offhand?.resistances;
    if (resistance) for (const type of Object.keys(result) as DamageType[]) result[type] += resistance[type];
  }
  for(const status of game.combat.statuses.filter(x=>x.target==='player'&&(x.type==='ResistanceDown'||x.type==='ResistanceUp')))for(const type of status.damageTypes?.length?status.damageTypes:DAMAGE_TYPES)result[type]+=(status.type==='ResistanceDown'?-1:1)*(status.magnitude??0);
  return result;
}
export function getPlayerMaxHit(game: SaveState, type: DamageType = game.combat.stance) {
  const weapon = game.equipped.weapon ? MELEE_WEAPONS[game.equipped.weapon as keyof typeof MELEE_WEAPONS] : undefined;
  return Math.max(0, (weapon?.power ?? 0) * (1 + game.skills.Attack.level / 100) * (weapon?.stances.find((stance) => stance.damageType === type)?.maxHitMultiplier ?? 1));
}
export function getStyleMatchup(attacker: 'Melee'|'Ranged'|'Magic', defender: 'Melee'|'Ranged'|'Magic'): 'strong'|'neutral'|'weak' { if(attacker===defender)return 'neutral'; if((attacker==='Melee'&&defender==='Ranged')||(attacker==='Ranged'&&defender==='Magic')||(attacker==='Magic'&&defender==='Melee'))return 'strong'; return 'weak'; }
export function getStyleDamageMultiplier(attacker: 'Melee'|'Ranged'|'Magic', defender: 'Melee'|'Ranged'|'Magic') { const matchup=getStyleMatchup(attacker,defender); return matchup==='strong'?1.1:matchup==='weak'?0.9:1; }
export function getStyleResistanceAdjustment(playerStyle: 'Melee'|'Ranged'|'Magic', incomingStyle: 'Melee'|'Ranged'|'Magic') { const matchup=getStyleMatchup(playerStyle,incomingStyle); return matchup==='strong'?5:matchup==='weak'?-5:0; }
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
export function tierUnlockRequirement(tier:number){return tier<=1?null:{bossId:Object.values(DUNGEONS).find(d=>d.tier===tier-1)?.bossId??'',attackLevel:(tier-1)*10};}
export function isTierUnlocked(game:SaveState,tier:number){return tier===1||game.combatProgress.unlockedTiers.includes(tier);}
export function enemyUnlocked(game: SaveState, id: EnemyId) { const enemy = ENEMIES[id]; if(!enemy||!isTierUnlocked(game,enemy.tier))return false;if(enemy.rank==='Light'||enemy.rank==='Normal'||enemy.rank==='Heavy')return true;if(enemy.rank==='Elite')return evaluateRequirements(game,enemy.unlockRequirements);const elite=Object.values(ENEMIES).find(x=>x.tier===enemy.tier&&x.rank==='Elite');return Boolean(elite&&game.combatProgress.eliteFirstKills[elite.id]); }
export function areaUnlocked(game: SaveState, areaId: string) { const area = COMBAT_AREAS[areaId]; if(!area||!isTierUnlocked(game,area.tier))return false;if(area.kind==='area')return true;if(area.kind==='elite')return evaluateRequirements(game,area.unlockRequirements);const elite=Object.values(ENEMIES).find(x=>x.tier===area.tier&&x.rank==='Elite');return Boolean(elite&&game.combatProgress.eliteFirstKills[elite.id]); }
export function getCombatHitChance(accuracy: number, evasion: number) { return hitChance(accuracy, evasion); }
