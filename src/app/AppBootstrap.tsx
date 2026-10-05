import { useEffect, useRef, useState } from 'react';
import { BootFlow } from './BootFlow';
import { SettingsModal } from '../features/settings/SettingsModal';
import { applyAppSettings, saveAppSettings, type AppSettings } from '../game/persistence/settingsStorage';
import type { ProfileRecord } from '../game/persistence/profileIndex';

type ProfileActions = { switchProfile: () => void; rename: (name: string) => void; remove: () => void };
export function AppBootstrap({ initialSettings }: { initialSettings: AppSettings }) {
  const [settings, setSettings] = useState(initialSettings), [settingsOpen, setSettingsOpen] = useState(false), [profile, setProfile] = useState<ProfileRecord | null>(null), [actions, setActions] = useState<ProfileActions>(), [settingsSaveError, setSettingsSaveError] = useState('');
  const settingsRef = useRef(settings); settingsRef.current = settings;
  useEffect(() => { applyAppSettings(settings); const resize = () => applyAppSettings(settingsRef.current); const motion = window.matchMedia('(prefers-reduced-motion: reduce)'); window.addEventListener('resize', resize); motion.addEventListener('change', resize); return () => { window.removeEventListener('resize', resize); motion.removeEventListener('change', resize); }; }, []);
  useEffect(() => { const timeout = window.setTimeout(() => { try { saveAppSettings(settings); setSettingsSaveError(''); } catch { setSettingsSaveError('Settings could not be saved to this browser. Your current choices remain active until the page closes.'); } }, 150); return () => window.clearTimeout(timeout); }, [settings]);
  const changeSettings = (next: AppSettings) => { setSettings(next); applyAppSettings(next); };
  const openSettings = (target: ProfileRecord | null, profileActions?: ProfileActions) => { setProfile(target); setActions(profileActions); setSettingsOpen(true); };
  const switchProfile = () => { actions?.switchProfile(); setSettingsOpen(false); };
  const removeProfile = () => { actions?.remove(); setSettingsOpen(false); };
  return <><BootFlow settings={settings} onOpenSettings={openSettings} />{settingsOpen && <SettingsModal settings={settings} profile={profile} saveError={settingsSaveError} onSettings={changeSettings} onClose={() => setSettingsOpen(false)} onSwitchProfile={switchProfile} onRenameProfile={(name) => { actions?.rename(name); if (profile) setProfile({ ...profile, name: name.trim() }); }} onDeleteProfile={removeProfile} />}</>;
}
