import { describe, expect, it } from 'vitest';
import { advanceWithEvents, BOSS_COMPONENTS, COMBAT_AREAS, DUNGEONS, devForceCurrentEnemyDefeat, ENEMIES, evaluateCombatTierUnlocks, freshState, getCurrentPlayerBasicDamageType, getEnemyMinHit, getPlayerEvasions, getPlayerResistances, getStyleDamageMultiplier, getStyleMatchup, getStyleResistanceAdjustment, isTierUnlocked, loadState, MELEE_WEAPONS, OFFERINGS, setCombatTarget, startActivity, startDungeon, stopActivity, validateCombatContent, validateCombatRegistry, type ItemId } from '../game';
import { FORGING_RECIPES } from '../content/smithing/forgingRecipes';
import { HEAVY_ARMOR } from '../content/combat/heavyArmor';
import { rollDirectDamage } from './combat/combatResolver';

describe('Phase 1 combat world',()=>{
  it('validates the authored 10-tier registry and requested counts',()=>{
    expect(validateCombatRegistry()).toEqual([]);
    expect(Object.values(COMBAT_AREAS).filter(x=>x.kind==='area')).toHaveLength(10);
    expect(Object.keys(ENEMIES)).toHaveLength(80);expect(Object.keys(DUNGEONS)).toHaveLength(10);
    expect(OFFERINGS).toHaveLength(30);expect(BOSS_COMPONENTS).toHaveLength(10);
    expect(DUNGEONS['t1-ruined-watch']?.encounters.map(id=>ENEMIES[id]!.name)).toEqual(['Watch Deserter','Tower Bowman','Ironjaw Boar','Captain Veyr']);
  });

  it('allows the fresh profile to craft and equip a Copper Sword at Attack 1',()=>{
    const state=freshState();const sword=MELEE_WEAPONS['combat.weapon.melee.copper_sword'];
    expect(sword.attackLevel).toBe(1);expect(FORGING_RECIPES['recipe.smithing.copper_sword'].unlockLevel).toBe(1);
    expect(state.skills.Attack.level).toBe(1);expect(state.skills.Smithing.level).toBe(1);
  });

  it('uses flexible sword stances, one-handed battle axes, shield defense stats, and authored Heavy evasions',()=>{
    const sword=MELEE_WEAPONS['combat.weapon.melee.copper_sword'],axe=MELEE_WEAPONS['combat.weapon.melee.copper_battle_axe'];
    expect(sword.stances.map(x=>x.damageType)).toEqual(['Slash','Stab']);expect(axe.handedness).toBe('1H');expect(axe.allowedOffhandTypes).toContain('shield');
    expect(HEAVY_ARMOR['combat.armor.heavy.astralite_armor'].evasions).toEqual({Melee:57,Ranged:72,Magic:24});
    const state=freshState();for(const slot of ['head','armor','hands','feet'] as const)state.equipped[slot]=`combat.armor.heavy.astralite_${slot==='head'?'helm':slot==='armor'?'armor':slot==='hands'?'gauntlets':'greaves'}`;
    expect(getPlayerEvasions(state)).toEqual({Melee:218,Ranged:246,Magic:152});
  });

  it('applies style triangle adjustments and scoped resistance debuffs',()=>{
    expect(getStyleMatchup('Melee','Ranged')).toBe('strong');expect(getStyleDamageMultiplier('Melee','Ranged')).toBe(1.1);expect(getStyleDamageMultiplier('Melee','Magic')).toBe(.9);expect(getStyleResistanceAdjustment('Melee','Ranged')).toBe(5);
    const state=freshState();state.combat.statuses.push({id:'crush-down',type:'ResistanceDown',sourceId:'test',target:'player',remainingMs:1000,magnitude:10,damageTypes:['Crush']});
    expect(getPlayerResistances(state)).toMatchObject({Slash:0,Crush:-10,Air:0});
  });

  it('materializes authored phases and scoped enemy action mechanics',()=>{
    const cinder=ENEMIES['t5-cindermaw']!,decree=[...ENEMIES['t4-the-pale-castellan']!.sequence,...(ENEMIES['t4-the-pale-castellan']!.phases??[]).flatMap(x=>x.sequence)].find(x=>x.name==='Grave Decree')!,ward=[...ENEMIES['t2-fen-channeler']!.sequence,...(ENEMIES['t2-fen-channeler']!.phases??[]).flatMap(x=>x.sequence)].find(x=>x.name==='Silt Ward')!,barrage=ENEMIES['t7-skybreaker-raal']!.phases?.flatMap(x=>x.sequence).find(x=>x.name==='Tempest Barrage');
    expect(cinder.phases?.map(x=>x.thresholdPct)).toEqual([60,30]);
    expect(decree.resistanceDownTypes).toEqual(['Air','Fire','Water','Earth']);
    expect(ward.selfResistanceTypes).toEqual(['Slash','Stab','Crush']);expect(ward.selfResistanceActions).toBe(2);
    expect(barrage).toMatchObject({hits:3,separateHitRolls:true});
  });

  it('resolves hybrid sequence-element damage from the following authored action',()=>{
    const makeState=(sequenceIndex:number)=>{const state=freshState();state.rng=1;state.combat.targetId='t8-aetherbound-oracle';state.combat.enemyHp=ENEMIES['t8-aetherbound-oracle']!.maxHp*.5;state.combat.sequenceIndex=sequenceIndex;state.combat.enemyTimer=1;state.combat.playerTimer=90_000;state.combat.playerHp=1000;state.activity='combat';state.combat.runState='active';return state;};
    expect(advanceWithEvents(makeState(0),1).state.combat.log[0]).toMatch(/Prism Lance.*Air/);
    expect(advanceWithEvents(makeState(2),1).state.combat.log[0]).toMatch(/Prism Lance.*Water/);
  });

  it('regenerates one Stamina per second and does not award kill XP without damage',()=>{
    const state=freshState();state.equipped.weapon='combat.weapon.melee.copper_sword';state.combat.specialMode='Off';state.combat.stamina=0;state.combat.playerTimer=50_000;state.combat.enemyTimer=50_000;state.activity='combat';state.combat.runState='active';
    const regen=advanceWithEvents(state,1000).state;expect(regen.combat.stamina).toBe(1);
    const forced=freshState();devForceCurrentEnemyDefeat(forced);expect(forced.combat.xp).toBe(0);expect(forced.skills.Attack.xp).toBe(0);expect(forced.skills.Defence.xp).toBe(0);
  });

  it('applies a changed Sword stance to the next action and ticks simultaneous DoTs',()=>{
    const state=freshState();state.equipped.weapon='combat.weapon.melee.copper_sword';state.combat.targetId='road-wolf';state.combat.enemyHp=ENEMIES['road-wolf']!.maxHp;state.combat.playerHp=80;state.combat.stance='Stab';state.combat.pendingStance='Stab';state.combat.playerTimer=1000;state.combat.enemyTimer=90_000;state.activity='combat';state.combat.runState='active';
    const attacked=advanceWithEvents(state,1000).state;expect(attacked.combat.log[0]).toMatch(/Stab/);expect(attacked.combat.pendingStance).toBe('Stab');
    const ticking=freshState();ticking.combat.playerHp=80;ticking.combat.playerTimer=90_000;ticking.combat.enemyTimer=90_000;ticking.activity='combat';ticking.combat.runState='active';ticking.combat.statuses=[
      {id:'bleed-a',type:'Bleed',sourceId:'a',target:'player',remainingMs:3000,tickMs:1000,tickTimerMs:1000,stacks:3,remainingDamage:9},
      {id:'poison-b',type:'Poison',sourceId:'b',target:'player',remainingMs:3000,tickMs:1000,tickTimerMs:1000,stacks:3,remainingDamage:6},
    ];
    const ticked=advanceWithEvents(ticking,1000).state;expect(ticked.combat.playerHp).toBe(75);expect(ticked.combat.statuses).toHaveLength(2);expect(ticked.combat.statuses.map(x=>x.tickTimerMs)).toEqual([1000,1000]);
  });

  it('keeps pure buffs and pure status actions from inventing direct hits',()=>{
    const resolve=(id:string,name:string)=>{const state=freshState();const enemy=ENEMIES[id]!;state.combat.targetId=enemy.id;state.combat.enemyHp=enemy.maxHp;state.combat.sequenceIndex=enemy.sequence.findIndex(action=>action.name===name);state.combat.playerHp=1000;state.combat.playerTimer=90_000;state.combat.enemyTimer=1;state.activity='combat';state.combat.runState='active';return advanceWithEvents(state,1).state;};
    const guard=resolve('t3-forgemaster-korr','Tempered Guard');expect(guard.combat.playerHp).toBe(1000);expect(guard.combat.statuses.some(x=>x.type==='ResistanceUp'&&x.target==='enemy'&&x.remainingActions===2)).toBe(true);
    const pale=resolve('t4-moon-priest','Pale Ward'),ward=pale.combat.statuses.find(x=>x.type==='ResistanceUp'&&x.target==='enemy');expect(pale.combat.playerHp).toBe(1000);expect(ward?.damageTypes).toEqual(['Air','Fire','Water','Earth']);expect(pale.combat.log[0]).toBe('Moon Priest uses Pale Ward.');expect(pale.combat.log[0]).not.toContain('miss');
    const venom=resolve('t8-prismcoil-serpent','Aether Venom');expect(venom.combat.playerHp).toBe(1000);expect(venom.combat.statuses.some(x=>x.type==='Poison'&&x.target==='player')).toBe(true);
  });

  it('starts dungeons at the first encounter and blocks normal target selection into the roster',()=>{
    const state=freshState();state.skills.Attack.level=10;state.combatProgress.eliteFirstKills['ironjaw-boar']=true;
    expect(startDungeon(state,'t1-ruined-watch')).toBe(true);expect(state.combat.encounterIndex).toBe(0);expect(setCombatTarget(state,'captain-veyr')).toBe(false);expect(setCombatTarget(state,'t1-tower-bowman')).toBe(false);
  });

  it('schedules the queued action interval and uses a 20–100% direct-damage roll',()=>{
    const state=freshState();state.equipped.weapon='combat.weapon.melee.copper_sword';expect(setCombatTarget(state,'dust-rat')).toBe(true);state.combat.sequenceIndex=1;state.combat.enemyTimer=0;startActivity(state,'combat');expect(state.combat.enemyTimer).toBe(2250);
    state.combat.playerTimer=90_000;state.combat.enemyTimer=1;const after=advanceWithEvents(state,1).state;expect(after.combat.enemyTimer).toBe(3000);
    expect(rollDirectDamage(100,1,()=>0)).toBe(20);expect(rollDirectDamage(100,1,()=>1)).toBe(100);
  });

  it('keeps six authored resistance effects explicit and scoped',()=>{
    const action=(enemy:string,name:string)=>Object.values(ENEMIES[enemy]!.actions).find(value=>value.name===name)!;
    expect(action('t2-fen-channeler','Silt Ward')).toMatchObject({selfResistancePp:8,selfResistanceActions:2,selfResistanceTypes:['Slash','Stab','Crush']});
    expect(action('t4-moon-priest','Pale Ward')).toMatchObject({selfResistancePp:8,selfResistanceActions:2,selfResistanceTypes:['Air','Fire','Water','Earth'],requiresHitRoll:false});
    expect(action('t5-ember-guard','Heat Guard')).toMatchObject({selfResistancePp:10,selfResistanceActions:1,selfResistanceTypes:['Slash','Stab','Crush']});
    expect(action('t4-moonbound-knight','Guard Break').resistanceDownTypes).toEqual(['Slash','Stab','Crush']);
    expect(action('t9-citadel-reaper','Umbral Break').resistanceDownTypes).toEqual(['Slash','Stab','Crush']);
    expect(action('t9-the-hollow-regent','Hollow Decree').resistanceDownTypes).toEqual(['Slash','Stab','Crush','Pierce','Puncture','Air','Fire','Water','Earth']);
    expect(Object.values(ENEMIES).flatMap(enemy=>Object.values(enemy.actions)).some(value=>'selfResistanceScope' in value)).toBe(false);
  });

  it('clears encounter effects on normal kill, Dungeon transition, death, and manual leave',()=>{
    const normal=freshState();normal.combat.statuses.push({id:'guard',type:'ResistanceUp',sourceId:'t3-forgemaster-korr',target:'enemy',remainingMs:9999,remainingActions:2,magnitude:10,damageTypes:['Slash']});devForceCurrentEnemyDefeat(normal);expect(normal.combat.statuses).toEqual([]);
    const korr=freshState(),boss=ENEMIES['t3-forgemaster-korr']!;korr.combat.targetId=boss.id;korr.combat.enemyHp=boss.maxHp;korr.combat.sequenceIndex=boss.sequence.findIndex(action=>action.name==='Tempered Guard');korr.combat.enemyTimer=1;korr.combat.playerTimer=90000;korr.activity='combat';korr.combat.runState='active';const guarded=advanceWithEvents(korr,1).state;expect(guarded.combat.statuses.some(status=>status.sourceId===boss.id&&status.type==='ResistanceUp')).toBe(true);devForceCurrentEnemyDefeat(guarded);expect(guarded.combat.statuses).toEqual([]);expect(setCombatTarget(guarded,'road-wolf')).toBe(true);expect(guarded.combat.statuses).toEqual([]);
    const dungeon=freshState();dungeon.skills.Attack.level=10;dungeon.equipped.weapon='combat.weapon.melee.copper_sword';dungeon.combatProgress.eliteFirstKills['ironjaw-boar']=true;startDungeon(dungeon,'t1-ruined-watch');dungeon.combat.statuses.push({id:'poison',type:'Poison',sourceId:'captain-veyr',target:'player',remainingMs:1000});startActivity(dungeon,'combat');devForceCurrentEnemyDefeat(dungeon);expect(dungeon.combat.statuses).toEqual([]);const next=advanceWithEvents(dungeon,3001).state;expect(next.combat.targetId).toBe('t1-tower-bowman');expect(next.combat.statuses).toEqual([]);
    const death=freshState();death.combat.playerHp=1;death.combat.playerTimer=50000;death.combat.enemyTimer=50000;death.activity='combat';death.combat.runState='active';death.combat.statuses.push({id:'poison',type:'Poison',sourceId:'enemy',target:'player',remainingMs:2000,tickMs:1000,tickTimerMs:1000,stacks:2,remainingDamage:10});expect(advanceWithEvents(death,1000).state.combat.statuses).toEqual([]);
    const leave=freshState();leave.activity='combat';leave.combat.runState='active';leave.combat.statuses.push({id:'chill',type:'Chill',sourceId:'enemy',target:'player',remainingMs:2000,magnitude:.2});stopActivity(leave);expect(leave.combat.statuses).toEqual([]);
  });

  it('uses derived 20 percent enemy minimum hits and absolute hybrid damage multipliers',()=>{
    expect(getEnemyMinHit(ENEMIES['road-wolf']!)).toBe(2);expect(getEnemyMinHit(ENEMIES['t10-the-zenith-warden']!)).toBe(30);
    const molten=Object.values(ENEMIES['t3-forgemaster-korr']!.actions).find(value=>value.name==='Molten Hammer')!;
    expect(molten.damageComponents).toEqual([{type:'Crush',multiplier:1.35},{type:'Fire',multiplier:.35}]);
    expect(rollDirectDamage(100,molten.damageComponents![0]!.multiplier,()=>0)).toBe(27);expect(rollDirectDamage(100,molten.damageComponents![1]!.multiplier,()=>0)).toBe(7);
  });

  it('restarts a Boss phase with its first action timer and emits Combat XP events',()=>{
    const boss=ENEMIES['t5-cindermaw']!,phaseAction=boss.phases![1]!.sequence[0]!;const state=freshState();state.equipped.weapon='combat.weapon.melee.copper_sword';state.skills.Attack.level=100;state.combat.targetId=boss.id;state.combat.enemyHp=Math.floor(boss.maxHp*.3)+1;state.combat.playerTimer=1;state.combat.enemyTimer=123;state.combat.activePhaseIndex=1;state.combat.specialMode='Off';state.rng=1;state.activity='combat';state.combat.runState='active';const result=advanceWithEvents(state,1);
    expect(result.state.combat.activePhaseIndex).toBe(2);expect(result.state.combat.sequenceIndex).toBe(0);expect(result.state.combat.enemyTimer).toBe(boss.intervalMs*(phaseAction.intervalMultiplier??1));expect(result.state.combat.enemyActionSerial).toBe(1);
    expect(result.events.filter(event=>event.type==='xp-gained'&&['Attack','Hitpoints','Defence'].includes(event.skill))).toHaveLength(3);
  });

  it('executes documented late-tier element multipliers and per-element resistance overrides',()=>{
    expect(ENEMIES['t8-prismatic-channeler']!.sequence.slice(0,4).map(x=>x.multiplier)).toEqual([.9,.9,.9,.9]);
    expect(ENEMIES['t10-celestial-magus']!.sequence.map(x=>x.multiplier)).toEqual([1.05,1.05,1.05,1.05]);
    expect(ENEMIES['t10-nexus-hierophant']!.resistances).toMatchObject({Air:36,Fire:36,Water:36,Earth:36});
    expect(ENEMIES['t10-nexus-guardian']!.resistances).toMatchObject({Air:40,Fire:40,Water:40,Earth:40});
  });

  it('permanently unlocks a tier when Attack catches up after its boss kill',()=>{
    const state=freshState();state.combatProgress.bossFirstKills['captain-veyr']=true;state.skills.Attack.level=9;evaluateCombatTierUnlocks(state);expect(state.combatProgress.unlockedTiers).not.toContain(2);
    state.skills.Attack.level=10;const events:any[]=[];evaluateCombatTierUnlocks(state,events);evaluateCombatTierUnlocks(state,events);expect(state.combatProgress.unlockedTiers).toContain(2);expect(events.filter(event=>event.id==='combat.tier.2')).toHaveLength(1);
  });

  it('applies Executioner execute damage and scopes Concussive Blow to Melee resistances',()=>{
    const specialHit=(weapon:ItemId,hpPercent:number)=>{const state=freshState();state.skills.Attack.level=100;state.equipped.weapon=weapon;state.combat.targetId='captain-veyr';state.combat.enemyHp=ENEMIES['captain-veyr']!.maxHp*hpPercent;state.combat.playerTimer=1;state.combat.enemyTimer=90_000;state.combat.stamina=100;state.combat.queuedSpecial=true;state.combat.specialMode='Manual';state.rng=177;state.activity='combat';state.combat.runState='active';return advanceWithEvents(state,1).state;};
    const execute=specialHit('combat.weapon.melee.copper_battle_axe',.29),normal=specialHit('combat.weapon.melee.copper_battle_axe',.31),damage=(state:any)=>Number(state.combat.log[0]?.match(/for (\d+)/)?.[1]??0);
    expect(damage(execute)).toBeGreaterThan(damage(normal));
    const mace=specialHit('combat.weapon.melee.copper_mace',1),down=mace.combat.statuses.find(x=>x.type==='ResistanceDown'&&x.sourceId==='player');expect(down?.damageTypes).toEqual(['Slash','Stab','Crush']);expect(down?.remainingMs).toBe(8000);
    expect(MELEE_WEAPONS['combat.weapon.melee.copper_sword'].special).toMatchObject({name:'Precision Lunge',type:'Stab',accuracyBonus:.25});
  });

  it('rejects action records without explicit damage behavior and highlights the selected Sword type',()=>{
    const state=freshState();state.equipped.weapon='combat.weapon.melee.copper_sword';state.combat.pendingStance='Stab';expect(getCurrentPlayerBasicDamageType(state)).toBe('Stab');
    const broken=structuredClone(ENEMIES);(broken['road-wolf']!.sequence[0] as any).damageEnabled=undefined;expect(validateCombatContent(broken,COMBAT_AREAS).some(error=>error.includes('missing explicit damage behavior'))).toBe(true);
    const invalidWard=structuredClone(ENEMIES);const pale=Object.values(invalidWard['t4-moon-priest']!.actions).find(action=>action.name==='Pale Ward')!;pale.selfResistanceTypes=[];expect(validateCombatContent(invalidWard,COMBAT_AREAS).some(error=>error.includes('invalid self resistance data'))).toBe(true);
  });

  it('migrates legacy Road Wolf trophy stacks into the T1 Beast Trophy',()=>{
    const old:any=freshState(500);old.bank['combat.loot.beast_trophy']=7;
    const loaded=loadState(JSON.stringify({version:6,savedAt:500,state:old}),500).state;
    expect(loaded.bank['combat.loot.t1_beast_trophy']).toBe(7);expect(loaded.bank['combat.loot.beast_trophy']).toBeUndefined();
  });

  it('carries Dungeon progression, grants protected first-clear loot, and unlocks the next Tier atomically',()=>{
    const state=freshState();state.skills.Attack.level=10;state.combatProgress.eliteFirstKills['ironjaw-boar']=true;
    expect(startDungeon(state,'t1-ruined-watch')).toBe(true);expect(state.combat.encounterIndex).toBe(0);expect(state.combat.targetId).toBe('t1-watch-deserter');for(const id of DUNGEONS['t1-ruined-watch']!.encounters){state.combat.targetId=id;devForceCurrentEnemyDefeat(state);}
    expect(state.combatProgress.bossFirstKills['captain-veyr']).toBe(true);expect(state.combatProgress.uniqueHooks).toContain('combat.unique.t1.rusthook_blade');
    expect(state.bank['combat.loot.t1_boss_component']).toBe(1);expect(state.combatProgress.dungeonCompletions['t1-ruined-watch']).toBe(1);
    expect(state.combatProgress.unlockedTiers).toContain(2);expect(isTierUnlocked(state,2)).toBe(true);expect(state.activity).toBeNull();
  });

  it('migrates v5 Combat progression safely and does not invent a Captain Veyr kill',()=>{
    const old:any=freshState(500);old.version=5;old.combatProgress=undefined;old.combat.defeated['ironjaw-boar']=1;
    const loaded=loadState(JSON.stringify({version:5,savedAt:500,state:old}),500).state;
    expect(loaded.version).toBe(6);expect(loaded.combatProgress.eliteFirstKills['ironjaw-boar']).toBe(true);expect(loaded.combatProgress.bossFirstKills['captain-veyr']).toBeUndefined();expect(loaded.combatProgress.unlockedTiers).toEqual([1]);
  });
});

