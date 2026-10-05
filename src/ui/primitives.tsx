import type { ButtonHTMLAttributes, ReactNode } from 'react';

export function Button({ children, tone = 'steel', className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { tone?: 'steel' | 'copper' | 'quiet' | 'danger' }) {
  return <button className={`game-button ${tone} ${className}`} {...props}>{children}</button>;
}
export function Panel({ title, action, children, className = '', ...props }: { title?: ReactNode; action?: ReactNode; children: ReactNode; className?: string; [key: string]: any }) {
  return <section className={`panel ${className}`} {...props}>{title && <header className="panel-head"><h2>{title}</h2>{action}</header>}{children}</section>;
}
export function Bar({ value, max, accent = 'copper', label, className = '' }: { value: number; max: number; accent?: string; label?: ReactNode; className?: string }) {
  const width = `${Math.max(0, Math.min(100, max > 0 ? (value / max) * 100 : 0))}%`;
  return <div className={`bar ${accent} ${className}`} role="progressbar" aria-valuenow={Math.max(0, value)} aria-valuemin={0} aria-valuemax={max} aria-label={typeof label === 'string' ? label : undefined}><span style={{ width }} />{label && <b>{label}</b>}</div>;
}
export function Badge({ children, tone = '' }: { children: ReactNode; tone?: string }) { return <span className={`badge ${tone}`}>{children}</span>; }
export function Tip({ children, content }: { children: ReactNode; content: ReactNode }) { return <span className="tip-wrap" tabIndex={0} aria-label={typeof content === 'string' ? content : undefined}>{children}<span className="tip" role="tooltip">{content}</span></span>; }
export function Icon({ name, size = 22 }: { name: string; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 48 48', fill: 'none', stroke: 'currentColor', strokeWidth: 2.1, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true as const };
  const paths: Record<string, React.ReactNode> = {
    pick: <><path d="M11 13c9-8 20-8 27 0M17 18l-6 23m18-25 7 22"/><path d="M8 41h9m12-26h10"/></>, hammer: <><path d="M13 10h23v11H13zM24 21l-8 19m4-24h11"/><path d="m12 10 4-5h17l4 5"/></>, ore: <><path d="m24 5 16 9v19l-16 9-16-9V14z"/><path d="m8 14 16 10 16-10M24 24v18M17 9l16 11"/></>, ingot: <><path d="m11 18 4-8h20l4 8-4 20H13z"/><path d="M11 18h28M19 10l-3 8m17-8 3 8"/></>, sword: <><path d="M34 6 16 25l8 7L42 13zM16 25l-7 7m8-1-6 7m13-6-7 7"/><path d="m35 6 7 7"/></>, helm: <><path d="M8 27c0-12 7-20 16-20s16 8 16 20v9H8zM8 27h32M24 8v19m-7 0 2 9m12-9-2 9"/></>, armor: <><path d="m14 7 10 4 10-4 8 7-5 8v19H11V22l-5-8zM14 7v11h20V7M24 11v30"/></>, trophy: <><path d="M15 7h18v11c0 8-4 13-9 13s-9-5-9-13zM15 11H7v5c0 6 4 9 9 9m17-14h8v5c0 6-4 9-9 9m-8 5v8m-8 4h16"/></>, gloves: <><path d="M13 23V9c0-3 5-3 5 0v10-12c0-3 5-3 5 0v12-10c0-3 5-3 5 0v11-7c0-3 5-3 5 0v14c0 9-4 14-12 14-7 0-11-4-12-10l-2-7c-1-4 4-5 6-1z"/></>, greaves: <><path d="M13 7h22l-2 15 5 17H25l-3-12-4 12H7l5-17zM13 23h20"/></>, shield: <><path d="M24 5 40 11v11c0 10-6 17-16 21C14 39 8 32 8 22V11zM24 9v29m-12-23 12-5 12 5"/></>, settings: <><circle cx="24" cy="24" r="7"/><path d="M24 4v5m0 30v5M4 24h5m30 0h5M10 10l4 4m20 20 4 4M38 10l-4 4M14 34l-4 4"/></>, mining: <><path d="m8 12 31 3M13 12l-4 7m30-4-4 8M10 40 22 22m6 18 8-17"/></>, anvil: <><path d="M7 17h34l-5 10H17l-3 7h22l3 7H8l4-7-4-7zM15 17V9h17l6 8"/></>, bank: <><path d="m5 17 19-11 19 11M9 19v19m10-19v19m10-19v19m10-19v19M5 42h38M7 18h34"/></>, combat: <><path d="m9 9 30 30m0-30L9 39M7 7l9 2-7 7zm34 34-9-2 7-7zM41 7l-9 2 7 7zM7 41l9-2-7-7z"/></>, gear: <><circle cx="24" cy="24" r="7"/><path d="M20 5h8l2 5 5 2 5-1 4 7-4 4v5l4 4-4 7-5-1-5 2-2 5h-8l-2-5-5-2-5 1-4-7 4-4v-5l-4-4 4-7 5 1 5-2z"/></>, gold: <><circle cx="24" cy="24" r="18"/><path d="M30 16c-2-3-12-4-12 2 0 7 13 2 13 9 0 6-10 8-15 4m8-20v26"/></> };
  return <svg {...common}>{paths[name] ?? <circle cx="24" cy="24" r="16" />}</svg>;
}
