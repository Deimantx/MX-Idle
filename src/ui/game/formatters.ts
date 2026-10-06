import { RECIPES, type Activity } from '../../game/game';

export const fmt = (n: number) => Math.max (0, Math.floor(n)).toLocaleString('en-US');
export const formatActionTime = (ms: number) => `${Math.max (0, ms / 1000).toFixed(1)}s`;
export const formatDuration = (ms: number) => { let seconds = Math.max (0, Math.floor(ms / 1000)); const days = Math.floor(seconds / 86400); seconds %= 86400; const hours = Math.floor(seconds / 3600); seconds %= 3600; const minutes = Math.floor(seconds / 60); seconds %= 60; if (days) return `${days}d ${hours}h`; if (hours) return `${hours}h ${minutes}m`; if (minutes) return `${minutes}m ${seconds}s`; return `${seconds}s`; };
export const timeText = formatActionTime;
export const activityLabel = (activity: Activity) => activity === 'mining' ? 'Mining' : activity === 'smelting' ? 'Copper Ingot' : activity === 'forging' ? RECIPES['recipe.smithing.copper_sword'].name : 'Combat';
