import type { GameScreenId } from '../../app/screenRegistry';
import type { ProfileRecord } from '../../game/persistence/profileIndex';
import type { SaveState } from '../../game/game';
import { fmt } from './formatters';
import { Icon, Tip } from '../primitives';

export function GameTopBar({ game, screen, profile, saveStatus, onOpenSettings }: {
  game: SaveState; screen: GameScreenId; profile: ProfileRecord; saveStatus: string; onOpenSettings: () => void;
}) {
  const failed = saveStatus.toLowerCase().includes('fail');
  const saving = saveStatus.toLowerCase().includes('saving');
  return <header className="topbar topbar-v25">
    <div className="topbar-left">
      <span className="profile-sigil" aria-hidden="true">A{String(profile.slot).padStart(2, '0')}</span>
      <span className="active-profile"><b title={profile.name}>{profile.name}</b><small>PROFILE {profile.slot} <i/> {screen.toUpperCase()}</small></span>
    </div>
    <span className="topbar-center-reserve" aria-hidden="true"/>
    <div className="topbar-right">
      <Tip content={`${fmt(game.gold)} gold`}><div className="gold-chip"><Icon name="gold" size={17}/><span>{fmt(game.gold)}</span><small>GOLD</small></div></Tip>
      <span className={`save-label ${failed ? 'failed' : ''} ${saving ? 'saving' : ''}`} role={failed ? 'alert' : 'status'}><span className="save-dot"/>{saving ? 'Saving…' : failed ? 'Save failed' : 'Saved'}</span>
      <Tip content="Settings"><button className="icon-button top-settings" aria-label="Settings" onClick={onOpenSettings}><Icon name="gear" size={19}/></button></Tip>
    </div>
  </header>;
}
