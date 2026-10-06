import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { Badge, Icon } from '../primitives';
import { ItemMark, ItemTip } from '../game/ItemDisplay';
import { ITEMS, type ItemId } from '../../game/game';
import type { ItemTooltipContext } from '../game/itemTooltip.model';

export type GameAccent = 'neutral' | 'mining' | 'smithing' | 'fishing' | 'cooking' | 'combat' | 'equipment' | 'bank';
export function GameSurface({ as: Tag = 'section', accent = 'neutral', className = '', children, ...props }: HTMLAttributes<HTMLElement> & { as?: 'section' | 'div' | 'article'; accent?: GameAccent }) {
  return <Tag className={`g2-surface g2-${accent} ${className}`} {...props}>{children}</Tag>;
}

export function GameSectionTitle({ mark, eyebrow, title, detail, action }: { mark?: string; eyebrow?: string; title: ReactNode; detail?: ReactNode; action?: ReactNode }) {
  return <header className="g2-section-title"><span className="g2-section-mark" aria-hidden="true">{mark && <Icon name={mark} size={20}/>}</span><div className="g2-section-copy">{eyebrow && <small>{eyebrow}</small>}<h2>{title}</h2>{detail && <p>{detail}</p>}</div>{action && <div className="g2-section-action">{action}</div>}</header>;
}

export function GameAction({ children, action = 'secondary', icon, className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { action?: 'primary' | 'secondary' | 'quiet' | 'danger'; icon?: string }) {
  return <button className={`g2-action g2-action-${action} ${className}`} {...props}>{icon && <Icon name={icon} size={18}/>}<span>{children}</span></button>;
}

export function GameItemFrame({ id, size = 'regular', state = 'normal', count, tier, label, className = '', inspect = true, inspectContext, focusable = true }: { id: string; size?: 'compact' | 'regular' | 'hero'; state?: 'normal' | 'selected' | 'equipped' | 'locked' | 'reward'; count?: ReactNode; tier?: number; label?: string; className?: string; inspect?: boolean; inspectContext?: ItemTooltipContext; focusable?: boolean }) {
  const frame = <span className={`g2-item-frame g2-item-${size} g2-item-${state} ${className}`} aria-label={label}>
    {tier !== undefined && <i className="g2-item-tier">T{tier}</i>}
    <ItemMark id={id} large={size === 'hero'}/>
    {count !== undefined && <b className="g2-item-count">{count}</b>}
    {state === 'equipped' && <i className="g2-item-state">WORN</i>}
    {state === 'locked' && <i className="g2-item-state">LOCKED</i>}
  </span>;
  return inspect && id in ITEMS ? <ItemTip id={id as ItemId} context={inspectContext} focusable={focusable}>{frame}</ItemTip> : frame;
}

export function GameValue({ label, value, accent = 'neutral', detail }: { label: string; value: ReactNode; accent?: GameAccent | 'positive' | 'negative'; detail?: ReactNode }) {
  return <div className={`g2-value g2-value-${accent}`}><span>{label}</span><b>{value}</b>{detail && <small>{detail}</small>}</div>;
}

export function GameState({ children, tone = 'neutral', icon }: { children: ReactNode; tone?: 'neutral' | 'active' | 'ready' | 'warning' | 'locked' | 'success'; icon?: string }) {
  return <Badge tone={`g2-state g2-state-${tone}`}>{icon && <Icon name={icon} size={13}/>} {children}</Badge>;
}

export function GameProgress({ value, max, kind = 'activity', label }: { value: number; max: number; kind?: 'activity' | 'xp' | 'density' | 'heat' | 'work' | 'water' | 'hp' | 'satiety'; label: string }) {
  const ratio = max > 0 ? Math.max(0, Math.min(1, value / max)) : 0;
  return <div className={`g2-progress g2-progress-${kind}`} role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={max} aria-valuenow={Math.max(0, Math.min(max, value))}><i style={{ transform: `scaleX(${ratio})` }}/></div>;
}

export function GameEmpty({ icon = 'bank', title, detail }: { icon?: string; title: string; detail: string }) {
  return <div className="g2-empty"><span><Icon name={icon} size={24}/></span><b>{title}</b><small>{detail}</small></div>;
}
