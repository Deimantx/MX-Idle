import { MINING_DEPOSITS, MINING_STAGE_MODEL } from '../content/mining/miningContent';
import { PROVISIONAL_FIRST_SLICE_XP_CURVE } from '../content/firstSlice';
import type { DepositId } from '../types/gameTypes';

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
export function getCoreMaterialChance(baseChance: number, stage: number, stageMultipliers: readonly number[], toolMultiplier = 1) { return baseChance * (stageMultipliers[stage] ?? 0) * toolMultiplier; }
export function getMiningPower(basePower: number, toolMultiplier = 1) { return basePower * toolMultiplier; }
export function getMiningStrikeTime(baseMs: number, speed: number) { return baseMs * (1 - speed); }
export function hitChance(accuracy: number, evasion: number) { const ratio = accuracy < evasion ? .5 * accuracy / evasion : 1 - .5 * evasion / accuracy; return Math.max(.05, Math.min(.95, ratio)); }
export function damageAfterResistance(raw: number, resistance: number) { return Math.max(1, Math.floor(raw * (1 - Math.max(-25, Math.min(75, resistance)) / 100))); }
export function xpForLevel(level: number) { return PROVISIONAL_FIRST_SLICE_XP_CURVE(level); }
export function maxHitpoints(level: number) { return 90 + level * 10; }
