/** Compatibility barrel. The combat world is data-driven in combatContent.ts. */
export { COMBAT_AREAS, DUNGEONS, DAMAGE_TYPES, ENEMIES, NORMAL_ENEMIES, RESISTANCE_PROFILES, activePhaseIndex, activeSequence, validateCombatContent } from './combatContent';
export type { CombatAreaDefinition, EnemyAction, EnemyDefinition, EnemyLootDrop, EnemyPhase, Requirement } from './combatContent';
import { RESISTANCE_PROFILES } from './resistanceProfiles';
import type { DamageType } from '../../types/gameTypes';
export const RESISTANCES = RESISTANCE_PROFILES['M-C'] as Record<DamageType,number>;
