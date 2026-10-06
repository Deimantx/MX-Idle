import type { ReactNode } from 'react';
import { Tip, Icon } from '../primitives';
import { fmt } from './formatters';

const SKILL_ICONS: Record<string, string> = {
  Mining: 'mining', Smithing: 'anvil', Fishing: 'fish', Cooking: 'food',
  Attack: 'sword', Defence: 'shield', Hitpoints: 'heart',
};

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
    {hasProgress && <section className="heading-xp" aria-label={`${skill} progression`}>
      <header><span><Icon name={SKILL_ICONS[skill] ?? 'spark'} size={16}/><b>{skill}</b><strong>LEVEL {level}</strong></span><small>{maxed ? 'MAX LEVEL' : `${fmt(remaining)} XP TO NEXT`}</small></header>
      <div className="heading-xp-track" role="progressbar" aria-label={`${skill} experience`} aria-valuemin={0} aria-valuemax={maxXp} aria-valuenow={Math.max(0, Math.min(maxXp!, xp!))} aria-valuetext={maxed ? 'Maximum level' : `${fmt(xp!)} of ${fmt(maxXp!)} XP; ${fmt(remaining)} remaining`}><i style={{ transform: `scaleX(${progress})` }}/></div>
      <footer><b>{fmt(xp!)} <i>/</i> {fmt(maxXp!)} XP</b><span>{maxed ? 'Progress complete' : 'Current level progress'}</span></footer>
    </section>}
    {children}
  </div>;
}

export function Stat({ label, value, tip, accent = '' }: { label: string; value: string; tip?: string; accent?: string }) {
  return <div className="stat-row"><span>{tip ? <Tip content={tip}>{label}<i className="info-dot">i</i></Tip> : label}</span><b className={accent}>{value}</b></div>;
}
