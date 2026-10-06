import type { GameScreenId } from '../../app/screenRegistry';
import type { ProfileRecord } from '../../game/persistence/profileIndex';
import { type SaveState, xpForLevel } from '../../game/game';
import { fmt } from './formatters';
import { Icon, Tip } from '../primitives';

type ProgressContext = { skill: keyof SaveState['skills']; glyph: string; level: number; xp: number; nextXp: number } | null;

export function getScreenProgressContext(game: SaveState, screen: GameScreenId): ProgressContext {
  const selection = screen === 'Mining' ? { skill: 'Mining' as const, glyph: 'M' }
    : screen === 'Smithing' ? { skill: 'Smithing' as const, glyph: 'S' }
    : screen === 'Combat' ? { skill: 'Attack' as const, glyph: 'A' }
    : screen === 'Fishing' ? { skill: 'Fishing' as const, glyph: 'F' }
    : screen === 'Cooking' ? { skill: 'Cooking' as const, glyph: 'C' }
    : null;
  if (selection) {
    const state = game.skills[selection.skill];
    return { ...selection, level: state.level, xp: state.xp, nextXp: xpForLevel(state.level) };
  }
  return null;
}

export function GameTopBar({ game, screen, profile, saveStatus, onOpenSettings }: {
  game: SaveState; screen: GameScreenId; profile: ProfileRecord; saveStatus: string; onOpenSettings: () => void;
}) {
  const context = getScreenProgressContext(game, screen);
  const skill = context ? game.skills[context.skill] : null;
  const next = context?.nextXp ?? 1;
  const progress = skill ? Math.max(0, Math.min(1, skill.xp / Math.max(1, next))) : 0;
  const radius = 19, circumference = 2 * Math.PI * radius;
  const failed = saveStatus.toLowerCase().includes('fail');
  const saving = saveStatus.toLowerCase().includes('saving');
  const orbLabel = skill ? `${context!.skill} Level ${skill.level}, ${fmt(skill.xp)} of ${fmt(next)} XP, ${fmt(Math.max(0, next - skill.xp))} XP to next level` : 'Adventurer profile';
  return <header className="topbar topbar-v25">
    <div className="topbar-left">
      <span className="profile-sigil" aria-hidden="true">A{String(profile.slot).padStart(2, '0')}</span>
      <span className="active-profile"><b title={profile.name}>{profile.name}</b><small>PROFILE {profile.slot} <i/> {screen.toUpperCase()}</small></span>
    </div>
    <Tip content={orbLabel} className="topbar-orb-tip">
      <div className={`level-orb ${skill ? `skill-${context!.skill.toLowerCase()}` : 'neutral'}`} role="img" aria-label={orbLabel}>
        <svg viewBox="0 0 52 52" aria-hidden="true"><circle className="orb-track" cx="26" cy="26" r={radius}/>{skill && <circle className="orb-progress" cx="26" cy="26" r={radius} strokeDasharray={circumference} strokeDashoffset={circumference * (1 - progress)}/>}</svg>
        <span className="orb-core"><i>{context?.glyph ?? <Icon name="spark" size={13}/>}</i><b>{skill?.level ?? 'MX'}</b></span>
      </div>
    </Tip>
    <div className="topbar-right">
      <Tip content={`${fmt(game.gold)} gold`}><div className="gold-chip"><Icon name="gold" size={17}/><span>{fmt(game.gold)}</span><small>GOLD</small></div></Tip>
      <span className={`save-label ${failed ? 'failed' : ''} ${saving ? 'saving' : ''}`} role={failed ? 'alert' : 'status'}><span className="save-dot"/>{saving ? 'Saving…' : failed ? 'Save failed' : 'Saved'}</span>
      <Tip content="Settings"><button className="icon-button top-settings" aria-label="Settings" onClick={onOpenSettings}><Icon name="gear" size={19}/></button></Tip>
    </div>
  </header>;
}
