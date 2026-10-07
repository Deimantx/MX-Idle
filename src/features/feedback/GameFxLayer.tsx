import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ITEMS } from '../../game/content/items/itemRegistry';
import type { GameFeedbackEvent } from './feedback.types';

type FxBurst = { id: number; anchor: Element; screen: string; kind: string; rare: boolean };

export function GameFxLayer({ events, screen, reducedMotion }: { events: GameFeedbackEvent[]; screen: string; reducedMotion: boolean }) {
  const [bursts, setBursts] = useState<FxBurst[]>([]);
  const seen = useRef(0), timers = useRef(new Map<number, number>());

  useEffect(() => {
    const fresh = events.filter((event) => event.id > seen.current);
    if (!fresh.length) return;
    seen.current = Math.max(...fresh.map((event) => event.id));
    if (reducedMotion) return;
    const next: FxBurst[] = [];
    for (const event of fresh) {
      let anchor: Element | null = null, kind = 'reward', rare = false;
      if (event.type === 'game-feel' && event.screen === screen) {
        anchor = document.querySelector(`[data-feedback-anchor="${screen}"]`) ?? document.querySelector(`[data-feedback-screen="${screen}"]`);
        kind = event.kind;
        rare = event.impact === 'rare';
      } else if (event.type === 'item' && screen === 'Bank') {
        anchor = document.querySelector(`[data-bank-item="${event.itemId}"]`);
        kind = 'item-gain';
        rare = ITEMS[event.itemId]?.rarity === 'Rare';
      }
      if (!anchor) continue;
      const burst = { id: event.id, anchor, screen: event.type === 'game-feel' ? event.screen : 'Bank', kind, rare };
      next.push(burst);
      const timer = window.setTimeout(() => {
        timers.current.delete(event.id);
        setBursts((current) => current.filter((entry) => entry.id !== event.id));
      }, rare ? 850 : 480);
      timers.current.set(event.id, timer);
    }
    if (next.length) setBursts((current) => [...current, ...next].slice(-6));
  }, [events, screen, reducedMotion]);

  useEffect(() => () => {
    for (const timer of timers.current.values()) window.clearTimeout(timer);
    timers.current.clear();
  }, []);

  return <>{bursts.map((burst) => createPortal(
    <span key={burst.id} className={`game-fx-burst ${burst.screen.toLowerCase()} ${burst.kind} ${burst.rare ? 'rare' : ''}`} aria-hidden="true">
      {Array.from({ length: burst.rare ? 6 : 4 }, (_, index) => <i key={index} />)}
    </span>, burst.anchor, `fx-${burst.id}`,
  ))}</>;
}
