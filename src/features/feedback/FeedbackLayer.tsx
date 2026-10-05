import { useEffect, useRef, useState } from 'react';
import { ENEMIES, ITEMS } from '../../game/content/firstSlice';
import { xpForLevel } from '../../game/systems/gameMath';
import type { SaveState, SkillId } from '../../game/types/gameTypes';
import type { GameFeedbackEvent, FeedbackSettings } from './feedback.types';
import { Icon, Tip } from '../../ui/primitives';
import { ItemMark } from '../../ui/game/ItemDisplay';
import { formatDuration } from '../../ui/game/formatters';

const skillIcon: Record<SkillId, string> = { Mining: 'mining', Smithing: 'anvil', Fishing: 'fish', Cooking: 'food', Attack: 'sword', Defence: 'shield', Hitpoints: 'heart' };
export function FeedbackLayer({ events, game, metrics, settings, reducedMotion }: { events: GameFeedbackEvent[]; game: SaveState; metrics: Partial<Record<SkillId, { xpHour: number; sessionXp: number }>>; settings: FeedbackSettings; reducedMotion: boolean }) {
  const [drops, setDrops] = useState<GameFeedbackEvent[]>([]), [gains, setGains] = useState<Extract<GameFeedbackEvent,{type:'item'|'gold'}>[]>([]);
  const seen = useRef(0);
  useEffect(() => {
    if (!events.length) return;
    const fresh = events.filter((event) => event.id > seen.current);
    if (!fresh.length) return;
    seen.current = Math.max(...fresh.map((event) => event.id));
    const xp = fresh.filter((event) => event.type === 'xp' || event.type === 'level-up');
    const items = fresh.filter((event): event is Extract<GameFeedbackEvent,{type:'item'|'gold'}> => event.type === 'item' || event.type === 'gold');
    if (settings.showXpDrops && xp.length) setDrops((old) => {
      const next = [...old];
      for (const event of xp) {
        const previous = next[next.length - 1];
        if (event.type === 'xp' && previous?.type === 'xp' && previous.skillId === event.skillId && event.occurredAt - previous.occurredAt <= 350) next[next.length - 1] = { ...event, amount: previous.amount + event.amount };
        else next.push(event);
      }
      return next.slice(-8);
    });
    if (settings.showItemGainFeed && items.length) setGains((old) => {
      const next = [...old];
      for (const event of items) {
        const previous = next[next.length - 1];
        if (event.type === 'item' && previous?.type === 'item' && previous.itemId === event.itemId && previous.source === event.source && event.occurredAt - previous.occurredAt <= 350) next[next.length - 1] = { ...event, amount: previous.amount + event.amount };
        else next.push(event);
      }
      return next.slice(-4);
    });
  }, [events, settings.showXpDrops, settings.showItemGainFeed]);
  useEffect(() => {
    if (!drops.length && !gains.length) return;
    const timer = window.setTimeout(() => { setDrops((old) => old.slice(1)); setGains((old) => old.slice(1)); }, 1850);
    return () => window.clearTimeout(timer);
  }, [drops, gains]);
  const skill: SkillId = game.activity === 'mining' ? 'Mining' : game.activity === 'smelting' || game.activity === 'forging' ? 'Smithing' : game.activity === 'combat' ? 'Attack' : game.page === 'Smithing' ? 'Smithing' : game.page === 'Combat' ? 'Attack' : 'Mining';
  const gainGroups = gains.reduce<{ key: string; source: string; events: Extract<GameFeedbackEvent,{type:'item'|'gold'}>[] }[]>((groups, event) => {
    const key = event.source.startsWith('combat:') ? `combat-${event.occurredAt}` : `${event.type}-${event.id}`;
    const group = groups.find((entry) => entry.key === key);
    if (group) group.events.push(event); else groups.push({ key, source: event.source, events: [event] });
    return groups;
  }, []);
  const data = game.skills[skill], remaining = Math.max(0, xpForLevel(data.level) - data.xp), rate = metrics[skill]?.xpHour ?? 0;
  const eta = data.level >= 100 ? 'MAX' : rate > 0 ? formatDuration(remaining / rate * 3_600_000) : 'Calculating…';
  return <>
    {settings.showXpOrb && <div className="xp-orb-anchor"><Tip content={<div className="xp-orb-tip"><b>{skill}</b><span>Level {data.level}</span><span>{data.xp.toLocaleString()} / {xpForLevel(data.level).toLocaleString()} XP</span><span>{remaining.toLocaleString()} XP remaining</span><span>{rate ? `${Math.round(rate).toLocaleString()} XP / hour` : 'XP / hour · Calculating…'}</span><span>Level ETA · {eta}</span><span>Session XP · {(metrics[skill]?.sessionXp ?? 0).toLocaleString()}</span></div>}><div className="xp-orb" aria-label={`${skill} level ${data.level}, ${Math.round(data.xp / xpForLevel(data.level) * 100)} percent to next level`}><svg viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="18"/><circle className="xp-ring" cx="22" cy="22" r="18" style={{ strokeDashoffset: `${113.1 * (1 - data.xp / xpForLevel(data.level))}` }}/></svg><span className="xp-orb-skill-icon"><Icon name={skillIcon[skill]} size={20}/></span><small>{data.level}</small></div></Tip></div>}
    <div className={`xp-drop-stack ${reducedMotion ? 'still' : ''}`} aria-live="polite">{drops.map((event) => event.type === 'xp' ? <div className="xp-drop" key={event.id}><Icon name={skillIcon[event.skillId]} size={18}/><b>+{Number(event.amount.toFixed(1))} XP</b><small>{event.skillId}</small></div> : event.type === 'level-up' && settings.levelUpEffects ? <div className="xp-drop level-up" key={event.id}><Icon name={skillIcon[event.skillId]} size={18}/><b>{event.skillId} Level {event.newLevel}</b></div> : null)}</div>
    <div className={`item-gain-feed ${reducedMotion ? 'still' : ''}`} aria-live="polite">{gainGroups.map((group) => <div className="item-gain" key={group.key}>{group.source.startsWith('combat:') && <small>{ENEMIES[group.source.slice(8) as keyof typeof ENEMIES]?.name.toUpperCase() ?? 'COMBAT'}</small>}{group.events.map((event) => event.type === 'item' ? <span className="gain-reward" key={event.id}><ItemMark id={event.itemId}/><b>+{event.amount} {ITEMS[event.itemId].name}</b></span> : <span className="gain-reward" key={event.id}><Icon name="gold" size={20}/><b>+{event.amount} Gold</b></span>)}</div>)}</div>
  </>;
}
