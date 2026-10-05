import { Button } from '../primitives';

export function OfflineSummary({ elapsed, gained, activity, defeated, onClose }: { elapsed: string; gained: Record<string, number>; activity: string | null; defeated: boolean; onClose: () => void }) {
  const rows = Object.entries(gained);
  return <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <header className="modal-head"><div><small>WHILE YOU WERE AWAY</small><h2 id="modal-title">Your return</h2></div><button className="icon-button" aria-label="Close summary" onClick={onClose}>×</button></header>
    <p className="offline-time">{elapsed} elapsed</p><div className="offline-list">{rows.length ? rows.map(([name, amount]) => <div key={name}><span>{name}</span><b>+{Math.floor(amount).toLocaleString('en-US')}</b></div>) : activity ? <div><span>{activity} progress</span><b>continued</b></div> : <div><span>No activity was running</span><b>—</b></div>}{defeated && <div><span>Combat ended</span><b className="danger-text">Defeated</b></div>}</div>
    <div className="modal-foot"><span>Progress follows the same activity rules.</span><Button tone="copper" onClick={onClose}>Continue</Button></div>
  </section></div>;
}
