import { useEffect, useMemo, useRef, useState } from 'react';
import { Badge, Button, Icon, Tip } from '../../ui/primitives';
import { ScreenHeading } from '../../ui/game/ScreenPrimitives';
import { fmt } from '../../ui/game/formatters';
import { ItemTip } from '../../ui/game/ItemDisplay';
import { GameAction, GameItemFrame, GameValue } from '../../ui/game-v2/GameKit';
import { ITEMS, MELEE_WEAPONS, getPlayerMaxHitpoints, getPlayerAttackInterval, getPlayerResistances, canEquip, type ItemId, type SaveState } from '../../game/game';
import type { EquipmentMeta } from '../../game/content/items/itemRegistry';

type CombatSlot='weapon'|'head'|'armor'|'hands'|'feet'|'offhand'|'ring'|'necklace'|'cape';
type Profession='Mining'|'Smithing'|'Fishing'|'Cooking';
type EquipSlot=CombatSlot|'miningTool'|'smithingHammer';
type SlotId=CombatSlot|'Pickaxe'|'Hammer'|'Rod'|'Tackle'|'Knife';
type Candidate={id:ItemId;item:typeof ITEMS[ItemId];meta:EquipmentMeta;count:number;usable:boolean};
const COMBAT_SLOTS:SlotId[]=['cape','head','necklace','weapon','armor','ring','offhand','hands','feet'];
const PROFESSIONS:Profession[]=['Mining','Smithing','Fishing','Cooking'];
const PROFESSION_SLOTS:Record<Profession,SlotId[]>={Mining:['Pickaxe'],Smithing:['Hammer'],Fishing:['Rod','Tackle'],Cooking:['Knife']};
const SLOT_LABEL:Record<SlotId,string>={weapon:'Weapon',head:'Head',armor:'Armor',hands:'Hands',feet:'Feet',offhand:'Off-hand',ring:'Ring',necklace:'Necklace',cape:'Cape',Pickaxe:'Pickaxe',Hammer:'Smithing hammer',Rod:'Fishing rod',Tackle:'Tackle',Knife:'Kitchen knife'};
const SLOT_ICON:Record<SlotId,string>={weapon:'sword',head:'helm',armor:'armor',hands:'gloves',feet:'greaves',offhand:'shield',ring:'gem',necklace:'spark',cape:'cape',Pickaxe:'pick',Hammer:'hammer',Rod:'hook',Tackle:'spark',Knife:'knife'};
const lowerSlot=(value:string)=>value.toLowerCase()==='off-hand'?'offhand':value.toLowerCase();
const equippedSlot=(g:SaveState,slot:SlotId):ItemId|null=>slot==='weapon'?g.equipped.weapon:slot==='head'?g.equipped.head:slot==='armor'?g.equipped.armor:slot==='hands'?g.equipped.hands:slot==='feet'?g.equipped.feet:slot==='offhand'?g.equipped.offhand:slot==='ring'?g.equipped.ring:slot==='necklace'?g.equipped.necklace:slot==='cape'?g.equipped.cape:slot==='Pickaxe'?g.equipped.miningTool:slot==='Hammer'?g.equipped.smithingHammer:slot==='Rod'?g.fishing.rod:slot==='Knife'?g.cooking.knife:g.fishing.tackle as ItemId|null;
const slotArg=(slot:SlotId):EquipSlot|null=>['weapon','head','armor','hands','feet','offhand','ring','necklace','cape'].includes(slot)?slot as CombatSlot:slot==='Pickaxe'?'miningTool':slot==='Hammer'?'smithingHammer':null;
const metaStats=(id:ItemId|null)=>id?ITEMS[id]?.equipment?.stats ?? {}:{};
const SKILL_LEVELS=['Mining','Smithing','Fishing','Cooking','Attack','Defence','Hitpoints'] as const;
const STAT_GROUPS=[['Identity',['Handedness','Power Type','Effect']],['Offense',['Power','Accuracy','Interval','Attack Interval','Crit Rate','Crit Damage','Penetration']],['Protection',['Melee Evasion','Ranged Evasion','Magic Evasion','Slash Resistance','Stab Resistance','Crush Resistance','Pierce Resistance','Puncture Resistance','Air Resistance','Fire Resistance','Water Resistance','Earth Resistance','Max HP']]] as const;

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
   if(!meta||meta.context!==(mode==='Combat'?'combat':'profession')||(item.devOnly&&!import.meta.env.DEV))return[];
   if(mode==='Profession'&&meta.profession!==profession)return[];
   if(lowerSlot(meta.slot)!==lowerSlot(selectedSlot))return[];
   const count=meta.slot==='Tackle'?(g.skills.Fishing.level>=meta.requiredLevel?1:0):(g.bank[id]??0);
   if(!showUnowned&&count<1&&current!==id)return[];
   if(family!=='All'&&families.length&&meta.family!==family)return[];
   if(selectedSlot==='armor'&&family==='Heavy'&&item.category!=='Equipment')return[];
   if(!item.name.toLowerCase().includes(query.trim().toLowerCase()))return[];
   const usable=mode==='Combat'?canEquip(g,id,selectedSlot,false):g.skills[meta.skill].level>=meta.requiredLevel;
   return[{id,item,meta,count,usable}];
 }).sort((a,b)=>Number(b.usable)-Number(a.usable)||Number(b.id===current)-Number(a.id===current)||a.item.name.localeCompare(b.item.name)),[mode,profession,selectedSlot,showUnowned,family,query,g.bank,g.equipped,g.skills,current]);
 const inspector=candidates.find(x=>x.id===selected)||candidates.find(x=>x.id===current)||candidates[0]||null;
 const weapon=g.equipped.weapon&&g.equipped.weapon in MELEE_WEAPONS?MELEE_WEAPONS[g.equipped.weapon as keyof typeof MELEE_WEAPONS]:null;
 const resistances=getPlayerResistances(g);
 const equipCandidate=(id:ItemId,meta:EquipmentMeta)=>{
   const target=slotArg(meta.slot as SlotId);
   if(target)equip(id,target);else equipProfession?.(id);
   setPulseSlot(selectedSlot);setSelected(id);window.clearTimeout(pulseTimer.current);
   pulseTimer.current=window.setTimeout(()=>setPulseSlot(null),560);
 };
 const selectSlot=(next:SlotId)=>{setSlot(next);setSelected(null);setFamily('All');setQuery('');};

 return <div className={`screen equipment-screen equipment-v2 ${mode==='Profession'?'is-profession-kit':''}`} data-feedback-screen="Equipment">
  <ScreenHeading eyebrow="ARMORY / LOADOUT" title="Equipment" sub="Prepare the adventurer, compare each piece, and shape a combat build." accent="equipment"><Badge tone="level-badge">{mode==='Combat'?'COMBAT GEAR':`${profession.toUpperCase()} KIT`}</Badge></ScreenHeading>
  <div className="equipment-v2-masthead">
   <div className="equipment-v2-mode control-segments" role="tablist" aria-label="Equipment context">
    <button role="tab" aria-selected={mode==='Combat'} className={mode==='Combat'?'selected':''} onClick={()=>{setMode('Combat');selectSlot('weapon');}}><Icon name="shield" size={20}/><span><b>Combat loadout</b><small>Nine battle positions</small></span></button>
    <button role="tab" aria-selected={mode==='Profession'} className={mode==='Profession'?'selected':''} onClick={()=>{setMode('Profession');selectSlot(PROFESSION_SLOTS[profession][0]!);}}><Icon name="gear" size={20}/><span><b>Profession kit</b><small>Tools and field equipment</small></span></button>
   </div>
   {mode==='Profession'&&<div className="profession-switch" role="tablist" aria-label="Profession kit">{PROFESSIONS.map(name=><button key={name} role="tab" aria-selected={name===profession} className={name===profession?'selected':''} onClick={()=>{setProfession(name);selectSlot(PROFESSION_SLOTS[name][0]!);}}>{name}</button>)}</div>}
  </div>

  <div className="equipment-v2-zones">
   <section className="equipment-v2-loadout g2-surface g2-equipment" aria-labelledby="loadout-title">
    <header className="eq-zone-heading"><span className="g2-kicker">01 / {mode==='Combat'?'COMBAT FORMATION':`${profession.toUpperCase()} FIELD KIT`}</span><h2 id="loadout-title">{mode==='Combat'?'Adventurer loadout':`${profession} rig`}</h2><small>{mode==='Combat'?'Select a position to browse matching armory pieces.':'Choose the working tool for this profession.'}</small></header>
    <div className={`eq-loadout-stage ${mode==='Profession'?'profession-stage':''}`}>
     <div className={`eq-slot-board ${mode==='Profession'?'profession-board':''}`}>
      {slots.map(slotName=><EquipmentSlotCard key={slotName} slot={slotName} id={equippedSlot(g,slotName)} selected={slotName===selectedSlot} active={pulseSlot===slotName} onClick={()=>selectSlot(slotName)}/>)}</div>
    </div>
    {mode==='Combat'?<div className="eq-derived-stats" aria-label="Combat loadout summary">
      <GameValue label="Attack" value={g.skills.Attack.level} accent="equipment"/><GameValue label="Defence" value={g.skills.Defence.level} accent="equipment"/><GameValue label="Health" value={`${Math.ceil(g.combat.playerHp)} / ${getPlayerMaxHitpoints(g)}`} accent="combat"/><GameValue label="Attack rhythm" value={`${(getPlayerAttackInterval(g)/1000).toFixed(2)}s`} accent="equipment"/><GameValue label="Weapon style" value={weapon?.style??'None'} accent="combat"/><GameValue label="Core resist" value={`${resistances.Slash} / ${resistances.Pierce} / ${resistances.Fire}`} detail="Slash · Pierce · Fire" accent="equipment"/>
     </div>:<div className="eq-kit-preview"><span className="g2-kicker">KIT PROFILE</span><b>{profession==='Mining'?'Excavation':profession==='Smithing'?'Forgework':profession==='Fishing'?'Angling':'Kitchen prep'}</b><small>{profession==='Mining'?'Pick power and strike speed shape each layer.':profession==='Smithing'?'Hammer power controls progress at the anvil.':profession==='Fishing'?'Rod power, tackle and bait define the setup.':'Knife power reduces preparation time.'}</small></div>}
    <footer className="eq-loadout-footer"><span>{current?`Currently wearing ${ITEMS[current]?.name??'equipped item'}.`:`${SLOT_LABEL[selectedSlot]} is empty.`}</span>{current&&slotArg(selectedSlot)&&<Button tone="quiet" onClick={()=>unequip(slotArg(selectedSlot)!)}>Return to Bank</Button>}</footer>
   </section>

   <section className="equipment-v2-armory g2-surface g2-equipment" aria-labelledby="armory-title">
    <header className="eq-zone-heading eq-armory-heading"><span className="g2-kicker">02 / COMPATIBLE GEAR</span><h2 id="armory-title">Armory</h2><div className="eq-armory-count"><b>{candidates.length}</b><small>{SLOT_LABEL[selectedSlot].toLowerCase()} items</small></div></header>
    <div className="eq-armory-toolbar"><label className="eq-search"><Icon name="search" size={16}/><span className="sr-only">Search compatible equipment</span><input value={query} onChange={event=>setQuery(event.target.value)} placeholder={`Search ${SLOT_LABEL[selectedSlot].toLowerCase()} gear`}/></label><button className="eq-owned-toggle" type="button" aria-pressed={showUnowned} onClick={()=>setShowUnowned(value=>!value)}><span className="eq-toggle-track"><i/></span>Include unowned</button></div>
    {families.length>0&&<nav className="eq-family-rail" aria-label={`${SLOT_LABEL[selectedSlot]} type`}>{families.map(name=><button type="button" key={name} aria-pressed={family===name} className={family===name?'selected':''} onClick={()=>setFamily(name)}><Icon name={name==='Battle Axe'?'axe':name==='Mace'?'mace':name==='Sword'?'sword':name==='Heavy'?'armor':'gear'} size={17}/><span>{name}</span>{family===name&&<i/>}</button>)}</nav>}
    <div className="eq-armory-context"><span><Icon name={SLOT_ICON[selectedSlot]} size={16}/>{SLOT_LABEL[selectedSlot]}</span><small>{mode==='Combat'?'Combat slot · name / owned':'Profession kit · name / owned'}</small></div>
    <div className="eq-item-grid g2-scroll" role="listbox" aria-label={`${SLOT_LABEL[selectedSlot]} armory`}>
     {candidates.map(({id,item,meta,count,usable})=><button key={id} type="button" role="option" aria-selected={inspector?.id===id} className={`eq-item-tile ${inspector?.id===id?'selected':''} ${current===id?'worn':''} ${count<1?'unowned':''} ${!usable?'locked':''}`} onClick={()=>setSelected(id)}>
       <ItemTip id={id} context={{owned:count,equipped:current===id,skillLevels:Object.fromEntries(SKILL_LEVELS.map(skill=>[skill,g.skills[skill].level]))}}><GameItemFrame inspect={false} id={id} state={inspector?.id===id?'selected':current===id?'equipped':'normal'} count={`×${fmt(count)}`} tier={meta.tier}/></ItemTip>
       <span className="eq-tile-copy"><b>{item.name}</b><small>{meta.family??meta.profession??meta.slot} · {meta.handedness??`Tier ${meta.tier}`}</small><span>{Object.entries(meta.stats).filter(([key])=>['Power','Accuracy','Melee Evasion','Slash Resistance','Fire Resistance','Earth Resistance','Max HP','Crit Rate'].includes(key)).slice(0,2).map(([key,value])=><i key={key}>{key} <strong>{value}</strong></i>)}</span></span>
       <i className="eq-tile-marker">{current===id?'EQUIPPED':count<1?'UNOWNED':!usable?`LOCKED · ${meta.skill} ${meta.requiredLevel}`:`T${meta.tier}`}</i>
      </button>)}
     {candidates.length===0&&<div className="eq-armory-empty"><Icon name={SLOT_ICON[selectedSlot]} size={30}/><b>No compatible {SLOT_LABEL[selectedSlot].toLowerCase()} found</b><span>{query?`Nothing matches “${query}”.`:'Select Include unowned to inspect unavailable gear.'}</span></div>}
    </div>
   </section>

   <EquipmentInspector game={g} slot={selectedSlot} current={current} candidate={inspector} onEquip={equipCandidate}/>
  </div>
 </div>;
}

