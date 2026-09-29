import type { SkillId } from '../../types/game';
export const SKILLS: Record<SkillId, { id: SkillId; name: string; icon: string }> = {
  mining: { id: 'mining', name: 'Mining', icon: '◆' }, woodcutting: { id: 'woodcutting', name: 'Woodcutting', icon: '♣' },
  fishing: { id: 'fishing', name: 'Fishing', icon: '≈' }, combat: { id: 'combat', name: 'Combat', icon: '⚔' }
};
export const xpForLevel = (level: number) => Math.floor(50 * level * (level + 1));
export function getLevelFromXp(xp: number) { let level = 1; while (xp >= xpForLevel(level + 1)) level++; return level; }
export function getLevelProgress(xp: number) { const level = getLevelFromXp(xp); const start = xpForLevel(level); const next = xpForLevel(level + 1); return { level, current: xp - start, needed: next - start, percent: Math.min(100, ((xp - start) / (next - start)) * 100) }; }
