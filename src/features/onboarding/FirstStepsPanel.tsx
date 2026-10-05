import { Panel } from '../../ui/primitives';
import type { SaveState } from '../../game/game';

export function FirstStepsPanel({ game, minimized, onToggle }: { game: SaveState; minimized: boolean; onToggle: () => void }) {
  const rows: [string, boolean][] = [
    ['Begin Mining', game.mining.strikes > 0 || game.mining.cycles > 0],
    ['Reach the Core', game.objectives.firstCycle],
    ['Light the Forge', game.objectives.firstIngot],
    ['Forge a Weapon', game.objectives.sword],
    ['Prepare for Battle', game.objectives.helm && game.equipped.weapon === 'sword' && game.equipped.head === 'helm'],
    ['Broken Road', game.objectives.sword && game.objectives.helm],
    ['First Victory', game.objectives.victory],
  ];
  return <Panel title={<><span className="panel-symbol">✦</span> First Steps</>} action={<button className="text-action" onClick={onToggle}>{minimized ? 'Expand' : 'Minimize'} <span>{minimized ? '+' : '−'}</span></button>} className="objectives-panel">
    {!minimized && <><div className="objective-topline"><span>A short path into the frontier</span><b>{rows.filter((row) => row[1]).length} / 7</b></div><div className="objective-track">{rows.map(([label, done], i) => <div className={`objective-row ${done ? 'done' : ''} ${!done && rows.slice(0, i).every((r) => r[1]) ? 'current' : ''}`} key={label}><span className="objective-check">{done ? '✓' : String(i + 1).padStart(2, '0')}</span><span>{label}</span>{!done && rows.slice(0, i).every((r) => r[1]) && <small>NOW</small>}</div>)}</div></>}
    {minimized && <div className="objective-minimized">{game.objectives.victory ? 'First playable milestone complete.' : `Next: ${rows.find(([_, done]) => !done)?.[0] ?? 'First Victory'}`}</div>}
  </Panel>;
}