function EquipmentSlotCard({slot,id,selected,active,onClick}:{slot:SlotId;id:ItemId|null;selected:boolean;active:boolean;onClick:()=>void}) {
 const itemName=id?ITEMS[id]?.name:'Empty';
 const description=id?<ItemTip id={id} context={{equipped:true}}><span className="eq-slot-tooltip-copy">{Object.entries(metaStats(id)).slice(0,3).map(([key,value])=>`${key} ${value}`).join(' · ')||'Equipped item'}</span></ItemTip>:<Tip content={`${SLOT_LABEL[slot]} · ${['ring','necklace','cape'].includes(slot)?'Combat accessory slot':'Combat equipment slot'}`}><span className="eq-slot-tooltip-copy">{slot==='ring'?'Accessory':slot==='necklace'?'Adornment':slot==='cape'?'Mantle':'Empty'}</span></Tip>;
 return <button type="button" className={`eq-slot eq-slot-${slot.toLowerCase()} ${selected?'selected':''} ${id?'filled':'empty'} ${active?'equip-pulse':''}`} aria-pressed={selected} aria-label={`${SLOT_LABEL[slot]}: ${itemName}`} onClick={onClick}>
  <span className="eq-slot-icon"><Icon name={SLOT_ICON[slot]} size={22}/></span><span className="eq-slot-label">{SLOT_LABEL[slot]}</span>
  {id?<><GameItemFrame id={id} size="compact" state={selected?'selected':'equipped'}/><span className="eq-slot-name">{itemName}</span>{description}<i className="eq-slot-marker">WORN</i></>:<><span className="eq-empty-sigil"><Icon name={SLOT_ICON[slot]} size={26}/></span><span className="eq-slot-name">Empty</span>{description}</>}
 </button>;
}

