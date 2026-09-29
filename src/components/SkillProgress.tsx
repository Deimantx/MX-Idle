import { SKILLS, getLevelProgress } from '../game/data/skills';
import type { SkillId } from '../types/game';
export function SkillProgress({ skillId, xp }: { skillId: SkillId; xp: number }) {
  const skill = SKILLS[skillId]; const progress = getLevelProgress(xp);
  return <div className="skill-row"><div className="skill-symbol">{skill.icon}</div><div className="skill-info"><div className="skill-title"><strong>{skill.name}</strong><span>Level {progress.level}</span></div><div className="skill-bar"><i style={{ width: `${progress.percent}%` }} /></div><small>{progress.current.toLocaleString()} / {progress.needed.toLocaleString()} XP</small></div></div>;
}
