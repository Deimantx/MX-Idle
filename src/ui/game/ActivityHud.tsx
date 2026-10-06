import { useState } from 'react';
import { ActionProgress } from './ActionProgress';
import { Button, Icon, Modal } from '../primitives';
import { formatActionTime, formatDuration } from './formatters';
import { ENEMIES, activeSequence } from '../../game/content/combat/t1Enemies';
import { FORGING_RECIPES } from '../../game/content/smithing/forgingRecipes';
import { SMELTING_RECIPES } from '../../game/content/smithing/smeltingRecipes';
import { MINING_DEPOSITS } from '../../game/content/mining/miningDeposits';
import { MINING_STAGE_MODEL } from '../../game/content/mining/miningStages';
import { MINING_TOOLS } from '../../game/content/mining/miningTools';
import { estimateForgeCompletion, getPlayerAttackInterval, maxHitpoints, type SaveState, xpForLevel, getMiningStrikeTime, smithingActionTime } from '../../game/game';
import { GAME_SCREENS, screenLockReason, type GameScreenId } from '../../app/screenRegistry';
import type { ItemId, SkillId } from '../../game/types/gameTypes';
import { FISHING_SPOTS, FISH_SPECIES } from '../../game/content/fishing/fishingContent';
import { COOKING_RECIPES } from '../../game/content/cooking/cookingContent';
import { fishingBiteTime, fishingLandingTime, cookingPrepTime, cookingMethodTime } from '../../game/systems/simulation';

function iconForActivity(activity: SaveState['activity']) { return activity === 'mining' ? 'mining' : activity === 'smelting' ? 'ingot' : activity === 'forging' ? 'hammer' : activity === 'fishing' ? 'fish' : activity === 'cooking' ? 'food' : 'combat'; }
type Metric = { sessionXp: number; xpHour: number };
type Metrics = Record<SkillId, Metric> & { key: string; activeMs: number; outputs: Partial<Record<ItemId, number>>; killsHour: number; forged: number };

