import { freshState } from '../state/initialState';
import { ENEMIES } from '../content/combat/t1Enemies';
import { MELEE_WEAPONS } from '../content/combat/meleeWeapons';
import { enemyUnlocked, isValidEquipmentForSlot } from '../systems/combat/combatMath';
import { FORGING_RECIPES } from '../content/smithing/forgingRecipes';
import { SMELTING_RECIPES } from '../content/smithing/smeltingRecipes';
import { ITEMS } from '../content/items/itemRegistry';
import { MINING_DEPOSITS } from '../content/mining/miningDeposits';
import { MINING_STAGE_MODEL } from '../content/mining/miningStages';
import { MINING_TOOLS } from '../content/mining/miningTools';
import { FORGE_HAMMERS } from '../content/smithing/smithingTools';
import { FISHING_RODS, FISHING_SPOTS, FISH_SPECIES, FISHING_TACKLE } from '../content/fishing/fishingContent';
import { COOKING_KNIVES, COOKING_RECIPES } from '../content/cooking/cookingContent';
import { advance, getForgeWorkRequired } from '../systems/simulation';
import { evaluateCombatTierUnlocks } from '../systems/combat/combatProgression';
import { getDepositStageDensity } from '../systems/gameMath';
import { ITEM_IDS, type DepositId, type EnemyId, type ForgingRecipeId, type ItemId, type SaveState } from '../types/gameTypes';

