import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { advance, freshState, ITEMS, loadState, PROVISIONAL_FIRST_SLICE_COMBAT_VALUES, RECIPES, SAVE_KEY, startActivity, stopActivity, xpForLevel, type Activity, type ItemId, type RecipeId, type SaveState, type SkillId } from '../game/game';
import { GAME_SCREENS, screenLockReason, type GameScreenId } from './screenRegistry';
import { MiningScreen } from '../features/professions/mining/MiningScreen';
import { SmithingScreen } from '../features/professions/smithing/SmithingScreen';
import { EquipmentScreen } from '../features/equipment/EquipmentScreen';
import { CombatScreen } from '../features/combat/CombatScreen';
import { BankScreen } from '../features/bank/BankScreen';
import { ActivityDock } from '../ui/game/ActivityDock';
import { DevPanel } from '../features/devtools/DevPanel';
import { FirstStepsPanel } from '../features/onboarding/FirstStepsPanel';
import { SettingsModal } from '../features/settings/SettingsModal';
import { OfflineSummary } from '../ui/overlays/OfflineSummary';
import { activityLabel, fmt } from '../ui/game/formatters';
import { Icon, Panel } from '../ui/primitives';

type Page = GameScreenId;
const xpProgress = (s: SaveState, id: keyof SaveState['skills']) => ({ value: s.skills[id].xp, max: xpForLevel(s.skills[id].level) });
function voice(freq = 340, duration = .055, volume = .08) { try { const Ctx = window.AudioContext; const ctx = new Ctx(); const osc = ctx.createOscillator(); const gain = ctx.createGain(); osc.type = 'triangle'; osc.frequency.value = freq; gain.gain.value = volume; gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + duration); osc.connect(gain); gain.connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime + duration); osc.onended = () => void ctx.close(); } catch { /* browser audio is optional */ } }

