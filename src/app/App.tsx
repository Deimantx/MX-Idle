import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { advance, ITEMS, PROVISIONAL_FIRST_SLICE_COMBAT_VALUES, RECIPES, startActivity, stopActivity, xpForLevel, type Activity, type ItemId, type RecipeId, type SaveState } from '../game/game';
import { GAME_SCREENS, screenLockReason, type GameScreenId } from './screenRegistry';
import { MiningScreen } from '../features/professions/mining/MiningScreen';
import { SmithingScreen } from '../features/professions/smithing/SmithingScreen';
import { EquipmentScreen } from '../features/equipment/EquipmentScreen';
import { CombatScreen } from '../features/combat/CombatScreen';
import { BankScreen } from '../features/bank/BankScreen';
import { ActivityHud } from '../ui/game/ActivityHud';
import { DevPanel } from '../features/devtools/DevPanel';
import { FirstStepsPanel } from '../features/onboarding/FirstStepsPanel';
import { fmt } from '../ui/game/formatters';
import { Icon, Tip } from '../ui/primitives';
import { saveProfile } from '../game/persistence/profileStorage';
import type { ProfileRecord } from '../game/persistence/profileIndex';
import type { AppSettings } from '../game/persistence/settingsStorage';
import type { GameFeedbackEvent } from '../features/feedback/feedback.types';

type Page = GameScreenId;
const xpProgress = (s: SaveState, id: keyof SaveState['skills']) => ({ value: s.skills[id].xp, max: xpForLevel(s.skills[id].level) });
function voice(freq = 340, duration = .055, volume = .08) { try { const Ctx = window.AudioContext; const ctx = new Ctx(); const osc = ctx.createOscillator(); const gain = ctx.createGain(); osc.type = 'triangle'; osc.frequency.value = freq; gain.gain.value = volume; gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + duration); osc.connect(gain); gain.connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime + duration); osc.onended = () => void ctx.close(); } catch { /* browser audio is optional */ } }

