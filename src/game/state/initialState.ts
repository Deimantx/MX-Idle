import { ENEMIES, MINING_DEPOSITS } from '../content/firstSlice';
import type { DepositRuntimeState, SaveState } from '../types/gameTypes';

const emptySkills = (): SaveState['skills'] => ({ Mining: { xp: 0, level: 1 }, Smithing: { xp: 0, level: 1 }, Fishing: { xp: 0, level: 1 }, Cooking: { xp: 0, level: 1 }, Attack: { xp: 0, level: 1 }, Defence: { xp: 0, level: 1 }, Hitpoints: { xp: 0, level: 1 } });
const freshDeposit = (id: keyof typeof MINING_DEPOSITS): DepositRuntimeState => ({ stageIndex: 0, densityRemaining: MINING_DEPOSITS[id].baseDensity, cyclesCompleted: 0, totalPrimary: 0, totalStagesCompleted: 0 });
export function freshState(now = Date.now()): SaveState {
  const copperId = 'mining.deposit.copper_vein' as const;
  return {
    version: 6, savedAt: now, lastSaved: now, rng: 19790321, page: 'Mining', activity: null, skills: emptySkills(), bank: {}, gold: 0,
    equipped: { miningTool: 'item.mining.worn_pickaxe', smithingHammer: 'item.smithing.worn_smithing_hammer', weapon: null, offhand: null, head: null, armor: null, hands: null, feet: null },
    mining: { deposit: copperId, stage: 0, density: MINING_DEPOSITS[copperId].baseDensity, timer: MINING_DEPOSITS[copperId].strikeMs, cycles: 0, strikes: 0, sessionOutputs: {}, sessionXp: 0, deposits: { [copperId]: freshDeposit(copperId) } },
    smithing: { mode: 'smelting', recipe: 'recipe.smithing.copper_sword', smeltRecipe: 'recipe.smithing.copper_ingot', timer: 0, warm: false, produced: 0, work: 0, heat: 100, reserved: 0, reservedItems: {}, reservedEquipment: null, reheat: false, message: '', category: 'weapons' },
    fishing: { spot: 'fishing.spot.meadow_brook', phase: 'bite', timer: 0, actionSerial: 0, selectedFish: null, rod: 'fishing.tool.old_handline', bait: null, tackle: null, specialization: null, preferredSpecies: null, forceDouble: false, forceFind: false, forceSpecies: null, sessionFish: {}, sessionXp: 0 },
    cooking: { recipe: 'cooking.recipe.grilled_river_fish', phase: 'prep', timer: 0, actionSerial: 0, warm: false, specialization: null, knife: 'cooking.tool.worn_kitchen_knife', forcePreservation: false, forceExtraServing: false, selectedInputs: {}, reservedInputs: [], sessionOutputs: {}, sessionXp: 0, message: '' },
    food: { slots: [{ item: null, enabled: true, reserve: 0 }, { item: null, enabled: true, reserve: 0 }, { item: null, enabled: true, reserve: 0 }], satiety: 0, autoEat: false, threshold: 50, minimumIntervalMs: 5000, autoEatIntervalMs: 0, eatCooldownMs: 0, foodLockMs: 0, stunMs: 0, activePriority: 0, feedback: '' },
    combat: { targetId: 'road-wolf', areaId: 'broken-road', dungeonId: null, encounterIndex: 0, runState: 'idle', stance: 'Slash', pendingStance:'Slash', playerHp: 100, enemyHp: ENEMIES['road-wolf'].maxHp, playerTimer: 2400, enemyTimer: ENEMIES['road-wolf'].intervalMs, sequenceIndex: 0, activePhaseIndex: 0, playerActionSerial: 0, enemyActionSerial: 0, statuses: [], kills: 0, xp: 0, gold: 0, elapsed: 0, respawn: 0, log: [], stamina: 100, queuedSpecial: false, specialMode: 'Auto', defeated: {} },
    combatProgress: { unlockedTiers: [1], bossFirstKills: {}, eliteFirstKills: {}, dungeonCompletions: {}, uniqueHooks: [] },
    objectives: { dismissed: true, firstCycle: false, firstIngot: false, sword: false, helm: false, victory: false },
  };
}
