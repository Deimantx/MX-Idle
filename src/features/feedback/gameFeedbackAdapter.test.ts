import { describe, expect, it } from 'vitest';
import { adaptGameEvents } from './gameFeedbackAdapter';

describe('game feedback adapter',()=>{
  it('batches multi-skill Combat XP into one compact feedback entry',()=>{
    const events=adaptGameEvents([
      {type:'xp-gained',skill:'Attack',amount:8},
      {type:'xp-gained',skill:'Attack',amount:4},
      {type:'xp-gained',skill:'Hitpoints',amount:2},
      {type:'xp-gained',skill:'Defence',amount:2},
      {type:'level-up',skill:'Attack',level:2},
    ],(()=>{let id=0;return()=>++id;})(),1000);
    expect(events).toHaveLength(2);
    expect(events[0]).toMatchObject({type:'xp-batch',occurredAt:1000,gains:[{skillId:'Attack',amount:12},{skillId:'Hitpoints',amount:2},{skillId:'Defence',amount:2}]});
    expect(events[1]).toMatchObject({type:'level-up',skillId:'Attack',newLevel:2});
  });
});
