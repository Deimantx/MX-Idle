import { useEffect, useMemo, useRef, useState } from 'react';
import { Badge, Button, Icon } from '../../ui/primitives';
import { ScreenHeading } from '../../ui/game/ScreenPrimitives';
import { fmt } from '../../ui/game/formatters';
import { ItemTip } from '../../ui/game/ItemDisplay';
import { GameAction, GameItemFrame, GameValue } from '../../ui/game-v2/GameKit';
import { ITEMS, MELEE_WEAPONS, maxHitpoints, getPlayerAttackInterval, getPlayerResistances, canEquip, type ItemId, type SaveState } from '../../game/game';
import type { EquipmentMeta } from '../../game/content/items/itemRegistry';

type CombatSlot='weapon'|'head'|'armor'|'hands'|'feet'|'offhand';
type Profession='Mining'|'Smithing'|'Fishing'|'Cooking';
type EquipSlot=CombatSlot|'miningTool'|'smithingHammer';
type SlotId='weapon'|'offhand'|'head'|'armor'|'hands'|'feet'|'Pickaxe'|'Hammer'|'Rod'|'Tackle'|'Knife';
const COMBAT_SLOTS:SlotId[]=['head','weapon','offhand','armor','hands','feet'];
const PROFESSIONS:Profession[]=['Mining','Smithing','Fishing','Cooking'];
const PROFESSION_SLOTS:Record<Profession,SlotId[]>={Mining:['Pickaxe'],Smithing:['Hammer'],Fishing:['Rod','Tackle'],Cooking:['Knife']};
const SLOT_LABEL:Record<SlotId,string>={weapon:'Weapon',head:'Head',armor:'Body armor',hands:'Hands',feet:'Feet',offhand:'Off-hand',Pickaxe:'Pickaxe',Hammer:'Smithing hammer',Rod:'Fishing rod',Tackle:'Tackle',Knife:'Kitchen knife'};
const SLOT_ICON:Record<SlotId,string>={weapon:'sword',head:'helm',armor:'armor',hands:'gloves',feet:'greaves',offhand:'shield',Pickaxe:'pick',Hammer:'hammer',Rod:'hook',Tackle:'spark',Knife:'knife'};
const lowerSlot=(value:string)=>value.toLowerCase()==='off-hand'?'offhand':value.toLowerCase();
const equippedSlot=(g:SaveState,slot:SlotId):ItemId|null=>slot==='weapon'?g.equipped.weapon:slot==='head'?g.equipped.head:slot==='armor'?g.equipped.armor:slot==='hands'?g.equipped.hands:slot==='feet'?g.equipped.feet:slot==='offhand'?g.equipped.offhand:slot==='Pickaxe'?g.equipped.miningTool:slot==='Hammer'?g.equipped.smithingHammer:slot==='Rod'?g.fishing.rod:slot==='Knife'?g.cooking.knife:g.fishing.tackle as ItemId|null;
const slotArg=(slot:SlotId):EquipSlot|null=>slot==='weapon'||slot==='head'||slot==='armor'||slot==='hands'||slot==='feet'||slot==='offhand'?slot:slot==='Pickaxe'?'miningTool':slot==='Hammer'?'smithingHammer':null;
const metaStats=(id:ItemId|null)=>id?ITEMS[id]?.equipment?.stats ?? {}:{};
const STAT_GROUPS=[['Identity',['Handedness','Power Type','Effect']],['Offense',['Power','Accuracy','Interval','Crit Rate','Crit Damage','Penetration']],['Protection',['Melee Evasion','Ranged Evasion','Magic Evasion','Slash Resistance','Stab Resistance','Crush Resistance','Pierce Resistance','Fire Resistance','Water Resistance','Earth Resistance']]] as const;

