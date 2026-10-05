import { useState } from 'react';
import { Badge, Icon, Panel } from '../../ui/primitives';
import { ItemMark, ItemTip } from '../../ui/game/ItemDisplay';
import { ScreenHeading } from '../../ui/game/ScreenPrimitives';
import { fmt } from '../../ui/game/formatters';
import { ITEMS, type ItemId, type SaveState } from '../../game/game';

const FILTERS = ['All', 'Materials', 'Equipment', 'Tools', 'Combat Loot'];
export function BankScreen({ game: g, filter, setFilter }: { game: SaveState; filter: string; setFilter: (f: string) => void }) {
  const [selected, setSelected] = useState<ItemId | null>(null);
  const entries = (Object.keys(ITEMS) as ItemId[]).filter((id) => (g.bank[id] ?? 0) > 0 && (filter === 'All' || ITEMS[id].category === filter));
  return <div className="screen bank-screen"><ScreenHeading eyebrow="ACCOUNT · INVENTORY" title="Bank" sub="Everything you have gathered, smelted, forged, and won." accent="bank"><Badge tone="level-badge">{entries.length} STACKS</Badge></ScreenHeading>
    <Panel className="bank-panel" title="Stored Items" action={<span className="bank-capacity">UNLIMITED STACKS · {entries.length} ITEM TYPES</span>}>
      <div className="bank-toolbar"><div className="bank-filters" role="tablist" aria-label="Bank item categories">{FILTERS.map((f) => <button key={f} className={filter === f ? 'selected' : ''} aria-selected={filter === f} role="tab" onClick={() => setFilter(f)}>{f}</button>)}</div><div className="bank-gold"><Icon name="gold" size={17}/><b>{fmt(g.gold)}</b><small>GOLD</small></div></div>
      <div className="bank-grid">{entries.length ? entries.map((id) => <button key={id} className={`bank-item ${selected === id ? 'selected' : ''}`} onClick={() => setSelected(id)} aria-pressed={selected === id}><ItemTip id={id}><ItemMark id={id} large/></ItemTip><b>{ITEMS[id].name}</b><span className="stack-count">×{fmt(g.bank[id] ?? 0)}</span><small>{ITEMS[id].category}</small></button>) : <div className="bank-empty"><Icon name="bank" size={29}/><b>No {filter === 'All' ? 'items' : filter.toLowerCase()} yet</b><small>Gather resources and craft equipment to fill your Bank.</small></div>}</div>
      <div className="bank-detail">{selected && g.bank[selected] ? <><ItemMark id={selected}/><div><b>{ITEMS[selected].name}</b><small>{ITEMS[selected].desc}</small></div><Badge>×{fmt(g.bank[selected] ?? 0)}</Badge></> : <><span className="detail-hint">Select an item to inspect</span><small>Hover or focus any item for a quick description.</small></>}</div>
    </Panel>
  </div>;
}
