import { PROVISIONAL_FIRST_SLICE_XP_CURVE, STAGES } from '../content/firstSlice';

export function stageDensity(stage: number) { return Math.ceil(36 * STAGES[stage].density); }
export function stageStrikes(stage: number, power = 6) { return Math.ceil(stageDensity(stage) / power); }
export function nextStage(stage: number) { return (stage + 1) % STAGES.length; }
export function hitChance(accuracy: number, evasion: number) { const ratio = accuracy < evasion ? .5 * accuracy / evasion : 1 - .5 * evasion / accuracy; return Math.max(.05, Math.min(.95, ratio)); }
export function damageAfterResistance(raw: number, resistance: number) { return Math.max(1, Math.floor(raw * (1 - Math.max(-25, Math.min(75, resistance)) / 100))); }
export function xpForLevel(level: number) { return PROVISIONAL_FIRST_SLICE_XP_CURVE(level); }
export function maxHitpoints(level: number) { return 90 + level * 10; }
