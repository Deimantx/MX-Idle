import { Button, Modal } from '../primitives';

export function OfflineSummary({ elapsed, gained, activity, defeated, onClose }: { elapsed: string; gained: Record<string, number>; activity: string | null; defeated: boolean; onClose: () => void }) {
  const rows = Object.entries(gained);
  return <Modal title="Your return" eyebrow="WHILE YOU WERE AWAY" onClose={onClose}>
    <p className="offline-time">{elapsed} elapsed</p><div className="offline-list">{rows.length ? rows.map(([name, amount]) => <div key={name}><span>{name}</span><b>+{Math.floor(amount).toLocaleString('en-US')}</b></div>) : activity ? <div><span>{activity} progress</span><b>continued</b></div> : <div><span>No activity was running</span><b>—</b></div>}{defeated && <div><span>Combat ended</span><b className="danger-text">Defeated</b></div>}</div>
    <div className="modal-foot"><span>Progress follows the same activity rules.</span><Button tone="copper" onClick={onClose}>Continue</Button></div>
  </Modal>;
}