export function GameShell({ profile, initialState, appSettings, onOpenSettings, onBackToProfiles, onRegisterFlush }: { profile: ProfileRecord; initialState: SaveState; appSettings: AppSettings; onOpenSettings: () => void; onBackToProfiles: () => void; onRegisterFlush: (flush: (() => void) | null) => void }) {
  const [game, setGame] = useState<SaveState>(initialState);
  const [screen, setScreen] = useState<Page>((initialState.page as Page) || 'Mining');
  const [saveStatus, setSaveStatus] = useState('Saved');
  const [toast, setToast] = useState('');
  const [filter, setFilter] = useState('All');
  const [minimized, setMinimized] = useState(initialState.objectives.dismissed);
  const [speed, setSpeed] = useState(1);
  const [feedbackEvents, setFeedbackEvents] = useState<GameFeedbackEvent[]>([]);
  const [metricSamples, setMetricSamples] = useState({ activeMs: 0, Mining: 0, Smithing: 0, Attack: 0, Defence: 0, Hitpoints: 0, ore: 0, ingot: 0, kills: 0, forged: 0 });
  const eventId = useRef(0);
  const gameRef = useRef(game);
  gameRef.current = game;
  const toastTimer = useRef<number | undefined>();
  const toastSeen = useRef('');
  const soundEventSeen = useRef(0);
  useEffect(() => {
    const handle = window.setInterval(() => {
      const before = gameRef.current, next = advance(before, 250 * speed);
      gameRef.current = next;
      const fresh = collectFeedback(before, next, () => ++eventId.current);
      if (fresh.length) setFeedbackEvents((old) => [...old, ...fresh].slice(-24));
      if (before.activity) setMetricSamples((old) => ({ activeMs: old.activeMs + 250 * speed, Mining: old.Mining + skillDelta(before, next, 'Mining'), Smithing: old.Smithing + skillDelta(before, next, 'Smithing'), Attack: old.Attack + skillDelta(before, next, 'Attack'), Defence: old.Defence + skillDelta(before, next, 'Defence'), Hitpoints: old.Hitpoints + skillDelta(before, next, 'Hitpoints'), ore: old.ore + fresh.filter((event): event is Extract<GameFeedbackEvent, { type: 'item' }> => event.type === 'item' && event.itemId === 'ore').reduce((sum, event) => sum + event.amount, 0), ingot: old.ingot + fresh.filter((event): event is Extract<GameFeedbackEvent, { type: 'item' }> => event.type === 'item' && event.itemId === 'ingot').reduce((sum, event) => sum + event.amount, 0), kills: old.kills + Math.max(0, next.combat.kills - before.combat.kills), forged: old.forged + fresh.filter((event): event is Extract<GameFeedbackEvent, { type: 'item' }> => event.type === 'item' && !['ore','ingot'].includes(event.itemId)).reduce((sum, event) => sum + event.amount, 0) }));
      setGame(next);
    }, 250);
    return () => window.clearInterval(handle);
  }, [speed]);
  const playedMs = useRef(0), activeSince = useRef<number | null>(document.visibilityState === 'visible' ? Date.now() : null);
  const persist = useCallback((value: SaveState) => { try { const now = Date.now(), delta = playedMs.current + (activeSince.current === null ? 0 : now - activeSince.current); saveProfile(profile.slot, value, delta); playedMs.current = 0; activeSince.current = document.visibilityState === 'visible' ? now : null; setSaveStatus('Saved'); } catch { setSaveStatus('Save failed'); } }, [profile.slot]);
  useEffect(() => { onRegisterFlush(() => persist(gameRef.current)); return () => onRegisterFlush(null); }, [onRegisterFlush, persist]);
  useEffect(() => { const timer = window.setInterval(() => persist(gameRef.current), 4000); const save = () => persist(gameRef.current); const onVis = () => { if (document.visibilityState === 'hidden') { if (activeSince.current !== null) playedMs.current += Date.now() - activeSince.current; activeSince.current = null; save(); } else if (activeSince.current === null) activeSince.current = Date.now(); }; window.addEventListener('beforeunload', save); document.addEventListener('visibilitychange', onVis); return () => { window.clearInterval(timer); window.removeEventListener('beforeunload', save); document.removeEventListener('visibilitychange', onVis); persist(gameRef.current); }; }, [persist]);
  useEffect(() => { const critical = /failed|error/i.test(game.lastEvent); if (game.lastEvent && game.lastEvent !== toastSeen.current && (critical || (appSettings.feedback.systemToasts && /unlocked/i.test(game.lastEvent)))) { toastSeen.current = game.lastEvent; setToast(game.lastEvent); window.clearTimeout(toastTimer.current); toastTimer.current = window.setTimeout(() => setToast(''), 2600); } }, [game.lastEvent, appSettings.feedback.systemToasts]);
  const mut = (fn: (s: SaveState) => void) => { setGame((old) => { const s = structuredClone(old); fn(s); s.savedAt = Date.now(); return s; }); };
  const sound = (freq: number, duration: number, intensity = .08) => { if (!appSettings.audio.muted && appSettings.audio.masterVolume > 0) voice(freq, duration, intensity * appSettings.audio.masterVolume); };
  useEffect(() => {
    const fresh = feedbackEvents.filter((event) => event.id > soundEventSeen.current);
    if (!fresh.length) return;
    soundEventSeen.current = fresh[fresh.length - 1]!.id;
    if (fresh.some((event) => event.type === 'level-up')) sound(760, .14, .07);
    else if (fresh.some((event) => event.type === 'xp')) sound(460, .045, .025);
    else if (fresh.length) sound(520, .05, .03);
  }, [feedbackEvents, appSettings.audio.muted, appSettings.audio.masterVolume]);
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
  const offlineSim = (ms: number) => { setGame((old) => advance(old, ms)); };
  const xp = useMemo(() => ({ mining: xpProgress(game, 'Mining'), smithing: xpProgress(game, 'Smithing') }), [game.skills]);
  const metrics = useMemo(() => {
    const skills = Object.fromEntries((['Mining','Smithing','Attack','Defence','Hitpoints'] as const).map((id) => [id, { sessionXp: metricSamples[id], xpHour: metricSamples.activeMs >= 8000 ? metricSamples[id] * 3_600_000 / metricSamples.activeMs : 0 }]));
    return { ...skills, activeMs: metricSamples.activeMs, oreHour: metricSamples.activeMs >= 8000 ? metricSamples.ore * 3_600_000 / metricSamples.activeMs : 0, ingotHour: metricSamples.activeMs >= 8000 ? metricSamples.ingot * 3_600_000 / metricSamples.activeMs : 0, killsHour: metricSamples.activeMs >= 8000 ? metricSamples.kills * 3_600_000 / metricSamples.activeMs : 0, forged: metricSamples.forged } as Record<'Mining'|'Smithing'|'Attack'|'Defence'|'Hitpoints', { sessionXp: number; xpHour: number }> & { activeMs: number; oreHour: number; ingotHour: number; killsHour: number; forged: number };
  }, [metricSamples]);
  const tab = game.smithing.mode;
  const setMode = (m: 'smelting' | 'forging') => mut((s) => { if (s.activity) stopActivity(s); s.smithing.mode = m; s.page = 'Smithing'; });
  const isMotionReduced = appSettings.accessibility.reducedMotion === 'system' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : appSettings.accessibility.reducedMotion === 'on';
  return <div className={`game-shell ${isMotionReduced ? 'reduced-motion' : ''}`}>
    <a className="skip-link" href="#game-content">Skip to game content</a>
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark">M<span>X</span></div><div><b>MX-Idle</b><small>THE FIRST STEPS</small></div></div>
      <div className="nav-caption">ADVENTURER</div>
      <nav aria-label="Game navigation">{GAME_SCREENS.map(({ id: name, icon }) => {
        const lockReason = screenLockReason(name, game), locked = Boolean(lockReason);
        const item = <button key={name} aria-label={lockReason ? `${name}. Locked. ${lockReason}` : name} aria-disabled={locked} className={`nav-item ${screen === name ? 'selected' : ''} ${locked ? 'nav-locked' : ''}`} onClick={() => { if (!locked) go(name); }} aria-current={screen === name ? 'page' : undefined}><Icon name={icon} size={19} /><span>{name}</span>{name === 'Smithing' && !locked && <i className="new-dot" />}{name === 'Combat' && locked && <span className="lock-mark">·</span>}</button>;
        return lockReason ? <Tip key={`${name}-tip`} content={lockReason} focusable={false} className="nav-tip-wrap">{item}</Tip> : item;
      })}</nav>
      <div className="sidebar-bottom"><div className="mini-save"><span className="save-dot" />Save {saveStatus}</div><button className="nav-item settings-nav" onClick={onOpenSettings}><Icon name="gear" size={18} /><span>Settings</span></button><button className="nav-item profile-nav" onClick={() => { persist(gameRef.current); onBackToProfiles(); }}><span>↩</span><span>Profile Select</span></button><div className="build-tag">FIRST PLAYABLE <span>0.1</span></div></div>
    </aside>
    <main className="main-frame">
      <header className="topbar"><div className="active-profile"><b>{profile.name}</b><small>PROFILE {profile.slot}</small></div><div className="top-status"><div className="gold-chip"><Icon name="gold" size={17} /><span>{fmt(game.gold)}</span><small>GOLD</small></div><div className="status-divider" /><div className="skill-chip"><span className="skill-glyph">{screen === 'Mining' ? 'M' : screen === 'Smithing' ? 'S' : screen === 'Combat' ? 'A' : '•'}</span><div><b>{screen === 'Mining' ? `Mining ${game.skills.Mining.level}` : screen === 'Smithing' ? `Smithing ${game.skills.Smithing.level}` : screen === 'Combat' ? `Attack ${game.skills.Attack.level}` : 'Adventurer'}</b><div className="mini-xp"><span style={{ width: `${Math.min(100, (screen === 'Mining' ? xp.mining.value / xp.mining.max : xp.smithing.value / xp.smithing.max) * 100)}%` }} /></div></div></div><div className="save-label"><span className="save-dot" />{saveStatus}</div><button className="icon-button top-settings" aria-label="Settings" onClick={onOpenSettings}><Icon name="gear" size={19} /></button></div></header>
      <div className="content-scroll" id="game-content" tabIndex={-1}><div className="content-wrap">
        {!game.objectives.victory && <FirstStepsPanel game={game} minimized={minimized} onToggle={() => { setMinimized(!minimized); mut((s) => { s.objectives.dismissed = !s.objectives.dismissed; }); }} />}
        {screen === 'Mining' && <MiningScreen game={game} xp={xp.mining.value} maxXp={xp.mining.max} speedMultiplier={speed} metrics={metrics} start={() => start('mining')} stop={stop} />}
        {screen === 'Smithing' && <SmithingScreen game={game} speedMultiplier={speed} mode={tab} setMode={setMode} start={start} stop={stop} choose={buyForgeRecipe} />}
        {screen === 'Equipment' && <EquipmentScreen game={game} equip={equip} unequip={unequip} />}
        {screen === 'Combat' && <CombatScreen game={game} speedMultiplier={speed} start={() => start('combat')} stop={stop} stance={(stance) => mut((s) => { s.combat.stance = stance; })} />}
        {screen === 'Bank' && <BankScreen game={game} filter={filter} setFilter={setFilter} />}
      </div></div>
      <ActivityHud game={game} stop={stop} onNavigate={go} speed={speed} metrics={metrics} events={feedbackEvents} settings={appSettings.feedback} reducedMotion={isMotionReduced} />
    </main>
    {toast && <div className="toast" role="status"><span className="toast-mark"><Icon name="ore" size={18} /></span>{toast}</div>}
    {import.meta.env.DEV && <DevPanel game={game} grant={grant} simulate={offlineSim} setSpeed={setSpeed} setLevel={(skill, level) => mut((s) => { s.skills[skill].level = level; s.skills[skill].xp = 0; })} setHp={(hp) => mut((s) => { s.combat.playerHp = hp; })} resetWolf={() => mut((s) => { s.combat.wolfHp = PROVISIONAL_FIRST_SLICE_COMBAT_VALUES.wolfHp; s.combat.respawn = 0; s.combat.seq = 0; })} reset={() => {}} />}
  </div>;
}

