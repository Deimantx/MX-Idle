import { describe, expect, it } from 'vitest';
import { equipmentCandidateTarget, equipmentSlotTarget } from './equipmentSlotTarget';

describe('equipment screen slot target mapping', () => {
  it.each([
    ['weapon', 'weapon'],
    ['armor', 'armor'],
    ['offhand', 'offhand'],
    ['ring', 'ring'],
    ['necklace', 'necklace'],
    ['cape', 'cape'],
    ['head', 'head'],
    ['hands', 'hands'],
    ['feet', 'feet'],
  ] as const)('routes selected UI slot %s with presentation metadata to canonical %s', (selected, expected) => {
    const labels: Record<string, string> = { weapon:'Weapon', armor:'Armor', offhand:'Off-hand', ring:'Ring', necklace:'Necklace', cape:'Cape', head:'Head', hands:'Hands', feet:'Feet' };
    expect(equipmentCandidateTarget(selected, labels[selected]!, 'combat')).toBe(expected);
  });

  it('uses the shared normalizer for the off-hand display alias and rejects unknown slots', () => {
    expect(equipmentSlotTarget('Off-hand', 'combat')).toBe('offhand');
    expect(equipmentSlotTarget('Legs', 'combat')).toBeNull();
    expect(equipmentCandidateTarget('weapon', 'Armor', 'combat')).toBeNull();
  });

  it('keeps profession tools outside combat slot mapping', () => {
    expect(equipmentSlotTarget('Pickaxe', 'profession')).toBe('miningTool');
    expect(equipmentSlotTarget('Hammer', 'profession')).toBe('smithingHammer');
    expect(equipmentSlotTarget('Rod', 'profession')).toBe('profession');
    expect(equipmentSlotTarget('Tackle', 'profession')).toBe('profession');
    expect(equipmentSlotTarget('Knife', 'profession')).toBe('profession');
    expect(equipmentSlotTarget('weapon', 'profession')).toBeNull();
  });
});
