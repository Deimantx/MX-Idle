import { Button } from '../../ui/primitives';
import type { SaveState } from '../../game/game';

export function SettingsModal({ game, onClose, onVolume, onMute, onReducedMotion, onReset }: { game: SaveState; onClose: () => void; onVolume: (value: number) => void; onMute: () => void; onReducedMotion: (value: 'system' | 'on' | 'off') => void; onReset: () => void }) {
  return <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <header className="modal-head"><div><small>GAME OPTIONS</small><h2 id="modal-title">Settings</h2></div><button className="icon-button" aria-label="Close settings" onClick={onClose}>×</button></header>
    <div className="setting-row"><div><b>Master volume</b><small>Short feedback for strikes, crafting, and combat.</small></div><div className="volume-control"><input aria-label="Master volume" type="range" min="0" max="100" value={game.settings.volume * 100} onChange={(e) => onVolume(Number(e.target.value) / 100)} /><span>{Math.round(game.settings.volume * 100)}%</span></div></div>
    <div className="setting-row"><div><b>Mute audio</b><small>Silence all game feedback.</small></div><button className={`toggle ${game.settings.muted ? 'on' : ''}`} role="switch" aria-label="Mute audio" aria-checked={game.settings.muted} onClick={onMute}><i /></button></div>
    <div className="setting-row"><div><b>Reduced motion</b><small>Use system setting unless overridden.</small></div><select aria-label="Reduced motion" value={game.settings.reducedMotion === null ? 'system' : game.settings.reducedMotion ? 'on' : 'off'} onChange={(e) => onReducedMotion(e.target.value as 'system' | 'on' | 'off')}><option value="system">System</option><option value="on">On</option><option value="off">Off</option></select></div>
    <div className="modal-foot"><span>Save v1 · stored on this device</span><Button tone="danger" onClick={onReset}>Reset Save</Button></div>
  </section></div>;
}