export default function App() {
  const [game, setGame] = useState<SaveState>(() => freshState());
  const [hydrated, setHydrated] = useState(false);
  const [screen, setScreen] = useState<Page>('Mining');
  const [modal, setModal] = useState<'settings' | 'offline' | null>(null);
  const [offline, setOffline] = useState<{ ms: number; gained: Record<string, number> } | null>(null);
  const [saveStatus, setSaveStatus] = useState('Saved');
  const [toast, setToast] = useState('');
  const [filter, setFilter] = useState('All');
  const [minimized, setMinimized] = useState(false);
  const [speed, setSpeed] = useState(1);
  const gameRef = useRef(game);
  gameRef.current = game;
  const toastTimer = useRef<number | undefined>();
  const toastSeen = useRef('');
  useEffect(() => {
    const raw = localStorage.getItem(SAVE_KEY);
    const result = loadState(raw);
    setGame(result.state); setScreen((result.state.page as Page) || 'Mining'); setHydrated(true);
    if (result.awayMs >= 60_000) { const gained: Record<string, number> = {}; try { const before = JSON.parse(raw ?? '{}').state; for (const id of Object.keys(ITEMS) as ItemId[]) { const n = (result.state.bank[id] ?? 0) - (before?.bank?.[id] ?? 0); if (n > 0) gained[ITEMS[id].name] = n; } if (result.state.gold > (before?.gold ?? 0)) gained.Gold = result.state.gold - (before?.gold ?? 0); for (const id of Object.keys(result.state.skills) as SkillId[]) { const amount = skillTotal(result.state, id) - skillTotal({ ...result.state, skills: { ...result.state.skills, [id]: before?.skills?.[id] ?? result.state.skills[id] } }, id); if (amount > 0) gained[`${id} XP`] = amount; } if (result.state.combat.kills > (before?.combat?.kills ?? 0)) gained['Road Wolves defeated'] = result.state.combat.kills - before.combat.kills; } catch { /* corrupt saves already fall back safely */ } setOffline({ ms: result.awayMs, gained }); setModal('offline'); }
  }, []);
  useEffect(() => {
    if (!hydrated) return;
    const handle = window.setInterval(() => setGame((old) => advance(old, 250 * speed)), 250);
    return () => window.clearInterval(handle);
  }, [hydrated, speed]);
  const persist = useCallback((value: SaveState) => { try { const s = { ...value, savedAt: Date.now() }; localStorage.setItem(SAVE_KEY, JSON.stringify({ version: 1, savedAt: s.savedAt, state: s })); setSaveStatus('Saved'); } catch { setSaveStatus('Save failed'); } }, []);
  useEffect(() => { if (!hydrated) return; const timer = window.setInterval(() => persist(gameRef.current), 4000); const save = () => persist(gameRef.current); const onVis = () => { if (document.visibilityState === 'hidden') save(); }; window.addEventListener('beforeunload', save); document.addEventListener('visibilitychange', onVis); return () => { window.clearInterval(timer); window.removeEventListener('beforeunload', save); document.removeEventListener('visibilitychange', onVis); }; }, [hydrated, persist]);
  useEffect(() => { if (game.lastEvent && game.lastEvent !== toastSeen.current) { toastSeen.current = game.lastEvent; setToast(game.lastEvent); window.clearTimeout(toastTimer.current); toastTimer.current = window.setTimeout(() => setToast(''), 2600); } }, [game.lastEvent]);
  const mut = (fn: (s: SaveState) => void) => { setGame((old) => { const s = structuredClone(old); fn(s); s.savedAt = Date.now(); return s; }); };
  const sound = (freq: number, duration: number, intensity = .08) => { if (!game.settings.muted && game.settings.volume > 0) voice(freq, duration, intensity * game.settings.volume); };
  const go = (page: Page) => { setScreen(page); mut((s) => { s.page = page; }); sound(300, .035, .035); };
  const start = (a: Exclude<Activity, null>) => { mut((s) => { if (a === 'smelting' && (s.bank.ore ?? 0) < 2) { s.smithing.message = 'Not enough Copper Ore'; return; } if (a === 'combat' && (s.equipped.weapon !== 'sword' || !s.equipped.head)) { s.lastEvent = 'Equip a melee weapon and one armor piece to begin'; return; } startActivity(s, a); }); sound(a === 'combat' ? 220 : 380, .07); };
  const stop = () => { mut(stopActivity); sound(190, .05, .035); };
  const buyForgeRecipe = (id: RecipeId) => mut((s) => { if (s.activity === 'forging' || (s.smithing.reserved && s.smithing.recipe !== id)) return; s.smithing.recipe = id; s.smithing.work = Math.round(28 * RECIPES[id].work); s.smithing.heat = 100; s.smithing.message = ''; });
  const equip = (item: ItemId, slot: 'weapon' | 'head' | 'armor' | 'hands' | 'feet' | 'offhand') => mut((s) => {
    if ((s.bank[item] ?? 0) < 1) return;
    if (item === 'sword' && s.skills.Attack.level < 1) return;
    if (['helm', 'plate', 'gloves', 'greaves'].includes(item) && s.skills.Defence.level < 1) return;
    const old = s.equipped[slot]; if (old) gainItem(s, old);
    s.equipped[slot] = item as never; const n = (s.bank[item] ?? 1) - 1; if (n) s.bank[item] = n; else delete s.bank[item]; s.lastEvent = `${ITEMS[item].name} equipped`; sound(540, .085, .06);
  });
  const unequip = (slot: 'weapon' | 'head' | 'armor' | 'hands' | 'feet' | 'offhand') => mut((s) => { const old = s.equipped[slot]; if (old) { gainItem(s, old); s.equipped[slot] = null; } });
  const grant = (item: ItemId, n = 1) => mut((s) => { gainItem(s, item, n); });
  const offlineSim = (ms: number) => { const before = structuredClone(game); const next = advance(game, ms); const gained: Record<string, number> = {}; (Object.keys(next.bank) as ItemId[]).forEach((id) => { const d = (next.bank[id] ?? 0) - (before.bank[id] ?? 0); if (d > 0) gained[ITEMS[id].name] = d; }); if (next.gold > before.gold) gained.Gold = next.gold - before.gold; for (const id of Object.keys(next.skills) as SkillId[]) { const amount = skillTotal(next, id) - skillTotal(before, id); if (amount > 0) gained[`${id} XP`] = amount; } if (next.combat.kills > before.combat.kills) gained['Road Wolves defeated'] = next.combat.kills - before.combat.kills; next.savedAt = Date.now(); setOffline({ ms, gained }); setGame(next); setModal('offline'); };
  const xp = useMemo(() => ({ mining: xpProgress(game, 'Mining'), smithing: xpProgress(game, 'Smithing') }), [game.skills]);
  const tab = game.smithing.mode;
  const setMode = (m: 'smelting' | 'forging') => mut((s) => { if (s.activity) stopActivity(s); s.smithing.mode = m; s.page = 'Smithing'; });
  const isMotionReduced = game.settings.reducedMotion ?? window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return <div className={`game-shell ${isMotionReduced ? 'reduced-motion' : ''}`}>
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark">M<span>X</span></div><div><b>MX-Idle</b><small>THE FIRST STEPS</small></div></div>
      <div className="nav-caption">ADVENTURER</div>
      <nav aria-label="Game navigation">{GAME_SCREENS.map(({ id: name, icon }) => {
        const lockReason = screenLockReason(name, game), locked = Boolean(lockReason);
        return <button key={name} aria-label={name} aria-disabled={locked} title={lockReason} className={`nav-item ${screen === name ? 'selected' : ''} ${locked ? 'nav-locked' : ''}`} onClick={() => { if (!locked) go(name); }} aria-current={screen === name ? 'page' : undefined}><Icon name={icon} size={19} /><span>{name}</span>{name === 'Smithing' && !locked && <i className="new-dot" title="New system available" />}{name === 'Combat' && locked && <span className="lock-mark">·</span>}</button>;
      })}</nav>
      <div className="sidebar-bottom"><div className="mini-save"><span className="save-dot" />Save {saveStatus}</div><button className="nav-item settings-nav" onClick={() => setModal('settings')}><Icon name="settings" size={18} /><span>Settings</span></button><div className="build-tag">FIRST PLAYABLE <span>0.1</span></div></div>
    </aside>
    <main className="main-frame">
      <header className="topbar"><div className="location-crumb"><span>THE FRONTIER</span><b> / </b>{screen}</div><div className="top-status"><div className="gold-chip"><Icon name="gold" size={17} /><span>{fmt(game.gold)}</span><small>GOLD</small></div><div className="status-divider" /><div className="skill-chip"><span className="skill-glyph">{screen === 'Mining' ? 'M' : screen === 'Smithing' ? 'S' : screen === 'Combat' ? 'A' : '•'}</span><div><b>{screen === 'Mining' ? `Mining ${game.skills.Mining.level}` : screen === 'Smithing' ? `Smithing ${game.skills.Smithing.level}` : screen === 'Combat' ? `Attack ${game.skills.Attack.level}` : 'Adventurer'}</b><div className="mini-xp"><span style={{ width: `${Math.min(100, (screen === 'Mining' ? xp.mining.value / xp.mining.max : xp.smithing.value / xp.smithing.max) * 100)}%` }} /></div></div></div><div className="save-label"><span className="save-dot" />{saveStatus}</div><button className="icon-button top-settings" aria-label="Settings" onClick={() => setModal('settings')}><Icon name="settings" size={19} /></button></div></header>
      <div className="content-scroll"><div className="content-wrap">
        {screen === 'Mining' && <MiningScreen game={game} xp={xp.mining.value} maxXp={xp.mining.max} start={() => start('mining')} stop={stop} />}
        {screen === 'Smithing' && <SmithingScreen game={game} mode={tab} setMode={setMode} start={start} stop={stop} choose={buyForgeRecipe} />}
        {screen === 'Equipment' && <EquipmentScreen game={game} equip={equip} unequip={unequip} />}
        {screen === 'Combat' && <CombatScreen game={game} start={() => start('combat')} stop={stop} stance={(stance) => mut((s) => { s.combat.stance = stance; })} />}
        {screen === 'Bank' && <BankScreen game={game} filter={filter} setFilter={setFilter} />}
        <div className="bottom-grid">
          <FirstStepsPanel game={game} minimized={minimized} onToggle={() => { setMinimized(!minimized); mut((s) => { s.objectives.dismissed = !s.objectives.dismissed; }); }} />
          <Panel title="Field Notes" className="notes-panel"><div className="note-entry"><span className="note-pin copper-pin" /><div><b>The copper vein runs deep</b><small>Each layer holds less stone and richer ore. Reach its Core to begin the cycle again.</small></div></div><div className="note-entry"><span className="note-pin slate-pin" /><div><b>One task at a time</b><small>Mining, Smithing, and Combat share your personal activity slot.</small></div></div></Panel>
        </div>
      </div></div>
      <ActivityDock game={game} stop={stop} onNavigate={go} />
    </main>
    {toast && <div className="toast" role="status"><span className="toast-mark"><Icon name="ore" size={18} /></span>{toast}</div>}
    {modal === 'settings' && <SettingsModal game={game} onClose={() => setModal(null)} onVolume={(volume) => mut((s) => { s.settings.volume = volume; })} onMute={() => mut((s) => { s.settings.muted = !s.settings.muted; })} onReducedMotion={(value) => mut((s) => { s.settings.reducedMotion = value === 'system' ? null : value === 'on'; })} onReset={() => { if (window.confirm('Reset this save and start from the beginning?')) { const next = freshState(); setGame(next); setScreen('Mining'); localStorage.removeItem(SAVE_KEY); setModal(null); } }} />}
    {modal === 'offline' && offline && <OfflineSummary elapsed={formatAway(offline.ms)} gained={offline.gained} activity={game.activity ? activityLabel(game.activity) : null} defeated={game.activity === null && game.combat.log.some((x) => x.includes('Defeated'))} onClose={() => setModal(null)} />}
    {import.meta.env.DEV && <DevPanel game={game} grant={grant} simulate={offlineSim} setSpeed={setSpeed} setLevel={(skill, level) => mut((s) => { s.skills[skill].level = level; s.skills[skill].xp = 0; })} setHp={(hp) => mut((s) => { s.combat.playerHp = hp; })} resetWolf={() => mut((s) => { s.combat.wolfHp = PROVISIONAL_FIRST_SLICE_COMBAT_VALUES.wolfHp; s.combat.respawn = 0; s.combat.seq = 0; })} reset={() => { const n = freshState(); setGame(n); setScreen('Mining'); localStorage.removeItem(SAVE_KEY); }} />}
  </div>;
}

function gainItem(s: SaveState, id: ItemId, n = 1) { s.bank[id] = (s.bank[id] ?? 0) + n; }
function skillTotal(s: SaveState, id: SkillId) { let total = s.skills[id].xp; for (let level = 1; level < s.skills[id].level; level++) total += xpForLevel(level); return total; }
function formatAway(ms: number) { const mins = Math.floor(ms / 60000), hrs = Math.floor(mins / 60), days = Math.floor(hrs / 24); if (days) return `${days}d ${hrs % 24}h`; if (hrs) return `${hrs}h ${mins % 60}m`; return `${mins}m ${Math.floor((ms % 60000) / 1000)}s`; }
