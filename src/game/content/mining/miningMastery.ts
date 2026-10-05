export const MINING_MASTERY_MILESTONES = [10, 25, 50, 75, 100] as const;
export const MINING_MASTERY_EFFECTS: Record<number, string> = { 10: '+3% Mining Power on this Deposit', 25: '+5 pp Primary extra quantity', 50: '+7% Deep and Core Mining Power', 75: '+15% rare and by-product chance', 100: 'Core has a 10% chance to repeat its Primary reward roll' };