export function EquipmentScreen({game:g,equip,unequip,equipProfession}:{game:SaveState;equip:(item:ItemId,slot:EquipSlot)=>void;unequip:(slot:EquipSlot)=>void;equipProfession?:(item:ItemId)=>void}) {
 const [mode,setMode]=useState<'Combat'|'Profession'>('Combat');
 const [profession,setProfession]=useState<Profession>('Mining');
 const [slot,setSlot]=useState<SlotId>('weapon');
 const [query,setQuery]=useState('');
 const [showUnowned,setShowUnowned]=useState(false);
 const [family,setFamily]=useState('All');
 const [selected,setSelected]=useState<ItemId|null>(null);
 const [pulseSlot,setPulseSlot]=useState<SlotId|null>(null);
 const pulseTimer=useRef<number>();
 useEffect(()=>()=>window.clearTimeout(pulseTimer.current),[]);

 const slots=mode==='Combat'?COMBAT_SLOTS:PROFESSION_SLOTS[profession];
 const selectedSlot=slots.includes(slot)?slot:slots[0]!;
 const current=equippedSlot(g,selectedSlot);
 const families=selectedSlot==='weapon'?['All','Sword','Battle Axe','Mace']:selectedSlot==='armor'?['All','Heavy']:[];
 const candidates=useMemo(()=>Object.entries(ITEMS).flatMap(([raw,item])=>{
   const id=raw as ItemId,meta=item.equipment;
   if(!meta||meta.context!==(mode==='Combat'?'combat':'profession'))return[];
   if(mode==='Profession'&&meta.profession!==profession)return[];
   if(lowerSlot(meta.slot)!==lowerSlot(selectedSlot))return[];
   const count=meta.slot==='Tackle'?(g.skills.Fishing.level>=meta.requiredLevel?1:0):(g.bank[id]??0);
   if(!showUnowned&&count<1&&current!==id)return[];
   if(family!=='All'&&selectedSlot==='weapon'&&meta.family!==family)return[];
   if(family==='Heavy'&&item.category!=='Equipment')return[];
   if(!item.name.toLowerCase().includes(query.toLowerCase()))return[];
   if(mode==='Combat'&&!canEquip(g,id,selectedSlot,false)&&id!==current)return[];
   return[{id,item,meta,count}];
 }).sort((a,b)=>b.meta.tier-a.meta.tier||a.item.name.localeCompare(b.item.name)),[mode,profession,selectedSlot,showUnowned,family,query,g.bank,g.equipped,g.skills,current]);
 const inspector=candidates.find(x=>x.id===selected)||candidates.find(x=>x.id===current)||candidates[0]||null;
 const weapon=g.equipped.weapon&&g.equipped.weapon in MELEE_WEAPONS?MELEE_WEAPONS[g.equipped.weapon as keyof typeof MELEE_WEAPONS]:null;
 const resistances=getPlayerResistances(g);
 const equipCandidate=(id:ItemId,meta:EquipmentMeta)=>{
   const target=slotArg(meta.slot as SlotId);
   if(target)equip(id,target);else equipProfession?.(id);
   setPulseSlot(selectedSlot);setSelected(id);window.clearTimeout(pulseTimer.current);
   pulseTimer.current=window.setTimeout(()=>setPulseSlot(null),560);
 };

 return <div className={`screen equipment-screen equipment-v2 ${mode==='Profession'?'is-profession-kit':''}`} data-feedback-screen="Equipment">
  <ScreenHeading eyebrow="ARMORY / LOADOUT" title="Equipment" sub="Shape a combat build or inspect the tools that define each profession." accent="equipment"><Badge tone="level-badge">{mode==='Combat'?'COMBAT GEAR':`${profession.toUpperCase()} KIT`}</Badge></ScreenHeading>
  <div className="equipment-v2-masthead">
   <div className="equipment-v2-mode control-segments" role="tablist" aria-label="Equipment context">
    <button role="tab" aria-selected={mode==='Combat'} className={mode==='Combat'?'selected':''} onClick={()=>{setMode('Combat');setSlot('weapon');setSelected(null);setFamily('All');}}><Icon name="shield" size={20}/><span><b>Combat loadout</b><small>Six-piece battle formation</small></span></button>
    <button role="tab" aria-selected={mode==='Profession'} className={mode==='Profession'?'selected':''} onClick={()=>{setMode('Profession');setSlot(PROFESSION_SLOTS[profession][0]!);setSelected(null);setFamily('All');}}><Icon name="gear" size={20}/><span><b>Profession kit</b><small>Tools and field equipment</small></span></button>
   </div>
   {mode==='Profession'&&<div className="profession-switch" role="tablist" aria-label="Profession kit">{PROFESSIONS.map(name=><button key={name} role="tab" aria-selected={name===profession} className={name===profession?'selected':''} onClick={()=>{setProfession(name);setSlot(PROFESSION_SLOTS[name][0]!);setSelected(null);setFamily('All');}}>{name}</button>)}</div>}
  </div>

  <div className="equipment-v2-zones">
   <section className="equipment-v2-loadout g2-surface g2-equipment" aria-labelledby="loadout-title">
    <header className="eq-zone-heading"><span className="g2-kicker">01 / {mode==='Combat'?'COMBAT FORMATION':`${profession.toUpperCase()} FIELD KIT`}</span><h2 id="loadout-title">{mode==='Combat'?'Adventurer’s loadout':`${profession} rig`}</h2><small>{mode==='Combat'?'Select a position to browse compatible equipment.':'Choose the working tool for this profession.'}</small></header>
    <div className={`eq-loadout-stage ${mode==='Profession'?'profession-stage':''}`}>
     {mode==='Combat'&&<svg className="eq-link-map" viewBox="0 0 600 500" aria-hidden="true"><path d="M300 74V150M145 182H225M375 182H455M300 236V314M146 350H220M380 350H454"/><circle cx="300" cy="208" r="89"/><path d="M300 119v178M211 208h178"/></svg>}
     <div className={`eq-slot-board ${mode==='Profession'?'profession-board':''}`}>
      {slots.map(slotName=><EquipmentSlotCard key={slotName} slot={slotName} id={equippedSlot(g,slotName)} selected={slotName===selectedSlot} active={pulseSlot===slotName} onClick={()=>{setSlot(slotName);setSelected(null);setFamily('All');}}/>)}
      {mode==='Combat'&&<div className="eq-character-crest"><div className="eq-crest-rings"><Icon name="shield" size={48}/></div><b>VANGUARD</b><small>Loadout profile</small><i/></div>}
      {mode==='Profession'&&<div className="eq-kit-ghosts" aria-label="Future kit slots"><span><Icon name="spark" size={16}/>Charm</span><span><Icon name="armor" size={16}/>Garment</span><span><Icon name="gear" size={16}/>Utility</span></div>}
     </div>
    </div>
    {mode==='Combat'?<div className="eq-derived-stats" aria-label="Combat loadout summary">
      <GameValue label="Attack" value={g.skills.Attack.level} accent="equipment"/><GameValue label="Defence" value={g.skills.Defence.level} accent="equipment"/><GameValue label="Health" value={`${Math.ceil(g.combat.playerHp)} / ${maxHitpoints(g.skills.Hitpoints.level)}`} accent="combat"/><GameValue label="Attack rhythm" value={`${(getPlayerAttackInterval(g)/1000).toFixed(2)}s`} accent="equipment"/><GameValue label="Weapon style" value={weapon?.style??'—'} accent="combat"/><GameValue label="Core resist" value={`${resistances.Slash} / ${resistances.Pierce} / ${resistances.Fire}`} detail="Slash · Pierce · Fire" accent="equipment"/>
     </div>:<div className="eq-kit-preview"><span className="g2-kicker">KIT PROFILE</span><b>{profession==='Mining'?'Excavation':profession==='Smithing'?'Forgework':profession==='Fishing'?'Angling':'Kitchen prep'}</b><small>{profession==='Mining'?'Pick power and strike speed shape each layer.':profession==='Smithing'?'Hammer power controls progress at the anvil.':profession==='Fishing'?'Rod power, tackle and bait define the setup.':'Knife power reduces preparation time.'}</small></div>}
    <footer className="eq-loadout-footer"><span>{current?`Currently wearing ${ITEMS[current]?.name??'equipped item'}.`:`${SLOT_LABEL[selectedSlot]} is empty.`}</span>{current&&slotArg(selectedSlot)&&<Button tone="quiet" onClick={()=>unequip(slotArg(selectedSlot)!)}>Return to Bank</Button>}</footer>
   </section>

   <section className="equipment-v2-armory g2-surface g2-equipment" aria-labelledby="armory-title">
    <header className="eq-zone-heading eq-armory-heading"><span className="g2-kicker">02 / OWNED GEAR</span><h2 id="armory-title">Armory</h2><div className="eq-armory-count"><b>{candidates.length}</b><small>compatible items</small></div></header>
    <div className="eq-armory-toolbar">
     <label className="eq-search"><Icon name="search" size={16}/><span className="sr-only">Search compatible equipment</span><input value={query} onChange={event=>setQuery(event.target.value)} placeholder={`Search ${SLOT_LABEL[selectedSlot].toLowerCase()} gear`}/></label>
     <button className="eq-owned-toggle" type="button" aria-pressed={showUnowned} onClick={()=>setShowUnowned(value=>!value)}><span className="eq-toggle-track"><i/></span>Include unowned</button>
    </div>
    {families.length>0&&<nav className="eq-family-rail" aria-label="Weapon family">{families.map(name=><button type="button" key={name} aria-pressed={family===name} className={family===name?'selected':''} onClick={()=>setFamily(name)}><Icon name={name==='Battle Axe'?'axe':name==='Mace'?'mace':name==='Sword'?'sword':name==='Heavy'?'armor':'gear'} size={17}/><span>{name}</span>{family===name&&<i/>}</button>)}</nav>}
    <div className="eq-armory-context"><span><Icon name={SLOT_ICON[selectedSlot]} size={16}/>{SLOT_LABEL[selectedSlot]}</span><small>{mode==='Combat'?'Combat-compatible':'Profession-specific'} · Tier / owned count</small></div>
    <div className="eq-item-grid g2-scroll" role="listbox" aria-label={`${SLOT_LABEL[selectedSlot]} armory`}>
     {candidates.map(({id,item,meta,count})=><button key={id} type="button" role="option" aria-selected={inspector?.id===id} className={`eq-item-tile ${inspector?.id===id?'selected':''} ${current===id?'worn':''} ${count<1?'unowned':''}`} onClick={()=>setSelected(id)}>
       <ItemTip id={id} context={{owned:count,equipped:current===id,skillLevels:{Mining:g.skills.Mining.level,Smithing:g.skills.Smithing.level,Fishing:g.skills.Fishing.level,Cooking:g.skills.Cooking.level,Attack:g.skills.Attack.level,Defence:g.skills.Defence.level,Hitpoints:g.skills.Hitpoints.level}}}><GameItemFrame id={id} state={inspector?.id===id?'selected':current===id?'equipped':'normal'} count={`×${fmt(count)}`} tier={meta.tier}/></ItemTip>
       <span className="eq-tile-copy"><b>{item.name}</b><small>{meta.family??meta.profession??meta.slot} · {meta.handedness??`Tier ${meta.tier}`}</small><span>{Object.entries(meta.stats).filter(([key])=>['Power','Accuracy','Melee Evasion','Slash Resistance','Speed','Bite Speed','Prep Speed'].includes(key)).slice(0,2).map(([key,value])=><i key={key}>{key} <strong>{value}</strong></i>)}</span></span>
       <i className="eq-tile-marker">{current===id?'WORN':count<1?'UNOWNED':`T${meta.tier}`}</i>
      </button>)}
     {candidates.length===0&&<div className="eq-armory-empty"><Icon name={SLOT_ICON[selectedSlot]} size={30}/><b>No compatible {SLOT_LABEL[selectedSlot].toLowerCase()} found</b><span>{query?`Nothing matches “${query}”.`:'Craft or obtain matching gear to fill this position.'}</span></div>}
    </div>
   </section>

   <EquipmentInspector game={g} slot={selectedSlot} current={current} candidate={inspector} onEquip={equipCandidate}/>
  </div>
 </div>;
}

