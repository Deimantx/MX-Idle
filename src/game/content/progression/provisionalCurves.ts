/** Provisional, centralized curve shared by Mining Deposit and Smithing Recipe Mastery. */
export const PROVISIONAL_MASTERY_XP_CURVE = (level: number) => Math.round(15 + Math.max(0, level - 1) * 2);
