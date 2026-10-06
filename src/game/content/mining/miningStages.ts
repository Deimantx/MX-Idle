export const MINING_STAGE_MODEL = [
  { id: 'outcrop', name: 'Outcrop', densityMultiplier: 1, quantityMultiplier: 1, xpMultiplier: 1, rareMultiplier: 1 },
  { id: 'shallow', name: 'Shallow Vein', densityMultiplier: .78, quantityMultiplier: 1.25, xpMultiplier: 1.4, rareMultiplier: 1.75 },
  { id: 'main', name: 'Main Vein', densityMultiplier: .58, quantityMultiplier: 1.6, xpMultiplier: 2, rareMultiplier: 3 },
  { id: 'deep', name: 'Deep Seam', densityMultiplier: .38, quantityMultiplier: 2.2, xpMultiplier: 3, rareMultiplier: 5.5 },
  { id: 'core', name: 'Core', densityMultiplier: .2, quantityMultiplier: 3.2, xpMultiplier: 4.5, rareMultiplier: 10 },
] as const;
export type MiningStageId = typeof MINING_STAGE_MODEL[number]['id'];
