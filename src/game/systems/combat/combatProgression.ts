import type { GameEvent, SaveState } from '../../types/gameTypes';
import { tierUnlockRequirement } from './combatMath';

export function evaluateCombatTierUnlocks(state:SaveState,events?:GameEvent[]){
  for(let tier=2;tier<=10;tier++){
    const gate=tierUnlockRequirement(tier);
    if(gate&&state.combatProgress.bossFirstKills[gate.bossId]&&state.skills.Attack.level>=gate.attackLevel&&!state.combatProgress.unlockedTiers.includes(tier)){
      state.combatProgress.unlockedTiers.push(tier);
      events?.push({type:'unlock',id:`combat.tier.${tier}`,label:`Tier ${tier} unlocked`});
    }
  }
}
