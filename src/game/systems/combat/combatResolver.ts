import { activePhaseIndex, activeSequence, ENEMIES, type EnemyLootDrop } from '../../content/combat/t1Enemies';
import { MELEE_WEAPONS } from '../../content/combat/meleeWeapons';
import type { ActiveStatus, DamageType, GameEvent, ItemId, SaveState, SkillId } from '../../types/gameTypes';
import { damageAfterResistance, hitChance, maxHitpoints } from '../gameMath';
import { getPlayerAttackInterval, getPlayerEvasion, getPlayerResistances, getWeaponSpecial } from './combatMath';

type CombatOps = { rand: (s: SaveState) => number; gain: (s: SaveState, item: ItemId, n: number, events?: GameEvent[], source?: string) => void; addXp: (s: SaveState, skill: SkillId, amount: number, events?: GameEvent[]) => void };
const line = (s: SaveState, value: string) => { s.combat.log = [value, ...s.combat.log].slice(0, 8); };
const weapon = (s: SaveState) => s.equipped.weapon && s.equipped.weapon in MELEE_WEAPONS ? MELEE_WEAPONS[s.equipped.weapon as keyof typeof MELEE_WEAPONS] : undefined;
function addStatus(s: SaveState, status: ActiveStatus) { s.combat.statuses = s.combat.statuses.filter((old) => !(old.type === status.type && old.sourceId === status.sourceId && old.target === status.target)); s.combat.statuses.push(status); }
function sequenceFor(s: SaveState) { return activeSequence(ENEMIES[s.combat.targetId], s.combat.enemyHp); }
function resetEnemy(s: SaveState) { const enemy = ENEMIES[s.combat.targetId]; s.combat.enemyHp = enemy.maxHp; s.combat.sequenceIndex = 0; s.combat.activePhaseIndex = 0; s.combat.enemyTimer = enemy.intervalMs; s.combat.respawn = 0; }

