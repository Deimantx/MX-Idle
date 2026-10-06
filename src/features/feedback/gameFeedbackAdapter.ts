import { ITEMS } from '../../game/content/items/itemRegistry';
import type { GameEvent, SkillId } from '../../game/types/gameTypes';
import type { GameFeedbackEvent } from './feedback.types';

type XpGain = { skillId: SkillId; amount: number };
export function adaptGameEvents(events: GameEvent[], nextId: () => number, occurredAt = Date.now()): GameFeedbackEvent[] {
  const xpGains = events.reduce<XpGain[]>((gains, event) => {
    if (event.type !== 'xp-gained') return gains;
    const previous = gains.find((gain) => gain.skillId === event.skill);
    if (previous) previous.amount += event.amount; else gains.push({ skillId: event.skill, amount: event.amount });
    return gains;
  }, []);
  let xpBatchAdded = false;
  const output: GameFeedbackEvent[] = [];
  const feel = (screen: 'Mining'|'Smithing'|'Fishing'|'Cooking'|'Combat', kind: string, cue: Extract<GameFeedbackEvent,{type:'game-feel'}>['cue'], title: string, impact: Extract<GameFeedbackEvent,{type:'game-feel'}>['impact'], detail?: string, itemId?: Extract<GameFeedbackEvent,{type:'game-feel'}>['itemId']) => {
    output.push({ id: nextId(), type: 'game-feel', screen, kind, cue, title, impact, occurredAt, ...(detail ? { detail } : {}), ...(itemId ? { itemId } : {}) });
  };
  for (const event of events) {
    if (event.type === 'xp-gained') {
      if (!xpBatchAdded) { output.push({ id: nextId(), type: 'xp-batch', gains: xpGains, occurredAt }); xpBatchAdded = true; }
    } else if (event.type === 'level-up') {
      output.push({ id: nextId(), type: 'level-up', skillId: event.skill, oldLevel: Math.max(1, event.level - 1), newLevel: event.level, occurredAt });
    } else if (event.type === 'item-gained') {
      output.push({ id: nextId(), type: 'item', itemId: event.item, amount: event.amount, source: event.source, occurredAt });
    } else if (event.type === 'gold-gained') {
      output.push({ id: nextId(), type: 'gold', amount: event.amount, source: event.source, occurredAt });
    } else if (event.type === 'stage-completed') {
      feel('Mining', 'stage', 'mining-stage', 'New seam exposed', 'important', `Layer ${event.stage + 1} cleared`);
    } else if (event.type === 'mining-strike') {
      feel('Mining', 'strike', 'mining-hit', 'Ore struck', 'routine', `${event.power} power · ${event.remaining} density remaining`);
    } else if (event.type === 'smithing-feedback') {
      const details = { warm: ['furnace-warm', 'forge-strike', 'The furnace is ready', 'routine'], smelt: ['smelt-unit', 'forge-strike', 'A bar takes shape', 'routine'], strike: ['forge-strike', 'forge-strike', 'Hammer meets the workpiece', 'routine'], reheat: ['reheat', 'forge-strike', 'Reheating the workpiece', 'routine'] } as const;
      const [kind, cue, title, impact] = details[event.action];
      feel('Smithing', kind, cue, title, impact);
    } else if (event.type === 'combat-feedback') {
      const details = { hit: ['hit', 'combat-hit', 'A clean hit', 'routine'], miss: ['miss', 'combat-miss', 'Attack missed', 'routine'], critical: ['critical', 'combat-crit', 'Critical strike', 'important'], special: ['special', 'special', 'Special attack', 'important'], phase: ['phase', 'combat-hit', 'The enemy changes its pattern', 'important'], 'enemy-hit': ['enemy-hit', 'enemy-hit', 'You take a hit', 'routine'] } as const;
      const [kind, cue, title, impact] = details[event.action];
      feel('Combat', kind, cue, title, impact);
    } else if (event.type === 'craft-completed') {
      feel('Smithing', 'forge-complete', 'craft', `${ITEMS[event.item].name} forged`, 'important', undefined, event.item);
    } else if (event.type === 'fishing-bite-complete') {
      feel('Fishing', 'bite', 'fishing-bite', 'A bite on the line', 'routine');
    } else if (event.type === 'fish-landed') {
      feel('Fishing', 'landed', 'fish-landed', `Landed ${ITEMS[event.fishId as keyof typeof ITEMS]?.name ?? 'a fish'}`, 'routine', `×${event.amount}`, event.fishId as keyof typeof ITEMS);
    } else if (event.type === 'aquatic-find') {
      feel('Fishing', 'special-find', 'aquatic-find', `Found ${ITEMS[event.item]?.name ?? 'an aquatic treasure'}`, 'rare', undefined, event.item);
    } else if (event.type === 'cooking-prep-complete') {
      feel('Cooking', 'prep-complete', 'cooking-prep', 'Ingredients prepared', 'routine');
    } else if (event.type === 'cooking-craft-complete') {
      feel('Cooking', 'batch-complete', 'cook', `${ITEMS[event.item]?.name ?? 'Batch'} ready`, 'important', `×${event.amount}`, event.item);
    } else if (event.type === 'enemy-killed') {
      feel('Combat', 'enemy-defeat', 'reward', 'Enemy defeated', 'important');
    } else if (event.type === 'unlock') {
      output.push({ id: nextId(), type: 'system', message: event.label, tone: 'unlock', occurredAt });
    } else if (event.type === 'error') {
      output.push({ id: nextId(), type: 'system', message: event.message, tone: 'error', occurredAt });
    } else if (event.type === 'combat-defeat') {
      output.push({ id: nextId(), type: 'system', message: 'You recover at the roadside.', tone: 'defeat', occurredAt });
    } else if (event.type === 'first-steps-complete') {
      output.push({ id: nextId(), type: 'system', message: 'First Steps Complete', tone: 'milestone', occurredAt });
    }
  }
  return output;
}
