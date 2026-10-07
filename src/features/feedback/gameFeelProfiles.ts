import type { ItemId } from '../../game/types/gameTypes';
import type { GameFeedbackEvent } from './feedback.types';

export type MaterialResponseProfile = {
  id: 'stone'|'metal'|'water'|'hearth'|'steel'|'leather'|'paper';
  accent: string;
  impact: 'fracture'|'spark'|'ripple'|'steam'|'slash'|'catchlight'|'shuffle';
  completion: 'ore-reveal'|'forged'|'splash'|'dish'|'defeat'|'equip'|'stored';
  soundFamily: 'rock'|'forge'|'water'|'hearth'|'combat'|'kit'|'inventory';
};

export const MATERIAL_RESPONSE_PROFILES: Record<string, MaterialResponseProfile> = {
  Mining: { id:'stone', accent:'#c89a62', impact:'fracture', completion:'ore-reveal', soundFamily:'rock' },
  Smithing: { id:'metal', accent:'#d27b4f', impact:'spark', completion:'forged', soundFamily:'forge' },
  Fishing: { id:'water', accent:'#78b2b2', impact:'ripple', completion:'splash', soundFamily:'water' },
  Cooking: { id:'hearth', accent:'#d0b86c', impact:'steam', completion:'dish', soundFamily:'hearth' },
  Combat: { id:'steel', accent:'#d77865', impact:'slash', completion:'defeat', soundFamily:'combat' },
  Equipment: { id:'leather', accent:'#91a9c0', impact:'catchlight', completion:'equip', soundFamily:'kit' },
  Bank: { id:'paper', accent:'#c5ae86', impact:'shuffle', completion:'stored', soundFamily:'inventory' },
};

export function rewardScreen(itemId: ItemId, source: string): keyof typeof MATERIAL_RESPONSE_PROFILES | null {
  if (source === 'forging' || source === 'smelting' || source === 'smithing-preservation') return 'Smithing';
  if (source.startsWith('combat:') || source === 'combat' || itemId.startsWith('combat.') || itemId.startsWith('item.combat.')) return 'Combat';
  if (itemId.startsWith('item.mining.') || itemId.startsWith('ore.')) return 'Mining';
  if (itemId.startsWith('item.smithing.') || itemId.startsWith('smithing.')) return 'Smithing';
  if (itemId.startsWith('fishing.')) return 'Fishing';
  if (itemId.startsWith('cooking.')) return 'Cooking';
  return null;
}

export function materialProfileFor(event: GameFeedbackEvent, screen?: string): MaterialResponseProfile {
  if (event.type === 'game-feel') return MATERIAL_RESPONSE_PROFILES[event.screen] ?? MATERIAL_RESPONSE_PROFILES.Combat;
  if (event.type === 'item') {
    const inferred = rewardScreen(event.itemId, event.source);
    return MATERIAL_RESPONSE_PROFILES[screen === 'Bank' ? 'Bank' : inferred ?? screen ?? 'Bank'] ?? MATERIAL_RESPONSE_PROFILES.Bank;
  }
  return MATERIAL_RESPONSE_PROFILES[screen ?? 'Bank'] ?? MATERIAL_RESPONSE_PROFILES.Bank;
}
