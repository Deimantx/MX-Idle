import { useMemo, useState } from 'react';
import { Badge, Icon } from '../../ui/primitives';
import { ItemTip } from '../../ui/game/ItemDisplay';
import { ScreenHeading } from '../../ui/game/ScreenPrimitives';
import { fmt } from '../../ui/game/formatters';
import { GameEmpty, GameItemFrame, GameValue } from '../../ui/game-v2/GameKit';
import { ITEMS, type ItemId, type SaveState } from '../../game/game';

const BANK_GROUPS=[
 {label:'EVERYTHING',icon:'bank',filters:['All']},
 {label:'MATERIALS',icon:'ore',filters:['Materials','Mining Materials','Ingots','Alloys','Raw Fish','Aquatic Finds']},
 {label:'PROVISIONS',icon:'food',filters:['Food','Cooking Utility','Bait']},
 {label:'EQUIPMENT',icon:'shield',filters:['Equipment','Profession Tools','Tools']},
 {label:'TROPHIES',icon:'trophy',filters:['Offerings','Elite Components','Boss Components','Combat Loot']},
];
export function BankScreen({game:g,filter,setFilter}:{game:SaveState;filter:string;setFilter:(f:string)=>void}) {
 const [selected,setSelected]=useState<ItemId|null>(null);
 const [search,setSearch]=useState('');
 const entries=useMemo(()=>(Object.keys(ITEMS) as ItemId[]).filter(id=>(g.bank[id]??0)>0&&(filter==='All'||ITEMS[id].category===filter)&&ITEMS[id].name.toLowerCase().includes(search.toLowerCase())),[g.bank,filter,search]);
 const selectedItem=selected&&entries.includes(selected)?selected:entries[0]??null;
 const item=selectedItem?ITEMS[selectedItem]:null;
 const equipped=selectedItem?Object.values(g.equipped).includes(selectedItem):false;
 const totalStacks=Object.values(g.bank).filter(amount=>(amount??0)>0).length;
 const selectedCount=selectedItem?g.bank[selectedItem]??0:0;
 const actualCategories=new Set((Object.keys(ITEMS) as ItemId[]).map(id=>ITEMS[id].category));
 return <div className="screen bank-screen bank-v2">
  <ScreenHeading eyebrow="VAULT / COLLECTION" title="Bank" sub="A catalog of materials, field provisions, equipment, and trophies." accent="bank"><Badge tone="level-badge">{fmt(totalStacks)} STACKS</Badge></ScreenHeading>
  <div className="bank-v2-layout">
   <aside className="bank-v2-tree g2-surface g2-bank" aria-label="Vault categories">
    <header className="vault-crest"><div><Icon name="bank" size={26}/></div><span><small>FRONTIER VAULT</small><b>Collections</b></span><i>{fmt(g.gold)} <Icon name="gold" size={15}/></i></header>
    <div className="vault-category-list">
     {BANK_GROUPS.map(group=><section className="vault-group" key={group.label}><div className="vault-group-title"><Icon name={group.icon} size={14}/><span>{group.label}</span></div>
      {group.filters.map(category=>{
       const exists=category==='All'||actualCategories.has(category);
       return exists?<button key={category} className={`vault-category ${filter===category?'selected':''}`} aria-current={filter===category?'page':undefined} onClick={()=>setFilter(category)}><span>{category==='All'?'All holdings':category}</span><b>{category==='All'?totalStacks:(Object.keys(ITEMS) as ItemId[]).filter(id=>ITEMS[id].category===category&&(g.bank[id]??0)>0).length}</b></button>:null;
      })}
     </section>)}
    </div>
    <footer className="vault-storage"><span><i/> STACK STORAGE</span><b>Unlimited</b><small>Stacks share a single vault index.</small></footer>
   </aside>

   <main className="bank-v2-collection g2-surface g2-bank">
    <header className="bank-collection-head"><div><span className="g2-kicker">{filter==='All'?'MASTER INDEX':filter.toUpperCase()}</span><h2>{filter==='All'?'Vault holdings':filter}</h2><small>{entries.length} owned item {entries.length===1?'type':'types'} · Sorted by collection order</small></div><div className="vault-total"><span>GOLD RESERVE</span><b><Icon name="gold" size={19}/>{fmt(g.gold)}</b></div></header>
    <div className="bank-v2-tools"><label className="bank-v2-search"><Icon name="search" size={17}/><span className="sr-only">Search the vault</span><input type="search" placeholder="Search the vault" value={search} onChange={event=>setSearch(event.target.value)}/><kbd>/</kbd></label><span className="vault-density"><i className="density-mark"/> {entries.length} / {totalStacks} shown</span></div>
    <div className="bank-v2-grid g2-scroll" role="listbox" aria-label="Vault inventory">
     {entries.length?entries.map(id=>{
       const definition=ITEMS[id],count=g.bank[id]??0,isRare=definition.rarity==='Rare',isSelected=selectedItem===id;
       return <button key={id} className={`vault-item ${isSelected?'selected':''} ${isRare?'rare':''} ${equipped&&isSelected?'worn':''}`} onClick={()=>setSelected(id)} aria-pressed={isSelected} role="option" aria-selected={isSelected}>
        <span className="vault-item-top"><small>{definition.category}</small><i>{definition.tier?`T${definition.tier}`:'—'}</i></span>
        <ItemTip id={id}><GameItemFrame id={id} size="regular" state={isSelected?'selected':equipped&&isSelected?'equipped':isRare?'reward':'normal'} count={`×${fmt(count)}`} tier={definition.tier}/></ItemTip>
        <b>{definition.name}</b><span className="vault-item-foot"><span className={`rarity-dot ${isRare?'rare':''}`}/>{definition.rarity??'Common'}{equipped&&isSelected&&<i>WORN</i>}</span>
       </button>;
     }):<div className="bank-v2-empty"><GameEmpty icon={search?'search':'bank'} title={search?'No matching holdings':`No ${filter==='All'?'items':filter.toLowerCase()} yet`} detail={search?`No stored item matches “${search}”.`:'Gather resources, prepare provisions, and craft equipment to grow this collection.'}/></div>}
    </div>
   </main>

   <aside className="bank-v2-inspector g2-surface g2-bank" aria-live="polite">
    <header className="vault-inspector-head"><span className="g2-kicker">ITEM RECORD</span><h2>Inspection</h2><small>Selected holdings and collection details</small></header>
    {item&&selectedItem?<>
     <div className={`vault-item-hero ${item.rarity==='Rare'?'rare':''}`}><div className="vault-item-hero-backdrop"/><GameItemFrame id={selectedItem} size="hero" state={item.rarity==='Rare'?'reward':equipped?'equipped':'selected'} tier={item.tier}/><span className="vault-rarity">{item.rarity??'Common'} · {item.category}</span><h3>{item.name}</h3><p>{item.desc}</p></div>
     <div className="vault-quantity"><span>ON HAND</span><b>×{fmt(selectedCount)}</b><small>{selectedCount.toLocaleString()} {selectedCount===1?'unit':'units'} in this stack</small></div>
     <div className="vault-item-record">
      {item.equipment&&<section><h3>Equipment profile</h3>{Object.entries(item.equipment.stats).map(([label,value])=><GameValue key={label} label={label} value={value} accent="bank"/>)}<div className="vault-record-line"><span>Required</span><b>{item.equipment.skill} {item.equipment.requiredLevel}</b></div>{item.equipment.handedness&&<div className="vault-record-line"><span>Grip</span><b>{item.equipment.handedness}</b></div>}</section>}
      <section><h3>Collection record</h3><div className="vault-record-line"><span>Category</span><b>{item.category}</b></div><div className="vault-record-line"><span>Rarity</span><b>{item.rarity??'Common'}</b></div><div className="vault-record-line"><span>Tier</span><b>{item.tier?`Tier ${item.tier}`:'Unranked'}</b></div>{item.offeringValue!==undefined&&<div className="vault-record-line"><span>Offering value</span><b>{item.offeringValue} Gold</b></div>}</section>
     </div>
     <footer className="vault-source-note"><span>INDEXED IN FRONTIER VAULT</span><small>{equipped?'This item is currently part of your loadout.':'Select an item to keep its record open while browsing.'}</small></footer>
    </>:<div className="vault-inspector-empty"><Icon name="spark" size={28}/><b>Choose a holding</b><small>Item identity, rarity, stats, and stack quantity will be recorded here.</small></div>}
   </aside>
  </div>
 </div>;
}
