import { useEffect, useId, useLayoutEffect, useRef, useState, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Activity, Anvil, Archive, ArrowLeft, Axe, Box, CircleHelp, Clock, Coins, Cog, Construction, Dock, Fish, FishingRod, Flame, Footprints, Gem, Hammer, Hand, HeartPulse, Landmark, Lock, Maximize, Minimize, Minus, Move, Package, PanelRight, PanelRightClose, PanelsTopLeft, Pickaxe, Search, Settings, Shield, ShieldAlert, ShieldCheck, Sparkle, Sparkles, Sword, Swords, Target, Trophy, Utensils, UtensilsCrossed, Vault, Waves, X, type LucideIcon } from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  'arrow-left': ArrowLeft, close: X, minimize: Minimize, restore: Maximize, dock: Dock, undock: PanelsTopLeft,
  stop: Minus, pick: Pickaxe, mining: Pickaxe, hammer: Hammer, ore: Gem, ingot: Construction,
  sword: Sword, helm: Shield, armor: ShieldCheck, trophy: Trophy, gloves: Hand, greaves: Footprints,
  gem: Gem, necklace: Sparkle, cape: Waves,
  shield: Shield, settings: Settings, anvil: Anvil, bank: Vault, combat: Swords, gear: Cog,
  gold: Coins, heart: HeartPulse, bow: Target, spark: Sparkles, axe: Axe, mace: Hammer, spear: Sword,
  hook: FishingRod, wave: Waves, food: Utensils, fish: Fish, knife: UtensilsCrossed, furnace: Flame,
  search: Search, lock: Lock, target: Target, package: Package, box: Box, archive: Archive,
  landmark: Landmark, move: Move, panel: PanelRight, 'panel-close': PanelRightClose,
  activity: Activity, timer: Clock, warning: ShieldAlert, safe: ShieldCheck, sparkle: Sparkle,
};

