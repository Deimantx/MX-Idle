import { useEffect, useMemo, useRef, useState } from 'react';
import { Icon } from '../../ui/primitives';
import { ItemTip } from '../../ui/game/ItemDisplay';
import { ScreenHeading } from '../../ui/game/ScreenPrimitives';
import { fmt } from '../../ui/game/formatters';
import { GameEmpty, GameItemFrame, GameValue } from '../../ui/game-v2/GameKit';
import { ITEMS, type ItemId, type SaveState } from '../../game/game';

const BANK_GROUPS = [
  { label: 'EVERYTHING', icon: 'bank', filters: ['All'] },
  { label: 'MATERIALS', icon: 'ore', filters: ['Materials', 'Mining Materials', 'Ingots', 'Alloys', 'Raw Fish', 'Aquatic Finds'] },
  { label: 'PROVISIONS', icon: 'food', filters: ['Food', 'Cooking Utility', 'Bait'] },
  { label: 'EQUIPMENT', icon: 'shield', filters: ['Equipment', 'Profession Tools', 'Tools'] },
  { label: 'TROPHIES', icon: 'trophy', filters: ['Offerings', 'Elite Components', 'Boss Components', 'Combat Loot'] },
];

function itemUse(item: (typeof ITEMS)[ItemId]) {
  if (item.category === 'Raw Fish') return 'Used for Cooking';
  if (item.category === 'Mining Materials' || item.category === 'Materials' || item.category === 'Ingots' || item.category === 'Alloys') return 'Used for Smithing';
  if (item.category === 'Food') return 'Combat provision';
  if (item.category === 'Offerings') return 'Offering';
  if (item.equipment?.context === 'combat') return 'Combat equipment';
  if (item.equipment?.context === 'profession') return 'Profession equipment';
  return item.category;
}

