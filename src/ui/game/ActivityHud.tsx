import { ActionProgress } from './ActionProgress';
import { Button, Icon } from '../primitives';
import { timeText } from './formatters';
import { RECIPES, STAGES, type SaveState } from '../../game/game';
import type { GameScreenId } from '../../app/screenRegistry';
import type { GameFeedbackEvent } from '../../features/feedback/feedback.types';
import type { AppSettings } from '../../game/persistence/settingsStorage';
import type { SkillId } from '../../game/types/gameTypes';
import { FeedbackLayer } from '../../features/feedback/FeedbackLayer';
import { xpForLevel } from '../../game/systems/gameMath';

function iconForActivity(a: SaveState['activity']) { return a === 'mining' ? 'mining' : a === 'smelting' ? 'ingot' : a === 'forging' ? 'hammer' : 'combat'; }
type Metric = { sessionXp: number; xpHour: number };
type Metrics = Record<SkillId, Metric> & { activeMs: number; oreHour: number; ingotHour: number; killsHour: number; forged: number };
export function ActivityHud({ game: g, stop, onNavigate, speed, metrics, events, settings, reducedMotion }: { game: SaveState; stop: () => void; onNavigate: (page: GameScreenId) => void; speed: number; metrics: Metrics; events: GameFeedbackEvent[]; settings: AppSettings['feedback']; reducedMotion: boolean }) {
  const a = g.activity;
  const phase = a === 'mining' ? `swing · layer ${g.mining.stage} · ${g.mining.strikes}` : a === 'smelting' ? `smelt · ${g.smithing.warm ? 'unit' : 'warmup'}` : a === 'forging' ? `forge · ${g.smithing.reheat ? 'reheat' : 'strike'} · ${g.smithing.work}` : a === 'combat' ? `combat · ${g.combat.playerTimer <= g.combat.enemyTimer ? 'player' : 'enemy'} · ${g.combat.elapsed}` : 'idle';
  const remaining = a === 'mining' ? g.mining.timer : a === 'smelting' || a === 'forging' ? g.smithing.timer : a === 'combat' ? Math.min(g.combat.playerTimer, g.combat.enemyTimer) : 0;
  const duration = a === 'mining' ? 2400 : a === 'smelting' ? g.smithing.warm ? 3000 : 3040 : a === 'forging' ? g.smithing.reheat ? 2000 : 2200 : a === 'combat' ? (g.combat.playerTimer <= g.combat.enemyTimer ? 2400 : 3000) : 1;
  const skill: SkillId = a === 'mining' ? 'Mining' : a === 'smelting' || a === 'forging' ? 'Smithing' : 'Attack';
  const rate = metrics[skill].xpHour;
  const xpLeft = Math.max(0, xpForLevel(g.skills[skill].level) - g.skills[skill].xp);
  const eta = g.skills[skill].level >= 100 ? 'MAX' : rate > 0 ? timeText(xpLeft / rate * 3_600_000) : 'Calculating…';
  const activityTitle = a === 'mining' ? 'Mining · Copper Vein' : a === 'combat' ? 'Combat · Road Wolf' : a ? `Smithing · ${a === 'smelting' ? 'Copper Ingot' : RECIPES[g.smithing.recipe].name}` : 'No activity running';
  const output = a === 'mining' ? metrics.oreHour ? `Ore/h · ${Math.round(metrics.oreHour).toLocaleString()}` : 'Ore/h · Estimating…' : a === 'smelting' ? metrics.ingotHour ? `Ingots/h · ${Math.round(metrics.ingotHour).toLocaleString()}` : 'Ingots/h · Estimating…' : a === 'forging' ? `Item ETA · ${metrics.activeMs >= 8000 ? timeText(Math.ceil(g.smithing.work / 5) * 2200) : 'Calculating…'}` : a === 'combat' ? metrics.killsHour ? `Kills/h · ${metrics.killsHour.toFixed(1)}` : 'Kills/h · Estimating…' : '';
  return <div className="activity-hud-wrap"><FeedbackLayer events={events} game={g} metrics={metrics} settings={settings} reducedMotion={reducedMotion}/><footer className={`activity-hud ${a ? 'running' : ''}`}>
    <div className="dock-activity"><span className={`dock-icon ${a ? 'active' : ''}`}><Icon name={iconForActivity(a)} size={19}/></span><div><span className="tiny-label">PERSONAL ACTIVITY</span><b>{activityTitle}</b><small className="dock-phase-name">{a === 'mining' ? STAGES[g.mining.stage].name : a === 'smelting' ? g.smithing.warm ? 'Smelting unit' : 'Heating the forge' : a === 'forging' ? g.smithing.reheat ? 'Reheating workpiece' : 'Next hammer strike' : a === 'combat' ? g.combat.playerTimer <= g.combat.enemyTimer ? 'Your next strike' : g.combat.seq === 2 ? 'Wolf · Rending Fang' : 'Wolf · Bite' : 'Choose an activity'}</small></div></div>
    <div className="dock-progress"><div className="dock-progress-caption"><span>{a ? timeText(remaining) : 'Ready'}</span><span>{a ? 'Action' : ''}</span></div><ActionProgress active={Boolean(a)} remainingMs={remaining} durationMs={duration} phaseKey={phase} speedMultiplier={speed} label={a ? `${activityTitle} progress` : 'Activity progress'} tone={a === 'combat' ? 'danger' : a === 'mining' ? 'copper' : 'heat'}/></div>
    <div className="dock-metrics"><span>{a === 'mining' ? `${output}` : output}</span><span>{rate > 0 ? `${Math.round(rate).toLocaleString()} XP/h` : 'XP/h · Estimating…'}</span><span>Lv. {g.skills[skill].level} · {eta}</span></div>
    {a ? <Button tone="quiet" className="dock-stop" onClick={stop}>Stop <span>Ⅱ</span></Button> : <button className="dock-choose" onClick={() => onNavigate('Mining')}>Choose activity <span>→</span></button>}
  </footer></div>;
}
