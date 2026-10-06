import { useEffect, useId, useLayoutEffect, useRef, useState, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

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
  return createPortal(<div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><section ref={dialog} className={`modal ${className}`} role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1}><header className="modal-head"><div>{eyebrow && <small>{eyebrow}</small>}<h2 id={titleId}>{title}</h2></div><button className="icon-button" aria-label={`Close ${title}`} onClick={onClose}>×</button></header>{children}</section></div>, root);
}
export function Icon({ name, size = 22 }: { name: string; size?: number }) {
  const common = { width: size, height: size, style: { width: `calc(${size}px  * var(--ui-scale))`, height: `calc(${size}px  * var(--ui-scale))`, flex: 'none' }, viewBox: '0 0 48 48', fill: 'none', stroke: 'currentColor', strokeWidth: 2.1, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true as const };
  const paths: Record<string, React.ReactNode> = {
    'arrow-left': <><path d="M39 24H9m0 0 12-12M9 24l12 12"/></>,
    close: <><path d="m12 12 24 24M36 12 12 36"/><circle cx="24" cy="24" r="19" opacity=".18"/></>,
    minimize: <path d="M10 31h28"/>,
    restore: <><rect x="11" y="12" width="25" height="24" rx="2"/><path d="M17 8h22v22"/></>,
    dock: <><rect x="8" y="8" width="32" height="32" rx="3"/><path d="M8 29h32M28 29v11"/></>,
    undock: <><rect x="9" y="14" width="27" height="26" rx="3"/><path d="M19 8h21v21M30 8v11h10"/></>,
    stop: <><rect x="11" y="11" width="26" height="26" rx="3"/><path d="M17 17h14v14H17z" fill="currentColor" stroke="none"/></>,
    pick: <><path d="M8 15c9-10 23-10 32 0M18 17 9 42m21-27 8 27"/><path d="M6 42h8m20 0h8"/></>,
    hammer: <><path d="M10 8h28v13H10zM24 21 14 43m7-28h15"/><path d="m9 8 5-5h20l5 5"/></>,
    ore: <><path d="m24 4 18 10v20L24 44 6 34V14z"/><path d="m6 14 18 11 18-11M24 25v19M16 9l17 12"/></>,
    ingot: <><path d="m10 18 5-9h18l5 9-4 21H14z"/><path d="M10 18h28M18 9l-3 9m18-9 5 9"/></>,
    sword: <><path d="M35 5 16 25l8 8 19-20zM16 25l-8 8m9-1-6 8m13-6-7 7"/></>,
    helm: <><path d="M7 27C7 15 14 7 24 7s17 8 17 20v10H7zM7 27h34M24 8v19m-7 0 2 10m12-10-2 10"/></>,
    armor: <><path d="m14 7 10 4 10-4 9 7-5 9v19H10V23l-5-9zM14 7v11h20V7M24 11v31"/></>,
    trophy: <><path d="M15 7h18v11c0 8-4 13-9 13s-9-5-9-13zM15 11H7v5c0 6 4 9 9 9m17-14h8v5c0 6-4 9-9 9m-8 5v8m-8 4h16"/></>,
    gloves: <><path d="M13 23V9c0-3 5-3 5 0v10-12c0-3 5-3 5 0v12-10c0-3 5-3 5 0v11-7c0-3 5-3 5 0v14c0 9-4 14-12 14-7 0-11-4-12-10l-2-7c-1-4 4-5 6-1z"/></>,
    greaves: <><path d="M13 7h22l-2 15 5 17H25l-3-12-4 12H7l5-17zM13 23h20"/></>,
    shield: <><path d="M24 5 40 11v11c0 10-6 17-16 21C14 39 8 32 8 22V11zM24 9v29m-12-23 12-5 12 5"/></>,
    settings: <><circle cx="24" cy="24" r="7"/><path d="M24 4v5m0 30v5M4 24h5m30 0h5M10 10l4 4m20 20 4 4M38 10l-4 4M14 34l-4 4"/></>,
    mining: <><path d="M7 10c8-6 19-5 28 1l7 6-5 6-9-5c-6-3-12-3-18 0l-6-5z"/><path d="m22 18-9 23m12-20-4-2m-9 22-5-2m26-20 5-6"/><path d="M8 42h13"/></>,
    anvil: <><path d="M6 18h13l4-7h13l7 7-5 5H29l-4 6h10l4 7H10l5-7-5-6H6z"/><path d="M15 36v5m20-5v5M17 18l4 5"/></>,
    bank: <><path d="m5 17 19-11 19 11M9 19v19m10-19v19m10-19v19m10-19v19M5 42h38M7 18h34"/></>,
    combat: <><path d="m9 9 30 30m0-30L9 39M7 7l9 2-7 7zm34 34-9-2 7-7zM41 7l-9 2 7 7zM7 41l9-2-7-7z"/></>,
    gear: <><circle cx="24" cy="24" r="7"/><path d="M20 5h8l2 5 5 2 5-1 4 7-4 4v5l4 4-4 7-5-1-5 2-2 5h-8l-2-5-5-2-5 1-4-7 4-4v-5l-4-4 4-7 5 1 5-2z"/></>,
    gold: <><circle cx="24" cy="24" r="18"/><path d="M30 16c-2-3-12-4-12 2 0 7 13 2 13 9 0 6-10 8-15 4m8-20v26"/></>,
    heart: <><path d="M24 40S7 30 7 18C7 8 19 6 24 16 29 6 41 8 41 18c0 12-17 22-17 22z"/><path d="m11 23 8 0 3-6 5 13 3-7h7"/></>,
    bow: <><path d="M11 6c20 9 20 27 0 36m26-36C17 15 17 33 37 42M12 24h24m-12-8 6 8-6 8"/></>,
    spark: <><path d="m26 4-15 23h12l-2 17 16-25H25z"/><path d="m8 9 2 4m30 20 2 4"/></>,
    axe: <><path d="M8 10c13-4 24 0 31 11L27 33c-11-5-16-12-19-23zM23 26 12 42m11-16 8 8"/></>,
    mace: <><path d="M18 11 31 6l11 11-5 13-13 3-11-11zM27 30 13 44"/><path d="m24 11 13 13M15 17l13 13"/></>,
    spear: <><path d="m37 5 6 6-25 25-9-9zM13 31 7 41l10-4"/><path d="m31 11 6 6"/></>,
    hook: <><path d="M24 5v23c0 9 13 10 17 2 3-6-1-12-7-12-4 0-7 3-7 7"/><path d="M18 5h12m-6 0v6"/></>,
    wave: <><path d="M4 17c5-5 10-5 15 0s10 5 15 0 8-4 10-2M4 27c5-5 10-5 15 0s10 5 15 0 8-4 10-2M4 37c5-5 10-5 15 0s10 5 15 0 8-4 10-2"/></>,
    food: <><path d="M8 23h32l-3 12a9 9 0 0 1-9 7h-8a9 9 0 0 1-9-7z"/><path d="M6 23h36M13 17c-2-3 2-4 0-7m11 7c-2-3 2-4 0-7m11 7c-2-3 2-4 0-7"/></>,
    fish: <><path d="M5 24c7-10 18-14 28-8l10 8-10 8C23 38 12 34 5 24z"/><path d="m5 24-3-8 9 4m-6 4-3 8 9-4m18-10v.1m-9 5.9h.1"/></>,
    knife: <><path d="M9 39 34 8c4-5 10-1 7 4L20 39zM8 42l12-3"/></>,
    furnace: <><path d="M10 42V20L24 6l14 14v22H10zM17 42V29a7 7 0 0 1 14 0v13"/><path d="M15 21h18m-9-10v5m-4 15c1-3 3-4 4-8 3 3 4 6 4 9"/></>
  };
  return <svg {...common}>{paths[name] ?? <circle cx="24" cy="24" r="16" />}</svg>;
}