export function ActivityHud({ game: g, stop, onNavigate, speed, metrics }: {
  game: SaveState; stop: () => void; onNavigate: (page: GameScreenId) => void; speed: number; metrics: Metrics;
}) {
  const [chooserOpen, setChooserOpen] = useState(false);
  const a = g.activity;
  const deposit = MINING_DEPOSITS[g.mining.deposit], enemy = ENEMIES[g.combat.targetId];
  const sequence = activeSequence(enemy, g.combat.enemyHp), tool = MINING_TOOLS[(g.equipped.miningTool ?? 'item.mining.worn_pickaxe') as keyof typeof MINING_TOOLS];
  const recipe = FORGING_RECIPES[g.smithing.recipe], smeltRecipe = SMELTING_RECIPES[g.smithing.smeltRecipe];
  const spot = FISHING_SPOTS.find(value => value.id === g.fishing.spot)!, fish = FISH_SPECIES.find(value => value.id === g.fishing.selectedFish);
  const cookingRecipe = COOKING_RECIPES.find(value => value.id === g.cooking.recipe)!;
  const stageName = MINING_STAGE_MODEL[g.mining.stage]!.name;
  const skill: SkillId | null = a === 'mining' ? 'Mining' : a === 'smelting' || a === 'forging' ? 'Smithing' : a === 'fishing' ? 'Fishing' : a === 'cooking' ? 'Cooking' : a === 'combat' ? 'Attack' : null;
  const currentSkill = skill ? g.skills[skill] : null;
  const rate = skill ? metrics[skill].xpHour : 0;
  const dataStable = metrics.activeMs >= 8000;
  const xpLeft = currentSkill ? Math.max(0, xpForLevel(currentSkill.level) - currentSkill.xp) : 0;
  const eta = currentSkill?.level === 100 ? 'MAX' : dataStable && rate > 0 ? formatDuration(xpLeft / rate * 3_600_000) : null;
  const remaining = a === 'mining' ? g.mining.timer : a === 'smelting' || a === 'forging' ? g.smithing.timer : a === 'fishing' ? g.fishing.timer : a === 'cooking' ? g.cooking.timer : a === 'combat' ? Math.min(g.combat.playerTimer, g.combat.enemyTimer) : 0;
  const duration = a === 'mining' ? getMiningStrikeTime(deposit.strikeMs, tool.speed)
    : a === 'smelting' ? g.smithing.warm ? smeltRecipe.unitTimeMs : smeltRecipe.warmupMs
    : a === 'forging' ? g.smithing.reheat ? 2000 : smithingActionTime(g, g.smithing.recipe)
    : a === 'fishing' ? g.fishing.phase === 'bite' ? fishingBiteTime(g) : fish ? fishingLandingTime(g, fish) : 600
    : a === 'cooking' ? g.cooking.phase === 'prep' ? cookingPrepTime(g) : cookingMethodTime(g)
    : a === 'combat' ? (g.combat.playerTimer <= g.combat.enemyTimer ? getPlayerAttackInterval(g) : enemy.intervalMs * (sequence[g.combat.sequenceIndex % sequence.length]?.intervalMultiplier ?? 1)) : 1;
  const activityTitle = a === 'mining' ? deposit.name : a === 'fishing' ? spot.name : a === 'cooking' ? cookingRecipe.name : a === 'combat' ? enemy.name : a === 'smelting' ? smeltRecipe.name : a === 'forging' ? recipe.name : '';
  const actionName = a === 'combat' ? sequence[g.combat.sequenceIndex % sequence.length]?.name : a === 'mining' ? 'Next swing' : a === 'smelting' ? g.smithing.warm ? 'Smelting unit' : 'Heating the furnace' : a === 'forging' ? g.smithing.reheat ? 'Reheating workpiece' : 'Hammer strike' : a === 'fishing' ? fish ? `Landing ${fish.name}` : 'Waiting for a bite' : a === 'cooking' ? g.cooking.phase === 'prep' ? 'Preparing ingredients' : 'Cooking batch' : '';
  const outputLabel = a === 'mining' ? `${deposit.resourceName}/h` : a === 'smelting' ? `${smeltRecipe.name}/h` : a === 'forging' ? 'Workpiece ETA' : a === 'fishing' ? 'Fish/h' : a === 'cooking' ? cookingRecipe.foodValue ? 'Servings/h' : 'Utility items/h' : 'Kills/h';
  const outputValue = !dataStable ? null : a === 'mining' ? Math.round(metrics.outputs[deposit.primary] ?? 0).toLocaleString()
    : a === 'smelting' ? Math.round(metrics.outputs[smeltRecipe.output.item] ?? 0).toLocaleString()
    : a === 'forging' ? formatDuration(estimateForgeCompletion(g))
    : a === 'fishing' ? Math.round(Object.entries(metrics.outputs).filter(([id]) => id.startsWith('fishing.fish.')).reduce((sum, [, value]) => sum + (value ?? 0), 0)).toLocaleString()
    : a === 'cooking' ? Math.round(metrics.outputs[cookingRecipe.output as ItemId] ?? 0).toLocaleString()
    : metrics.killsHour.toFixed(1);
  return <div className="activity-hud-wrap">
    <footer className={`activity-hud ${a ? 'running' : 'idle'}`}>
      {!a ? <>
        <div className="dock-idle-mark"><Icon name="spark" size={18}/></div>
        <div className="dock-idle-copy"><b>No activity active</b><small>Choose a profession or combat target to begin.</small></div>
        <Button tone="quiet" className="dock-choose" onClick={() => setChooserOpen(true)}>Choose activity <Icon name="spark" size={15}/></Button>
      </> : <>
        <div className="dock-activity"><span className={`dock-icon active ${a}`}><Icon name={iconForActivity(a)} size={19}/></span><div><span className="tiny-label">{a === 'combat' ? 'ENCOUNTER' : 'CURRENT WORK'}</span><b>{activityTitle}</b><small className="dock-phase-name">{a === 'mining' ? `${stageName} · ${g.mining.strikes} strikes` : a === 'smelting' ? g.smithing.warm ? 'Refining a unit' : 'Warming the chamber' : actionName}</small></div></div>
        <div className="dock-progress"><div className="dock-progress-caption"><b>{actionName}</b><span>{formatActionTime(remaining)}</span></div><ActionProgress active remainingMs={remaining} durationMs={duration} phaseKey={`${a}:${g.mining.strikes}:${g.smithing.work}:${g.fishing.phase}:${g.cooking.phase}:${g.combat.playerActionSerial}`} speedMultiplier={speed} label={`${activityTitle} progress`} tone={a === 'combat' ? 'danger' : a === 'mining' ? 'copper' : 'heat'}/></div>
        <div className="dock-metrics">{dataStable ? <><div className="dock-metric"><small>{outputLabel}</small><b>{outputValue ?? '—'}</b></div><div className="dock-metric"><small>{a === 'combat' ? 'Attack XP/h' : `${skill} XP/h`}</small><b>{rate > 0 ? Math.round(rate).toLocaleString() : '—'}</b></div>{a === 'combat' ? <div className="dock-metric"><small>Health</small><b className={g.combat.playerHp / maxHitpoints(g.skills.Hitpoints.level) <= .35 ? 'critical' : ''}>{g.combat.playerHp} / {maxHitpoints(g.skills.Hitpoints.level)}</b></div> : eta && <div className="dock-metric"><small>Next level</small><b>{eta}</b></div>}</> : <span className="dock-collecting">Collecting rate data…</span>}</div>
        <Button tone="quiet" className="dock-stop" onClick={stop}><Icon name="stop" size={14}/>Stop</Button>
      </>}
    </footer>
    {chooserOpen && <Modal title="Choose an activity" eyebrow="ADVENTURER'S PATH" onClose={() => setChooserOpen(false)} className="activity-chooser-modal"><p className="activity-chooser-intro">Select a destination. You can review its tools and targets before starting.</p><div className="activity-chooser-list">{GAME_SCREENS.filter(item => item.id !== 'Bank' && item.id !== 'Equipment').map(({ id, icon }) => {
      const locked = screenLockReason(id, g);
      return <button key={id} disabled={Boolean(locked)} className="activity-choice" onClick={() => { setChooserOpen(false); onNavigate(id); }}><span><Icon name={icon} size={19}/></span><b>{id}</b><small>{locked ?? (id === 'Combat' ? 'Choose an encounter' : 'Review available work')}</small><Icon name={locked ? 'shield' : 'spark'} size={15}/></button>;
    })}</div></Modal>}
  </div>;
}