function rollDrops(s: SaveState, events: GameEvent[], ops: CombatOps, drops: readonly EnemyLootDrop[]) {
  const enemy = ENEMIES[s.combat.targetId];
  for (const drop of drops) if (drop.guaranteed || ops.rand(s) < drop.chance) {
    const amount = drop.min + Math.floor(ops.rand(s) * (drop.max - drop.min + 1));
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
  const enemyId = s.combat.targetId;
  s.combat.runState = 'ended'; s.activity = null; s.combat.enemyHp = ENEMIES[enemyId].maxHp; s.combat.respawn = 0; s.combat.sequenceIndex = 0; s.combat.activePhaseIndex = 0;
  s.combat.playerHp = Math.max(1, Math.floor(maxHitpoints(s.skills.Hitpoints.level) * .35));
  events.push({ type: 'combat-defeat', enemyId }); line(s, 'Defeated. You recover with some strength remaining.');
}
function resolvePlayerDamage(s: SaveState, type: DamageType, multiplier: number, accuracyBonus: number, specialData: ReturnType<typeof getWeaponSpecial>, ops: CombatOps) {
  const c = s.combat, enemy = ENEMIES[c.targetId], equipped = weapon(s); const accuracyDown = c.statuses.filter((status) => status.target === 'player' && status.type === 'AccuracyDown').reduce((sum, status) => sum + (status.magnitude ?? .08), 0);
  const accuracy = (100 + s.skills.Attack.level * 6 + (equipped?.accuracyBonus ?? 0)) * (1 + accuracyBonus) * (1 - accuracyDown);
  if (ops.rand(s) > hitChance(accuracy, enemy.evasion)) { line(s, 'Your attack misses.'); return; }
  const components = specialData?.damageComponents;
  const attackComponents = components?.length ? components : [{ type, ratio: 1 }];
  const base = (equipped?.power ?? 0) * multiplier * (1 + s.skills.Attack.level / 100);
  const critical = ops.rand(s) < (.05 + (equipped?.critRateBonus ?? 0));
  const criticalMultiplier = critical ? 1.5 * (1 + (equipped?.critDamageBonus ?? 0)) : 1;
  let totalDamage = 0;
  for (const component of attackComponents) {
    const debuff = c.statuses.filter((status) => status.target === 'enemy' && status.type === 'ResistanceDown').reduce((sum, status) => sum + (status.magnitude ?? 0), 0);
    const penetration = equipped?.penetrationType === component.type ? equipped.penetrationPp ?? 0 : 0;
    const raw = Math.max(1, Math.floor(base * component.ratio * criticalMultiplier * (.9 + ops.rand(s) * .2)));
    totalDamage += damageAfterResistance(raw, enemy.resistances[component.type] - debuff - penetration);
  }
  c.enemyHp = Math.max(0, c.enemyHp - totalDamage);
  ops.addXp(s, 'Attack', totalDamage * .4); ops.addXp(s, 'Hitpoints', totalDamage * .1); ops.addXp(s, 'Defence', totalDamage * .1);
  line(s, `${critical ? 'Critical hit' : 'You hit'} ${enemy.name} for ${totalDamage} ${attackComponents.map((part) => part.type).join('/')}.`);
  if (specialData?.resistanceDown) addStatus(s, { id: 'player-resistance-down', type: 'ResistanceDown', sourceId: 'player', target: 'enemy', remainingMs: 8000, magnitude: specialData.resistanceDown });
  const newPhase = activePhaseIndex(enemy,c.enemyHp), phaseState = newPhase + 1;
  if (phaseState !== c.activePhaseIndex) { c.activePhaseIndex = phaseState; c.sequenceIndex = 0; if (newPhase >= 0) line(s, `${enemy.name} changes its attack pattern.`); }
}
function defeatEnemy(s: SaveState, events: GameEvent[], ops: CombatOps) {
  const c = s.combat, enemy = ENEMIES[c.targetId], firstKill=(c.defeated[enemy.id]??0)===0; c.kills++; c.defeated[enemy.id] = (c.defeated[enemy.id] ?? 0) + 1; c.xp += enemy.xp; c.gold += enemy.gold; s.gold += enemy.gold;
  events.push({ type: 'gold-gained', amount: enemy.gold, source: 'combat' }); rollLoot(s, events, ops, firstKill);
  ops.addXp(s, 'Attack', enemy.xp); ops.addXp(s, 'Defence', Math.floor(enemy.xp / 3)); ops.addXp(s, 'Hitpoints', Math.floor(enemy.xp / 3));
  if (!s.objectives.victory) { s.objectives.victory = true; if (!s.objectives.firstStepsCompleteSeen) { events.push({ type: 'first-steps-complete' }); s.objectives.firstStepsCompleteSeen = true; } }
  events.push({ type: 'enemy-killed', enemyId: enemy.id }); line(s, `${enemy.name} defeated.`); c.respawn = 3000; c.enemyHp = 0;
  if (enemy.rank === 'Elite') c.encounterIndex++;
}
export function forceCurrentEnemyDefeat(s: SaveState, events: GameEvent[], ops: CombatOps) { defeatEnemy(s,events,ops); }
function playerAttack(s: SaveState, events: GameEvent[], ops: CombatOps) {
  const c = s.combat, spec = getWeaponSpecial(s);
  if (s.food.stunMs > 0 || c.statuses.some((status) => status.target === 'player' && status.type === 'Stun')) { line(s, 'You are stunned and lose your action.'); c.playerTimer = 1000; c.playerActionSerial++; return; }
  resolvePlayerDamage(s, weapon(s)?.style ?? c.stance, 1, 0, null, ops); c.playerActionSerial++;
  const queued = c.specialMode !== 'Off' && (c.queuedSpecial || (c.specialMode === 'Auto' && Boolean(spec)));
  if (c.enemyHp > 0 && queued && spec && c.stamina >= spec.cost) { c.stamina -= spec.cost; c.queuedSpecial = false; resolvePlayerDamage(s, spec.type, spec.multiplier, spec.accuracy, spec, ops); c.playerActionSerial++; }
  else if (c.queuedSpecial && spec && c.stamina < spec.cost) c.queuedSpecial = false;
  c.playerTimer = getPlayerAttackInterval(s);
  if (c.enemyHp <= 0) defeatEnemy(s, events, ops);
}
function enemyAttack(s: SaveState, events: GameEvent[], ops: CombatOps) {
  const c = s.combat, enemy = ENEMIES[c.targetId], sequence = sequenceFor(s), action = sequence[c.sequenceIndex % sequence.length]!;
  c.sequenceIndex = (c.sequenceIndex + 1) % sequence.length; c.enemyActionSerial++;
  c.enemyTimer = enemy.intervalMs * (sequence[c.sequenceIndex % sequence.length]?.intervalMultiplier ?? 1);
  if (c.statuses.some((status) => status.target === 'enemy' && status.type === 'Stun')) { c.statuses = c.statuses.filter((status) => !(status.target === 'enemy' && status.type === 'Stun')); line(s, `${enemy.name} is stunned and loses its action.`); return; }
  const accuracyDown = c.statuses.filter((status) => status.target === 'enemy' && status.type === 'AccuracyDown').reduce((sum, status) => sum + (status.magnitude ?? .08), 0);
  if (ops.rand(s) > hitChance(enemy.accuracy * (1 - accuracyDown), getPlayerEvasion(s))) { line(s, `${enemy.name} misses.`); return; }
  const resistances = getPlayerResistances(s), components = action.damageComponents?.length ? action.damageComponents : [{ type: action.type, ratio: 1 }];
  const damage = components.reduce((total, part) => total + damageAfterResistance(Math.max(1, Math.floor(enemy.maxHit * action.multiplier * part.ratio * (.72 + ops.rand(s) * .28))), resistances[part.type]), 0);
  c.playerHp -= damage; line(s, `${enemy.name} uses ${action.name} for ${damage} ${components.map((part) => part.type).join('/')}.`);
  if (action.status) { addStatus(s, { id: `${enemy.id}-${action.status.type}`, type: action.status.type, sourceId: enemy.id, target: 'player', remainingMs: action.status.durationMs, magnitude: action.status.magnitude, tickMs: ['Bleed', 'Burn', 'Poison'].includes(action.status.type) ? 1000 : undefined, tickTimerMs: ['Bleed', 'Burn', 'Poison'].includes(action.status.type) ? 1000 : undefined, stacks: ['Bleed', 'Burn', 'Poison'].includes(action.status.type) ? Math.max(1, Math.floor(action.status.durationMs / 1000)) : undefined, remainingDamage: ['Bleed', 'Burn', 'Poison'].includes(action.status.type) ? Math.max(1, Math.floor(damage * action.status.magnitude)) : undefined }); if (action.status.type === 'Stun' || action.status.type === 'Chill') c.playerTimer += action.status.durationMs; }
  if (c.playerHp <= 0) resolveDeath(s, events);
}
function progressStatuses(s: SaveState, step: number) {
  const c = s.combat;
  for (const status of c.statuses) { status.remainingMs -= step; if (status.tickTimerMs !== undefined) status.tickTimerMs -= step; }
  const ticking = c.statuses.find((status) => status.target === 'player' && ['Bleed', 'Burn', 'Poison'].includes(status.type) && status.remainingMs > 0 && status.tickTimerMs !== undefined && status.tickTimerMs <= 0);
  if (ticking) { const count = ticking.stacks ?? 1, amount = Math.max(1, Math.ceil((ticking.remainingDamage ?? 1) / count)); c.playerHp -= amount; ticking.remainingDamage = Math.max(0, (ticking.remainingDamage ?? amount) - amount); ticking.stacks = Math.max(0, count - 1); ticking.tickTimerMs = ticking.tickMs ?? 1000; line(s, `${ticking.type} deals ${amount} damage.`); }
  c.statuses = c.statuses.filter((status) => status.remainingMs > 0);
  return c.playerHp <= 0;
}
export function advanceCombat(s: SaveState, step: number, events: GameEvent[], ops: CombatOps) {
  const c = s.combat; c.elapsed += step; c.stamina = Math.min(100, c.stamina + step * .012); c.playerTimer -= step; c.enemyTimer -= step; if (c.respawn > 0) c.respawn -= step;
  s.food.satiety = Math.max(0, s.food.satiety - step / 1000); s.food.eatCooldownMs = Math.max(0, s.food.eatCooldownMs - step); s.food.autoEatIntervalMs = Math.max(0, s.food.autoEatIntervalMs - step); s.food.foodLockMs = Math.max(0, s.food.foodLockMs - step); s.food.stunMs = Math.max(0, s.food.stunMs - step);
  if (progressStatuses(s, step)) { resolveDeath(s, events); return; }
  if (s.activity !== 'combat') return;
  if (c.respawn <= 0 && c.enemyHp <= 0) resetEnemy(s);
  if (c.enemyHp > 0 && c.playerTimer <= 0) playerAttack(s, events, ops);
  if (s.activity === 'combat' && c.enemyHp > 0 && c.enemyTimer <= 0) enemyAttack(s, events, ops);
}
export function combatNextBoundary(s: SaveState) {
  const c = s.combat, enemy = ENEMIES[c.targetId];
  return Math.min(c.playerTimer || getPlayerAttackInterval(s), c.enemyTimer || enemy.intervalMs, c.respawn || Infinity, ...c.statuses.flatMap((status) => [status.remainingMs, status.tickTimerMs ?? Infinity]));
}
