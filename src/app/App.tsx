import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { advance, advanceWithEvents, activeSequence, COMBAT_AREAS, DUNGEONS, ENEMIES, ITEMS, FORGING_RECIPES, SMELTING_RECIPES, getDepositStageDensity, selectDeposit, setCombatTarget, setCombatArea, devForceCurrentEnemyDefeat, startActivity, stopActivity, getForgeWorkRequired, xpForLevel, FISHING_RODS, FISHING_SPOTS, COOKING_RECIPES, eatFood, canEquip, MELEE_WEAPONS, freshState, type Activity, type DamageType, type EnemyId, type ForgingRecipeId, type ItemId, type SaveState } from '../game/game';
import { GAME_SCREENS, screenLockReason, type GameScreenId } from './screenRegistry';
import { MiningScreen } from '../features/professions/mining/MiningScreen';
import { SmithingScreen } from '../features/professions/smithing/SmithingScreen';
import { FishingScreen } from '../features/professions/fishing/FishingScreen';
import { CookingScreen } from '../features/professions/cooking/CookingScreen';
import { EquipmentScreen } from '../features/equipment/EquipmentScreen';
import { CombatScreen } from '../features/combat/CombatScreen';
import { BankScreen } from '../features/bank/BankScreen';
import { ActivityHud } from '../ui/game/ActivityHud';
import { GameTopBar } from '../ui/game/GameTopBar';
import { FeedbackLayer } from '../features/feedback/FeedbackLayer';
import { GlobalXpHud } from '../features/feedback/xp/GlobalXpHud';
import { GameFxLayer } from '../features/feedback/GameFxLayer';
import { playFeedbackCue, unlockFeedbackAudio } from '../features/feedback/audioFeedback';
import { DevPanel } from '../features/devtools/DevPanel';
import { FirstStepsPanel } from '../features/onboarding/FirstStepsPanel';
import { Icon, Tip } from '../ui/primitives';
import { saveProfile } from '../game/persistence/profileStorage';
import type { ProfileRecord } from '../game/persistence/profileIndex';
import type { AppSettings } from '../game/persistence/settingsStorage';
import type { GameFeedbackEvent } from '../features/feedback/feedback.types';
import { adaptGameEvents } from '../features/feedback/gameFeedbackAdapter';
import { useActivityTelemetry } from './useActivityTelemetry';
import { MINING_TOOLS } from '../game/content/mining/miningTools';
import { FORGE_HAMMERS } from '../game/content/smithing/smithingTools';
import { FISHING_TACKLE } from '../game/content/fishing/fishingContent';

