export const SMITHING_MASTERY_MILESTONES = [10, 25, 50, 75, 100] as const;
export const SMITHING_MASTERY_EFFECTS: Record<number, string> = { 10: 'Recipe action time -2%', 25: 'Material Preservation +3 pp', 50: 'Heat loss / warm-up -8%', 75: 'Smithing XP +5%, Mastery XP +5%', 100: 'Recipe action time -5%, Preservation +3 pp' };
