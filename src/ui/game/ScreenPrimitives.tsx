import { Tip } from '../primitives';

export function ScreenHeading({ eyebrow, title, sub, accent, children }: { eyebrow: string; title: string; sub: string; accent: string; children?: import('react').ReactNode }) { return <div className={`screen-heading ${accent}`}><div><div className="screen-overline">{eyebrow}</div><h1>{title}</h1><p>{sub}</p></div>{children}</div>; }

export function Stat({ label, value, tip, accent = '' }: { label: string; value: string; tip?: string; accent?: string }) { return <div className="stat-row"><span>{tip ? <Tip content={tip}>{label}<i className="info-dot">i</i></Tip> : label}</span><b className={accent}>{value}</b></div>; }
