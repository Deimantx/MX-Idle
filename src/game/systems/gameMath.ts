import { MINING_DEPOSITS, MINING_STAGE_MODEL } from '../content/mining/miningContent';
import { PROVISIONAL_MASTERY_XP_CURVE } from '../content/progression/provisionalCurves';
import { PROVISIONAL_FIRST_SLICE_XP_CURVE } from '../content/firstSlice';
import type { DepositId, MasteryProgress } from '../types/gameTypes';

export function getDepositStageDensity(stage: number, deposit: DepositId) { return Math.ceil(MINING_DEPOSITS[deposit].baseDensity * MINING_STAGE_MODEL[stage]!.densityMultiplier); }
export function stageDensity(stage: number, deposit: DepositId | number = 'mining.deposit.copper_vein') { return getDepositStageDensity(stage, typeof deposit === 'number' ? 'mining.deposit.copper_vein' : deposit); }
export function stageStrikes(stage: number, power = 6, deposit: DepositId = 'mining.deposit.copper_vein') { return Math.ceil(stageDensity(stage, deposit) / power); }
export function nextStage(stage: number, deposit: DepositId = 'mining.deposit.copper_vein') { void deposit; return (stage + 1) % MINING_STAGE_MODEL.length; }
export function getPrimaryExpectedQuantity(stage: number, deposit: DepositId) { return MINING_DEPOSITS[deposit].baseQuantity * MINING_STAGE_MODEL[stage]!.quantityMultiplier; }
export function resolvePrimaryQuantity(expected: number, extraChancePp: number, random: () => number) {
  const baseWhole = Math.floor(expected), baseFraction = expected - baseWhole;
  const modifierWhole = Math.floor(extraChancePp / 100), modifierFraction = (extraChancePp % 100) / 100;
  return baseWhole + modifierWhole + (random() < baseFraction ? 1 : 0) + (random() < modifierFraction ? 1 : 0);
}
export function getMiningMasteryXp(stageOneXp: number, stage: number, modifier = 1) { return stageOneXp * .35 * MINING_STAGE_MODEL[stage]!.masteryMultiplier * modifier; }
export function getCoreMaterialChance(baseChance: number, stage: number, stageMultipliers: readonly number[], masteryLevel = 1) { return baseChance * (stageMultipliers[stage] ?? 0) * (masteryLevel >= 75 ? 1.15 : 1); }
export function getMiningPower(basePower: number, masteryLevel: number, stage: number) { return basePower * (masteryLevel >= 10 ? 1.03 : 1) * (masteryLevel >= 50 && stage >= 3 ? 1.07 : 1); }
export function getMiningStrikeTime(baseMs: number, speed: number) { return baseMs * (1 - speed); }
export function getMasteryLevel(xp: number) { let level = 1, remaining = xp; while (level < 100 && remaining >= PROVISIONAL_MASTERY_XP_CURVE(level)) { remaining -= PROVISIONAL_MASTERY_XP_CURVE(level); level++; } return level; }
export function masteryProgress(xp: number): MasteryProgress { return { xp, level: getMasteryLevel(xp) }; }
export function masteryXpToNext(mastery: MasteryProgress) { return mastery.level >= 100 ? 0 : PROVISIONAL_MASTERY_XP_CURVE(mastery.level); }
export function masteryXpForLevel(targetLevel: number) { let total = 0; for (let level = 1; level < Math.max(1, Math.min(100, targetLevel)); level++) total += PROVISIONAL_MASTERY_XP_CURVE(level); return total; }
export function masteryXpIntoLevel(mastery: MasteryProgress) { if (mastery.level >= 100) return 0; let spent = 0; for (let level = 1; level < mastery.level; level++) spent += PROVISIONAL_MASTERY_XP_CURVE(level); return Math.max(0, mastery.xp - spent); }
export function hitChance(accuracy: number, evasion: number) { const ratio = accuracy < evasion ? .5 * accuracy / evasion : 1 - .5 * evasion / accuracy; return Math.max(.05, Math.min(.95, ratio)); }
export function damageAfterResistance(raw: number, resistance: number) { return Math.max(1, Math.floor(raw * (1 - Math.max(-25, Math.min(75, resistance)) / 100))); }
export function xpForLevel(level: number) { return PROVISIONAL_FIRST_SLICE_XP_CURVE(level); }
export function maxHitpoints(level: number) { return 90 + level * 10; }
