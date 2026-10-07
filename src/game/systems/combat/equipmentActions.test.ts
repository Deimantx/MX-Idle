import { describe, expect, it } from 'vitest';
import { freshState, decodeSave, equipCombatItem, unequipCombatItem, getEquippedCombatItems, getEquippedCombatStat, getPlayerMaxHitpoints, getPlayerCritRateBonus, getPlayerEvasions, getPlayerResistances, canEquip, type ItemId } from '../../game';

const RING='combat.accessory.ring.qa_fixture' as ItemId;
const NECKLACE='combat.accessory.necklace.qa_fixture' as ItemId;
const CAPE='combat.cape.qa_fixture' as ItemId;
const SWORD='combat.weapon.melee.copper_sword' as ItemId;
const SHIELD='combat.offhand.melee.copper_shield' as ItemId;

describe('combat equipment slots',()=>{
  it('migrates v6 gear and bank unchanged while adding empty accessory slots',()=>{
    const original=freshState(1234);
    original.equipped.weapon=SWORD;
    original.equipped.armor='combat.armor.heavy.copper_armor';
    original.bank['item.mining.copper_ore']=23;
    const old={...original,version:6,equipped:{miningTool:original.equipped.miningTool,smithingHammer:original.equipped.smithingHammer,weapon:SWORD,offhand:null,head:null,armor:'combat.armor.heavy.copper_armor',hands:null,feet:null}};
    const loaded=decodeSave(JSON.stringify({version:6,savedAt:1234,state:old}),1234)?.state;
    expect(loaded?.version).toBe(7);
    expect(loaded?.equipped).toMatchObject({weapon:SWORD,armor:'combat.armor.heavy.copper_armor',ring:null,necklace:null,cape:null});
    expect(loaded?.bank['item.mining.copper_ore']).toBe(23);
  });
  it('equips, aggregates, and returns all accessory slots through the bank-safe path',()=>{
    const state=freshState();state.bank[RING]=1;state.bank[NECKLACE]=1;state.bank[CAPE]=1;
    expect(equipCombatItem(state,RING,'ring')).toBe(true);
    expect(equipCombatItem(state,NECKLACE,'necklace')).toBe(true);
    expect(equipCombatItem(state,CAPE,'cape')).toBe(true);
    expect(getEquippedCombatItems(state).map(x=>x.id)).toEqual(expect.arrayContaining([RING,NECKLACE,CAPE]));
    expect(getEquippedCombatStat(state,'Power')).toBe(2);
    expect(getPlayerCritRateBonus(state)).toBeCloseTo(.05);
    expect(getPlayerMaxHitpoints(state)).toBe(110);
    expect(getPlayerResistances(state).Earth).toBe(2);
    expect(getPlayerResistances(state).Slash).toBe(1);
    expect(getPlayerEvasions(state).Magic).toBe(107);
    expect(state.bank[RING]).toBeUndefined();
    expect(equipCombatItem(state,RING,'ring')).toBe(false);
    expect(unequipCombatItem(state,'ring')).toBe(true);
    expect(state.bank[RING]).toBe(1);
    expect(unequipCombatItem(state,'ring')).toBe(false);
  });
  it('blocks wrong slots, unowned items, and all combat-time equipment changes',()=>{
    const state=freshState();
    expect(canEquip(state,RING,'necklace')).toBe(false);
    state.bank[RING]=1;state.activity='combat';
    expect(equipCombatItem(state,RING,'ring')).toBe(false);
    expect(unequipCombatItem(state,'ring')).toBe(false);
    expect(state.equipped.ring).toBeNull();
  });
  it('keeps accessories independent of weapon swaps and preserves off-hand eligibility rules',()=>{
    const state=freshState();state.skills.Attack.level=5;state.skills.Defence.level=5;state.bank[RING]=1;state.bank[SWORD]=1;state.bank['combat.weapon.melee.copper_battle_axe']=1;state.bank[SHIELD]=1;
    expect(equipCombatItem(state,RING,'ring')).toBe(true);
    expect(equipCombatItem(state,SWORD,'weapon')).toBe(true);
    expect(equipCombatItem(state,SHIELD,'offhand')).toBe(true);
    expect(equipCombatItem(state,'combat.weapon.melee.copper_battle_axe' as ItemId,'weapon')).toBe(true);
    expect(state.equipped.ring).toBe(RING);
    expect(state.equipped.offhand).toBe(SHIELD);
    expect(state.bank[SWORD]).toBe(1);
  });
});

