import { ActionProgress } from './ActionProgress';
import { Button, Icon } from '../primitives';
import { formatActionTime, formatDuration } from './formatters';
import { ENEMIES, activeSequence } from '../../game/content/combat/t1Enemies';
import { FORGING_RECIPES } from '../../game/content/smithing/forgingRecipes';
import { SMELTING_RECIPES } from '../../game/content/smithing/smeltingRecipes';
import { MINING_DEPOSITS } from '../../game/content/mining/miningDeposits';
import { MINING_STAGE_MODEL } from '../../game/content/mining/miningStages';
import { MINING_TOOLS } from '../../game/content/mining/miningTools';
import { estimateForgeCompletion, getPlayerAttackInterval, type SaveState } from '../../game/game';
import type { GameScreenId } from '../../app/screenRegistry';
import type { GameFeedbackEvent } from '../../features/feedback/feedback.types';
import type { AppSettings } from '../../game/persistence/settingsStorage';
import type { ItemId, SkillId } from '../../game/types/gameTypes';
import { FeedbackLayer } from '../../features/feedback/FeedbackLayer';
import { xpForLevel, getMiningStrikeTime, smithingActionTime } from '../../game/game';
import { FISHING_SPOTS, FISH_SPECIES } from '../../game/content/fishing/fishingContent';
import { COOKING_RECIPES } from '../../game/content/cooking/cookingContent';
import { fishingBiteTime, fishingLandingTime, cookingPrepTime, cookingMethodTime } from '../../game/systems/simulation';
function iconForActivity(a: SaveState['activity']) { return a === 'mining' ? 'mining' : a === 'smelting' ? 'ingot' : a === 'forging' ? 'hammer' : a === 'fishing' ? 'fish' : a === 'cooking' ? 'food' : 'combat'; }
type Metric = { sessionXp: number; xpHour: number };
type Metrics = Record<SkillId, Metric> & { key: string; activeMs: number; outputs: Partial<Record<ItemId, number>>; killsHour: number; forged: number };
export function ActivityHud({ game: g, stop, onNavigate, speed, metrics, events, settings, reducedMotion }: { game: SaveState; stop: () => void; onNavigate: (page: GameScreenId) => void; speed: number; metrics: Metrics; events: GameFeedbackEvent[]; settings: AppSettings['feedback']; reducedMotion: boolean }) {
  const a = g.activity, deposit = MINING_DEPOSITS[g.mining.deposit], enemy = ENEMIES[g.combat.targetId], enemySequence=activeSequence(enemy,g.combat.enemyHp), tool = MINING_TOOLS[(g.equipped.miningTool ?? 'item.mining.worn_pickaxe') as keyof typeof MINING_TOOLS], recipe = FORGING_RECIPES[g.smithing.recipe], smeltRecipe = SMELTING_RECIPES[g.smithing.smeltRecipe], spot=FISHING_SPOTS.find(x=>x.id===g.fishing.spot)!, fish=FISH_SPECIES.find(x=>x.id===g.fishing.selectedFish), cookingRecipe=COOKING_RECIPES.find(x=>x.id===g.cooking.recipe)!;
  const stageName = MINING_STAGE_MODEL[g.mining.stage]!.name;
  const phase = a === 'mining' ? `swing · ${g.mining.deposit} · ${g.mining.stage} · ${g.mining.strikes}` : a === 'smelting' ? `smelt · ${g.smithing.warm ? 'unit' : 'warmup'}` : a === 'forging' ? `forge · ${g.smithing.reheat ? 'reheat' : 'strike'} · ${g.smithing.work}` : a === 'fishing' ? `fishing · ${g.fishing.phase} · ${g.fishing.selectedFish ?? 'waiting'}` : a === 'cooking' ? `cooking · ${g.cooking.phase} · ${cookingRecipe.name}` : a === 'combat' ? `combat · ${g.combat.playerActionSerial} · ${g.combat.enemyActionSerial}` : 'idle';
  const remaining = a === 'mining' ? g.mining.timer : a === 'smelting' || a === 'forging' ? g.smithing.timer : a === 'fishing' ? g.fishing.timer : a === 'cooking' ? g.cooking.timer : a === 'combat' ? Math.min(g.combat.playerTimer, g.combat.enemyTimer) : 0;
  const duration = a === 'mining' ? getMiningStrikeTime(deposit.strikeMs, tool.speed) : a === 'smelting' ? g.smithing.warm ? smeltRecipe.unitTimeMs : smeltRecipe.warmupMs : a === 'forging' ? g.smithing.reheat ? 2000 : smithingActionTime(g, g.smithing.recipe) : a === 'fishing' ? g.fishing.phase==='bite'?fishingBiteTime(g):fish?fishingLandingTime(g,fish):600 : a === 'cooking' ? g.cooking.phase==='prep'?cookingPrepTime(g):cookingMethodTime(g) : a === 'combat' ? (g.combat.playerTimer <= g.combat.enemyTimer ? getPlayerAttackInterval(g) : enemy.intervalMs * (enemySequence[g.combat.sequenceIndex  % enemySequence.length]?.intervalMultiplier ?? 1)) : 1;
  const skill: SkillId = a === 'mining' ? 'Mining' : a === 'smelting' || a === 'forging' ? 'Smithing' : a === 'fishing' ? 'Fishing' : a === 'cooking' ? 'Cooking' : 'Attack', rate = metrics[skill].xpHour, xpLeft = Math.max (0, xpForLevel(g.skills[skill].level) - g.skills[skill].xp);
  const eta = g.skills[skill].level >= 100 ? 'MAX' : rate > 0 ? formatDuration(xpLeft / rate * 3_600_000) : 'Calculating…';
  const activityTitle = a === 'mining' ? `Mining · ${deposit.name}` : a === 'fishing' ? `Fishing · ${spot.name}` : a === 'cooking' ? `Cooking · ${cookingRecipe.name}` : a === 'combat' ? `Combat · ${enemy.name}` : a ? `Smithing · ${a === 'smelting' ? smeltRecipe.name : recipe.name}` : 'No activity running';
  const output = a === 'mining' ? `${deposit.resourceName}/h · ${Math.round(metrics.outputs[deposit.primary] ?? 0).toLocaleString()}` : a === 'smelting' ? `${smeltRecipe.name}/h · ${Math.round(metrics.outputs[smeltRecipe.output.item] ?? 0).toLocaleString()}` : a === 'forging' ? `Item ETA · ${metrics.activeMs >= 8000 ? formatDuration(estimateForgeCompletion(g)) : 'Calculating…'}` : a === 'fishing' ? `Fish/h · ${Math.round(Object.entries(metrics.outputs).filter(([id])=>id.startsWith('fishing.fish.')).reduce((n,[,v])=>n+(v ?? 0),0)).toLocaleString()}` : a === 'cooking' ? `${cookingRecipe.foodValue?'Servings':'Utility'} / h · ${Math.round(metrics.outputs[cookingRecipe.output as ItemId] ?? 0).toLocaleString()}` : a === 'combat' ? `Kills/h · ${metrics.killsHour.toFixed(1)}` : '';
  const actionName = a === 'combat' ? enemySequence[g.combat.sequenceIndex  % enemySequence.length]?.name : undefined;
  return <div className="activity-hud-wrap"><FeedbackLayer events={events} game={g} metrics={metrics} settings={settings} reducedMotion={reducedMotion}/><footer className={`activity-hud ${a ? 'running' : ''}`}>
    <div className="dock-activity"><span className={`dock-icon ${a ? 'active' : ''}`}><Icon name={iconForActivity(a)} size={19}/></span><div><span className="tiny-label">PERSONAL ACTIVITY</span><b>{activityTitle}</b><small className="dock-phase-name">{a === 'mining' ? stageName : a === 'smelting' ? g.smithing.warm ? 'Smelting unit' : 'Heating the forge' : a === 'forging' ? g.smithing.reheat ? 'Reheating workpiece' : 'Next hammer strike' : a === 'fishing' ? fish?`Landing ${fish.name}`:'Waiting for a bite' : a === 'cooking' ? g.cooking.phase==='prep'?'Preparing ingredients':'Cooking batch' : a === 'combat' ? actionName : 'Choose an activity'}</small></div></div>
    <div className="dock-progress"><div className="dock-progress-caption"><span>{a ? formatActionTime(remaining) : 'Ready'}</span><span>{a ? 'Action' : ''}</span></div><ActionProgress active={Boolean(a)} remainingMs={remaining} durationMs={duration} phaseKey={phase} speedMultiplier={speed} label={a ? `${activityTitle} progress` : 'Activity progress'} tone={a === 'combat' ? 'danger' : a === 'mining' ? 'copper' : 'heat'}/></div>
    <div className="dock-metrics"><span>{output}</span><span>{rate > 0 ? `${Math.round(rate).toLocaleString()} XP/h` : 'XP/h · Estimating…'}</span><span>Lv. {g.skills[skill].level} · {eta}</span></div>
    {a ? <Button tone="quiet" className="dock-stop" onClick={stop}>Stop <span>Ⅱ</span></Button> : <button className="dock-choose" onClick={() => onNavigate('Fishing')}>Choose activity <span>→</span></button>}
  </footer></div>;
}
