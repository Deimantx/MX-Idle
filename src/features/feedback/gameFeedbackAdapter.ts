import type { GameEvent } from '../../game/types/gameTypes';
import type { GameFeedbackEvent } from './feedback.types';

export function adaptGameEvents(events: GameEvent[], nextId: () => number, occurredAt = Date.now()): GameFeedbackEvent[] {
  const xpGains=events.filter((event):event is Extract<GameEvent,{type:'xp-gained'}>=>event.type==='xp-gained').reduce<Array<{skillId:Extract<GameEvent,{type:'xp-gained'}>['skill'];amount:number}>>((gains,event)=>{const previous=gains.find(gain=>gain.skillId===event.skill);if(previous)previous.amount+=event.amount;else gains.push({skillId:event.skill,amount:event.amount});return gains;},[]);
  let xpBatchAdded=false;
  return events.flatMap((event): GameFeedbackEvent[] => {
    if (event.type === 'xp-gained') {
      if(xpBatchAdded)return [];
      xpBatchAdded=true;
      return [{id:nextId(),type:'xp-batch',gains:xpGains,occurredAt}];
    }
    if (event.type === 'level-up') return [{ id: nextId(), type: 'level-up', skillId: event.skill, oldLevel: Math.max(1, event.level - 1), newLevel: event.level, occurredAt }];
    if (event.type === 'item-gained') return [{ id: nextId(), type: 'item', itemId: event.item, amount: event.amount, source: event.source, occurredAt }];
    if (event.type === 'gold-gained') return [{ id: nextId(), type: 'gold', amount: event.amount, source: event.source, occurredAt }];
    if (event.type === 'unlock') return [{ id: nextId(), type: 'system', message: event.label, tone: 'unlock', occurredAt }];
    if (event.type === 'error') return [{ id: nextId(), type: 'system', message: event.message, tone: 'error', occurredAt }];
    if (event.type === 'combat-defeat') return [{ id: nextId(), type: 'system', message: 'You recover at the roadside.', tone: 'defeat', occurredAt }];
    if (event.type === 'first-steps-complete') return [{ id: nextId(), type: 'system', message: 'First Steps Complete', tone: 'milestone', occurredAt }];
    return [];
  });
}
