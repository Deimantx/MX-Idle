import { ITEMS } from '../../content/items/itemRegistry';
import type { ItemId, SaveState } from '../../types/gameTypes';
import { canEquip, normalizeEquipmentSlot, type CombatEquipmentSlotKey } from './combatMath';
import { MELEE_WEAPONS } from '../../content/combat/meleeWeapons';

export function equipCombatItem(state:SaveState,item:ItemId,slot:CombatEquipmentSlotKey){
  if(state.activity==='combat'||!canEquip(state,item,slot,true))return false;
  const target=normalizeEquipmentSlot(ITEMS[item]?.equipment?.slot??'');
  if(!target||target!==slot||state.equipped[target]===item)return false;
  if(slot==='weapon'&&MELEE_WEAPONS[item as keyof typeof MELEE_WEAPONS]?.handedness==='2H'&&state.equipped.offhand){const oldOffhand=state.equipped.offhand;state.bank[oldOffhand]=(state.bank[oldOffhand]??0)+1;state.equipped.offhand=null;}
  const old=state.equipped[target];
  if(old)state.bank[old]=(state.bank[old]??0)+1;
  state.equipped[target]=item;
  const remaining=(state.bank[item]??0)-1;
  if(remaining>0)state.bank[item]=remaining;else delete state.bank[item];
  return true;
}

export function unequipCombatItem(state:SaveState,slot:CombatEquipmentSlotKey){
  if(state.activity==='combat')return false;
  const item=state.equipped[slot];if(!item)return false;
  state.bank[item]=(state.bank[item]??0)+1;state.equipped[slot]=null;
  return true;
}
