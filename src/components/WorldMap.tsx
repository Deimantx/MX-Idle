import { useMemo, useRef, useState } from 'react';
import { LOCATIONS } from '../game/data/locations';
import { ROUTES } from '../game/data/travel';
import type { GameState } from '../types/game';
import { TASKS } from '../game/data/tasks';

export function WorldMap({ state }: { state: GameState }) {
  const [zoom, setZoom] = useState(1); const [offset, setOffset] = useState({ x: 0, y: 0 }); const drag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
  const [focusedLocation, setFocusedLocation] = useState<string | null>(null);
  const view = useMemo(() => { const size = 100 / zoom; return `${(100 - size) / 2 + offset.x} ${(100 - size) / 2 + offset.y} ${size} ${size}`; }, [zoom, offset]);
  const destinations = [state.currentTask, ...state.queue.map(row => row.choices.find(t => t.instanceId === row.selectedTaskInstanceId) ?? null)];
  const taskLocations = destinations.map(task => task ? TASKS.find(def => def.id === task.taskDefinitionId)?.locationId : null);
  return <section className="panel map-panel"><div className="panel-heading"><div><div className="eyebrow">THE FRONTIER</div><h2>World map</h2></div><div className="map-zoom"><button onClick={() => setZoom(z => Math.min(2.2, z + .2))}>+</button><button onClick={() => setZoom(z => Math.max(1, z - .2))}>−</button></div></div>
    <div className="map-frame" onWheel={e => { e.preventDefault(); setZoom(z => Math.max(1, Math.min(2.2, z + (e.deltaY < 0 ? .1 : -.1)))); }} onPointerDown={e => { drag.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y }; e.currentTarget.setPointerCapture(e.pointerId); }} onPointerMove={e => { if (drag.current) { const scale = 100 / (zoom * e.currentTarget.clientWidth); setOffset({ x: drag.current.ox - (e.clientX - drag.current.x) * scale, y: drag.current.oy - (e.clientY - drag.current.y) * scale }); } }} onPointerUp={() => { drag.current = null; }}>
      <svg viewBox={view} role="img" aria-label="Placeholder world map. Drag to pan and use the controls to zoom"><defs><pattern id="map-grid" width="5" height="5" patternUnits="userSpaceOnUse"><path d="M 5 0 L 0 0 0 5" fill="none" stroke="#25342b" strokeWidth=".15" /></pattern></defs><rect x="0" y="0" width="100" height="100" fill="url(#map-grid)" />
        {ROUTES.map(edge => { const a = LOCATIONS[edge.from], b = LOCATIONS[edge.to]; return <line key={`${edge.from}-${edge.to}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} className="route-line" />; })}
        {Object.values(LOCATIONS).map(location => { const isHere = state.currentLocationId === location.id; const taskIndex = taskLocations.findIndex(id => id === location.id); return <g key={location.id} className={`map-node ${isHere ? 'is-here' : ''} ${taskIndex === 0 ? 'is-destination' : ''} ${focusedLocation === location.id ? 'is-focused' : ''}`} transform={`translate(${location.x} ${location.y})`} onClick={() => setFocusedLocation(location.id)}>
          <title>{location.name} · {location.activities.length ? location.activities.join(', ') : 'Town hub'}</title><circle className="node-halo" r="4.1"/><circle className="node-core" r="2.2"/><text y="7" textAnchor="middle">{location.name}</text>
          {taskLocations.map((id, index) => id === location.id && index > 0 && <g key={index} transform={`translate(${3.5 + (index - 1) * 2.8} -3.5)`}><circle r="1.7" className="queue-dot"/><text className="queue-dot-label" y=".65" textAnchor="middle">{index}</text></g>)}
          {isHere && <text className="you-label" y="-5" textAnchor="middle">YOU ARE HERE</text>}{taskIndex === 0 && <text className="target-label" y="-5" textAnchor="middle">DESTINATION</text>}
        </g>; })}
      </svg>
      <div className="map-compass">N <span>↑</span></div><div className="map-caption">PLACEHOLDER CARTOGRAPHY <span>DRAG TO PAN</span></div>
    </div>
    {focusedLocation && <div className="location-detail"><strong>{LOCATIONS[focusedLocation].name}</strong><span>{LOCATIONS[focusedLocation].kind} · {LOCATIONS[focusedLocation].activities.join(' · ') || 'Central hub'}</span><button onClick={() => setFocusedLocation(null)} aria-label="Close location details">×</button></div>}
    <div className="map-legend"><span><i className="legend-you"/> Your position</span><span><i className="legend-dest"/> Task destination</span><span><i className="legend-route"/> Travel route</span></div>
  </section>;
}
