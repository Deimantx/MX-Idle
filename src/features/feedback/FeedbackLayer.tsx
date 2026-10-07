import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ENEMIES, ITEMS } from '../../game/content/firstSlice';
import type { GameFeedbackEvent, FeedbackSettings } from './feedback.types';
import { Icon } from '../../ui/primitives';
import { ItemMark } from '../../ui/game/ItemDisplay';
import { GameItemFrame } from '../../ui/game-v2/GameKit';

export function FeedbackLayer({ events, settings, reducedMotion, screen }: { events: GameFeedbackEvent[]; settings: FeedbackSettings; reducedMotion: boolean; screen: string }) {
  const [gains, setGains] = useState<Extract<GameFeedbackEvent,{type:'item'|'gold'}>[]>([]);
  const [feel, setFeel] = useState<Extract<GameFeedbackEvent,{type:'game-feel'}>[]>([]);
  const seen = useRef(0);
  useEffect(() => {
    if (!events.length) return;
    const fresh = events.filter((event) => event.id > seen.current);
    if (!fresh.length) return;
    seen.current = Math.max (...fresh.map((event) => event.id));
    const items = fresh.filter((event): event is Extract<GameFeedbackEvent,{type:'item'|'gold'}> => event.type === 'item' || event.type === 'gold');
    const actions = fresh.filter((event): event is Extract<GameFeedbackEvent,{type:'game-feel'}> => event.type === 'game-feel');
    if (actions.length) setFeel((old) => [...old, ...actions].slice(-3));
    if (settings.showItemGainFeed && items.length) setGains((old) => {
      const next = [...old];
      for (const event of items) {
        const previous = next[next.length - 1];
        if (event.type === 'item' && previous?.type === 'item' && previous.itemId === event.itemId && previous.source === event.source && event.occurredAt - previous.occurredAt <= 350) next[next.length - 1] = { ...event, amount: previous.amount + event.amount };
        else next.push(event);
      }
      return next.slice(-4);
    });
  }, [events, settings.showItemGainFeed]);
  useEffect(() => {
    if (!feel.length) return;
    const timer = window.setTimeout(() => setFeel((old) => old.slice(1)), 1300);
    return () => window.clearTimeout(timer);
  }, [feel]);
  useEffect(() => {
    if (!gains.length) return;
    const head = gains[0];
    const duration = head?.type === 'item' && ITEMS[head.itemId].rarity === 'Rare' ? 3500 : 2200;
    const timer = window.setTimeout(() => setGains((old) => old.slice(1)), duration);
    return () => window.clearTimeout(timer);
  }, [gains]);
  const gainGroups = gains.reduce<{ key: string; source: string; events: Extract<GameFeedbackEvent,{type:'item'|'gold'}>[] }[]>((groups, event) => {
    const key = event.source.startsWith('combat:') ? `combat-${event.occurredAt}` : `${event.type}-${event.id}`;
    const group = groups.find((entry) => entry.key === key);
    if (group) group.events.push(event); else groups.push({ key, source: event.source, events: [event] });
    return groups;
  }, []);
  return <>
    <div className={`item-gain-feed global-reward-feed ${reducedMotion ? 'still' : ''}`} aria-live="polite">{gainGroups.map((group) => <div className={`item-gain ${group.events.some((event)=>event.type==='item'&&ITEMS[event.itemId].rarity==='Rare')?'rare':''}`} key={group.key}>{group.source.startsWith('combat:') && <small>{ENEMIES[group.source.slice(8) as keyof typeof ENEMIES]?.name.toUpperCase() ?? 'COMBAT'}</small>}{group.events.map((event) => event.type === 'item' ? <span className={`gain-reward ${ITEMS[event.itemId].rarity === 'Rare' ? 'gain-reward-rare' : ''}`} key={event.id}>{ITEMS[event.itemId].rarity === 'Rare' ? <GameItemFrame id={event.itemId} size="compact" state="reward" tier={ITEMS[event.itemId].tier}/> : <ItemMark id={event.itemId}/>}<b>+{event.amount} {ITEMS[event.itemId].name}</b></span> : <span className="gain-reward" key={event.id}><Icon name="gold" size={20}/><b>+{event.amount} Gold</b></span>)}</div>)}</div>
    {feel.filter((event) => event.screen === screen).map((event) => {
      const target = document.querySelector(`[data-feedback-anchor="${screen}"]`) ?? document.querySelector(`[data-feedback-screen="${screen}"]`);
      return target ? createPortal(<div key={event.id} className={`local-game-feedback ${event.screen.toLowerCase()} ${event.kind} ${event.impact} ${reducedMotion ? 'still' : ''}`} role="status"><Icon name={event.screen==='Mining'?'mining':event.screen==='Smithing'?'anvil':event.screen==='Fishing'?'fish':event.screen==='Cooking'?'food':'combat'} size={17}/><span><b>{event.title}</b>{event.detail&&<small>{event.detail}</small>}</span></div>, target, String(event.id)) : null;
    })}
  </>;
}
