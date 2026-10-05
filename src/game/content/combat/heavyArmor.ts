export type HeavyArmorId = 'combat.armor.heavy.copper_helm' | 'combat.armor.heavy.copper_armor' | 'combat.armor.heavy.copper_gauntlets' | 'combat.armor.heavy.copper_greaves';
export const HEAVY_ARMOR: Record<HeavyArmorId, { id: HeavyArmorId; name: string; slot: 'head' | 'armor' | 'hands' | 'feet'; smithingLevel: number; physicalResistance: number; evasion: number }> = {
  'combat.armor.heavy.copper_helm': { id: 'combat.armor.heavy.copper_helm', name: 'Copper Helm', slot: 'head', smithingLevel: 5, physicalResistance: 2, evasion: 0 },
  'combat.armor.heavy.copper_armor': { id: 'combat.armor.heavy.copper_armor', name: 'Copper Plate Armor', slot: 'armor', smithingLevel: 5, physicalResistance: 4, evasion: 0 },
  'combat.armor.heavy.copper_gauntlets': { id: 'combat.armor.heavy.copper_gauntlets', name: 'Copper Gauntlets', slot: 'hands', smithingLevel: 5, physicalResistance: 1, evasion: 0 },
  'combat.armor.heavy.copper_greaves': { id: 'combat.armor.heavy.copper_greaves', name: 'Copper Greaves', slot: 'feet', smithingLevel: 5, physicalResistance: 1, evasion: 0 },
};
