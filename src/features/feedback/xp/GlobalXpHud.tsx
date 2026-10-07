import { useCallback, useEffect, useRef, useState } from 'react';
import type { SaveState, SkillId } from '../../../game/game';
import { xpForLevel } from '../../../game/game';
import { Tip, Icon } from '../../../ui/primitives';
import type { FeedbackSettings, GameFeedbackEvent } from '../feedback.types';
import { XP_ORB_FADE_MS, XP_ORB_IDLE_MS, XP_PULSE_LIFETIME_MS, SKILL_PRESENTATION } from './xpHud.config';
import { applyXpEvent, formatXpAmount, xpEventsForHud, type VisibleSkillXp } from './xpHud.model';

type Timers = { idle?: number; remove?: number; pulse?: number };
const number = (value: number) => value.toLocaleString('en-US', { maximumFractionDigits: 1 });

function SkillTooltip({ game, skillId }: { game: SaveState; skillId: SkillId }) {
  const skill = game.skills[skillId], next = xpForLevel(skill.level), maxed = skill.level >= 100;
  return <div className="xp-skill-tip">
    <header><Icon name={SKILL_PRESENTATION[skillId].icon} size={19}/><div><b>{skillId}</b><small>LEVEL {skill.level}{maxed ? ' · MAX' : ''}</small></div></header>
    <dl><div><dt>Current XP</dt><dd>{number(skill.xp)}</dd></div><div><dt>Next level</dt><dd>{maxed ? 'MAX' : number(next)}</dd></div><div><dt>Remaining</dt><dd>{maxed ? '—' : `${number(Math.max(0, next - skill.xp))} XP`}</dd></div></dl>
  </div>;
}

function XpSkillOrb({ game, entry, settings, onInspect }: { game: SaveState; entry: VisibleSkillXp; settings: FeedbackSettings; onInspect: (skill: SkillId, active: boolean) => void }) {
  const state = game.skills[entry.skillId], threshold = xpForLevel(state.level), maxed = state.level >= 100;
  const progress = maxed ? 1 : Math.max(0, Math.min(1, state.xp / Math.max(1, threshold)));
  const circumference = 2 * Math.PI * 43;
  const latestPulse = entry.pulses[entry.pulses.length - 1];
  const levelUp = settings.levelUpEffects && entry.levelUp && Date.now() - entry.levelUp.startedAt < 1200;
  const presentation = SKILL_PRESENTATION[entry.skillId];
  const label = `${entry.skillId}, level ${state.level}${maxed ? ', maximum level' : ''}, ${number(state.xp)} of ${number(threshold)} XP${maxed ? '' : `, ${number(Math.max(0, threshold - state.xp))} XP to next level`}`;
  return <Tip placement="bottom" delayMs={120} onOpenChange={(open) => onInspect(entry.skillId, open)} className={`xp-orb-tip ${presentation.accent}`} content={<SkillTooltip game={game} skillId={entry.skillId}/> }>
    <div className={`xp-skill-orb ${presentation.accent} ${entry.phase} ${Date.now()-entry.lastGainAt<240?'gaining':''} ${levelUp ? 'leveling' : ''}`} role="img" aria-label={label}>
      <svg className="xp-orb-ring" viewBox="0 0 100 100" shapeRendering="geometricPrecision" aria-hidden="true">
        <circle className="xp-ring-rim" cx="50" cy="50" r="48" />
        <circle className="xp-ring-bead" cx="50" cy="50" r="45" />
        <circle className="xp-ring-track" cx="50" cy="50" r="43" />
        <circle className="xp-ring-progress" cx="50" cy="50" r="43" strokeDasharray={circumference} strokeDashoffset={circumference * (1 - progress)} />
      </svg>
      <span className="xp-orb-core"><Icon name={presentation.icon} size={22}/><b>{state.level}</b></span>
      {latestPulse && settings.showXpNumbers && <span className="xp-gain-pulse" key={latestPulse.id}>+{formatXpAmount(latestPulse.amount)} XP</span>}
      {levelUp && <span className="xp-level-plate" key={`${entry.levelUp!.startedAt}-${entry.levelUp!.to}`}>LEVEL UP <b>{entry.levelUp!.from} → {entry.levelUp!.to}</b></span>}
    </div>
  </Tip>;
}