export function Button({ children, tone = 'steel', className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { tone?: 'steel' | 'copper' | 'quiet' | 'danger' | 'icon' }) {
  const role = tone === 'copper' ? 'role-primary' : tone === 'quiet' ? 'role-quiet' : tone === 'danger' ? 'role-danger' : tone === 'icon' ? 'role-icon' : 'role-secondary';
  return <button className={`game-button ${tone} ${role} ${className}`} {...props}>{children}</button>;
}
export function Panel({ title, action, children, className = '', ...props }: { title?: ReactNode; action?: ReactNode; children: ReactNode; className?: string; [key: string]: any }) {
  return <section className={`panel ${className}`} {...props}>{title && <header className="panel-head"><h2>{title}</h2>{action}</header>}{children}</section>;
}
export function Bar({ value, max, accent = 'copper', label, className = '' }: { value: number; max: number; accent?: string; label?: ReactNode; className?: string }) {
  const width = `${Math.max (0, Math.min(100, max  > 0 ? (value / max) * 100 : 0))}%`;
  return <div className={`bar ${accent} ${className}`} role="progressbar" aria-valuenow={Math.max (0, value)} aria-valuemin={0} aria-valuemax={max} aria-label={typeof label === 'string' ? label : undefined}><span style={{ width }} />{label && <b>{label}</b>}</div>;
}
export function Badge({ children, tone = '' }: { children: ReactNode; tone?: string }) { return <span className={`badge ${tone}`}>{children}</span>; }
export type TooltipPlacement = 'auto' | 'top' | 'bottom' | 'left' | 'right';
export function Tip({ children, content, focusable = true, className = '', placement = 'auto', delayMs = 220, onOpenChange }: { children: ReactNode; content: ReactNode; focusable?: boolean; className?: string; placement?: TooltipPlacement; delayMs?: number; onOpenChange?: (open: boolean) => void }) {
  const id = useId(), ref = useRef<HTMLSpanElement>(null), tipRef = useRef<HTMLDivElement>(null), timer = useRef<number>();
  const [open, setOpen] = useState(false), [style, setStyle] = useState<React.CSSProperties>({ visibility: 'hidden' }), [resolvedPlacement, setResolvedPlacement] = useState<TooltipPlacement>('top');
  const openRef = useRef(false), changeRef = useRef(onOpenChange); changeRef.current = onOpenChange;
  const commitOpen = (value: boolean) => { openRef.current = value; setOpen(value); changeRef.current?.(value); };
  const show = () => { window.clearTimeout(timer.current); timer.current = window.setTimeout(() => commitOpen(true), delayMs); };
  const close = () => { window.clearTimeout(timer.current); if (openRef.current) commitOpen(false); };
  useLayoutEffect(() => {
    if (!open || !ref.current || !tipRef.current) return;
    const update = () => {
      const anchor = ref.current?.getBoundingClientRect(), tip = tipRef.current?.getBoundingClientRect();
      if (!anchor || !tip) return;
      const pad = 12, gap = 9, scale = Number(getComputedStyle(document.documentElement).getPropertyValue('--ui-scale') || 1), maxW = Math.min(440 * scale, window.innerWidth - 24);
      const width = Math.min(maxW, Math.max (180, tip.width));
      const height = Math.min(window.innerHeight * .78, tip.height);
      const x = Math.max (pad, Math.min(window.innerWidth - width - pad, anchor.left + anchor.width / 2 - width / 2));
      const centerY = anchor.top + anchor.height / 2;
      const space = { top:anchor.top-pad, bottom:window.innerHeight-anchor.bottom-pad, left:anchor.left-pad, right:window.innerWidth-anchor.right-pad };
      let side: TooltipPlacement = placement;
      if (placement === 'auto') side = space.top >= height + gap || space.top >= space.bottom ? 'top' : 'bottom';
      if (side === 'top' && space.top < height + gap && space.bottom > space.top) side = 'bottom';
      if (side === 'bottom' && space.bottom < height + gap && space.top > space.bottom) side = 'top';
      if (side === 'left' && space.left < width + gap && space.right > space.left) side = 'right';
      if (side === 'right' && space.right < width + gap && space.left > space.right) side = 'left';
      let left = x, top = anchor.top - height - gap;
      if (side === 'bottom') top = anchor.bottom + gap;
      if (side === 'left') { left = anchor.left - width - gap; top = centerY - height / 2; if (left < pad) { left = anchor.right + gap; side = 'right'; } }
      if (side === 'right') { left = anchor.right + gap; top = centerY - height / 2; if (left + width > window.innerWidth - pad) { left = anchor.left - width - gap; side = 'left'; } }
      left = Math.max(pad, Math.min(window.innerWidth - width - pad, left));
      top = Math.max(pad, Math.min(window.innerHeight - height - pad, top));
      setResolvedPlacement(side);
      setStyle({ left, top, maxWidth: maxW, maxHeight: window.innerHeight * .78, visibility: 'visible' });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(ref.current); observer.observe(tipRef.current);
    window.addEventListener('resize', update); window.addEventListener('scroll', update, true);
    return () => { observer.disconnect(); window.removeEventListener('resize', update); window.removeEventListener('scroll', update, true); };
  }, [open, placement]);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  useEffect(() => {
    if (!open) return;
    const keydown = (event: KeyboardEvent) => { if (event.key === 'Escape') { event.stopPropagation(); close(); } };
    document.addEventListener('keydown', keydown);
    return () => document.removeEventListener('keydown', keydown);
  }, [open]);
  return <span className={`tip-wrap ${className}`} ref={ref} tabIndex={focusable ? 0 : -1} aria-describedby={open ? id : undefined} onMouseEnter={show} onMouseLeave={close} onFocus={show} onBlur={close} onTouchStart={() => commitOpen(!openRef.current)}>
    {children}{open && document.getElementById('overlay-root') && createPortal(<div ref={tipRef} id={id} className="game-tooltip" role="tooltip" data-placement={resolvedPlacement} style={style}>{content}</div>, document.getElementById('overlay-root')!)}
  </span>;
}

export function Modal({ title, eyebrow, children, onClose, className = '' }: { title: string; eyebrow?: string; children: ReactNode; onClose: () => void; className?: string }) {
  const dialog = useRef<HTMLElement>(null), closeRef = useRef(onClose), titleId = useId();
  closeRef.current = onClose;
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null, oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusables = () => [...(dialog.current?.querySelectorAll<HTMLElement>('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])') ?? [])].filter((item) => item.offsetParent !== null);
    (focusables()[0] ?? dialog.current)?.focus();
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); closeRef.current(); }
      if (event.key === 'Tab') {
        const items = focusables(); if (!items.length) { event.preventDefault(); dialog.current?.focus(); return; }
        if (event.shiftKey && document.activeElement === items[0]) { event.preventDefault(); items[items.length - 1]?.focus(); }
        else if (!event.shiftKey && document.activeElement === items[items.length - 1]) { event.preventDefault(); items[0].focus(); }
      }
    };
    document.addEventListener('keydown', key);
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = oldOverflow; previous?.focus(); };
  }, []);
  const root = document.getElementById('overlay-root');
  if (!root) return null;
  return createPortal(<div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><section ref={dialog} className={`modal ${className}`} role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1}><header className="modal-head"><div>{eyebrow && <small>{eyebrow}</small>}<h2 id={titleId}>{title}</h2></div><button className="icon-button" aria-label={`Close ${title}`} onClick={onClose}><Icon name="close" size={18}/> </button></header>{children}</section></div>, root);
}
export function Icon({ name, size = 22 }: { name: string; size?: number }) {
  const Component = ICONS[name] ?? CircleHelp;
  const scaledSize = 'calc(' + size + 'px * var(--ui-scale))';
  return <Component size={size} strokeWidth={1.9} aria-hidden="true" focusable="false" style={{ width: scaledSize, height: scaledSize, flex: 'none' }} />;
}
