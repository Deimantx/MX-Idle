import { activePhaseIndex, activeSequence, DUNGEONS, ENEMIES, type EnemyLootDrop } from '../../content/combat/t1Enemies';
import { MELEE_WEAPONS } from '../../content/combat/meleeWeapons';
import type { ActiveStatus, DamageType, GameEvent, ItemId, SaveState, SkillId } from '../../types/gameTypes';
import { damageAfterResistance, hitChance } from '../gameMath';
import { getCurrentPlayerBasicDamageType, getPlayerAccuracy, getPlayerAttackInterval, getPlayerCritDamageBonus, getPlayerCritRateBonus, getPlayerEvasions, getPlayerMaxHit, getPlayerMaxHitpoints, getPlayerPenetration, getPlayerResistances, getStyleDamageMultiplier, getStyleResistanceAdjustment, getWeaponSpecial } from './combatMath';
import { evaluateCombatTierUnlocks } from './combatProgression';

type CombatOps = { rand: (s: SaveState) => number; gain: (s: SaveState, item: ItemId, n: number, events?: GameEvent[], source?: string) => void; addXp: (s: SaveState, skill: SkillId, amount: number, events?: GameEvent[]) => void };
const line = (s: SaveState, value: string) => { s.combat.log = [value, ...s.combat.log].slice(0, 8); };
export function rollDirectDamage(maxHit:number,multiplier:number,rand:()=>number){return Math.max (1,Math.floor(maxHit*multiplier*(.2+rand()*.8)));}
export function clearEncounterStatuses(s:SaveState){s.combat.statuses=[];}
function addStatus(s: SaveState, status: ActiveStatus) { s.combat.statuses = s.combat.statuses.filter((old) => !(old.type === status.type && old.sourceId === status.sourceId && old.target === status.target)); s.combat.statuses.push(status); }
function enemySelfResistance(s:SaveState,enemyId:string,action:ReturnType<typeof sequenceFor>[number]){if(!action.selfResistancePp)return;addStatus(s,{id:`${enemyId}-guard`,type:'ResistanceUp',sourceId:enemyId,target:'enemy',remainingMs:Number.MAX_SAFE_INTEGER,remainingActions:action.selfResistanceActions ?? 1,magnitude:action.selfResistancePp,damageTypes:action.selfResistanceTypes ?? []});}
function sequenceFor(s: SaveState) { return activeSequence(ENEMIES[s.combat.targetId], s.combat.enemyHp); }
function resetEnemy(s: SaveState) { clearEncounterStatuses(s);const dungeon=s.combat.dungeonId?DUNGEONS[s.combat.dungeonId]:undefined;if(dungeon){const nextId=dungeon.encounters[s.combat.encounterIndex];if(!nextId){s.combat.runState='ended';s.activity=null;return;}s.combat.targetId=nextId;}const enemy = ENEMIES[s.combat.targetId]; s.combat.enemyHp = enemy.maxHp; s.combat.sequenceIndex= 0; s.combat.activePhaseIndex= 0; s.combat.enemyTimer = enemy.intervalMs*(activeSequence(enemy,enemy.maxHp)[0]?.intervalMultiplier ?? 1); s.combat.respawn = 0; }