export function GlobalXpHud({ game, events, settings, reducedMotion }: { game: SaveState; events: GameFeedbackEvent[]; settings: FeedbackSettings; reducedMotion: boolean }) {
  const [skills, setSkills] = useState<VisibleSkillXp[]>([]);
  const seen = useRef(0), timers = useRef(new Map<SkillId, Timers>()), inspected = useRef(new Set<SkillId>()), transitionTimers = useRef(new Set<number>());
  const clear = useCallback((skill: SkillId) => {
    const timer = timers.current.get(skill);
    if (timer) for (const id of Object.values(timer)) if (id !== undefined) window.clearTimeout(id);
    timers.current.set(skill, {});
  }, []);
  const schedule = useCallback((skill: SkillId, idleMs = XP_ORB_IDLE_MS) => {
    clear(skill);
    const entry = timers.current.get(skill)!;
    entry.idle = window.setTimeout(() => {
      if (inspected.current.has(skill)) return;
      setSkills((old) => old.map((item) => item.skillId === skill ? { ...item, phase: 'fading' } : item));
      entry.remove = window.setTimeout(() => { setSkills((old) => old.filter((item) => item.skillId !== skill)); timers.current.delete(skill); }, XP_ORB_FADE_MS);
    }, idleMs);
  }, [clear]);

  useEffect(() => {
    const fresh = events.filter((event) => event.id > seen.current);
    if (!fresh.length) return;
    seen.current = Math.max(...fresh.map((event) => event.id));
    const xpEvents = xpEventsForHud(fresh);
    if (!xpEvents.length) return;
    const touched = new Set<SkillId>();
    for (const event of xpEvents) {
      for (const gain of event.gains ?? []) touched.add(gain.skillId);
      if (event.levelUp) touched.add(event.levelUp.skillId);
    }
    setSkills((old) => xpEvents.reduce(applyXpEvent, old));
    let transition = 0;
    transition = window.setTimeout(() => { transitionTimers.current.delete(transition); setSkills((old) => old.map((entry) => touched.has(entry.skillId) && entry.phase === 'entering' ? { ...entry, phase: 'visible' } : entry)); }, 260);
    transitionTimers.current.add(transition);
    for (const skill of touched) {
      if (!inspected.current.has(skill)) schedule(skill);
      const timer = timers.current.get(skill)!;
      if (timer.pulse !== undefined) window.clearTimeout(timer.pulse);
      timer.pulse = window.setTimeout(() => setSkills((old) => old.map((entry) => entry.skillId === skill ? { ...entry, pulses: entry.pulses.filter((pulse) => Date.now() - pulse.occurredAt < XP_PULSE_LIFETIME_MS) } : entry)), XP_PULSE_LIFETIME_MS);
    }
  }, [events, schedule]);

  useEffect(() => () => { for (const timer of timers.current.values()) for (const id of Object.values(timer)) if (id !== undefined) window.clearTimeout(id); for (const id of transitionTimers.current) window.clearTimeout(id); transitionTimers.current.clear(); timers.current.clear(); }, []);

  const inspect = useCallback((skill: SkillId, active: boolean) => {
    if (active) { inspected.current.add(skill); const timer = timers.current.get(skill); if (timer?.idle !== undefined) window.clearTimeout(timer.idle); if (timer?.remove !== undefined) window.clearTimeout(timer.remove); }
    else if (inspected.current.delete(skill)) schedule(skill, 900);
  }, [schedule]);

  if (!skills.length || (!settings.showXpCircles && !settings.showXpNumbers)) return null;
  if (!settings.showXpCircles) return <div className={`global-xp-hud xp-fallback ${reducedMotion ? 'reduced' : ''}`} aria-live="polite">{skills.flatMap((entry) => [
    ...(entry.pulses.slice(-1).map((pulse) => <span className={`xp-fallback-gain ${SKILL_PRESENTATION[entry.skillId].accent}`} key={pulse.id}><Icon name={SKILL_PRESENTATION[entry.skillId].icon} size={16}/><b>+{formatXpAmount(pulse.amount)} XP</b><small>{entry.skillId}</small></span>)),
    ...(settings.levelUpEffects && entry.levelUp && Date.now() - entry.levelUp.startedAt < 1200 ? [<span className={`xp-fallback-gain level-up-fallback ${SKILL_PRESENTATION[entry.skillId].accent}`} key={`level-${entry.levelUp.startedAt}`}><Icon name={SKILL_PRESENTATION[entry.skillId].icon} size={16}/><b>{entry.skillId} · LEVEL {entry.levelUp.to}</b></span>] : []),
  ])}</div>;
  return <div className={`global-xp-hud ${reducedMotion ? 'reduced' : ''}`} aria-label="Recent skill experience">
    {skills.map((entry) => <XpSkillOrb key={entry.skillId} game={game} entry={entry} settings={settings} onInspect={inspect}/>) }
  </div>;
}