export const SAVE_KEY = 'mx-idle-save-v7';
const LEGACY_ITEMS: Record<string, ItemId> = {
  pickaxe: 'item.mining.worn_pickaxe', copperPickaxe: 'item.mining.copper_pickaxe', hammer: 'item.smithing.worn_smithing_hammer', copperHammer: 'item.smithing.copper_smithing_hammer',
  ore: 'item.mining.copper_ore', stone: 'item.mining.stone', opal: 'item.mining.opal', mineralCoreFragment: 'item.mining.mineral_core_fragment', ingot: 'item.smithing.copper_ingot',
  sword: 'combat.weapon.melee.copper_sword', axe: 'combat.weapon.melee.copper_battle_axe', mace: 'combat.weapon.melee.copper_mace', helm: 'combat.armor.heavy.copper_helm', plate: 'combat.armor.heavy.copper_armor', gloves: 'combat.armor.heavy.copper_gauntlets', greaves: 'combat.armor.heavy.copper_greaves', shield: 'combat.offhand.melee.copper_shield', trophy: 'combat.loot.t1_beast_trophy', 'combat.loot.beast_trophy': 'combat.loot.t1_beast_trophy',
};
const LEGACY_RECIPES: Record<string, ForgingRecipeId> = { sword: 'recipe.smithing.copper_sword', axe: 'recipe.smithing.copper_battle_axe', mace: 'recipe.smithing.copper_mace', helm: 'recipe.smithing.copper_helm', plate: 'recipe.smithing.copper_armor', gloves: 'recipe.smithing.copper_gauntlets', greaves: 'recipe.smithing.copper_greaves', shield: 'recipe.smithing.copper_shield', copperPickaxe: 'recipe.smithing.copper_pickaxe', copperHammer: 'recipe.smithing.copper_smithing_hammer' };
const LEGACY_DEPOSITS: Record<string, DepositId> = { 'copper-vein': 'mining.deposit.copper_vein', 'fieldstone-quarry': 'mining.deposit.fieldstone_quarry', 'mining.deposit.copper_vein': 'mining.deposit.copper_vein', 'mining.deposit.fieldstone_quarry': 'mining.deposit.fieldstone_quarry' };
const toItem = (id: string): ItemId | undefined => Object.prototype.hasOwnProperty.call(ITEMS,id) || (ITEM_IDS as readonly string[]).includes(id) ? id as ItemId : LEGACY_ITEMS[id];
function migratedBank(value: unknown): Partial<Record<ItemId, number>> { const result: Partial<Record<ItemId, number>> = {}; if (!value || typeof value !== 'object' || Array.isArray(value)) return result; for (const [key, amount] of Object.entries(value)) { const item = toItem(key); if (item && typeof amount === 'number' && Number.isFinite(amount) && amount > 0) result[item] = (result[item] ?? 0) + amount; } return result; }
function freshDepositState(id: DepositId) { return { stageIndex: 0, densityRemaining: MINING_DEPOSITS[id].baseDensity, cyclesCompleted: 0, totalPrimary: 0, totalStagesCompleted: 0 }; }
export function decodeSave(raw: string | null, now = Date.now()): { state: SaveState; savedAt: number } | null {
  if (!raw) return null;
  try {
    const envelope = JSON.parse(raw), legacy = envelope?.state;
    if (![1, 2, 3, 4, 5, 6, 7].includes(envelope?.version) || !legacy || typeof legacy !== 'object' || Array.isArray(legacy)) return null;
    const defaults = freshState(now), state = legacy as any, version = Number(state.version ?? 1);
    if (version < 1 || version > 7) return null;
    if (state.skills && (typeof state.skills !== 'object' || Array.isArray(state.skills))) return null;
    if (state.skills && Object.values(state.skills).some((skill: any) => !skill || typeof skill !== 'object' || (skill.xp !== undefined && (!Number.isFinite(skill.xp) || skill.xp < 0)) || (skill.level !== undefined && (!Number.isFinite(skill.level) || skill.level < 1)))) return null;
    if (state.bank && (typeof state.bank !== 'object' || Array.isArray(state.bank) || Object.values(state.bank).some((q: any) => typeof q !== 'number' || !Number.isFinite(q) || q < 0))) return null;
    if (state.activity !== undefined && ![null, 'mining', 'smelting', 'forging', 'fishing', 'cooking', 'combat'].includes(state.activity)) return null;
    const oldMining = state.mining ?? {}, oldSmithing = state.smithing ?? {}, oldCombat = state.combat ?? {}, oldEquipped = state.equipped ?? {};
    if(oldMining&&typeof oldMining==='object')delete oldMining.mastery;
    if(oldSmithing&&typeof oldSmithing==='object')delete oldSmithing.mastery;
    if(state.fishing&&typeof state.fishing==='object')delete state.fishing.mastery;
    if(state.cooking&&typeof state.cooking==='object')delete state.cooking.mastery;
    if(oldCombat&&typeof oldCombat==='object'){delete oldCombat.mastery;delete oldCombat.eliteUnlocked;}
    delete state.mastery;
    const bank = migratedBank(state.bank);
    const oldDeposit=String(oldMining.deposit ?? ''); const depositId = LEGACY_DEPOSITS[oldDeposit] ?? (Object.prototype.hasOwnProperty.call(MINING_DEPOSITS,oldDeposit) ? oldDeposit as DepositId : defaults.mining.deposit);
    const stageIndex= Number.isInteger(oldMining.stage) && oldMining.stage >= 0 && oldMining.stage < MINING_STAGE_MODEL.length ? oldMining.stage : 0;
    const deposits: any = { ...defaults.mining.deposits };
    for (const [key, value] of Object.entries(oldMining.deposits ?? {})) { const id = LEGACY_DEPOSITS[key] ?? (Object.prototype.hasOwnProperty.call(MINING_DEPOSITS,key) ? key as DepositId : undefined); if (id && value && typeof value==='object'&&!Array.isArray(value)) deposits[id] = value; }
    const hasSavedDepositRuntime = Boolean(oldMining.deposits && (oldMining.deposits[depositId] || oldMining.deposits[Object.keys(LEGACY_DEPOSITS).find((key) => LEGACY_DEPOSITS[key] === depositId)!]));
    if (!deposits[depositId]) deposits[depositId] = freshDepositState(depositId);
    const selectedRuntime: any = deposits[depositId];
    selectedRuntime.stageIndex= Math.max (0, Math.min(MINING_STAGE_MODEL.length - 1, Number(hasSavedDepositRuntime ? selectedRuntime.stageIndex  ?? stageIndex: stageIndex)));
    selectedRuntime.densityRemaining = hasSavedDepositRuntime && Number.isFinite(selectedRuntime.densityRemaining) ? Math.max (0, selectedRuntime.densityRemaining) : Number.isFinite(oldMining.density) ? Math.max (0, oldMining.density) : getDepositStageDensity(selectedRuntime.stageIndex, depositId);
    selectedRuntime.cyclesCompleted = hasSavedDepositRuntime && Number.isFinite(selectedRuntime.cyclesCompleted) ? selectedRuntime.cyclesCompleted : Math.max (0, oldMining.cycles ?? 0);
    selectedRuntime.totalPrimary = hasSavedDepositRuntime && Number.isFinite(selectedRuntime.totalPrimary) ? selectedRuntime.totalPrimary : Math.max (0, oldMining.sessionOre ?? 0);
    selectedRuntime.totalStagesCompleted = hasSavedDepositRuntime && Number.isFinite(selectedRuntime.totalStagesCompleted) ? selectedRuntime.totalStagesCompleted : Math.max (0, (oldMining.cycles ?? 0) * MINING_STAGE_MODEL.length + stageIndex);
    for (const runtime of Object.values(deposits) as any[]) { if (!runtime || typeof runtime !== 'object') continue; const cleaned = { stageIndex: Math.max (0, Math.min(MINING_STAGE_MODEL.length - 1, Number(runtime.stageIndex) || 0)), densityRemaining: Math.max (0, Number(runtime.densityRemaining) || 0), cyclesCompleted: Math.max (0, Number(runtime.cyclesCompleted) || 0), totalPrimary: Math.max (0, Number(runtime.totalPrimary) || 0), totalStagesCompleted: Math.max (0, Number(runtime.totalStagesCompleted) || 0) }; Object.keys(runtime).forEach((key) => delete runtime[key]); Object.assign(runtime, cleaned); }
    const oldRecipe = String(oldSmithing.recipe ?? 'sword'), recipe: ForgingRecipeId = LEGACY_RECIPES[oldRecipe] ?? (Object.prototype.hasOwnProperty.call(FORGING_RECIPES,oldRecipe) ? oldRecipe as ForgingRecipeId : defaults.smithing.recipe);
    const candidatePickaxe = toItem(String(oldEquipped.miningTool ?? (oldEquipped.tool === false ? '' : 'pickaxe'))), miningTool = candidatePickaxe && candidatePickaxe in MINING_TOOLS ? candidatePickaxe : (bank['item.mining.copper_pickaxe'] ? 'item.mining.copper_pickaxe' : defaults.equipped.miningTool)!;
    const candidateHammer = toItem(String(oldEquipped.smithingHammer ?? (oldEquipped.hammer === false ? '' : 'hammer'))), smithingHammer = candidateHammer && candidateHammer in FORGE_HAMMERS ? candidateHammer : (bank['item.smithing.copper_smithing_hammer'] ? 'item.smithing.copper_smithing_hammer' : defaults.equipped.smithingHammer)!;
    const equipment = (id: unknown) => typeof id === 'string' ? toItem(id) ?? null : null;
    const combatTarget: EnemyId = oldCombat.targetId && Object.prototype.hasOwnProperty.call(ENEMIES,oldCombat.targetId) ? oldCombat.targetId as EnemyId : defaults.combat.targetId;
    let reservedItems: Partial<Record<ItemId, number>> = {};
    for (const [key, amount] of Object.entries(oldSmithing.reservedItems ?? {})) { const id = toItem(key); if (id && Number.isFinite(amount)) reservedItems[id] = Math.max (0, Number(amount)); }
    if (!Object.keys(reservedItems).length && oldSmithing.reserved > 0 && recipe in FORGING_RECIPES) reservedItems['item.smithing.copper_ingot'] = Math.min(oldSmithing.reserved, FORGING_RECIPES[recipe as keyof typeof FORGING_RECIPES]?.inputs.find((i) => i.item === 'item.smithing.copper_ingot')?.amount ?? 0);
    const s: SaveState = {
      ...defaults, ...state, version: 7, bank,
      skills: { ...defaults.skills, ...(state.skills ?? {}) },
      fishing: { ...defaults.fishing, ...(state.fishing ?? {}), spot:FISHING_SPOTS.some((spot)=>spot.id===state.fishing?.spot)?state.fishing.spot:defaults.fishing.spot, rod: FISHING_RODS.some((rod)=>rod.id===state.fishing?.rod)?state.fishing.rod:defaults.fishing.rod, tackle:FISHING_TACKLE.some((tackle)=>tackle.id===state.fishing?.tackle)?state.fishing.tackle:null, selectedFish:FISH_SPECIES.some((fish)=>fish.id===state.fishing?.selectedFish)?state.fishing.selectedFish:null, bait:toItem(String(state.fishing?.bait ?? ''))?.startsWith('fishing.bait.')?state.fishing.bait:null, actionSerial: Number.isFinite(state.fishing?.actionSerial) ? Math.max (0, state.fishing.actionSerial) : 0, sessionFish: migratedBank(state.fishing?.sessionFish) },
      cooking: { ...defaults.cooking, ...(state.cooking ?? {}), recipe: COOKING_RECIPES.some((item)=>item.id===state.cooking?.recipe)?state.cooking.recipe:defaults.cooking.recipe, knife: COOKING_KNIVES.some((item)=>item.id===state.cooking?.knife)?state.cooking.knife:defaults.cooking.knife, actionSerial: Number.isFinite(state.cooking?.actionSerial) ? Math.max (0, state.cooking.actionSerial) : 0, selectedInputs: { ...defaults.cooking.selectedInputs, ...(state.cooking?.selectedInputs ?? {}) }, reservedInputs: Array.isArray(state.cooking?.reservedInputs) ? state.cooking.reservedInputs.filter((x:any)=>toItem(String(x?.item ?? ''))&&Number.isFinite(x?.amount)&&x.amount>0).map((x:any)=>({item:toItem(String(x.item))!,amount:Math.max (0,Math.floor(x.amount))})) : defaults.cooking.reservedInputs, sessionOutputs: { ...defaults.cooking.sessionOutputs, ...(state.cooking?.sessionOutputs ?? {}) } },
      food: { ...defaults.food, ...(state.food ?? {}), threshold: Math.max (1,Math.min(99,Number.isFinite(state.food?.threshold)?state.food.threshold:defaults.food.threshold)), slots: Array.isArray(state.food?.slots) && state.food.slots.length === 3 ? state.food.slots.map((slot: any) => ({ item: toItem(String(slot?.item ?? '')) ?? null, enabled: slot?.enabled !== false, reserve: Math.max (0, Number(slot?.reserve) || 0) })) : defaults.food.slots },
      equipped: { ...defaults.equipped, miningTool, smithingHammer, weapon: equipment(oldEquipped.weapon), offhand: equipment(oldEquipped.offhand), head: equipment(oldEquipped.head), armor: equipment(oldEquipped.armor), hands: equipment(oldEquipped.hands), feet: equipment(oldEquipped.feet), ring: equipment(oldEquipped.ring), necklace: equipment(oldEquipped.necklace), cape: equipment(oldEquipped.cape) },
      mining: { ...defaults.mining, deposits, deposit: depositId, stage: selectedRuntime.stageIndex, density: selectedRuntime.densityRemaining, cycles: selectedRuntime.cyclesCompleted, strikes: Math.max (0, oldMining.strikes ?? 0), timer: Number.isFinite(oldMining.timer) ? Math.max (0, oldMining.timer) : MINING_DEPOSITS[depositId].strikeMs, sessionOutputs: { ...(oldMining.sessionOutputs ?? {}), ...(oldMining.sessionOre ? { 'item.mining.copper_ore': oldMining.sessionOre } : {}) }, sessionXp: Math.max (0, oldMining.sessionXp ?? 0) },
      smithing: { ...defaults.smithing, ...oldSmithing, recipe, smeltRecipe: oldSmithing.smeltRecipe in SMELTING_RECIPES ? oldSmithing.smeltRecipe : defaults.smithing.smeltRecipe, reservedItems, reservedEquipment: equipment(oldSmithing.reservedEquipment), category: oldSmithing.category ?? (recipe in FORGING_RECIPES ? FORGING_RECIPES[recipe as keyof typeof FORGING_RECIPES].category : 'weapons') },
      combat: { ...defaults.combat, ...oldCombat, targetId: combatTarget, areaId: ENEMIES[combatTarget].areaId, dungeonId: typeof oldCombat.dungeonId==='string'?oldCombat.dungeonId:null, encounterIndex: Number.isFinite(oldCombat.encounterIndex)?Math.max (0,oldCombat.encounterIndex):0, runState: ['idle','active','ended'].includes(oldCombat.runState)?oldCombat.runState:'idle', enemyHp: Number.isFinite(oldCombat.enemyHp) ? Math.max (0,Math.min(ENEMIES[combatTarget].maxHp,oldCombat.enemyHp)) : ENEMIES[combatTarget].maxHp, sequenceIndex: Number.isFinite(oldCombat.sequenceIndex  ?? oldCombat.seq) ? Math.max (0,oldCombat.sequenceIndex  ?? oldCombat.seq) : 0, activePhaseIndex: Number.isFinite(oldCombat.activePhaseIndex)?Math.max (0,oldCombat.activePhaseIndex):0, playerActionSerial: oldCombat.playerActionSerial ?? 0, enemyActionSerial: oldCombat.enemyActionSerial ?? 0, statuses: Array.isArray(oldCombat.statuses) ? oldCombat.statuses.filter((status:any)=>status&&typeof status.type==='string'&&typeof status.remainingMs==='number').map((status: any) => ({ ...status, target: status.target === 'enemy' ? 'enemy' : 'player' })) : [], stamina: oldCombat.stamina ?? 100, queuedSpecial: oldCombat.queuedSpecial ?? false, specialMode: ['Auto','Manual','Off'].includes(oldCombat.specialMode)?oldCombat.specialMode:'Auto', defeated: oldCombat.defeated && typeof oldCombat.defeated==='object' ? oldCombat.defeated : {} },
      combatProgress: (()=>{const old=state.combatProgress&&typeof state.combatProgress==='object'?state.combatProgress:{};const unlocked=Array.isArray(old.unlockedTiers)?old.unlockedTiers.filter((x:any)=>Number.isInteger(x)&&x>=1&&x<=10):[1];if(!unlocked.includes(1))unlocked.unshift(1);const validFlags=(value:any)=>value&&typeof value==='object'&&!Array.isArray(value)?Object.fromEntries(Object.entries(value).filter(([id,v])=>Object.prototype.hasOwnProperty.call(ENEMIES,id)&&v===true)):{};const completions=old.dungeonCompletions&&typeof old.dungeonCompletions==='object'?Object.fromEntries(Object.entries(old.dungeonCompletions).filter(([,v])=>Number.isFinite(v)&&Number(v)>=0).map(([id,v])=>[id,Math.floor(Number(v))])):{};const hooks=Array.isArray(old.uniqueHooks)?old.uniqueHooks.filter((x:any)=>typeof x==='string').map((x:string)=>x==='combat.unique.t3.forgeheart_mace'?'combat.unique.t3.forgeheart_maul':x):[];const eliteFirstKills=validFlags(old.eliteFirstKills);if((oldCombat.defeated?.['ironjaw-boar'] ?? 0)>0)eliteFirstKills['ironjaw-boar']=true;return{unlockedTiers:[...new Set(unlocked)],bossFirstKills:validFlags(old.bossFirstKills),eliteFirstKills,dungeonCompletions:completions,uniqueHooks:[...new Set(hooks)]};})(),
      objectives: { ...defaults.objectives, ...(state.objectives ?? {}) }, rng: Number.isFinite(state.rng) ? state.rng : defaults.rng,
    };
    evaluateCombatTierUnlocks(s);
    if (!s.mining.deposits[depositId]) s.mining.deposits[depositId] = freshDepositState(depositId);
    if (!SMELTING_RECIPES[s.smithing.smeltRecipe]) s.smithing.smeltRecipe = defaults.smithing.smeltRecipe;
    if (s.smithing.reserved && !s.smithing.reservedItems) s.smithing.reservedItems = {};
    if (s.smithing.recipe in FORGING_RECIPES && (!s.smithing.work || s.smithing.work < 0)) s.smithing.work = s.smithing.reserved ? getForgeWorkRequired(s.smithing.recipe) : 0;
    for (const [slot, value] of Object.entries({ weapon:s.equipped.weapon, offhand:s.equipped.offhand, head:s.equipped.head, armor:s.equipped.armor, hands:s.equipped.hands, feet:s.equipped.feet, ring:s.equipped.ring, necklace:s.equipped.necklace, cape:s.equipped.cape })) {
      if (value && !isValidEquipmentForSlot(s, value, slot)) s.equipped[slot as keyof typeof s.equipped] = null;
    }
    const equippedWeapon=s.equipped.weapon?MELEE_WEAPONS[s.equipped.weapon as keyof typeof MELEE_WEAPONS]:undefined;if(equippedWeapon){const fallback=equippedWeapon.stances.find(stance=>stance.id===equippedWeapon.defaultStance)?.damageType ?? equippedWeapon.style;if(!equippedWeapon.stances.some(stance=>stance.damageType===s.combat.stance))s.combat.stance=fallback;if(!equippedWeapon.stances.some(stance=>stance.damageType===s.combat.pendingStance))s.combat.pendingStance=s.combat.stance;}else if(!['Slash','Stab','Crush','Pierce','Puncture','Air','Fire','Water','Earth'].includes(s.combat.stance))s.combat.stance=defaults.combat.stance;
    if (!enemyUnlocked(s, s.combat.targetId)) { s.combat.targetId = defaults.combat.targetId; s.combat.areaId = defaults.combat.areaId; s.combat.enemyHp = ENEMIES[defaults.combat.targetId].maxHp; }
    if (!s.skills.Mining || !s.bank || !s.combat || !Number.isFinite(envelope.savedAt ?? s.savedAt)) return null;
    const savedAt = envelope.savedAt ?? s.savedAt; s.savedAt = savedAt;
    if (!['Mining', 'Smithing', 'Fishing', 'Cooking', 'Equipment', 'Combat', 'Bank'].includes(s.page)) s.page = 'Mining';
    return { state: s, savedAt };
  } catch { return null; }
}
export function loadState(raw: string | null, now = Date.now()): { state: SaveState; awayMs: number; fresh: boolean } { if (!raw) return { state: freshState(now), awayMs: 0, fresh: true }; const decoded = decodeSave(raw, now); if (!decoded) return { state: freshState(now), awayMs: 0, fresh: true }; const awayMs = Math.max (0, now - decoded.savedAt); return { state: advance(decoded.state, awayMs), awayMs, fresh: false }; }