export function BankScreen({ game: g, filter, setFilter }: { game: SaveState; filter: string; setFilter: (f: string) => void }) {
  const [selected, setSelected] = useState<ItemId | null>(null);
  const [search, setSearch] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const entries = useMemo(() => (Object.keys(ITEMS) as ItemId[]).filter(id => (g.bank[id] ?? 0) > 0 && (filter === 'All' || ITEMS[id].category === filter) && ITEMS[id].name.toLowerCase().includes(search.toLowerCase())), [g.bank, filter, search]);
  const selectedItem = selected && entries.includes(selected) ? selected : entries[0] ?? null;
  const item = selectedItem ? ITEMS[selectedItem] : null;
  const equipped = selectedItem ? Object.values(g.equipped).includes(selectedItem) : false;
  const itemTypes = Object.values(g.bank).filter(amount => (amount ?? 0) > 0).length;
  const selectedCount = selectedItem ? g.bank[selectedItem] ?? 0 : 0;
  const actualCategories = new Set((Object.keys(ITEMS) as ItemId[]).map(id => ITEMS[id].category));

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== '/' || event.ctrlKey || event.metaKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target?.matches('input,textarea,select,[contenteditable="true"]')) return;
      event.preventDefault(); searchRef.current?.focus();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return <div className="screen bank-screen bank-v2" data-feedback-screen="Bank">
    <ScreenHeading eyebrow="ADVENTURER / STASH" title="Bank" sub="Materials, provisions, gear, and the spoils of your travels." accent="bank"/>
    <div className="bank-v2-layout">
      <aside className="bank-v2-tree g2-surface g2-bank" aria-label="Bank categories">
        <header className="vault-crest"><div><Icon name="bank" size={26}/></div><span><small>YOUR STASH</small><b>Adventurer's Bank</b></span></header>
        <div className="vault-category-list">{BANK_GROUPS.map(group => <section className="vault-group" key={group.label}><div className="vault-group-title"><Icon name={group.icon} size={14}/><span>{group.label}</span></div>
          {group.filters.map(category => {
            const exists = category === 'All' || actualCategories.has(category);
            return exists ? <button key={category} className={`vault-category ${filter === category ? 'selected' : ''}`} aria-current={filter === category ? 'page' : undefined} onClick={() => setFilter(category)}><span>{category === 'All' ? 'All items' : category}</span><b>{category === 'All' ? itemTypes : (Object.keys(ITEMS) as ItemId[]).filter(id => ITEMS[id].category === category && (g.bank[id] ?? 0) > 0).length}</b></button> : null;
          })}
        </section>)}</div>
        <footer className="vault-storage"><Icon name="shield" size={15}/><span>Kept safe between adventures</span></footer>
      </aside>

      <main className="bank-v2-collection g2-surface g2-bank">
        <header className="bank-collection-head"><div><span className="g2-kicker">{filter === 'All' ? 'ITEMS ON HAND' : filter.toUpperCase()}</span><h2>{filter === 'All' ? 'Stored items' : filter}</h2><small>{entries.length} {entries.length === 1 ? 'item type' : 'item types'}</small></div></header>
        <div className="bank-v2-tools"><label className="bank-v2-search"><Icon name="search" size={17}/><span className="sr-only">Search items</span><input ref={searchRef} type="search" placeholder="Search items" value={search} onChange={event => setSearch(event.target.value)}/>{search ? <button type="button" onClick={() => { setSearch(''); searchRef.current?.focus(); }}>Clear</button> : <kbd aria-hidden="true">/</kbd>}</label></div>
        <div className="bank-v2-grid g2-scroll" role="listbox" aria-label="Bank items">
          {entries.length ? entries.map(id => {
            const definition = ITEMS[id], count = g.bank[id] ?? 0, isRare = definition.rarity === 'Rare', isSelected = selectedItem === id;
            return <button key={id} className={`vault-item ${isSelected ? 'selected' : ''} ${isRare ? 'rare' : ''} ${equipped && isSelected ? 'worn' : ''}`} onClick={() => setSelected(id)} aria-pressed={isSelected} role="option" aria-selected={isSelected}>
              <span className="vault-item-top"><small>{definition.tier ? `T${definition.tier}` : definition.rarity ?? 'Common'}</small>{equipped && isSelected && <i>WORN</i>}</span>
              <ItemTip id={id} context={{owned:count,equipped:Boolean(equipped&&isSelected),skillLevels:{Mining:g.skills.Mining.level,Smithing:g.skills.Smithing.level,Fishing:g.skills.Fishing.level,Cooking:g.skills.Cooking.level,Attack:g.skills.Attack.level,Defence:g.skills.Defence.level,Hitpoints:g.skills.Hitpoints.level}}}><GameItemFrame id={id} size="regular" state={isSelected ? 'selected' : isRare ? 'reward' : 'normal'} count={`×${fmt(count)}`} tier={definition.tier}/></ItemTip>
              <b>{definition.name}</b><span className="vault-item-foot"><span className={`rarity-dot ${isRare ? 'rare' : ''}`}/>{definition.rarity ?? 'Common'}</span>
            </button>;
          }) : <div className="bank-v2-empty"><GameEmpty icon={search ? 'search' : 'bank'} title={search ? 'No matching items' : `No ${filter === 'All' ? 'items' : filter.toLowerCase()} yet`} detail={search ? `Nothing in your stash matches “${search}”.` : 'Gather materials, prepare provisions, and craft new equipment to fill your bank.'}/></div>}
        </div>
      </main>

      <aside className="bank-v2-inspector g2-surface g2-bank" aria-live="polite">
        <header className="vault-inspector-head"><span className="g2-kicker">ITEM INSPECTION</span><h2>{item ? 'Inspection' : 'Your stash'}</h2><small>{item ? `${item.rarity ?? 'Common'} · ${item.category}` : 'Choose an item to inspect'}</small></header>
        {item && selectedItem ? <>
          <div className={`vault-item-hero ${item.rarity === 'Rare' ? 'rare' : ''}`}><div className="vault-item-hero-backdrop"/><GameItemFrame id={selectedItem} size="hero" state={item.rarity === 'Rare' ? 'reward' : equipped ? 'equipped' : 'selected'} tier={item.tier}/><span className="vault-rarity">{itemUse(item)}</span><h3>{item.name}</h3><p>{item.desc}</p></div>
          <div className="vault-quantity"><span>QUANTITY</span><b>×{fmt(selectedCount)}</b><small>{selectedCount.toLocaleString()} {selectedCount === 1 ? 'item' : 'items'} in your bank</small></div>
          <div className="vault-item-record">
            {item.equipment && <section><h3>Equipment</h3>{Object.entries(item.equipment.stats).map(([label, value]) => <GameValue key={label} label={label} value={value} accent="bank"/>)}<div className="vault-record-line"><span>Required</span><b>{item.equipment.skill} {item.equipment.requiredLevel}</b></div>{item.equipment.handedness && <div className="vault-record-line"><span>Grip</span><b>{item.equipment.handedness}</b></div>}</section>}
            <section><h3>Item details</h3><div className="vault-record-line"><span>Type</span><b>{item.category}</b></div><div className="vault-record-line"><span>Rarity</span><b>{item.rarity ?? 'Common'}</b></div>{item.tier && <div className="vault-record-line"><span>Tier</span><b>{item.tier}</b></div>}{item.offeringValue !== undefined && <div className="vault-record-line"><span>Offering value</span><b>{item.offeringValue}</b></div>}</section>
          </div>
          <footer className="vault-source-note"><span>{equipped ? 'IN YOUR LOADOUT' : 'STORED IN BANK'}</span><small>{equipped ? 'This item is currently equipped.' : 'Select another item to compare its details.'}</small></footer>
        </> : <div className="vault-inspector-empty"><Icon name="spark" size={28}/><b>Your journey, kept safe</b><small>Items gathered, crafted, and discovered will be available here.</small></div>}
      </aside>
    </div>
  </div>;
}
