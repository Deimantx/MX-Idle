import { useEffect, useMemo, useRef, useState } from 'react';
import { Activity, AlertTriangle, CheckCircle2, CircleHelp, Coins, Package, Shield, Sparkles, Swords, Target, Utensils } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type FeedKind = 'player' | 'critical' | 'enemy' | 'loot' | 'victory' | 'phase' | 'sustain' | 'system';
type FeedFilter = 'all' | 'player' | 'enemy' | 'loot' | 'system';
type FeedEvent = { text: string; kind: FeedKind; icon: LucideIcon; title: string };
const FILTERS: Array<{ id: FeedFilter; label: string }> = [
  { id: 'all', label: 'All' }, { id: 'player', label: 'You' }, { id: 'enemy', label: 'Enemy' }, { id: 'loot', label: 'Loot' }, { id: 'system', label: 'System' },
];
function describeEvent(text: string): FeedEvent {
  const value = text.toLowerCase();
  if (/critical hit/.test(value)) return { text, kind: 'critical', icon: Sparkles, title: 'Critical hit' };
  if (/loot:|gold earned|reward|found .*×|first kill|received .*×/.test(value)) return { text, kind: 'loot', icon: Package, title: 'Loot gained' };
  if (/dungeon .*cleared|run is complete|defeated\./.test(value)) return { text, kind: 'victory', icon: CheckCircle2, title: 'Victory' };
  if (/changes its attack pattern|phase/.test(value)) return { text, kind: 'phase', icon: AlertTriangle, title: 'Enemy phase' };
  if (/overeat|satiety|food lock|you eat|eats food|automatic eating|food supply/.test(value)) return { text, kind: 'sustain', icon: Utensils, title: 'Recovery and survival' };
  if (/your attack misses|you hit |your attack|you are stunned|you recover/.test(value)) return { text, kind: 'player', icon: Swords, title: 'Your action' };
  if (/uses .*for \d+|but misses|is stunned and loses|deals \d+ damage/.test(value)) return { text, kind: 'enemy', icon: Target, title: 'Enemy action' };
  if (/food|satiety|eat|overeat|stun|heal/.test(value)) return { text, kind: 'sustain', icon: Utensils, title: 'Recovery and survival' };
  if (/gold|\bcoins?\b/.test(value)) return { text, kind: 'loot', icon: Coins, title: 'Currency' };
  if (/status|resistance|guard|poison|bleed|burn|chill/.test(value)) return { text, kind: 'phase', icon: Shield, title: 'Combat effect' };
  return { text, kind: 'system', icon: Activity, title: 'Combat update' };
}
function matchesFilter(event: FeedEvent, filter: FeedFilter) {
  if (filter === 'all') return true;
  if (filter === 'player') return event.kind === 'player' || event.kind === 'critical' || event.kind === 'sustain';
  if (filter === 'enemy') return event.kind === 'enemy' || event.kind === 'phase';
  if (filter === 'loot') return event.kind === 'loot' || event.kind === 'victory';
  return event.kind === 'system' || event.kind === 'phase' || event.kind === 'sustain';
}
export function CombatFeed({ lines, active }: { lines: string[]; active: boolean }) {
  const [filter, setFilter] = useState<FeedFilter>('all');
  const [followLatest, setFollowLatest] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);
  const events = useMemo(() => lines.map(describeEvent).filter(event => matchesFilter(event, filter)).reverse(), [lines, filter]);
  const newest = lines[0];
  useEffect(() => { if (followLatest && listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight; }, [lines, filter, followLatest]);
  const onScroll = () => {
    const element = listRef.current;
    if (!element) return;
    const atBottom = element.scrollHeight - element.scrollTop - element.clientHeight < 24;
    if (atBottom && !followLatest) setFollowLatest(true);
    else if (!atBottom && followLatest) setFollowLatest(false);
  };
  return <section className="combat-feed" aria-label="Combat Feed">
    <header className="combat-feed-head">
      <div className="combat-feed-title"><span className={'combat-feed-live-dot ' + (active ? 'is-live' : '')} aria-hidden="true" /><div><b>Combat Feed</b><small>{active ? 'LIVE ENCOUNTER' : 'LATEST ENCOUNTER EVENTS'}</small></div></div>
      <div className="combat-feed-head-actions"><span className="combat-feed-count">{lines.length} / 24</span><span className={`combat-feed-follow-state ${followLatest?'is-following':''}`} aria-live="off">{followLatest?'FOLLOWING LATEST':'SCROLL PAUSED'}</span></div>
    </header>
    <div className="combat-feed-filters" role="group" aria-label="Filter combat events">
      {FILTERS.map(item => <button key={item.id} type="button" className={filter === item.id ? 'active' : ''} aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>{item.label}</button>)}
    </div>
    <div className="combat-feed-list" ref={listRef} onScroll={onScroll} role="log" aria-label="Recent combat events" aria-live="polite" aria-relevant="additions text">
      {events.length ? events.map((event, index) => {
        const EventIcon = event.icon;
        const isNewest = event.text === newest;
        return <article key={event.text + '-' + index} className={'combat-feed-event is-' + event.kind + (isNewest ? ' is-newest' : '')}>
          <span className="combat-feed-icon" aria-hidden="true"><EventIcon size={15} strokeWidth={2.1} /></span>
          <div className="combat-feed-copy"><span className="combat-feed-kind">{event.title}</span><p>{event.text}</p></div>
          {isNewest && <span className="combat-feed-new">NEW</span>}
        </article>;
      }) : <div className="combat-feed-empty"><CircleHelp size={20}/><b>No matching events</b><span>Try another filter or start a combat encounter.</span></div>}
    </div>
    {!followLatest && <button type="button" className="combat-feed-follow" onClick={() => { setFollowLatest(true); if (listRef.current) listRef.current.scrollTo({ top: listRef.current.scrollHeight, behavior: 'auto' }); }}>Jump to latest event</button>}
  </section>;
}
