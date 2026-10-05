import { Badge, Button, Icon, Panel } from '../../ui/primitives';
import { ItemMark } from '../../ui/game/ItemDisplay';
import { ScreenHeading, Stat } from '../../ui/game/ScreenPrimitives';
import { fmt } from '../../ui/game/formatters';
import { FORGE_HAMMERS, HEAVY_ARMOR, ITEMS, MELEE_WEAPONS, MINING_TOOLS, OFFHANDS, maxHitpoints, type ItemId, type SaveState } from '../../game/game';

type Slot = 'weapon' | 'head' | 'armor' | 'hands' | 'feet' | 'offhand' | 'miningTool' | 'smithingHammer';
type Candidate = { id: ItemId; slot: Slot; unlock: number; skill: 'Smithing' | 'Mining'; attack?: number };
const CANDIDATES: Candidate[] = [
  { id: 'combat.weapon.melee.copper_sword', slot: 'weapon', unlock: 1, skill: 'Smithing', attack: 1 },
  { id: 'combat.weapon.melee.copper_battle_axe', slot: 'weapon', unlock: 3, skill: 'Smithing', attack: 5 },
  { id: 'combat.weapon.melee.copper_mace', slot: 'weapon', unlock: 3, skill: 'Smithing', attack: 5 },
  { id: 'combat.offhand.melee.copper_shield', slot: 'offhand', unlock: 5, skill: 'Smithing' },
  { id: 'combat.armor.heavy.copper_helm', slot: 'head', unlock: 5, skill: 'Smithing' },
  { id: 'combat.armor.heavy.copper_armor', slot: 'armor', unlock: 5, skill: 'Smithing' },
  { id: 'combat.armor.heavy.copper_gauntlets', slot: 'hands', unlock: 5, skill: 'Smithing' },
  { id: 'combat.armor.heavy.copper_greaves', slot: 'feet', unlock: 5, skill: 'Smithing' },
  { id: 'item.mining.worn_pickaxe', slot: 'miningTool', unlock: 1, skill: 'Mining' },
  { id: 'item.mining.copper_pickaxe', slot: 'miningTool', unlock: 5, skill: 'Mining' },
  { id: 'item.smithing.worn_smithing_hammer', slot: 'smithingHammer', unlock: 1, skill: 'Smithing' },
  { id: 'item.smithing.copper_smithing_hammer', slot: 'smithingHammer', unlock: 5, skill: 'Smithing' },
];