type Page = GameScreenId;
const xpProgress = (s: SaveState, id: keyof SaveState['skills']) => ({ value: s.skills[id].xp, max: xpForLevel(s.skills[id].level) });
export function GameShell({ profile, initialState, appSettings, onOpenSettings, onBackToProfiles, onRegisterFlush }: { profile: ProfileRecord; initialState: SaveState; appSettings: AppSettings; onOpenSettings: () => void; onBackToProfiles: () => void; onRegisterFlush: (flush: (() => void) | null) => void }) {
  const [game, setGame] = useState<SaveState>(initialState);
  const [screen, setScreen] = useState<Page>((initialState.page as Page) || 'Mining');
  const [saveStatus, setSaveStatus] = useState('Saved');
  const [toast, setToast] = useState('');
  const [filter, setFilter] = useState('All');
  const [minimized, setMinimized] = useState(initialState.objectives.dismissed);
  const [speed, setSpeed] = useState(1);
  const [feedbackEvents, setFeedbackEvents] = useState<GameFeedbackEvent[]>([]);
  const { record: recordTelemetry, metrics } = useActivityTelemetry();
  const eventId = useRef(0);
  const gameRef = useRef(game);
  gameRef.current = game;
  const toastTimer = useRef<number | undefined>();
  const toastSeen = useRef('');
  const soundEventSeen = useRef(0);
  useEffect(() => {
    const handle = window.setInterval(() => {
      const before = gameRef.current, result = advanceWithEvents(before, 250 * speed), next = result.state;
      gameRef.current = next;
      const fresh = adaptGameEvents(result.events, () => ++eventId.current);
      if (fresh.length) setFeedbackEvents((old) => [...old, ...fresh].slice(-24));
      recordTelemetry(before, next, result.events, 250 * speed);
      setGame(next);
    }, 250);
    return () => window.clearInterval(handle);
  }, [speed]);
  const playedMs = useRef(0), activeSince = useRef<number | null>(document.visibilityState === 'visible' ? Date.now() : null);
  const persist = useCallback((value: SaveState) => { try { const now = Date.now(), delta = playedMs.current + (activeSince.current === null ? 0 : now - activeSince.current); saveProfile(profile.slot, value, delta); playedMs.current = 0; activeSince.current = document.visibilityState === 'visible' ? now : null; setSaveStatus('Saved'); } catch { setSaveStatus('Save failed'); } }, [profile.slot]);
  useEffect(() => { onRegisterFlush(() => persist(gameRef.current)); return () => onRegisterFlush(null); }, [onRegisterFlush, persist]);
  useEffect(() => { const timer = window.setInterval(() => persist(gameRef.current), 4000); const save = () => persist(gameRef.current); const onVis = () => { if (document.visibilityState === 'hidden') { if (activeSince.current !== null) playedMs.current += Date.now() - activeSince.current; activeSince.current = null; save(); } else if (activeSince.current === null) activeSince.current = Date.now(); }; window.addEventListener('beforeunload', save); document.addEventListener('visibilitychange', onVis); return () => { window.clearInterval(timer); window.removeEventListener('beforeunload', save); document.removeEventListener('visibilitychange', onVis); persist(gameRef.current); }; }, [persist]);
  useEffect(() => { const systems = feedbackEvents.filter((event): event is Extract<GameFeedbackEvent,{type:'system'}> => event.type === 'system' && event.id > Number(toastSeen.current || 0)); const event = systems[systems.length - 1]; if (event && (event.tone === 'error' || event.tone === 'defeat' || event.tone === 'milestone' || appSettings.feedback.systemToasts)) { toastSeen.current = String(event.id); setToast(event.message); window.clearTimeout(toastTimer.current); toastTimer.current = window.setTimeout(() => setToast(''), event.tone === 'milestone' ? 4200 : 2600); } }, [feedbackEvents, appSettings.feedback.systemToasts]);
  const mut = (fn: (s: SaveState) => void) => { setGame((old) => { const s = structuredClone(old); fn(s); s.savedAt = Date.now(); return s; }); };
  const previewFeedback = (kind: 'fishing-xp'|'combat-xp'|'all-skills'|'level-up'|'common-item'|'rare-item'|'unlock'|'error'|'equip'|'mining'|'smithing'|'cooking') => {
    const id = ++eventId.current, occurredAt = Date.now();
    const event: GameFeedbackEvent = kind === 'fishing-xp' ? { id, type:'xp', skillId:'Fishing', amount:12, occurredAt }
      : kind === 'combat-xp' ? { id, type:'xp-batch', gains:[{skillId:'Attack',amount:8},{skillId:'Hitpoints',amount:2},{skillId:'Defence',amount:2}], occurredAt }
      : kind === 'all-skills' ? { id, type:'xp-batch', gains:[{skillId:'Mining',amount:7},{skillId:'Smithing',amount:5},{skillId:'Fishing',amount:12},{skillId:'Cooking',amount:4},{skillId:'Attack',amount:8},{skillId:'Hitpoints',amount:2},{skillId:'Defence',amount:2}], occurredAt }
      : kind === 'level-up' ? { id, type:'level-up', skillId:'Mining', oldLevel:31, newLevel:32, occurredAt }
      : kind === 'common-item' ? { id, type:'item', itemId:'item.mining.copper_ore', amount:3, source:'preview', occurredAt }
      : kind === 'rare-item' ? { id, type:'item', itemId:'item.mining.opal', amount:1, source:'preview', occurredAt }
      : kind === 'unlock' ? { id, type:'system', message:'New waters unlocked', tone:'unlock', occurredAt }
      : kind === 'error' ? { id, type:'system', message:'Not enough copper ore', tone:'error', occurredAt }
      : { id, type:'game-feel', screen:kind==='mining'?'Mining':kind==='smithing'?'Smithing':kind==='cooking'?'Cooking':'Equipment', kind, cue:kind==='equip'?'equip':kind==='mining'?'mining-hit':kind==='smithing'?'forge-strike':'cook', title:kind==='equip'?'Copper Sword equipped':kind==='mining'?'Ore struck':kind==='smithing'?'Hammer meets the workpiece':'Batch ready', impact:'important', occurredAt };
    setFeedbackEvents((old) => [...old, event].slice(-24));
  };
  const sound = (cue: Parameters<typeof playFeedbackCue>[0]) => playFeedbackCue(cue, appSettings.audio);
  useEffect(() => {
    const unlock = () => { unlockFeedbackAudio(); window.removeEventListener('pointerdown', unlock); window.removeEventListener('keydown', unlock); };
    window.addEventListener('pointerdown', unlock, { once: true }); window.addEventListener('keydown', unlock, { once: true });
    return () => { window.removeEventListener('pointerdown', unlock); window.removeEventListener('keydown', unlock); };
  }, []);
  useEffect(() => {
    const fresh = feedbackEvents.filter((event) => event.id > soundEventSeen.current);
    if (!fresh.length) return;
    soundEventSeen.current = fresh[fresh.length - 1]!.id;
    if (fresh.some((event) => event.type === 'level-up')) sound('level-up');
    else if (fresh.some((event) => event.type === 'item' || event.type === 'gold')) sound('reward');
    else {
      const action = fresh.find((event): event is Extract<GameFeedbackEvent,{type:'game-feel'}> => event.type === 'game-feel' && (event.impact !== 'routine' || event.cue === 'fishing-bite'));
      if (action) sound(action.cue);
    }
  }, [feedbackEvents, appSettings.audio.muted, appSettings.audio.masterVolume]);
  const go = (page: Page) => { setScreen(page); mut((s) => { s.page = page; }); sound('navigate'); };
  const start = (a: Exclude<Activity, null>) => { mut((s) => startActivity(s, a)); sound('start'); };
  const stop = () => { mut(stopActivity); sound('stop'); };
  const chooseSmeltRecipe = (id:string) => mut((s)=>{ if(s.activity==='smelting')return; const recipe=SMELTING_RECIPES[id]; if(recipe&&s.skills.Smithing.level>=recipe.unlockLevel){s.smithing.smeltRecipe=id;s.smithing.warm=false;s.smithing.timer=0;s.smithing.message='';} });
  const buyForgeRecipe = (id: ForgingRecipeId) => mut((s) => { if (s.activity === 'forging' || (s.smithing.reserved && s.smithing.recipe !== id)) return; s.smithing.recipe = id; s.smithing.category = FORGING_RECIPES[id].category; s.smithing.work = getForgeWorkRequired(id); s.smithing.heat = 100; s.smithing.message = ''; });
  const equip = (item: ItemId, slot: 'weapon' | 'head' | 'armor' | 'hands' | 'feet' | 'offhand' | 'miningTool' | 'smithingHammer') => mut((s) => {
    if (s.activity === 'combat') return;
    if (slot !== 'miningTool' && slot !== 'smithingHammer' && !canEquip(s,item,slot,true)) return;
    if ((s.bank[item] ?? 0) < 1) return;
    if (slot === 'weapon' && item in MELEE_WEAPONS && MELEE_WEAPONS[item as keyof typeof MELEE_WEAPONS].handedness === '2H' && s.equipped.offhand) { gainItem(s,s.equipped.offhand); s.equipped.offhand=null; }
    if (slot === 'offhand' && !canEquip(s,item,slot,true)) return;
    if (slot === 'miningTool' && (!(item in MINING_TOOLS)||s.skills.Mining.level<MINING_TOOLS[item as keyof typeof MINING_TOOLS].equipLevel)) return;
    if (slot === 'smithingHammer' && (!(item in FORGE_HAMMERS)||s.skills.Smithing.level<FORGE_HAMMERS[item as keyof typeof FORGE_HAMMERS].equipLevel)) return;
    const old = s.equipped[slot]; if (old) gainItem(s, old as ItemId);
    if (slot === 'miningTool') s.equipped.miningTool = item;
    else if (slot === 'smithingHammer') s.equipped.smithingHammer = item;
    else s.equipped[slot] = item as never;
    if(slot==='weapon'&&item in MELEE_WEAPONS){const definition=MELEE_WEAPONS[item as keyof typeof MELEE_WEAPONS];s.combat.stance=definition.stances.find(x=>x.id===definition.defaultStance)?.damageType ?? definition.style;s.combat.pendingStance=s.combat.stance;}
    const n = (s.bank[item] ?? 1) - 1; if (n) s.bank[item] = n; else delete s.bank[item]; sound('equip');
  });
  const unequip = (slot: 'weapon' | 'head' | 'armor' | 'hands' | 'feet' | 'offhand' | 'miningTool' | 'smithingHammer') => mut((s) => { if(s.activity==='combat')return;const old = s.equipped[slot]; if (old) { gainItem(s, old as ItemId); if (slot === 'miningTool') s.equipped.miningTool = null; else if (slot === 'smithingHammer') s.equipped.smithingHammer = null; else s.equipped[slot] = null; } });
  const grant = (item: ItemId, n = 1) => mut((s) => { gainItem(s, item, n); });
  const grantT1Kit = () => mut((s) => { for (const item of ['item.mining.copper_pickaxe','item.smithing.copper_smithing_hammer','combat.weapon.melee.copper_battle_axe','combat.weapon.melee.copper_mace','combat.offhand.melee.copper_shield','combat.armor.heavy.copper_armor','combat.armor.heavy.copper_gauntlets','combat.armor.heavy.copper_greaves'] as ItemId[]) gainItem(s,item); s.skills.Mining.level = Math.max (5,s.skills.Mining.level); s.skills.Smithing.level = Math.max (5,s.skills.Smithing.level); s.skills.Attack.level = Math.max (5,s.skills.Attack.level); s.skills.Defence.level = Math.max (5,s.skills.Defence.level); });
  const devSetDeposit = (id: SaveState['mining']['deposit']) => mut((s) => { s.skills.Mining.level = Math.max (5, s.skills.Mining.level); selectDeposit(s, id); });
  const devSetStage = (stage: number) => mut((s) => { const runtime = s.mining.deposits[s.mining.deposit]!; runtime.stageIndex= stage; runtime.densityRemaining = getDepositStageDensity(stage, s.mining.deposit); s.mining.stage = stage; s.mining.density = runtime.densityRemaining; });
  const fishingSpot = (id:string) => mut((s)=>{const spot=FISHING_SPOTS.find(x=>x.id===id);if(spot&&s.skills.Fishing.level>=spot.unlockLevel){if(s.activity==='fishing')s.activity=null;s.fishing.spot=id;s.fishing.phase='bite';s.fishing.actionSerial++;s.fishing.selectedFish=null;s.fishing.timer=0;}});
  const fishingChange = (patch:Partial<SaveState['fishing']>) => mut((s)=>{if(s.activity==='fishing'&&('bait'in patch||'tackle'in patch||'specialization'in patch||'preferredSpecies'in patch))return;Object.assign(s.fishing,patch);});
  const bridgeRod = () => mut((s)=>{if(s.activity==='fishing')return;const next=FISHING_RODS.find(x=>x.previousRod===s.fishing.rod);if(!next||s.skills.Fishing.level<next.unlockLevel||!next.bridgeItem)return;const cost=next.bridgeItem as ItemId;if((s.bank[cost] ?? 0)<1)return;s.bank[cost]!--;s.fishing.rod=next.id as ItemId;});
  const buyBait = (id:string) => mut((s)=>{if(s.gold<1)return;s.gold--;gainItem(s,id as ItemId);});
  const chooseCookingRecipe = (id:string) => mut((s)=>{if(s.activity==='cooking')return;const recipe=COOKING_RECIPES.find(x=>x.id===id);if(recipe&&s.skills.Cooking.level>=recipe.unlockLevel){s.cooking.recipe=id;s.cooking.message='';s.cooking.phase='prep';s.cooking.timer=0;}});
  const chooseKitchenKnife = (id:ItemId) => mut((s)=>{if(s.activity==='cooking'||s.cooking.knife===id||(s.bank[id] ?? 0)<1)return;const old=s.cooking.knife;s.bank[id]!--;if(old!=='cooking.tool.worn_kitchen_knife')gainItem(s,old);s.cooking.knife=id;});
  const equipProfessionItem = (id:ItemId) => mut((s)=>{ if(s.activity==='fishing'||s.activity==='cooking')return; if(id.startsWith('fishing.tackle.')){const tackle=FISHING_TACKLE.find(x=>x.id===id);if(tackle&&s.skills.Fishing.level>=tackle.level)s.fishing.tackle=id;return;} if((s.bank[id] ?? 0)<1)return; if(id.startsWith('cooking.tool.')){const old=s.cooking.knife;s.bank[id]!--;if(old!=='cooking.tool.worn_kitchen_knife')gainItem(s,old);s.cooking.knife=id;}else if(id.startsWith('fishing.tool.')){const old=s.fishing.rod;s.bank[id]!--;if(old!=='fishing.tool.old_handline')gainItem(s,old);s.fishing.rod=id;} });
  const setCookingSpecialization = (value:string|null) => mut((s)=>{if(s.activity!=='cooking'&&s.skills.Cooking.level>=35)s.cooking.specialization=value;});
  const devSetFishingSpot = (id:string) => mut((s)=>{s.fishing.spot=id;s.fishing.phase='bite';s.fishing.actionSerial++;s.fishing.selectedFish=null;s.fishing.timer=0;});
  const devSetFishingForce = (species:string|null,double:boolean,find:boolean) => mut((s)=>{s.fishing.forceSpecies=species;s.fishing.forceDouble=double;s.fishing.forceFind=find;});
  const devSetCookingForce = (preserve:boolean,extra:boolean) => mut((s)=>{s.cooking.forcePreservation=preserve;s.cooking.forceExtraServing=extra;});
  const devSetFoodStock = (item:ItemId,amount:number) => mut((s)=>{s.bank[item]=amount;s.food.slots[0]!.item=item;s.food.slots[0]!.enabled=true;});
  const devClearFoodLock = () => mut((s)=>{s.food.foodLockMs=0;s.food.stunMs=0;});
  const buyPantry = (id:ItemId) => mut((s)=>{if(s.gold<1)return;s.gold--;gainItem(s,id);});
  const setFoodSlot = (index:number,item:ItemId|null) => mut((s)=>{const slot=s.food.slots[index];if(!slot||s.activity==='combat')return;if(item&&!COOKING_RECIPES.some(r=>r.output===item&&r.foodValue>0))return;slot.item=item;slot.enabled=true;});
  const setFoodReserve = (index:number,reserve:number) => mut((s)=>{const slot=s.food.slots[index];if(!slot||s.activity==='combat')return;slot.reserve=Math.max (0,Math.floor(Number.isFinite(reserve)?reserve:0));});
  const devSetEnemy=(id:EnemyId)=>mut((s)=>{const enemy=ENEMIES[id];if(!enemy)return;s.combatProgress.unlockedTiers=[...new Set([...s.combatProgress.unlockedTiers,enemy.tier])];if(enemy.rank==='Dungeon'||enemy.rank==='Boss'){const elite=Object.values(ENEMIES).find(x=>x.tier===enemy.tier&&x.rank==='Elite');if(elite)s.combatProgress.eliteFirstKills[elite.id]=true;}if(enemy.rank==='Elite')for(const normal of Object.values(ENEMIES).filter(x=>x.tier===enemy.tier&&['Light','Normal','Heavy'].includes(x.rank)))s.combat.defeated[normal.id]=Math.max (1,s.combat.defeated[normal.id] ?? 0);s.activity=null;s.combat.targetId=id;s.combat.areaId=enemy.areaId;s.combat.dungeonId=null;s.combat.runState='idle';s.combat.enemyHp=enemy.maxHp;s.combat.enemyTimer=enemy.intervalMs*(enemy.sequence[0]?.intervalMultiplier ?? 1);s.combat.sequenceIndex=0;s.combat.activePhaseIndex=0;s.combat.respawn=0;s.combat.statuses=[];});
  const devSetTierProgress=(tier:number,unlocked:boolean)=>mut((s)=>{s.combatProgress.unlockedTiers=unlocked?[...new Set([...s.combatProgress.unlockedTiers,tier])]:s.combatProgress.unlockedTiers.filter(x=>x!==tier);if(!s.combatProgress.unlockedTiers.includes(1))s.combatProgress.unlockedTiers.unshift(1);});
  const devSetBossFirstKill=(id:EnemyId,value:boolean)=>mut((s)=>{if(value)s.combatProgress.bossFirstKills[id]=true;else delete s.combatProgress.bossFirstKills[id];});
  const devResetTierProgress=(tier:number)=>mut((s)=>{for(const enemy of Object.values(ENEMIES).filter(x=>x.tier===tier)){delete s.combat.defeated[enemy.id];delete s.combatProgress.eliteFirstKills[enemy.id];delete s.combatProgress.bossFirstKills[enemy.id];if(enemy.uniqueHook)s.combatProgress.uniqueHooks=s.combatProgress.uniqueHooks.filter(h=>h!==enemy.uniqueHook);}for(const dungeon of Object.values(DUNGEONS).filter(x=>x.tier===tier))delete s.combatProgress.dungeonCompletions[dungeon.id];s.combatProgress.unlockedTiers=s.combatProgress.unlockedTiers.filter(x=>x<tier);if(!s.combatProgress.unlockedTiers.includes(1))s.combatProgress.unlockedTiers.unshift(1);});
  const devSetEnemyHpPercent=(percent:number)=>mut((s)=>{const enemy=ENEMIES[s.combat.targetId];s.combat.enemyHp=enemy.maxHp*Math.max (0,Math.min(100,percent))/100;s.combat.respawn=0;});
  const devSetEnemyPhase=(phase:number)=>mut((s)=>{const enemy=ENEMIES[s.combat.targetId],entry=enemy.phases?.[phase-1];s.combat.enemyHp=entry?Math.max (1,enemy.maxHp*(entry.thresholdPct-1)/100):enemy.maxHp;s.combat.activePhaseIndex=phase;s.combat.sequenceIndex=0;});
  const devSetSequenceStep=(step:number)=>mut((s)=>{const seq=activeSequence(ENEMIES[s.combat.targetId],s.combat.enemyHp);s.combat.sequenceIndex=Math.max (0,Math.min(seq.length-1,step));});
  const devSetArea=(id:string)=>mut((s)=>{const area=COMBAT_AREAS[id];if(!area)return;s.combatProgress.unlockedTiers=[...new Set([...s.combatProgress.unlockedTiers,area.tier])];const elite=Object.values(ENEMIES).find(x=>x.tier===area.tier&&x.rank==='Elite');if(area.kind==='dungeon'&&elite)s.combatProgress.eliteFirstKills[elite.id]=true;for(const normal of Object.values(ENEMIES).filter(x=>x.tier===area.tier&&['Light','Normal','Heavy'].includes(x.rank)))s.combat.defeated[normal.id]=Math.max (1,s.combat.defeated[normal.id] ?? 0);const target=area.enemies[0];if(!target)return;s.activity=null;s.combat.areaId=id;s.combat.dungeonId=area.kind==='dungeon'?id:null;s.combat.encounterIndex=0;s.combat.targetId=target;s.combat.enemyHp=ENEMIES[target]!.maxHp;s.combat.enemyTimer=ENEMIES[target]!.intervalMs*(ENEMIES[target]!.sequence[0]?.intervalMultiplier ?? 1);s.combat.sequenceIndex=0;s.combat.activePhaseIndex=0;s.combat.runState='idle';});
  const devStartDungeon=(id:string,index:number)=>mut((s)=>{const dungeon=DUNGEONS[id],enemy=dungeon?.encounters[index];if(!dungeon||!enemy)return;s.combatProgress.unlockedTiers=[...new Set([...s.combatProgress.unlockedTiers,dungeon.tier])];const elite=Object.values(ENEMIES).find(x=>x.tier===dungeon.tier&&x.rank==='Elite');if(elite)s.combatProgress.eliteFirstKills[elite.id]=true;for(const normal of Object.values(ENEMIES).filter(x=>x.tier===dungeon.tier&&['Light','Normal','Heavy'].includes(x.rank)))s.combat.defeated[normal.id]=Math.max (1,s.combat.defeated[normal.id] ?? 0);s.activity=null;s.combat.targetId=enemy;s.combat.areaId=id;s.combat.dungeonId=id;s.combat.encounterIndex=index;s.combat.enemyHp=ENEMIES[enemy]!.maxHp;s.combat.enemyTimer=ENEMIES[enemy]!.intervalMs*(ENEMIES[enemy]!.sequence[0]?.intervalMultiplier ?? 1);s.combat.sequenceIndex=0;s.combat.activePhaseIndex=0;s.combat.respawn=0;s.combat.runState='idle';startActivity(s,'combat');});
  const devEquipCombatItem=(id:ItemId)=>mut((s)=>{
    const meta=ITEMS[id]?.equipment;if(!meta)return;s.skills[meta.skill].level=Math.max (s.skills[meta.skill].level,meta.requiredLevel);
    if(meta.context==='combat'){
      s.bank[id]=(s.bank[id] ?? 0)+1;const key=meta.slot.toLowerCase().replace('-','');const slot=key==='weapon'?'weapon':key==='offhand'?'offhand':key==='head'?'head':key==='armor'?'armor':key==='hands'?'hands':key==='feet'?'feet':null;
      if(!slot||!canEquip(s,id,slot,true))return;const old=s.equipped[slot];if(old)gainItem(s,old);if(slot==='weapon'&&MELEE_WEAPONS[id as keyof typeof MELEE_WEAPONS]?.handedness==='2H'&&s.equipped.offhand){gainItem(s,s.equipped.offhand);s.equipped.offhand=null;}s.equipped[slot]=id as never;s.bank[id]!--;if(s.bank[id]===0)delete s.bank[id];return;
    }
    if(meta.profession==='Fishing'&&meta.slot==='Tackle'){s.fishing.tackle=id;return;}
    s.bank[id]=(s.bank[id] ?? 0)+1;
    if(meta.profession==='Mining'){const old=s.equipped.miningTool;if(old)gainItem(s,old);s.equipped.miningTool=id;}
    else if(meta.profession==='Smithing'){const old=s.equipped.smithingHammer;if(old)gainItem(s,old);s.equipped.smithingHammer=id;}
    else if(meta.profession==='Fishing'){const old=s.fishing.rod;if(old!=='fishing.tool.old_handline')gainItem(s,old);s.fishing.rod=id;}
    else if(meta.profession==='Cooking'){const old=s.cooking.knife;if(old!=='cooking.tool.worn_kitchen_knife')gainItem(s,old);s.cooking.knife=id;}
    const count=(s.bank[id] ?? 1)-1;if(count)s.bank[id]=count;else delete s.bank[id];
  });
  const eat = (index:number) => mut((s)=>{eatFood(s,index,false,[]);});
  const setAutoEat = (enabled:boolean,threshold:number) => mut((s)=>{s.food.autoEat=enabled;s.food.threshold=Math.max (1,Math.min(99,threshold));});
  const offlineSim = (ms: number) => { setGame((old) => advance(old, ms)); };
  const xp = useMemo(() => ({ mining: xpProgress(game, 'Mining'), smithing: xpProgress(game, 'Smithing') }), [game.skills]);
  const tab = game.smithing.mode;
  const setMode = (m: 'smelting' | 'forging') => mut((s) => { if (s.activity) stopActivity(s); s.smithing.mode = m; s.page = 'Smithing'; });
  const isMotionReduced = appSettings.accessibility.reducedMotion === 'system' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : appSettings.accessibility.reducedMotion === 'on';
  return <div className={`game-shell ${isMotionReduced ? 'reduced-motion' : ''}`}>
    <a className="skip-link" href="#game-content">Skip to game content</a>
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark">M<span>X</span></div><div><b>MX-Idle</b><small>THE FIRST STEPS</small></div></div>
      <div className="nav-caption">ADVENTURER</div>
      <nav aria-label="Game navigation">{GAME_SCREENS.map(({ id: name, icon }) => {
        const lockReason = screenLockReason(name, game), locked = Boolean(lockReason);
        const item = <button key={name} aria-label={lockReason ? `${name}. Locked. ${lockReason}` : name} aria-disabled={locked} className={`nav-item ${screen === name ? 'selected' : ''} ${locked ? 'nav-locked' : ''}`} onClick={() => { if (!locked) go(name); }} aria-current={screen === name ? 'page' : undefined}><Icon name={icon} size={19} /><span>{name}</span>{name === 'Smithing' && !locked && <i className="new-dot" />}{name === 'Combat' && locked && <span className="lock-mark">LOCK</span>}</button>;
        return lockReason ? <Tip key={`${name}-tip`} content={lockReason} focusable={false} className="nav-tip-wrap">{item}</Tip> : item;
      })}</nav>
      <div className="sidebar-bottom"><button className="nav-item profile-nav" onClick={() => { persist(gameRef.current); onBackToProfiles(); }}><Icon name="arrow-left" size={17}/><span>Profile Select</span></button><div className="build-tag">FIRST PLAYABLE <span>0.1</span></div></div>
    </aside>
  <main className="main-frame">
      <GameTopBar game={game} screen={screen} profile={profile} saveStatus={saveStatus} onOpenSettings={onOpenSettings}/>
      <GlobalXpHud game={game} events={feedbackEvents} settings={appSettings.feedback} reducedMotion={isMotionReduced}/>
      <FeedbackLayer events={feedbackEvents} settings={appSettings.feedback} reducedMotion={isMotionReduced} screen={screen}/>
      <GameFxLayer events={feedbackEvents} screen={screen} reducedMotion={isMotionReduced}/>
      <div className="content-scroll" id="game-content" tabIndex={-1}><div className="content-wrap">
        {!game.objectives.victory && <FirstStepsPanel game={game} minimized={minimized} onToggle={() => { setMinimized(!minimized); mut((s) => { s.objectives.dismissed = !s.objectives.dismissed; }); }} />}
        {screen === 'Mining' && <MiningScreen game={game} xp={xp.mining.value} maxXp={xp.mining.max} speedMultiplier={speed} metrics={metrics} select={(id) => mut((s) => { selectDeposit(s, id); })} equipTool={(item) => equip(item, 'miningTool')} start={() => start('mining')} stop={stop} />}
        {screen === 'Smithing' && <SmithingScreen game={game} speedMultiplier={speed} mode={tab} setMode={setMode} start={start} stop={stop} choose={buyForgeRecipe} chooseSmelt={chooseSmeltRecipe} setCategory={(category) => mut((s) => { s.smithing.category = category; })} equipHammer={(item) => equip(item, 'smithingHammer')} />}
        {screen === 'Fishing' && <FishingScreen game={game} start={() => start('fishing')} stop={stop} selectSpot={fishingSpot} change={fishingChange} bridgeRod={bridgeRod} buyBait={buyBait} />}
        {screen === 'Cooking' && <CookingScreen game={game} start={() => start('cooking')} stop={stop} choose={chooseCookingRecipe} buyPantry={buyPantry} chooseKnife={chooseKitchenKnife} setSpecialization={setCookingSpecialization} />}
    {screen === 'Equipment' && <EquipmentScreen game={game} equip={equip} unequip={unequip} equipProfession={equipProfessionItem} />}
        {screen === 'Combat' && <CombatScreen game={game} speedMultiplier={speed} start={() => start('combat')} stop={stop} stance={(stance: DamageType) => mut((s) => { s.combat.stance = stance; s.combat.pendingStance=stance; })} target={(id: EnemyId) => mut((s) => { setCombatTarget(s, id); })} setArea={(id)=>mut((s)=>{setCombatArea(s,id);})} queueSpecial={() => mut((s) => { if (!s.combat.queuedSpecial) s.combat.queuedSpecial = true; })} setSpecialMode={(mode) => mut((s) => { s.combat.specialMode = mode; if (mode === 'Off') s.combat.queuedSpecial = false; })} setFoodSlot={setFoodSlot} setFoodReserve={setFoodReserve} eat={eat} setAutoEat={setAutoEat} />}
        {screen === 'Bank' && <BankScreen game={game} filter={filter} setFilter={setFilter} />}
      </div></div>
      <ActivityHud game={game} stop={stop} onNavigate={go} speed={speed} metrics={metrics} />
    </main>
    {toast && <div className="toast" role="status"><span className="toast-mark"><Icon name="ore" size={18} /></span>{toast}</div>}
    {import.meta.env.DEV && <DevPanel
      game={game} grant={grant} grantT1Kit={grantT1Kit} simulate={offlineSim} setSpeed={setSpeed} previewFeedback={previewFeedback} setTierProgress={devSetTierProgress} setBossFirstKill={devSetBossFirstKill} resetTierProgress={devResetTierProgress} setEnemyHpPercent={devSetEnemyHpPercent} setEnemyPhase={devSetEnemyPhase} setSequenceStep={devSetSequenceStep} startDungeonAt={devStartDungeon}
      setLevel={(skill, level) => mut((s) => { s.skills[skill].level = level; s.skills[skill].xp = 0; })}
      setHp={(hp) => mut((s) => { s.combat.playerHp = hp; })}
      resetEnemy={() => mut((s) => { s.combat.enemyHp = ENEMIES[s.combat.targetId].maxHp; s.combat.respawn = 0; s.combat.sequenceIndex= 0; })}
      setEnemy={devSetEnemy} setArea={devSetArea} grantEquip={devEquipCombatItem} forceEnemyDefeat={() => mut(devForceCurrentEnemyDefeat)}
      setDeposit={devSetDeposit} setStage={devSetStage}
      setForge={(work, heat) => mut((s) => { s.smithing.work = work; s.smithing.heat = heat; })}
      setPreservation={(enabled) => mut((s) => { s.smithing.forcePreservation = enabled; })}
      setFishingSpot={devSetFishingSpot} setFishingForce={devSetFishingForce} setCookingRecipe={chooseCookingRecipe} setCookingForce={devSetCookingForce}
      setSatiety={(value)=>mut((s)=>{s.food.satiety=Math.max (0,Math.min(100,value));})} setFoodStock={devSetFoodStock} clearFoodLock={devClearFoodLock} saveNow={()=>persist(gameRef.current)} reload={()=>window.location.reload()} reset={()=>{if(window.confirm('Reset this profile to a fresh save? This cannot be undone.')){saveProfile(profile.slot,freshState(),0);window.location.reload();}}}
    />}
  </div>;
}

function gainItem(s: SaveState, id: ItemId, n = 1) { s.bank[id] = (s.bank[id] ?? 0) + n; }