function gainItem(s: SaveState, id: ItemId, n = 1) { s.bank[id] = (s.bank[id] ?? 0) + n; }

function skillTotal(state: SaveState, id: keyof SaveState['skills']) { let total = state.skills[id].xp; for (let level = 1; level < state.skills[id].level; level++) total += xpForLevel(level); return total; }
function skillDelta(before: SaveState, after: SaveState, id: keyof SaveState['skills']) { return Math.max(0, skillTotal(after, id) - skillTotal(before, id)); }
function collectFeedback(before: SaveState, after: SaveState, nextId: () => number): GameFeedbackEvent[] {
  if (!before.activity) return [];
  const events: GameFeedbackEvent[] = [], now = Date.now();
  for (const skill of Object.keys(before.skills) as (keyof SaveState['skills'])[]) {
    const amount = skillDelta(before, after, skill);
    if (amount > 0) events.push({ id: nextId(), type: 'xp', skillId: skill, amount, occurredAt: now });
    if (after.skills[skill].level > before.skills[skill].level) events.push({ id: nextId(), type: 'level-up', skillId: skill, oldLevel: before.skills[skill].level, newLevel: after.skills[skill].level, occurredAt: now });
  }
  for (const item of Object.keys(ITEMS) as ItemId[]) { const amount = (after.bank[item] ?? 0) - (before.bank[item] ?? 0); if (amount > 0) events.push({ id: nextId(), type: 'item', itemId: item, amount, source: before.activity, occurredAt: now }); }
  if (after.gold > before.gold) events.push({ id: nextId(), type: 'gold', amount: after.gold - before.gold, source: before.activity, occurredAt: now });
  return events;
}
