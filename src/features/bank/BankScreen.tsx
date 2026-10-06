import { useState } from 'react';
import { Badge, Icon, Panel } from '../../ui/primitives';
import { ItemMark, ItemTip } from '../../ui/game/ItemDisplay';
import { ScreenHeading } from '../../ui/game/ScreenPrimitives';
import { fmt } from '../../ui/game/formatters';
import { ITEMS, type ItemId, type SaveState } from '../../game/game';

const GROUPS = [{ label: 'All', filters: ['All'] }, { label: 'Resources', filters: ['Materials', 'Raw Fish', 'Aquatic Finds'] }, { label: 'Consumables', filters: ['Food', 'Cooking Utility', 'Bait'] }, { label: 'Equipment', filters: ['Equipment', 'Profession Tools'] }, { label: 'Combat', filters: ['Offerings', 'Elite Components', 'Boss Components', 'Combat Loot'] }];
export function BankScreen({ game: g, filter, setFilter }: { game: SaveState; filter: string; setFilter: (f: string) => void }) {
  const [selected, setSelected] = useState<ItemId | null>(null), [search,setSearch] = useState('');
  const entries = (Object.keys(ITEMS) as ItemId[]).filter((id) => (g.bank[id] ?? 0) > 0 && (filter === 'All' || ITEMS[id].category === filter) && ITEMS[id].name.toLowerCase().includes(search.toLowerCase()));
  return <div className="screen bank-screen"><ScreenHeading eyebrow="ACCOUNT · INVENTORY" title="Bank" sub="Everything you have gathered, smelted, forged, and won." accent="bank"><Badge tone="level-badge">{entries.length} STACKS</Badge></ScreenHeading>
    <div className="bank-workspace"><Panel className="bank-categories" title="Vault Sections"><nav aria-label="Bank item categories">{GROUPS.map(group=><div className="bank-category-group" key={group.label}><b>{group.label}</b>{group.filters.map(f=><button key={f} className={filter===f?'selected':''} aria-current={filter===f?'page':undefined} onClick={()=>setFilter(f)}>{f}</button>)}</div>)}</nav></Panel>
    <Panel className="bank-panel" title="Stored Items" action={<span className="bank-capacity">UNLIMITED STACKS · {entries.length} ITEM TYPES</span>}>
      <div className="bank-toolbar"><label className="bank-search"><span className="sr-only">Search stored items</span><input type="search" placeholder="Search items" value={search} onChange={e=>setSearch(e.target.value)}/></label><div className="bank-gold"><Icon name="gold" size={17}/><b>{fmt(g.gold)}</b><small>GOLD</small></div></div>
      <div className="bank-grid">{entries.length ? entries.map((id) => <button key={id} className={`bank-item ${selected === id ? 'selected' : ''}`} onClick={() => setSelected(id)} aria-pressed={selected === id}><ItemTip id={id}><ItemMark id={id}/></ItemTip><b>{ITEMS[id].name}</b><span className="stack-count">×{fmt(g.bank[id] ?? 0)}</span><small>{ITEMS[id].category}</small></button>) : <div className="bank-empty"><Icon name="bank" size={29}/><b>No {filter === 'All' ? 'items' : filter.toLowerCase()} yet</b><small>Gather resources and craft equipment to fill your Bank.</small></div>}</div>
    </Panel><Panel className="bank-detail-panel" title="Item Inspection">{selected && g.bank[selected] ? <div className="bank-detail"><ItemMark id={selected} large/><div><b>{ITEMS[selected].name}</b><small>{ITEMS[selected].desc}</small><span>{ITEMS[selected].category}</span></div><Badge>×{fmt(g.bank[selected] ?? 0)}</Badge></div> : <div className="bank-detail bank-detail-empty"><span className="detail-hint">Select an item to inspect</span><small>Hover or focus an item for a quick description.</small></div>}</Panel></div>
  </div>;
}
