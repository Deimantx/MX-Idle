import { describe, expect, it } from 'vitest';
import { adaptGameEvents } from './gameFeedbackAdapter';

describe('game feedback adapter', () => {
  it('preserves per-skill XP and maps simulation actions into local feedback', () => {
    let id = 0;
    const feedback = adaptGameEvents([
      { type:'xp-gained', skill:'Attack', amount:8 },
      { type:'xp-gained', skill:'Hitpoints', amount:2 },
      { type:'combat-feedback', action:'critical' },
      { type:'mining-strike', depositId:'mining.deposit.copper_vein', stage:0, power:6, remaining:30 },
      { type:'smithing-feedback', action:'strike' },
    ], () => ++id, 1000);
    const batch = feedback.find((event) => event.type === 'xp-batch');
    expect(batch?.type === 'xp-batch' && batch.gains).toEqual([{skillId:'Attack',amount:8},{skillId:'Hitpoints',amount:2}]);
    expect(feedback.filter((event) => event.type === 'game-feel').map((event) => [event.screen,event.kind,event.impact])).toEqual([
      ['Combat','critical','important'],['Mining','strike','routine'],['Smithing','forge-strike','routine'],
    ]);
  });
});