function EquipmentInspector({game:g,slot,current,candidate,onEquip}:{game:SaveState;slot:SlotId;current:ItemId|null;candidate:Candidate|null;onEquip:(id:ItemId,meta:EquipmentMeta)=>void}) {
 const before=metaStats(current),after=candidate?.meta.stats??{};
 const keys=new Set([...Object.keys(before),...Object.keys(after)]);
 const groups=STAT_GROUPS.map(([label,ordered])=>({label,rows:ordered.filter(key=>keys.has(key))})).filter(group=>group.rows.length);
 const extra=[...keys].filter(key=>!STAT_GROUPS.some(([,ordered])=>(ordered as readonly string[]).includes(key)));
 const meetsLevel=candidate?g.skills[candidate.meta.skill].level>=candidate.meta.requiredLevel:false;
 const canUse=Boolean(candidate&&candidate.count>0&&meetsLevel&&candidate.usable&&candidate.id!==current);
 return <aside className="equipment-v2-inspector g2-surface g2-equipment" aria-labelledby="item-inspector-title">
  <header className="eq-zone-heading"><span className="g2-kicker">03 / COMPARE & EQUIP</span><h2 id="item-inspector-title">Item comparison</h2><small>{SLOT_LABEL[slot]} · current against selected</small></header>
  {candidate?<><div className="eq-inspect-hero"><GameItemFrame id={candidate.id} size="hero" state={candidate.id===current?'equipped':'selected'} tier={candidate.meta.tier}/><div className="eq-inspect-name"><span className="g2-kicker">{candidate.meta.family??candidate.meta.profession??candidate.meta.slot}</span><h3>{candidate.item.name}</h3><small>{candidate.meta.handedness??`Tier ${candidate.meta.tier}`} · {candidate.item.rarity??'Common'}</small></div><p>{candidate.item.desc}</p><div className="eq-requirements"><span><Icon name="spark" size={14}/>Requires {candidate.meta.skill} <b>{candidate.meta.requiredLevel}</b></span><span><Icon name="bank" size={14}/>Owned <b>{fmt(candidate.count)}</b></span></div></div>
   <div className="eq-compare-caption"><span>LOADOUT COMPARISON</span><small>Current <b>{current?ITEMS[current]?.name:'Empty slot'}</b></small><small>Selected <b>{candidate.item.name}</b></small></div>
   <div className="eq-stat-groups">{groups.map(group=><section key={group.label} className="eq-stat-group"><h4>{group.label}</h4>{group.rows.map(key=>{const old=before[key],next=after[key],numeric=typeof old==='number'&&typeof next==='number',delta=numeric?next-old:0;return <div className="eq-stat-delta" key={key}><span>{key}</span><b>{old??'—'}</b><i aria-hidden="true">→</i><b>{next??'—'}</b><em className={numeric?(delta>0?'up':delta<0?'down':'even'):'even'}>{numeric?`${delta>0?'+':''}${delta}`:'—'}</em></div>;})}</section>)}{extra.map(key=><section key={key} className="eq-stat-group"><h4>Other details</h4><div className="eq-stat-delta"><span>{key}</span><b>{before[key]??'—'}</b><i aria-hidden="true">→</i><b>{after[key]??'—'}</b><em className="even">Compare</em></div></section>)}</div>
   {candidate.meta.stats.Special&&<div className="eq-special-note"><Icon name="spark" size={15}/><span><small>SPECIAL</small><b>{candidate.meta.stats.Special}</b></span></div>}
   <footer className="eq-inspector-actions"><GameAction action="primary" icon="shield" disabled={!canUse} onClick={()=>onEquip(candidate.id,candidate.meta)}>{candidate.id===current?'Already equipped':!meetsLevel?`Requires ${candidate.meta.skill} ${candidate.meta.requiredLevel}`:!candidate.usable?'Requirement not met':candidate.count<1?'Not owned':'Equip to loadout'}</GameAction><small>{current?'Replacing gear returns it to your Bank.':'Choose owned gear that meets its requirement.'}</small></footer>
  </>:<div className="eq-inspector-empty"><Icon name={SLOT_ICON[slot]} size={36}/><b>No {SLOT_LABEL[slot].toLowerCase()} selected</b><small>Choose a compatible armory item to compare it with the loadout.</small></div>}
 </aside>;
}
