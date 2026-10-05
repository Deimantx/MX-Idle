import { RECIPES, type Activity } from '../../game/game';

export const fmt = (n: number) => Math.max(0, Math.floor(n)).toLocaleString('en-US');
export const timeText = (ms: number) => `${Math.max(0, ms / 1000).toFixed(1)}s`;
export const activityLabel = (activity: Activity) => activity === 'mining' ? 'Copper Vein' : activity === 'smelting' ? 'Copper Ingot' : activity === 'forging' ? RECIPES.sword.name : 'Road Wolf';
