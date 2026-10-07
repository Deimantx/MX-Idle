import { normalizeEquipmentSlot, type CombatEquipmentSlotKey } from '../../game/game';

export type EquipmentContext = 'combat' | 'profession';
export type EquipmentActionSlot = CombatEquipmentSlotKey | 'miningTool' | 'smithingHammer' | 'profession';

/** Resolve a screen's canonical slot key at the UI/domain boundary. */
export function equipmentSlotTarget(selectedSlot: string, context: EquipmentContext): EquipmentActionSlot | null {
  if (context === 'combat') return normalizeEquipmentSlot(selectedSlot);
  if (selectedSlot === 'Pickaxe') return 'miningTool';
  if (selectedSlot === 'Hammer') return 'smithingHammer';
  if (selectedSlot === 'Rod' || selectedSlot === 'Tackle' || selectedSlot === 'Knife') return 'profession';
  return null;
}

/** Validate presentation metadata while keeping the selected UI slot authoritative. */
export function equipmentCandidateTarget(selectedSlot: string, displaySlot: string, context: EquipmentContext): EquipmentActionSlot | null {
  const target = equipmentSlotTarget(selectedSlot, context);
  if (!target) return null;
  if (context === 'combat' && normalizeEquipmentSlot(displaySlot) !== target) return null;
  return target;
}
