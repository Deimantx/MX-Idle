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
  const complete = rows.filter((row) => row[1]).length, current = rows.find(([_, done]) => !done)?.[0] ?? 'First Victory';
  const guidance: Record<string, string> = { 'Begin Mining': 'Open Mining and start the Copper Vein.', 'Reach the Core': 'Keep mining through each layer to the Core.', 'Light the Forge': 'Collect Copper Ore, then smelt it in Smithing.', 'Forge a Weapon': 'Choose a Copper Sword pattern and complete the work.', 'Prepare for Battle': 'Equip a weapon and one armor piece.', 'Broken Road': 'Open Combat and begin the Road Wolf encounter.', 'First Victory': 'Defeat a Road Wolf to complete the first steps.' };
  return <Panel title={<><span className="panel-symbol">✦</span> First Steps</>} action={<button className="text-action" onClick={onToggle}>{minimized ? 'Expand' : 'Minimize'} <span>{minimized ? '+' : '−'}</span></button>} className="objectives-panel">
    <div className="objective-topline"><span>{game.objectives.victory ? 'First playable milestone complete.' : 'A short path into the frontier'}</span><b>{complete} / 7</b></div>
    {!minimized && <><div className="objective-track">{rows.map(([label, done], i) => <div className={`objective-row ${done ? 'done' : ''} ${!done && rows.slice(0, i).every((r) => r[1]) ? 'current' : ''}`} key={label}><span className="objective-check">{done ? '✓' : String(i + 1).padStart(2, '0')}</span><span>{label}</span>{!done && rows.slice(0, i).every((r) => r[1]) && <small>NOW</small>}</div>)}</div><p className="objective-guidance">{guidance[current]}</p></>}
    {minimized && <div className="objective-minimized"><div><b>{current}</b><span>{guidance[current]}</span></div><div className="objective-progress" role="progressbar" aria-label="First Steps progress" aria-valuenow={complete} aria-valuemin={0} aria-valuemax={7}><i style={{ width: `${complete / 7 * 100}%` }} /></div></div>}
  </Panel>;
}