function EquipmentSlotCard({slot,id,selected,active,onClick}:{slot:SlotId;id:ItemId|null;selected:boolean;active:boolean;onClick:()=>void}) {
 return <button type="button" className={`eq-slot eq-slot-${slot.toLowerCase()} ${selected?'selected':''} ${id?'filled':'empty'} ${active?'equip-pulse':''}`} aria-pressed={selected} aria-label={`${SLOT_LABEL[slot]}: ${id?ITEMS[id]?.name:'Empty'}`} onClick={onClick}>
  <span className="eq-slot-icon"><Icon name={SLOT_ICON[slot]} size={22}/></span><span className="eq-slot-label">{SLOT_LABEL[slot]}</span>
  {id?<><GameItemFrame id={id} size="compact" state={selected?'selected':'equipped'}/><span className="eq-slot-name">{ITEMS[id]?.name??'Equipped'}</span><small>{Object.entries(metaStats(id)).slice(0,1).map(([key,value])=>`${key} ${value}`)}</small><i className="eq-slot-marker">WORN</i></>:<><span className="eq-empty-sigil"><Icon name={SLOT_ICON[slot]} size={26}/></span><span className="eq-slot-name">Empty</span><small>Choose gear</small></>}
 </button>;
}

function EquipmentInspector({game:g,slot,current,candidate,onEquip}:{game:SaveState;slot:SlotId;current:ItemId|null;candidate:{id:ItemId;item:typeof ITEMS[ItemId];meta:EquipmentMeta;count:number}|null;onEquip:(id:ItemId,meta:EquipmentMeta)=>void}) {
 const before=metaStats(current),after=candidate?.meta.stats??{};
 const keys=new Set([...Object.keys(before),...Object.keys(after)]);
 const groups=STAT_GROUPS.map(([label,ordered])=>({label,rows:ordered.filter(key=>keys.has(key))})).filter(group=>group.rows.length);
 const extra=[...keys].filter(key=>!STAT_GROUPS.some(([,ordered])=>(ordered as readonly string[]).includes(key)));
 if(extra.length)groups.push({label:'Other details',rows:extra} as never);
 const meetsLevel=candidate?g.skills[candidate.meta.skill].level>=candidate.meta.requiredLevel:false;
 const canUse=Boolean(candidate&&candidate.count>0&&meetsLevel&&candidate.id!==current);
 return <aside className="equipment-v2-inspector g2-surface g2-equipment" aria-labelledby="item-inspector-title">
  <header className="eq-zone-heading"><span className="g2-kicker">03 / ITEM STUDY</span><h2 id="item-inspector-title">Inspector</h2><small>{SLOT_LABEL[slot]} · current and selected gear</small></header>
  {candidate?<>
   <div className="eq-inspect-hero"><GameItemFrame id={candidate.id} size="hero" state={candidate.id===current?'equipped':'selected'} tier={candidate.meta.tier}/><div className="eq-inspect-name"><span className="g2-kicker">{candidate.meta.family??candidate.meta.profession??candidate.meta.slot}</span><h3>{candidate.item.name}</h3><small>{candidate.meta.handedness??`Tier ${candidate.meta.tier}`} · {candidate.item.rarity??'Common'}</small></div><p>{candidate.item.desc}</p>
    <div className="eq-requirements"><span><Icon name="spark" size={14}/>Requires {candidate.meta.skill} <b>{candidate.meta.requiredLevel}</b></span><span><Icon name="bank" size={14}/>Owned <b>{fmt(candidate.count)}</b></span></div>
   </div>
   <div className="eq-compare-caption"><span>COMPARISON</span><small>Current <b>{current?ITEMS[current]?.name:'Empty slot'}</b></small><small>Selected <b>{candidate.item.name}</b></small></div>
   <div className="eq-stat-groups">{groups.map(group=><section key={group.label} className="eq-stat-group"><h4>{group.label}</h4>{group.rows.map(key=>{
     const old=before[key],next=after[key],numeric=typeof old==='number'&&typeof next==='number',delta=numeric?next-old:0;
     return <div className="eq-stat-delta" key={key}><span>{key}</span><b>{old??'—'}</b><i aria-hidden="true">→</i><b>{next??'—'}</b><em className={numeric?(delta>0?'up':delta<0?'down':'even'):'even'}>{numeric?`${delta>0?'+':''}${delta}`:'—'}</em></div>;
    })}</section>)}</div>
   {candidate.meta.stats.Special&&<div className="eq-special-note"><Icon name="spark" size={15}/><span><small>SPECIAL</small><b>{candidate.meta.stats.Special}</b></span></div>}
   <footer className="eq-inspector-actions"><GameAction action="primary" icon="shield" disabled={!canUse} onClick={()=>onEquip(candidate.id,candidate.meta)}>{candidate.id===current?'Already equipped':!meetsLevel?`Requires ${candidate.meta.skill} ${candidate.meta.requiredLevel}`:candidate.count<1?'Not owned':'Equip to loadout'}</GameAction><small>{current?'Equipping returns the replaced item to your Bank.':'Select owned gear to equip it.'}</small></footer>
  </>:<div className="eq-inspector-empty"><Icon name={SLOT_ICON[slot]} size={36}/><b>No item selected</b><small>Choose an armory piece to see its identity, requirements, and comparison.</small></div>}
 </aside>;
}
