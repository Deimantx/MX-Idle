import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Tip, Icon } from '../primitives';
import { fmt } from './formatters';

const SKILL_ICONS: Record<string, string> = {
  Mining: 'mining', Smithing: 'anvil', Fishing: 'fish', Cooking: 'food',
  Attack: 'sword', Defence: 'shield', Hitpoints: 'heart',
};

function HeadingXpTrack({ skill, level, xp, maxXp, progress, remaining, maxed }: { skill: string; level: number; xp: number; maxXp: number; progress: number; remaining: number; maxed: boolean }) {
  const previous = useRef(progress), [echo, setEcho] = useState<{ from: number; to: number; id: number } | null>(null);
  useEffect(() => {
    if (progress > previous.current + .0001) setEcho({ from: previous.current, to: progress, id: Date.now() });
    previous.current = progress;
  }, [progress]);
  return <section className="heading-xp" aria-label={`${skill} progression`}>
    <header><span><Icon name={SKILL_ICONS[skill] ?? 'spark'} size={18}/><b>{skill}</b><strong>LEVEL {level}</strong></span></header>
    <div className="heading-xp-progress">
      <div className="heading-xp-track" role="progressbar" aria-label={`${skill} experience`} aria-valuemin={0} aria-valuemax={maxXp} aria-valuenow={Math.max(0, Math.min(maxXp, xp))} aria-valuetext={maxed ? 'Maximum level' : `${fmt(xp)} of ${fmt(maxXp)} XP; ${fmt(remaining)} remaining`}>
        <i style={{ transform: `scaleX(${progress})` }}/>
        {echo && <span key={echo.id} className="heading-xp-echo" style={{ left: `${echo.from * 100}%`, width: `${(echo.to-echo.from) * 100}%` }}/>}
      </div>
      <footer><b>{fmt(xp)} <i>/</i> {fmt(maxXp)} XP</b></footer>
    </div>
    <div className="heading-xp-remaining"><b>{maxed ? 'MAX' : fmt(remaining)}</b><small>{maxed ? 'LEVEL REACHED' : 'XP TO NEXT'}</small></div>
  </section>;
}

export function ScreenHeading({ eyebrow, title, sub, accent, children, level, xp, maxXp, skill = title }: {
  eyebrow: string; title: string; sub: string; accent: string; children?: ReactNode;
  level?: number; xp?: number; maxXp?: number; skill?: string;
}) {
  const hasProgress = typeof level === 'number' && typeof xp === 'number' && typeof maxXp === 'number';
  const progress = hasProgress && maxXp! > 0 ? Math.max(0, Math.min(1, xp! / maxXp!)) : 0;
  const maxed = level === 100;
  const remaining = hasProgress && !maxed ? Math.max(0, maxXp! - xp!) : 0;
  return <div className={`screen-heading gameplay-heading ${accent} ${hasProgress ? 'has-skill-progress' : ''}`}>
    <div className="gameplay-heading-identity">
      <span className="gameplay-heading-mark" aria-hidden="true"><Icon name={SKILL_ICONS[skill] ?? SKILL_ICONS[title] ?? accent} size={24}/></span>
      <div><div className="screen-overline">{eyebrow}</div><h1>{title}</h1><p>{sub}</p></div>
    </div>
    {hasProgress && <HeadingXpTrack skill={skill} level={level!} xp={xp!} maxXp={maxXp!} progress={progress} remaining={remaining} maxed={maxed}/>}
    {children}
  </div>;
}

export function Stat({ label, value, tip, accent = '' }: { label: string; value: string; tip?: string; accent?: string }) {
  return <div className="stat-row"><span>{tip ? <Tip content={tip}>{label}<i className="info-dot">i</i></Tip> : label}</span><b className={accent}>{value}</b></div>;
}