export function EquipmentScreen({ game: g, equip, unequip }: { game: SaveState; equip: (item: ItemId, slot: Slot) => void; unequip: (slot: Slot) => void }) {
  const equipped: Record<Slot, ItemId | null> = { weapon: g.equipped.weapon, offhand: g.equipped.offhand, head: g.equipped.head, armor: g.equipped.armor, hands: g.equipped.hands, feet: g.equipped.feet, miningTool: g.equipped.miningTool, smithingHammer: g.equipped.smithingHammer };
  const armorIds = [g.equipped.head, g.equipped.armor, g.equipped.hands, g.equipped.feet];
  const physicalResistance = armorIds.reduce((sum, id) => sum + (id && id in HEAVY_ARMOR ? HEAVY_ARMOR[id as keyof typeof HEAVY_ARMOR].physicalResistance : 0), g.equipped.offhand === 'combat.offhand.melee.copper_shield' ? OFFHANDS['combat.offhand.melee.copper_shield'].physicalResistance : 0);
  const weapon = g.equipped.weapon && g.equipped.weapon in MELEE_WEAPONS ? MELEE_WEAPONS[g.equipped.weapon as keyof typeof MELEE_WEAPONS] : null;
  const attackInterval = (((weapon?.intervalMs ?? 2400) + (g.equipped.offhand === 'combat.offhand.melee.copper_shield' ? OFFHANDS['combat.offhand.melee.copper_shield'].attackIntervalPenaltyMs : 0)) / 1000).toFixed(2);
  const ready = Boolean(weapon && (g.equipped.head || g.equipped.armor || g.equipped.hands || g.equipped.feet));
  const describe = (id: ItemId, slot: Slot) => {
    if (slot === 'miningTool') { const tool = MINING_TOOLS[id as keyof typeof MINING_TOOLS]; return `${tool.power} Mining Power · ${Math.round(tool.speed * 100)}% Speed${tool.extraQuantityChance ? ` · +${tool.extraQuantityChance} pp quantity` : ''}`; }
    if (slot === 'smithingHammer') { const tool = FORGE_HAMMERS[id as keyof typeof FORGE_HAMMERS]; return `${tool.power} Forge Power · ${(tool.strikeMs / 1000).toFixed(2)}s`; }
    if (id in MELEE_WEAPONS) { const item = MELEE_WEAPONS[id as keyof typeof MELEE_WEAPONS]; const passive = item.critDamageBonus ? ` · +${item.critDamageBonus * 100}% Crit Damage` : item.penetrationPp ? ` · +${item.penetrationPp} pp ${item.penetrationType} Penetration` : item.critRateBonus ? ` · +${item.critRateBonus * 100} pp Crit Rate` : ''; return `${item.style} · Power ${item.power} · Accuracy ${item.accuracyBonus} · ${(item.intervalMs / 1000).toFixed(2)}s${passive}`; }
    if (id in HEAVY_ARMOR) return `${HEAVY_ARMOR[id as keyof typeof HEAVY_ARMOR].physicalResistance}% physical resistance`;
    if (slot === 'offhand') return `+${OFFHANDS['combat.offhand.melee.copper_shield'].physicalResistance}% physical resistance · +0.10s · 1H Melee`;
    return slot;
  };
  return <div className="screen equipment-screen"><ScreenHeading eyebrow="LOADOUT · TIER 1" title="Equipment" sub="Build a road-ready kit and inspect the effect of each piece." accent="equipment"><Badge tone="level-badge">MELEE KIT</Badge></ScreenHeading>
    <div className="equipment-layout"><Panel className="loadout-panel" title="Adventurer Loadout">
      <div className="loadout-board"><div className="slot-column left-slots">{(['weapon','offhand','head','armor'] as Slot[]).map((slot) => <EquipmentSlot key={slot} slot={slot} item={equipped[slot]} click={() => unequip(slot)} />)}</div><div className="character-silhouette"><div className="char-head"/><div className="char-shoulders"/><div className="char-body"><div className="char-buckle"/></div><div className="char-legs"><i/><i/></div><div className="char-glow"/></div><div className="slot-column right-slots">{(['hands','feet','miningTool','smithingHammer'] as Slot[]).map((slot) => <EquipmentSlot key={slot} slot={slot} item={equipped[slot]} click={() => unequip(slot)} />)}</div></div>
      <div className="loadout-hint">Combat gear and profession tools use separate slots. Selecting a slot returns that item to the Bank.</div>
    </Panel><Panel className="equipment-inspector" title="Combat Readiness">
      <div className="ready-header"><span className="readiness-emblem"><Icon name="sword" size={25}/></span><div><b>{weapon?.name ?? 'No weapon equipped'}</b><small>{ready ? 'One armor piece secured' : 'Equip a melee weapon and one armor piece'}</small></div><Badge tone={ready ? 'ready' : 'missing'}>{ready ? 'READY' : 'INCOMPLETE'}</Badge></div>
      <div className="stat-rows combat-statrows"><Stat label="Hitpoints" value={`${Math.max(0, Math.ceil(g.combat.playerHp))} / ${maxHitpoints(g.skills.Hitpoints.level)}`} /><Stat label="Melee Accuracy" value={`${100 + 6 * g.skills.Attack.level + (weapon?.accuracyBonus ?? 0)}`} /><Stat label="Melee Evasion" value={`${100 + 5 * g.skills.Defence.level}`} /><Stat label="Attack Interval" value={`${attackInterval}s`} /><Stat label="Physical Resistance" value={`${physicalResistance}%`} accent="positive" /><Stat label="Copper Shield" value={g.equipped.offhand === 'combat.offhand.melee.copper_shield' ? 'Compatible · +4 defense · +0.10s' : 'One-handed weapon only'} tip="Copper Shield is a 1H Melee off-hand; it adds physical defense and +0.10s to your attack interval." /></div>
      <div className="candidate-list"><span className="tiny-label">AVAILABLE TO EQUIP</span>{CANDIDATES.map(({ id, slot, unlock, skill, attack }) => { const count = g.bank[id] ?? 0, locked = g.skills[skill].level < unlock || Boolean(attack && g.skills.Attack.level < attack), equippedNow = equipped[slot] === id, invalid = id === 'combat.offhand.melee.copper_shield' && !['combat.weapon.melee.copper_sword','combat.weapon.melee.copper_battle_axe','combat.weapon.melee.copper_mace'].includes(g.equipped.weapon ?? ''); return <div className={`candidate-row ${locked ? 'locked' : ''}`} key={id}><ItemMark id={id}/><div><b>{ITEMS[id].name}</b><small>{describe(id, slot)}{locked ? ` · ${attack && g.skills.Attack.level < attack ? `Attack ${attack}` : skill} ${attack && g.skills.Attack.level < attack ? attack : unlock} required` : ''}</small></div><span className="candidate-count">×{fmt(count)}</span><Button tone="quiet" disabled={equippedNow || count < 1 || locked || invalid} onClick={() => equip(id, slot)}>{equippedNow ? 'Equipped' : locked ? `Lv. ${attack && g.skills.Attack.level < attack ? attack : unlock}` : invalid ? 'Needs 1H' : 'Equip'}</Button></div>; })}</div>
    </Panel></div>
  </div>;
}

function EquipmentSlot({ slot, item, click }: { slot: Slot; item: ItemId | null; click: () => void }) { return <button className={`equipment-slot ${item ? 'filled' : 'empty'}`} onClick={() => item && click()} aria-label={`${slot}${item ? `: ${ITEMS[item].name}, click to unequip` : ': empty'}`}><span className="slot-name">{slot}</span>{item ? <><ItemMark id={item}/><b>{ITEMS[item].name}</b></> : <span className="slot-placeholder">—</span>}</button>; }
