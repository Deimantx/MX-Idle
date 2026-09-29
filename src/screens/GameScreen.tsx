import { useCallback, useEffect, useRef, useState } from 'react';
import { ITEMS } from '../game/data/items';
import { LOCATIONS } from '../game/data/locations';
import { SKILLS } from '../game/data/skills';
import { TASKS } from '../game/data/tasks';
import { getTravelDuration } from '../game/engine/travelEngine';
import { advanceGame, rerollRow, setTaskWeights } from '../game/engine/simulation';
import { selectTask } from '../game/engine/taskQueue';
import { loadFromStorage, SAVE_KEY, saveToStorage } from '../game/state/saveSystem';
import type { GameState, SkillId } from '../types/game';
import { SkillProgress } from '../components/SkillProgress';
import { WorldMap } from '../components/WorldMap';

export function GameScreen() {
  const [state, setState] = useState<GameState>(() => loadFromStorage().state);
  const stateRef = useRef(state);
  const [speed, setSpeed] = useState(1); const [devOpen, setDevOpen] = useState(false); const [saved, setSaved] = useState('Saved'); const [error, setError] = useState('');
  const update = useCallback((fn: (current: GameState) => GameState) => { try { const next = fn(stateRef.current); stateRef.current = next; setState(next); setError(''); } catch (e) { setError(e instanceof Error ? e.message : 'Unexpected game error'); } }, []);
  useEffect(() => {
    const timer = window.setInterval(() => { try { const next = advanceGame(stateRef.current, 250 * speed); stateRef.current = next; setState(next); } catch (e) { setError(e instanceof Error ? e.message : 'Simulation error'); } }, 250);
    return () => window.clearInterval(timer);
  }, [speed]);
  useEffect(() => {
    stateRef.current = state;
  }, [state]);
  useEffect(() => {
    const timer = window.setInterval(() => { try { saveToStorage(stateRef.current); setSaved('Saved'); } catch { setSaved('Save failed'); } }, 5000);
    const beforeUnload = () => { try { saveToStorage(stateRef.current); } catch { /* storage can be unavailable during shutdown */ } };
    window.addEventListener('beforeunload', beforeUnload);
    return () => { window.clearInterval(timer); window.removeEventListener('beforeunload', beforeUnload); };
  }, []);
  const currentDef = state.currentTask ? TASKS.find(task => task.id === state.currentTask!.taskDefinitionId) : null;
  const currentLocation = LOCATIONS[state.currentLocationId];
  const status = state.phase === 'travelling' ? 'Travelling' : state.phase === 'task' ? 'Performing task' : state.currentTask ? 'Task paused' : 'Waiting for queue selection';
  const select = (rowId: string, taskId: string) => update(s => selectTask(s, rowId, taskId));
  const doSave = () => { try { saveToStorage(state); setSaved('Saved just now'); } catch (e) { setError(e instanceof Error ? e.message : 'Save failed'); } };
  const reload = () => { const loaded = loadFromStorage(); stateRef.current = loaded.state; setState(loaded.state); setError(loaded.error ?? ''); };
  const reset = () => { localStorage.removeItem(SAVE_KEY); window.location.reload(); };
  const skip = (ms: number) => update(s => advanceGame(s, ms));
  const activeProgress = currentDef && state.currentTask ? Math.min(100, (state.currentTask.completedActions / state.currentTask.quantity) * 100) : 0;
  const remaining = state.phase === 'travelling' ? state.travelRemainingMs : state.actionRemainingMs;
  return <main className="game-shell">
    <header className="topbar"><div className="brand-mark">GH</div><div className="brand"><strong>GREENHAVEN</strong><span>THE QUIET FRONTIER</span></div><div className="top-divider"/><div className="top-stat"><small>ADVENTURER</small><strong>Wayfarer</strong></div><div className="top-stat location-stat"><small>LOCATION</small><strong><i className="location-pin"/>{currentLocation.name}</strong></div><div className="top-spacer"/><div className="save-indicator"><i/>{saved}</div><div className="day-pill">DAY 01</div></header>
    <div className="main-grid">
      <aside className="left-column"><section className="panel task-panel"><div className="panel-heading"><div><div className="eyebrow">ADVENTURE LOG</div><h2>Task queue</h2></div><div className="queue-count">{state.queue.filter(r => r.selectedTaskInstanceId).length}<span> / 5 SET</span></div></div>
        <div className="current-task"><div className="current-top"><span className="live-tag"><i/>{state.currentTask ? status.toUpperCase() : 'AWAITING SELECTION'}</span>{state.currentTask && <span className="current-slot">CURRENT</span>}</div>
          {currentDef && state.currentTask ? <><h3>{currentDef.name}</h3><div className="task-meta"><span>⌖ {LOCATIONS[currentDef.locationId].name}</span><span>{SKILLS[currentDef.skillId].icon} {SKILLS[currentDef.skillId].name}</span></div><div className="progress-label"><span>{state.phase === 'travelling' ? 'Journey' : 'Actions'}</span><span>{state.phase === 'travelling' ? formatTime(remaining) : `${state.currentTask.completedActions} / ${state.currentTask.quantity}`}</span></div><div className="task-progress"><i style={{ width: `${state.phase === 'travelling' ? 100 - (remaining / Math.max(1, getTravelDuration(state.currentLocationId, currentDef.locationId))) * 100 : activeProgress}%` }}/></div><div className="task-footer"><span>{state.phase === 'travelling' ? 'On the way' : state.phase === 'task' ? 'Working steadily' : 'Select the next queue task'}</span><span>{state.phase === 'task' ? `${formatTime(remaining)} / action` : state.phase === 'travelling' ? 'TRAVEL' : '—'}</span></div></> : <div className="empty-current"><strong>Choose your next task</strong><span>Slot 1 will become current and set off when selected.</span></div>}
        </div>
        <div className="queue-list"><div className="section-label">UPCOMING TASKS <span>CHOOSE ONE PER ROW</span></div>{state.queue.map((row, index) => { const selected = row.choices.find(task => task.instanceId === row.selectedTaskInstanceId); return <div className={`queue-row ${selected ? 'row-selected' : ''}`} key={row.rowId}><div className="queue-row-head"><span><b>{String(index + 1).padStart(2, '0')}</b> QUEUE SLOT</span>{selected ? <em>LOCKED IN</em> : <button className="reroll" onClick={() => update(s => rerollRow(s, row.rowId))} title="Regenerate these three options">↻ REROLL</button>}</div>
          {selected ? <button className="selected-choice" onClick={() => {}}><span className="choice-skill">{SKILLS[TASKS.find(t => t.id === selected.taskDefinitionId)!.skillId].icon}</span><span className="choice-copy"><strong>{TASKS.find(t => t.id === selected.taskDefinitionId)!.name}</strong><small>{LOCATIONS[TASKS.find(t => t.id === selected.taskDefinitionId)!.locationId].name} · {selected.quantity} actions</small></span><span className="selected-check">✓</span></button> : <div className="choices">{row.choices.map(task => { const def = TASKS.find(t => t.id === task.taskDefinitionId)!; return <button key={task.instanceId} className="choice" onClick={() => select(row.rowId, task.instanceId)} title={`${LOCATIONS[def.locationId].name} · ${task.quantity} actions`}><span className="choice-skill">{SKILLS[def.skillId].icon}</span><span className="choice-copy"><strong>{def.name}</strong><small>{LOCATIONS[def.locationId].name}</small></span></button>; })}</div>}
        </div>; })}</div>
      </section></aside>
      <section className="center-column"><WorldMap state={state}/><section className="panel travel-panel"><div className="travel-icon">⌖</div><div className="travel-copy"><div className="eyebrow">JOURNEY STATUS</div><strong>{status}</strong><span>{state.phase === 'travelling' && currentDef ? `Travelling to ${LOCATIONS[currentDef.locationId].name}` : state.phase === 'task' && currentDef ? `${currentDef.name} · one action every ${formatTime(currentDef.actionDurationMs)}` : state.currentTask ? 'Preparing for the next action' : 'Select a task in queue slot 1 to continue'}</span></div><div className="travel-clock">{state.phase === 'travelling' ? formatTime(remaining) : state.phase === 'task' ? `00:${String(Math.ceil(remaining / 1000)).padStart(2, '0')}` : '—'}</div></section></section>
      <aside className="right-column"><section className="panel inventory-panel"><div className="panel-heading"><div><div className="eyebrow">CARRIED GOODS</div><h2>Inventory</h2></div><div className="item-total">{Object.values(state.inventory).reduce((a,b) => a+b, 0)} <span>ITEMS</span></div></div><div className="inventory-list">{Object.values(ITEMS).map(item => <div className="inventory-item" key={item.id}><span className="item-icon">{item.icon}</span><span>{item.name}</span><b>{(state.inventory[item.id] ?? 0).toLocaleString()}</b></div>)}</div><div className="inventory-note">Materials gathered on your travels.</div></section>
        <section className="panel skills-panel"><div className="panel-heading"><div><div className="eyebrow">YOUR PRACTICE</div><h2>Skills</h2></div></div><div className="skill-list">{(Object.keys(SKILLS) as SkillId[]).map(id => <SkillProgress key={id} skillId={id} xp={state.skillXp[id]}/>)}</div></section></aside>
    </div>
    <footer className="dev-dock"><button className="dev-toggle" onClick={() => setDevOpen(o => !o)}><span className="terminal-icon">⌘</span> DEVELOPER CONTROLS <span className={`chevron ${devOpen ? 'open' : ''}`}>⌄</span></button><div className="dock-status"><span><i className="pulse-dot"/> SIMULATION LIVE</span><span>GAME CLOCK · {new Date(state.gameTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span></div>
      {devOpen && <div className="dev-tools"><div className="dev-group"><small>SIMULATION SPEED</small><div className="speed-buttons">{[1,5,20,100].map(value => <button key={value} className={speed === value ? 'active' : ''} onClick={() => setSpeed(value)}>{value}×</button>)}</div><small className="dev-spacer">TIME SKIP</small><div className="speed-buttons">{[[60000,'+1m'],[300000,'+5m'],[3600000,'+1h']].map(([ms,label]) => <button key={label} onClick={() => skip(Number(ms))}>{label}</button>)}</div></div>
        <div className="dev-group weight-group"><small>TASK WEIGHTS</small>{(Object.keys(SKILLS) as SkillId[]).map(id => <label key={id}><span>{SKILLS[id].name}</span><input type="number" min="0" max="10" step="0.1" value={state.weights[id]} onChange={e => update(s => setTaskWeights(s, { ...s.weights, [id]: Number(e.target.value) }))}/><span>×</span></label>)}</div>
        <div className="dev-group"><small>SAVE MANAGEMENT</small><div className="speed-buttons"><button onClick={doSave}>Save</button><button onClick={reload}>Reload</button><button className="reset-button" onClick={reset}>Reset</button></div><div className="debug-info"><span>STATE <b>{state.phase}</b></span><span>LOCATION <b>{state.currentLocationId}</b></span><span>RNG <b>{state.rngState.toString(16)}</b></span><span>TASK <b>{state.currentTask?.instanceId ?? 'none'}</b></span></div></div></div>}
    </footer>
    {error && <div className="error-toast" role="alert">{error}<button onClick={() => setError('')}>×</button></div>}
    {state.lastOfflineSummary && <div className="modal-backdrop"><section className="offline-modal"><div className="eyebrow">WHILE YOU WERE AWAY</div><h2>A little progress was made</h2><p>You were away for {formatLongTime(state.lastOfflineSummary.elapsedMs)}.</p><div className="offline-stat"><span>Tasks completed</span><b>{state.lastOfflineSummary.completedTasks}</b></div><div className="offline-stat"><span>Experience gained</span><b>{Object.entries(state.lastOfflineSummary.xpGained).map(([skill, xp]) => `${SKILLS[skill as SkillId].name} +${xp}`).join(' · ') || '—'}</b></div><div className="offline-stat"><span>Items gathered</span><b>{Object.entries(state.lastOfflineSummary.itemsGained).map(([item, qty]) => `${ITEMS[item]?.name ?? item} +${qty}`).join(' · ') || '—'}</b></div><button className="primary-button" onClick={() => setState(s => ({ ...s, lastOfflineSummary: null }))}>CONTINUE</button></section></div>}
  </main>;
}
function formatTime(ms: number) { const total = Math.max(0, Math.ceil(ms / 1000)); return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`; }
function formatLongTime(ms: number) { const minutes = Math.floor(ms / 60000); const hours = Math.floor(minutes / 60); const days = Math.floor(hours / 24); const restHours = hours % 24; const restMinutes = minutes % 60; return [days && `${days}d`, restHours && `${restHours}h`, restMinutes && `${restMinutes}m`].filter(Boolean).join(' ') || 'less than a minute'; }