function rollDrops(s: SaveState, events: GameEvent[], ops: CombatOps, drops: readonly EnemyLootDrop[]) {
  const enemy = ENEMIES[s.combat.targetId];
  for (const drop of drops) if (drop.guaranteed || ops.rand(s) < drop.chance) {
    const amount = drop.min + Math.floor(ops.rand(s) * (drop.max  - drop.min + 1));
    ops.gain(s, drop.item, amount, events, `combat:${enemy.id}`);
  }
}
function rollLoot(s: SaveState, events: GameEvent[], ops: CombatOps, firstKill: boolean) {
  const enemy = ENEMIES[s.combat.targetId];
  rollDrops(s,events,ops,enemy.loot);
  if(firstKill&&enemy.firstKillReward)rollDrops(s,events,ops,enemy.firstKillReward);
  if (enemy.offering && !enemy.loot.some((drop) => drop.item === enemy.offering)) ops.gain(s, enemy.offering, 1, events, `combat:${enemy.id}:offering`);
}
function resolveDeath(s: SaveState, events: GameEvent[]) {
  clearEncounterStatuses(s);
  const enemyId = s.combat.targetId;
  s.combat.runState = 'ended'; s.activity = null; s.combat.enemyHp = ENEMIES[enemyId].maxHp; s.combat.respawn = 0; s.combat.sequenceIndex= 0; s.combat.activePhaseIndex= 0;
  s.combat.playerHp = Math.max (1, Math.floor(getPlayerMaxHitpoints(s) * .35));
  events.push({ type: 'combat-defeat', enemyId }); line(s, 'Defeated. You recover with some strength remaining.');
}
function resolvePlayerDamage(s: SaveState, type: DamageType, multiplier: number, accuracyBonus: number, specialData: ReturnType<typeof getWeaponSpecial>, events:GameEvent[], ops: CombatOps) {
  const c = s.combat, enemy = ENEMIES[c.targetId];
  const accuracy = getPlayerAccuracy(s) * (1 + accuracyBonus);
  const enemyEvasionDown=c.statuses.filter(status=>status.target==='enemy'&&status.type==='EvasionDown').reduce((sum,status)=>sum+(status.magnitude ?? 0),0);
  if (ops.rand(s) > hitChance(accuracy, enemy.evasions.Melee*(1-enemyEvasionDown))) { events.push({type:'combat-feedback',action:'miss'}); line(s, 'Your attack misses.'); return; }
  const components = specialData?.damageComponents;
  const attackComponents = components?.length ? components : [{ type, multiplier }];
  const executeMultiplier=specialData?.executeBonus&&c.enemyHp/enemy.maxHp<.3?1+specialData.executeBonus:1;
  const critical = ops.rand(s) < Math.min(.75, .05 + getPlayerCritRateBonus(s));
  const criticalMultiplier = critical ? 1.5 + getPlayerCritDamageBonus(s) : 1;
  let totalDamage = 0;
  for (const component of attackComponents) {
    const debuff = c.statuses.filter((status) => status.target === 'enemy' && status.type === 'ResistanceDown' && (!status.damageTypes?.length || status.damageTypes.includes(component.type))).reduce((sum, status) => sum + (status.magnitude ?? 0), 0);
    const buff = c.statuses.filter((status) => status.target === 'enemy' && status.type === 'ResistanceUp' && (!status.damageTypes?.length || status.damageTypes.includes(component.type))).reduce((sum,status)=>sum+(status.magnitude ?? 0),0);
    const penetration = getPlayerPenetration(s,component.type);
    const maxHit=getPlayerMaxHit(s,component.type);
    const raw = Math.max (1, Math.floor(maxHit * (.2 + ops.rand(s) * .8) * criticalMultiplier * getStyleDamageMultiplier('Melee',enemy.style) * component.multiplier));
    totalDamage += Math.floor(damageAfterResistance(raw, enemy.resistances[component.type] - debuff + buff - penetration)*executeMultiplier);
  }
  const actualDamage=Math.min(c.enemyHp,totalDamage);c.enemyHp = Math.max (0, c.enemyHp - actualDamage);
  events.push({type:'combat-feedback',action:specialData?'special':critical?'critical':'hit'});
  const attackXp=actualDamage*.4,hpXp=actualDamage*.1,defenceXp=actualDamage*.1;ops.addXp(s, 'Attack', attackXp,events); ops.addXp(s, 'Hitpoints', hpXp,events); ops.addXp(s, 'Defence', defenceXp,events);c.xp+=attackXp+hpXp+defenceXp;
  line(s, `${critical ? 'Critical hit' : 'You hit'} ${enemy.name} for ${actualDamage} ${attackComponents.map((part) => part.type).join('/')}.`);
  if (specialData?.resistanceDown) addStatus(s, { id: 'player-resistance-down', type: 'ResistanceDown', sourceId: 'player', target: 'enemy', remainingMs: 8000, magnitude: specialData.resistanceDown, damageTypes:['Slash','Stab','Crush'] });
  const newPhase = activePhaseIndex (enemy,c.enemyHp), phaseState = newPhase + 1;
  if (phaseState !== c.activePhaseIndex) { c.activePhaseIndex= phaseState; c.sequenceIndex= 0; c.enemyActionSerial++;const phaseSequence=activeSequence(enemy,c.enemyHp);c.enemyTimer=enemy.intervalMs*(phaseSequence[0]?.intervalMultiplier ?? 1);if (newPhase >= 0) { events.push({type:'combat-feedback',action:'phase'}); line(s, `${enemy.name} changes its attack pattern.`); } }
}
function defeatEnemy(s: SaveState, events: GameEvent[], ops: CombatOps) {
  const c = s.combat, enemy = ENEMIES[c.targetId], firstKill=(c.defeated[enemy.id] ?? 0)===0; c.kills++; c.defeated[enemy.id] = (c.defeated[enemy.id] ?? 0) + 1; c.gold += enemy.gold; s.gold += enemy.gold;
  events.push({ type: 'gold-gained', amount: enemy.gold, source: 'combat' }); rollLoot(s, events, ops, firstKill);
  if (enemy.id==='road-wolf'&&!s.objectives.victory) { s.objectives.victory = true; if (!s.objectives.firstStepsCompleteSeen) { events.push({ type: 'first-steps-complete' }); s.objectives.firstStepsCompleteSeen = true; } }
  if(enemy.rank==='Elite'&&firstKill)s.combatProgress.eliteFirstKills[enemy.id]=true;
  if(enemy.rank==='Boss'){const dungeon=c.dungeonId?DUNGEONS[c.dungeonId]:undefined;if(dungeon)s.combatProgress.dungeonCompletions[dungeon.id]=(s.combatProgress.dungeonCompletions[dungeon.id] ?? 0)+1;if(firstKill){s.combatProgress.bossFirstKills[enemy.id]=true;if(enemy.uniqueHook&&!s.combatProgress.uniqueHooks.includes(enemy.uniqueHook))s.combatProgress.uniqueHooks.push(enemy.uniqueHook);evaluateCombatTierUnlocks(s,events);}}
  events.push({ type: 'enemy-killed', enemyId: enemy.id }); line(s, `${enemy.name} defeated.`); clearEncounterStatuses(s);c.respawn = 3000; c.enemyHp = 0;
  if(c.dungeonId){const dungeon=DUNGEONS[c.dungeonId];if(enemy.id===dungeon?.bossId){c.runState='ended';s.activity=null;line(s,`${dungeon.name} cleared. The run is complete.`);}else c.encounterIndex++;}
}
export function forceCurrentEnemyDefeat(s: SaveState, events: GameEvent[], ops: CombatOps) { defeatEnemy(s,events,ops); }
function playerAttack(s: SaveState, events: GameEvent[], ops: CombatOps) {
  const c = s.combat, spec = getWeaponSpecial(s);
  const stun=c.statuses.find(status=>status.target==='player'&&status.type==='Stun');
  if (s.food.stunMs > 0 || stun) { line(s, 'You are stunned and lose your action.'); c.playerTimer = Math.max (1000,stun?.remainingMs ?? 0); c.playerActionSerial++; c.pendingStance=c.stance; return; }
  const chilled=Math.max (0,...c.statuses.filter(status=>status.target==='player'&&status.type==='Chill').map(status=>status.magnitude ?? 0));
  const useSpecial=c.specialMode!=='Off'&&Boolean(spec)&&(c.queuedSpecial||c.specialMode==='Auto')&&c.stamina>=(spec?.cost ?? Infinity);
  if(useSpecial&&spec){c.stamina-=spec.cost;c.queuedSpecial=false;resolvePlayerDamage(s,spec.type,spec.multiplier,spec.accuracy,spec,events,ops);}
  else { if(c.queuedSpecial&&spec&&c.stamina<spec.cost)c.queuedSpecial=false;const current=s.equipped.weapon?MELEE_WEAPONS[s.equipped.weapon as keyof typeof MELEE_WEAPONS]:undefined;const stance=current?.stances.find(x=>x.damageType===c.pendingStance) ?? current?.stances.find(x=>x.id===current?.defaultStance);resolvePlayerDamage(s, getCurrentPlayerBasicDamageType(s), 1, stance?.accuracyMultiplier ?? 0, null,events,ops); }
  c.playerActionSerial++; c.playerTimer = getPlayerAttackInterval(s)*(1+chilled); c.pendingStance=c.stance;
  if (c.enemyHp <= 0) defeatEnemy(s, events, ops);
}
function enemyAttack(s: SaveState, events: GameEvent[], ops: CombatOps) {
  const c = s.combat, enemy = ENEMIES[c.targetId], sequence = sequenceFor(s), action = sequence[c.sequenceIndex  % sequence.length]!;
  const enemyBuffsBeforeAction=c.statuses.filter(status=>status.target==='enemy'&&status.remainingActions!==undefined);
  c.sequenceIndex= (c.sequenceIndex  + 1) % sequence.length; c.enemyActionSerial++;
  const finishAction=()=>{for(const status of enemyBuffsBeforeAction){const remainingActions=(status.remainingActions ?? 1)-1;status.remainingActions=remainingActions;if(remainingActions<=0)c.statuses=c.statuses.filter(x=>x!==status);}const next=sequenceFor(s);c.enemyTimer=enemy.intervalMs*(next[c.sequenceIndex%next.length]?.intervalMultiplier ?? 1);};
  if (c.statuses.some((status) => status.target === 'enemy' && status.type === 'Stun')) { c.statuses = c.statuses.filter((status) => !(status.target === 'enemy' && status.type === 'Stun')); line(s, `${enemy.name} is stunned and loses its action.`);finishAction();return; }
  enemySelfResistance(s,enemy.id,action);
  const requiresHitRoll=action.damageEnabled||action.requiresHitRoll===true;
  if(!requiresHitRoll){line(s,`${enemy.name} uses ${action.name}.`);finishAction();return;}
  const accuracyDown = c.statuses.filter((status) => status.target === 'enemy' && status.type === 'AccuracyDown').reduce((sum, status) => sum + (status.magnitude ?? 0), 0);
  const accuracyChance=hitChance(enemy.accuracy * (action.accuracyMultiplier ?? 1) * (1 - accuracyDown), getPlayerEvasions(s)[enemy.style]);
  let actionType=action.type ?? enemy.basicDamageType;if(action.dynamicTypeRule==='lowestPlayerElementResistance'){actionType=(['Air','Fire','Water','Earth'] as DamageType[]).sort((a,b)=>getPlayerResistances(s)[a]-getPlayerResistances(s)[b])[0]!;}else if(action.dynamicTypeRule==='sequenceElement'){actionType=sequence[c.sequenceIndex]?.type ?? action.type ?? enemy.basicDamageType;}
  const resistances = getPlayerResistances(s), defensiveAdjustment=getStyleResistanceAdjustment('Melee',enemy.style), components = action.damageComponents?.length ? action.damageComponents.map((part,i)=>i===0&&action.dynamicTypeRule?{...part,type:actionType}:part) : [{ type: actionType, multiplier: action.multiplier ?? 1 }];
  const hitDamage:number[]=[];let connected=false;for(let hit=0;hit<(action.hits ?? 1);hit++){if(ops.rand(s)>accuracyChance)continue;connected=true;if(!action.damageEnabled)continue;hitDamage.push(components.reduce((total, part) => total + damageAfterResistance(rollDirectDamage(enemy.maxHit,part.multiplier,()=>ops.rand(s)), resistances[part.type]+defensiveAdjustment-(action.penetrationPp ?? 0)), 0));}
  const damage=hitDamage.reduce((a,b)=>a+b,0);if(!connected){line(s,`${enemy.name} uses ${action.name}, but misses.`);finishAction();return;}
  if(damage>0){c.playerHp -= damage;events.push({type:'combat-feedback',action:'enemy-hit'});} line(s, damage>0?`${enemy.name} uses ${action.name} for ${damage} ${components.map((part) => part.type).join('/')}.`:`${enemy.name} uses ${action.name}.`);
  if (action.status) { const dot=['Bleed','Burn','Poison'].includes(action.status.type);const basis=action.status.type==='Poison'?getPlayerMaxHitpoints(s):damage;const remainingDamage=dot?Math.max (1,Math.floor(basis*action.status.magnitude)):undefined;addStatus(s, { id: `${enemy.id}-${action.status.type}`, type: action.status.type, sourceId: enemy.id, target: 'player', remainingMs: action.status.durationMs, magnitude: action.status.magnitude, damageTypes:action.resistanceDownTypes, tickMs: dot ? 1000 : undefined, tickTimerMs: dot ? 1000 : undefined, stacks: dot ? Math.max (1, Math.floor(action.status.durationMs / 1000)) : undefined, remainingDamage }); if (action.status.type === 'Stun') c.playerTimer = Math.max (c.playerTimer,action.status.durationMs); }
  if(action.healSelfPct)s.combat.enemyHp=Math.min(enemy.maxHp,s.combat.enemyHp+Math.floor(enemy.maxHp*action.healSelfPct/100));
  finishAction();
  if (c.playerHp <= 0) resolveDeath(s, events);
}
function progressStatuses(s: SaveState, step: number) {
  const c = s.combat;
  for (const status of c.statuses) { status.remainingMs -= step; if (status.tickTimerMs !== undefined) status.tickTimerMs -= step; }
  const ticking = c.statuses.filter((status) => status.target === 'player' && ['Bleed', 'Burn', 'Poison'].includes(status.type) && status.tickTimerMs !== undefined);
  for (const status of ticking) while(status.remainingMs>=0&&status.tickTimerMs!==undefined&&status.tickTimerMs<=0&&(status.stacks ?? 1)>0) { const count = status.stacks ?? 1, amount = Math.max (1, Math.ceil((status.remainingDamage ?? 1) / count)); c.playerHp -= amount; status.remainingDamage = Math.max (0, (status.remainingDamage ?? amount) - amount); status.stacks = Math.max (0, count - 1); status.tickTimerMs += status.tickMs ?? 1000; line(s, `${status.type} deals ${amount} damage.`); }
  c.statuses = c.statuses.filter((status) => status.remainingMs > 0);
  return c.playerHp <= 0;
}
export function advanceCombat(s: SaveState, step: number, events: GameEvent[], ops: CombatOps) {
  const c = s.combat; c.elapsed += step; c.stamina = Math.min(100, c.stamina + step / 1000); c.playerTimer -= step; c.enemyTimer -= step; if (c.respawn > 0) c.respawn -= step;
  s.food.satiety = Math.max (0, s.food.satiety - step / 1000); s.food.eatCooldownMs = Math.max (0, s.food.eatCooldownMs - step); s.food.autoEatIntervalMs = Math.max (0, s.food.autoEatIntervalMs - step); s.food.foodLockMs = Math.max (0, s.food.foodLockMs - step); s.food.stunMs = Math.max (0, s.food.stunMs - step);
  if (progressStatuses(s, step)) { resolveDeath(s, events); return; }
  if (s.activity !== 'combat') return;
  if (c.respawn <= 0 && c.enemyHp <= 0 && s.activity==='combat') resetEnemy(s);
  if (c.enemyHp > 0 && c.playerTimer <= 0) playerAttack(s, events, ops);
  if (s.activity === 'combat' && c.enemyHp > 0 && c.enemyTimer <= 0) enemyAttack(s, events, ops);
}
export function combatNextBoundary(s: SaveState) {
  const c = s.combat, enemy = ENEMIES[c.targetId];
  return Math.min(c.playerTimer || getPlayerAttackInterval(s), c.enemyTimer || enemy.intervalMs, c.respawn || Infinity, ...c.statuses.flatMap((status) => [status.remainingMs, status.tickTimerMs ?? Infinity]));
}
