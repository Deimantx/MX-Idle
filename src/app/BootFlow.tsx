import { useCallback, useEffect, useRef, useState } from 'react';
import { GameShell } from './App';
import { ProfileSelectScreen } from '../features/profiles/ProfileSelectScreen';
import { ProfileLoadScreen, type LoadStage } from '../features/profiles/ProfileLoadScreen';
import { createProfile, deleteProfile, initializeProfiles, migrateProfileSource, readProfileIndex, readProfileSource, renameProfile, simulateProfile, validateProfileSource } from '../game/persistence/profileStorage';
import type { ProfileIndex, ProfileRecord, ProfileSlotId } from '../game/persistence/profileIndex';
import type { SaveState } from '../game/types/gameTypes';
import type { AppSettings } from '../game/persistence/settingsStorage';
import { OfflineSummary } from '../ui/overlays/OfflineSummary';
import { ITEMS } from '../game/content/firstSlice';
import { xpForLevel } from '../game/systems/gameMath';
import { Button } from '../ui/primitives';

type Phase = 'profile-select' | 'profile-loading' | 'offline-summary' | 'game' | 'error';
type Active = { profile: ProfileRecord; state: SaveState; awayMs: number; before: SaveState };
const pauseFrame = () => new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

export function BootFlow({ settings, onOpenSettings }: { settings: AppSettings; onOpenSettings: (profile: ProfileRecord | null, actions?: { switchProfile: () => void; rename: (name: string) => void; remove: () => void }) => void }) {
  const [phase, setPhase] = useState<Phase>('profile-select'), [index, setIndex] = useState<ProfileIndex>({ version: 1, slots: [null, null, null] });
  const [active, setActive] = useState<Active | null>(null), [slot, setSlot] = useState<ProfileSlotId | null>(null), [stage, setStage] = useState<LoadStage>('Reading Save'), [error, setError] = useState('');
  const flushGame = useRef<(() => void) | null>(null);
  const refresh = useCallback(() => setIndex(readProfileIndex()), []);
  useEffect(() => { try { setIndex(initializeProfiles()); } catch (cause) { setError(cause instanceof Error ? cause.message : 'Could not read profile data.'); setPhase('error'); } }, []);

  const beginLoad = useCallback(async (selected: ProfileSlotId) => {
    setSlot(selected); setError(''); setStage('Reading Save'); setPhase('profile-loading'); await pauseFrame();
    try {
      const source = readProfileSource(selected);
      setStage('Validating'); await pauseFrame();
      validateProfileSource(source.raw);
      setStage('Migrating'); await pauseFrame();
      const normalized = migrateProfileSource(source.raw);
      setStage('Loading Content'); await pauseFrame();
      setStage('Simulating Offline'); await pauseFrame();
      const loaded = simulateProfile(selected, source.profile, source.raw, normalized);
      setStage('Finalizing'); await pauseFrame();
      const next = { profile: loaded.profile, state: loaded.state, awayMs: loaded.awayMs, before: loaded.before };
      setActive(next); refresh();
      setPhase(loaded.awayMs >= 60_000 ? 'offline-summary' : 'game');
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Could not load this profile.'); }
  }, [refresh]);

  if (phase === 'profile-loading') return <ProfileLoadScreen name={index.slots[(slot ?? 1) - 1]?.name ?? 'your adventurer'} stage={stage} error={error || undefined} onRetry={() => slot && void beginLoad(slot)} onBack={() => { setError(''); setPhase('profile-select'); }} />;
  if (phase === 'error') return <main className="profile-load"><div className="load-emblem">MX</div><p>LOCAL PROFILE DATA</p><h1>Profile list needs attention</h1><div className="profile-error" role="alert">{error}</div><div className="load-actions"><Button tone="copper" onClick={() => { try { setIndex(initializeProfiles()); setError(''); setPhase('profile-select'); } catch (cause) { setError(cause instanceof Error ? cause.message : 'Profile data could not be read.'); } }}>Retry</Button><Button onClick={() => onOpenSettings(null)}>Settings</Button></div></main>;
  if (phase === 'profile-select') return <ProfileSelectScreen index={index} onChoose={(selected) => void beginLoad(selected)} onCreate={(selected, name) => { createProfile(selected, name); refresh(); void beginLoad(selected); }} onRename={(slot, name) => { renameProfile(slot, name); refresh(); }} onDelete={(slot) => { deleteProfile(slot); refresh(); }} onSettings={() => onOpenSettings(null)} onRetry={() => { try { setIndex(initializeProfiles()); setError(''); setPhase('profile-select'); } catch (cause) { setError(cause instanceof Error ? cause.message : 'Profile data could not be read.'); } }} />;

  const switchProfile = () => { flushGame.current?.(); setActive(null); setPhase('profile-select'); refresh(); };
  const rename = (name: string) => { if (!active) return; const profile = renameProfile(active.profile.slot, name); setActive({ ...active, profile }); refresh(); };
  const remove = () => { if (!active) return; deleteProfile(active.profile.slot); setActive(null); refresh(); setPhase('profile-select'); };
  if (!active) return null;
  if (phase === 'offline-summary') {
    const gained: Record<string, number> = {};
    for (const id of Object.keys(ITEMS) as (keyof typeof ITEMS)[]) { const delta = (active.state.bank[id] ?? 0) - (active.before.bank[id] ?? 0); if (delta > 0) gained[ITEMS[id].name] = delta; }
    if (active.state.gold > active.before.gold) gained.Gold = active.state.gold - active.before.gold;
    for (const id of Object.keys(active.state.skills) as (keyof typeof active.state.skills)[]) { const delta = skillTotal(active.state, id) - skillTotal(active.before, id); if (delta > 0) gained[`${id} XP`] = delta; }
    if (active.state.combat.kills > active.before.combat.kills) gained['Road Wolves defeated'] = active.state.combat.kills - active.before.combat.kills;
    const defeated = active.before.activity === 'combat' && active.state.activity === null && active.state.combat.log.some((entry) => entry.toLowerCase().includes('defeated'));
    return <><GameShell key={active.profile.id} profile={active.profile} initialState={active.state} appSettings={settings} onOpenSettings={() => onOpenSettings(active.profile, { switchProfile, rename, remove })} onBackToProfiles={switchProfile} onRegisterFlush={(flush) => { flushGame.current = flush; }} /><OfflineSummary elapsed={formatAway(active.awayMs)} gained={gained} activity={active.before.activity} defeated={defeated} onClose={() => setPhase('game')} /></>;
  }
  return <GameShell key={active.profile.id} profile={active.profile} initialState={active.state} appSettings={settings} onOpenSettings={() => onOpenSettings(active.profile, { switchProfile, rename, remove })} onBackToProfiles={switchProfile} onRegisterFlush={(flush) => { flushGame.current = flush; }} />;
}

function formatAway(ms: number) { const mins = Math.floor(ms / 60000), hrs = Math.floor(mins / 60), days = Math.floor(hrs / 24); if (days) return `${days}d ${hrs % 24}h`; if (hrs) return `${hrs}h ${mins % 60}m`; return `${mins}m ${Math.floor((ms % 60000) / 1000)}s`; }
function skillTotal(state: SaveState, id: keyof SaveState['skills']) { let total = state.skills[id].xp; for (let level = 1; level < state.skills[id].level; level++) total += xpForLevel(level); return total; }
