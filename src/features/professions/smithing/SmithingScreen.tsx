import { useMemo, useState } from 'react';
import { Badge, Button, Icon } from '../../../ui/primitives';
import { ScreenHeading } from '../../../ui/game/ScreenPrimitives';
import { fmt, formatActionTime, formatDuration } from '../../../ui/game/formatters';
import { GameItemFrame, GameProgress, GameState, GameValue } from '../../../ui/game-v2/GameKit';
import { FORGING_RECIPES, SMELTING_RECIPES, FORGE_HAMMERS, getForgeWorkRequired, smithingActionTime, estimateForgeCompletion, xpForLevel, type Activity, type ForgingRecipeId, type ItemId, type SaveState } from '../../../game/game';
import { ActionProgress } from '../../../ui/game/ActionProgress';

const CATEGORIES=[{id:'weapons',label:'Weapons',icon:'sword',caption:'Blades and impact'},{id:'armor',label:'Armor',icon:'armor',caption:'Heavy protection'},{id:'offhand',label:'Off-hand',icon:'shield',caption:'Guard and utility'},{id:'tools',label:'Tools',icon:'pick',caption:'Profession gear'}] as const;
const FAMILY_ICONS:Record<string,string>={All:'spark',Sword:'sword','Battle Axe':'axe',Mace:'mace',Shield:'shield',Head:'helm',Body:'armor',Hands:'gloves',Feet:'greaves',Pickaxe:'pick','Smithing Hammer':'hammer',Metals:'ingot',Alloys:'spark'};
const itemLabel=(id:string)=>id.split('.').slice(-1)[0]?.replace(/_/g,' ')??id;

export function SmithingScreen({game:g,mode,setMode,start,stop,choose,chooseSmelt,setCategory,equipHammer,speedMultiplier=1}:{game:SaveState;mode:'smelting'|'forging';setMode:(m:'smelting'|'forging')=>void;start:(a:Exclude<Activity,null>)=>void;stop:()=>void;choose:(r:ForgingRecipeId)=>void;chooseSmelt:(id:string)=>void;setCategory:(c:SaveState['smithing']['category'])=>void;equipHammer?:(item:ItemId)=>void;speedMultiplier?:number}) {
 const [family,setFamily]=useState('All');
 const [query,setQuery]=useState('');
 const [smeltFamily,setSmeltFamily]=useState('All');
 const smeltActive=g.activity==='smelting',forgeActive=g.activity==='forging';
 const recipe=FORGING_RECIPES[g.smithing.recipe];
 const smeltRecipe=SMELTING_RECIPES[g.smithing.smeltRecipe]??Object.values(SMELTING_RECIPES)[0]!;
 const hammer=FORGE_HAMMERS[(g.equipped.smithingHammer??'item.smithing.worn_smithing_hammer') as keyof typeof FORGE_HAMMERS];
 const smeltRecipes=useMemo(()=>Object.values(SMELTING_RECIPES).filter(entry=>(smeltFamily==='All'||(smeltFamily==='Metals'?entry.category==='smelting':entry.category==='alloy'))&&entry.name.toLowerCase().includes(query.toLowerCase())),[smeltFamily,query]);
 const families=g.smithing.category==='weapons'?['All','Sword','Battle Axe','Mace']:g.smithing.category==='armor'?['All','Head','Body','Hands','Feet']:g.smithing.category==='tools'?['All','Pickaxe','Smithing Hammer']:['All','Shield'];
 const forgeRecipes=useMemo(()=>Object.values(FORGING_RECIPES).filter(entry=>entry.category===g.smithing.category&&(family==='All'||entry.family===family)&&entry.name.toLowerCase().includes(query.toLowerCase())),[family,query,g.smithing.category]);
 const missing=(id:ForgingRecipeId)=>FORGING_RECIPES[id].inputs.some(input=>(g.bank[input.item]??0)+(input.item===g.equipped.miningTool||input.item===g.equipped.smithingHammer?1:0)<input.amount);
 const active=mode==='smelting'?smeltActive:forgeActive;
 const currentForge=mode==='forging'&&recipe;
 const currentInputs=mode==='smelting'?smeltRecipe.inputs.map(input=>({item:input.item,amount:input.amount})):currentForge?currentForge.inputs:[];
 const unlocked=mode==='smelting'?g.skills.Smithing.level>=smeltRecipe.unlockLevel:g.skills.Smithing.level>=recipe.unlockLevel;
 const hasInputs=mode==='smelting'?smeltRecipe.inputs.every(input=>(g.bank[input.item]??0)>=input.amount):!missing(g.smithing.recipe);
 const canStart=unlocked&&hasInputs&&!active;
 const outputId=mode==='smelting'?smeltRecipe.output.item:recipe.output;
 const outputAmount=mode==='smelting'?smeltRecipe.output.amount:1;
 const runTime=mode==='smelting'?(g.smithing.warm?smeltRecipe.unitTimeMs:smeltRecipe.warmupMs):g.smithing.reheat?2000:smithingActionTime(g,g.smithing.recipe);
 const stationName=mode==='smelting'?'Furnace':'Anvil';
 const activeLabel=mode==='smelting'?(g.smithing.warm?'Smelting unit':'Heating furnace'):g.smithing.reheat?'Reheating workpiece':'Hammer strike';

 const startOrStop=()=>active?stop():start(mode==='smelting'?'smelting':'forging');
 return <div className="screen smith-screen smithing-v2" data-profession="smithing" data-feedback-screen="Smithing">
  <ScreenHeading eyebrow="PROFESSION / FOUNDRY" title="Smithing" sub="Prepare material at the furnace, then shape durable gear at the anvil." accent="smithing" skill="Smithing" level={g.skills.Smithing.level} xp={g.skills.Smithing.xp} maxXp={xpForLevel(g.skills.Smithing.level)}>{active&&<Badge tone="live">{activeLabel.toUpperCase()}</Badge>}</ScreenHeading>
  <nav className="smith-station-v2" role="tablist" aria-label="Smithing station">
   <button role="tab" aria-selected={mode==='smelting'} className={`smith-station-card furnace ${mode==='smelting'?'selected':''} ${smeltActive?'active':''}`} onClick={()=>setMode('smelting')}><span className="station-art"><Icon name="furnace" size={32}/><i/></span><span><small>01 / REFINE</small><b>Furnace</b><em>Smelting · ingots and alloys</em></span><i className="station-status">{smeltActive?'RUNNING':mode==='smelting'?'SELECTED':'AVAILABLE'}</i></button>
   <button role="tab" aria-selected={mode==='forging'} className={`smith-station-card anvil ${mode==='forging'?'selected':''} ${forgeActive?'active':''}`} onClick={()=>setMode('forging')}><span className="station-art"><Icon name="anvil" size={32}/><i/></span><span><small>02 / SHAPE</small><b>Anvil</b><em>Forging · weapons and tools</em></span><i className="station-status">{forgeActive?'RUNNING':mode==='forging'?'SELECTED':'AVAILABLE'}</i></button>
  </nav>

  <div className={`smith-v2-layout ${mode==='smelting'?'is-smelting':'is-forging'}`}>
   <aside className="smith-library-v2 g2-surface g2-smithing">
    <header className="smith-library-heading"><div><span className="g2-kicker">01 / PATTERN ARCHIVE</span><h2>{mode==='smelting'?'Material patterns':'Forge catalogue'}</h2></div><Badge>{mode==='smelting'?smeltRecipes.length:forgeRecipes.length} RECIPES</Badge></header>
    {mode==='forging'?<>
     <div className="smith-primary-categories" role="tablist" aria-label="Forge category">{CATEGORIES.map(category=><button key={category.id} role="tab" aria-selected={g.smithing.category===category.id} className={g.smithing.category===category.id?'selected':''} onClick={()=>{setCategory(category.id);setFamily('All');}}><Icon name={category.icon} size={20}/><span><b>{category.label}</b><small>{category.caption}</small></span><i>{Object.values(FORGING_RECIPES).filter(entry=>entry.category===category.id).length}</i></button>)}</div>
     <nav className="smith-family-rail" aria-label="Recipe family">{families.map(value=><button key={value} className={family===value?'selected':''} aria-pressed={family===value} onClick={()=>setFamily(value)}><Icon name={FAMILY_ICONS[value]??'gear'} size={15}/><span>{value}</span>{family===value&&<i/>}</button>)}</nav>
    </>:<nav className="smith-family-rail smelt-family-rail" aria-label="Material family">{['All','Metals','Alloys'].map(value=><button key={value} className={smeltFamily===value?'selected':''} aria-pressed={smeltFamily===value} onClick={()=>setSmeltFamily(value)}><Icon name={FAMILY_ICONS[value]??'ingot'} size={16}/><span>{value}</span>{smeltFamily===value&&<i/>}</button>)}</nav>}
    <label className="smith-search-v2"><Icon name="search" size={16}/><span className="sr-only">Search forge patterns</span><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search the pattern archive"/></label>
    <div className="smith-recipe-grid g2-scroll" key={`${mode}:${g.smithing.category}`}>
     {mode==='smelting'?smeltRecipes.map(entry=>{
       const available=g.skills.Smithing.level>=entry.unlockLevel;
       const owned=entry.inputs.reduce((n,input)=>n+(g.bank[input.item]??0),0);
       return <button key={entry.id} className={`smith-recipe-card ${smeltRecipe.id===entry.id?'selected':''} ${!available?'locked':''}`} disabled={!available||smeltActive} onClick={()=>chooseSmelt(entry.id)}>
        <GameItemFrame id={entry.output.item} size="compact" state={smeltRecipe.id===entry.id?'selected':'normal'}/><span className="recipe-card-copy"><b>{entry.name}</b><small>{entry.inputs.map(input=>`${input.amount} ${itemLabel(input.item)}`).join(' + ')} → {entry.output.amount} {itemLabel(entry.output.item)}</small><i>{entry.heatRequirement} heat · {formatDuration(entry.unitTimeMs)}</i></span><span className="recipe-card-status">{!available?`LV ${entry.unlockLevel}`:owned?'AVAILABLE':'MISSING'}</span>
       </button>;
     }):forgeRecipes.map(entry=>{
       const available=g.skills.Smithing.level>=entry.unlockLevel,ready=!missing(entry.id);
       return <button key={entry.id} className={`smith-recipe-card ${g.smithing.recipe===entry.id?'selected':''} ${!available?'locked':''} ${ready?'craftable':''}`} disabled={!available||Boolean(g.smithing.reserved||forgeActive)&&g.smithing.recipe!==entry.id} onClick={()=>choose(entry.id)}>
        <GameItemFrame id={entry.output} size="compact" state={g.smithing.recipe===entry.id?'selected':'normal'}/><span className="recipe-card-copy"><b>{entry.name}</b><small>{entry.family} · Smithing {entry.unlockLevel}</small><i>{entry.inputs.map(input=>`${input.amount} ${itemLabel(input.item)}`).join(' + ')}</i></span><span className={`recipe-card-status ${ready?'ready':''}`}>{!available?`LV ${entry.unlockLevel}`:ready?'AVAILABLE':'MISSING'}</span>
       </button>;
     })}
     {(mode==='smelting'?smeltRecipes:forgeRecipes).length===0&&<div className="smith-no-recipes"><Icon name="search" size={24}/><b>No matching patterns</b><small>Change the family or search terms.</small></div>}
    </div>
    <footer className="smith-library-foot"><span><i/> Select a pattern to prepare the workpiece</span><span>{g.skills.Smithing.level} Smithing</span></footer>
   </aside>

   <section className={`smith-workbench-v2 g2-surface g2-smithing ${active?'is-active':''}`} aria-label={`${stationName} workbench`}>
    <header className="smith-bench-heading"><div><span className="g2-kicker">02 / {mode==='smelting'?'REFINING CHAMBER':'WORKING FACE'}</span><h2>{mode==='smelting'?'Furnace chamber':'Anvil workbench'}</h2><small>{mode==='smelting'?'Ore is refined in measured units.':'Shape the selected pattern with each hammer strike.'}</small></div>{(active||!canStart)&&<GameState tone={active?'active':'warning'} icon={active?'spark':stationName==='Anvil'?'anvil':'furnace'}>{active?activeLabel.toUpperCase():'MATERIALS NEEDED'}</GameState>}</header>
    {mode==='smelting'?<FurnaceStage recipe={smeltRecipe} active={smeltActive} warm={g.smithing.warm} output={g.smithing.produced}/>:<ForgeStage recipeName={recipe.name} output={recipe.output} family={recipe.family} work={g.smithing.work} required={getForgeWorkRequired(g.smithing.recipe)} heat={g.smithing.heat} reheat={g.smithing.reheat} active={forgeActive} timer={g.smithing.timer} progress={runTime} speed={speedMultiplier}/>}
    <div className="smith-material-bench"><div className="bench-caption"><span>{mode==='smelting'?'CHARGE / OUTPUT':'MATERIALS / WORKPIECE'}</span><small>{mode==='smelting'?'Per smelting unit':'Current pattern inputs'}</small></div><div className="smith-material-flow">
     {currentInputs.map((input,index)=><div className={`smith-material-slot ${(g.bank[input.item]??0)<input.amount?'missing':''}`} key={`${input.item}-${index}`}><GameItemFrame id={input.item} size="regular" count={`×${fmt(g.bank[input.item]??0)}`}/><span><b>{ITEMS_NAME(input.item)}</b><small>{fmt(g.bank[input.item]??0)} in vault / {input.amount} needed</small></span><i>{(g.bank[input.item]??0)>=input.amount?'MET':'SHORT'}</i></div>)}
     <div className="smith-material-arrow"><Icon name="anvil" size={19}/><span>TRANSFORM</span></div>
     <div className="smith-output-slot"><GameItemFrame id={outputId} size="regular" state="reward" count={`×${outputAmount}`}/><span><b>{ITEMS_NAME(outputId)}</b><small>{mode==='smelting'?`Smithing XP ${smeltRecipe.smithingXp}`:`Pattern output · ${recipe.xpPerStrike} XP / strike`}</small></span><i>OUTPUT</i></div>
    </div></div>
    <div className="smith-action-progress"><div><span>{active?activeLabel.toUpperCase():'NEXT ACTION'}</span><b>{active?formatActionTime(g.smithing.timer):mode==='smelting'?formatDuration(g.smithing.warm?smeltRecipe.unitTimeMs:smeltRecipe.warmupMs):formatActionTime(smithingActionTime(g,g.smithing.recipe))}</b></div><ActionProgress active={active} remainingMs={g.smithing.timer||runTime} durationMs={runTime} phaseKey={mode==='smelting'?g.smithing.warm?'smelt-unit':'smelt-warmup':g.smithing.reheat?'reheat':g.smithing.work} speedMultiplier={speedMultiplier} label={`${stationName} work progress`} tone={mode==='smelting'?'heat':'copper'}/></div>
    {g.smithing.message&&<div className="smith-result-note" role="status"><Icon name="spark" size={15}/>{g.smithing.message}</div>}
    <footer className="smith-bench-footer"><div className="smith-tool-readout">{mode==='smelting'?<span className="smith-station-mark"><Icon name="furnace" size={20}/></span>:<GameItemFrame id={hammer.item} size="compact" state="equipped"/>}<span><small>{mode==='smelting'?'ACTIVE STATION':'EQUIPPED HAMMER'}</small><b>{mode==='smelting'?'Refining furnace':hammer.name}</b>{mode==='forging'&&<i>{`Power ${hammer.power} · ${formatActionTime(hammer.strikeMs)} per strike`}</i>}</span>{mode==='forging'&&equipHammer&&<div className="hammer-options">{Object.values(FORGE_HAMMERS).filter(value=>value.item!==hammer.item&&(g.bank[value.item]??0)>0).map(value=><Button key={value.item} tone="quiet" onClick={()=>equipHammer(value.item)}>Equip {value.name}</Button>)}</div>}</div><Button tone="copper" className="smith-hero-action" disabled={!active&&!canStart} onClick={startOrStop}><Icon name={active?'combat':mode==='smelting'?'furnace':'hammer'} size={19}/>{active?`Stop ${mode==='smelting'?'Smelting':'Forging'}`:mode==='smelting'?'Start Smelting':'Begin Forging'}</Button></footer>
   </section>

   <aside className="smith-inspector-v2 g2-surface g2-smithing">
    <header className="smith-inspector-head"><span className="g2-kicker">03 / PATTERN STUDY</span><h2>{mode==='smelting'?'Refining record':'Workpiece record'}</h2></header>
    <div className="smith-inspect-hero"><GameItemFrame id={outputId} size="hero" tier={mode==='smelting'?Math.ceil(smeltRecipe.unlockLevel/10):Math.ceil(recipe.unlockLevel/10)}/><span className="g2-kicker">{mode==='smelting'?'OUTPUT MATERIAL':recipe.family.toUpperCase()}</span><h3>{mode==='smelting'?smeltRecipe.name:recipe.name}</h3><small>{mode==='smelting'?`Smithing ${smeltRecipe.unlockLevel} / material tier`: `${recipe.slot} · ${recipe.family} · Smithing ${recipe.unlockLevel}`}</small></div>
    <div className="smith-requirements"><h3>Pattern requirements</h3>{currentInputs.map(input=>{const count=g.bank[input.item]??0;return <div key={input.item} className={`smith-requirement ${count<input.amount?'is-missing':'is-ready'}`}><GameItemFrame id={input.item} size="compact"/><span><b>{ITEMS_NAME(input.item)}</b><small>{fmt(count)} owned / {input.amount} needed</small></span><Icon name={count>=input.amount?'spark':'ore'} size={15}/></div>;})}<div className={`smith-requirement ${unlocked?'is-ready':'is-missing'}`}><span className="requirement-level">{g.skills.Smithing.level}</span><span><b>Smithing level</b><small>{unlocked?`Meets level ${mode==='smelting'?smeltRecipe.unlockLevel:recipe.unlockLevel}`:`Requires ${mode==='smelting'?smeltRecipe.unlockLevel:recipe.unlockLevel}`}</small></span><Icon name={unlocked?'spark':'ore'} size={15}/></div></div>
    <div className="smith-inspector-stats"><h3>Work profile</h3>{mode==='smelting'?<><GameValue label="Heat requirement" value={smeltRecipe.heatRequirement} accent="smithing"/><GameValue label="Warm-up" value={formatDuration(smeltRecipe.warmupMs)} accent="smithing"/><GameValue label="Unit time" value={formatDuration(smeltRecipe.unitTimeMs)} accent="smithing"/><GameValue label="Produced this run" value={fmt(g.smithing.produced)} accent="smithing"/></>:<><GameValue label="Work required" value={getForgeWorkRequired(g.smithing.recipe)} accent="smithing"/><GameValue label="Work remaining" value={g.smithing.work||getForgeWorkRequired(g.smithing.recipe)} accent="smithing"/><GameValue label="Estimated completion" value={formatDuration(estimateForgeCompletion(g))} accent="smithing"/><GameValue label="XP per strike" value={recipe.xpPerStrike} accent="smithing"/></>}</div>
    <footer className="smith-inspector-foot"><span><i className={canStart||active?'ready':''}/>{active?'Station is processing':!unlocked?`Locked until Smithing ${mode==='smelting'?smeltRecipe.unlockLevel:recipe.unlockLevel}`:!hasInputs?'Required materials are missing':'Pattern is ready to work'}</span></footer>
   </aside>
  </div>
 </div>;
}

function ITEMS_NAME(id:ItemId){return id.split('.').slice(-1)[0]?.split('_').map(value=>value.charAt(0).toUpperCase()+value.slice(1)).join(' ')??id;}

function ForgeStage({recipeName,output,family,work,required,heat,reheat,active,timer,progress,speed}:{recipeName:string;output:ItemId;family:string;work:number;required:number;heat:number;reheat:boolean;active:boolean;timer:number;progress:number;speed:number}) {
 const remaining=work||required,completion=required?Math.max(0,(required-remaining)/required):0;
 return <div key={`${work}:${heat}:${reheat}`} data-feedback-anchor="Smithing" className={`smith-forge-scene ${active?'working':''}`}>
  <div className="forge-halo"/><div className="forge-embers"><i/><i/><i/><i/><i/></div><div className="forge-beam beam-left"/><div className="forge-beam beam-right"/>
  <div className="forge-workpiece"><span className="forge-workpiece-light"/><GameItemFrame id={output} size="hero" state={completion>=1?'reward':'selected'}/><b>{recipeName}</b><small>{family} / CURRENT PATTERN</small></div>
  <div className="forge-anvil"><Icon name="anvil" size={76}/><span/></div>
  <div className="forge-hammer"><Icon name="hammer" size={50}/></div>
  <div className="forge-scene-caption"><span>{active?reheat?'REHEATING METAL':'STRIKE IN PROGRESS':'WORKPIECE AT REST'}</span><b>{active?formatActionTime(timer):`${remaining} work remaining`}</b></div>
  <div className="forge-meter-stack"><div><span>WORKPIECE</span><b>{Math.round(completion*100)}%</b></div><GameProgress value={required-remaining} max={required} kind="work" label="Workpiece completion"/><div><span>HEAT</span><b>{heat} / 100</b></div><GameProgress value={heat} max={100} kind="heat" label="Workpiece heat"/><ActionProgress active={active} remainingMs={timer||progress} durationMs={progress} phaseKey={reheat?'reheat':work} speedMultiplier={speed} label="Forge strike" tone="heat"/></div>
 </div>;
}

function FurnaceStage({recipe,active,warm,output}:{recipe:typeof SMELTING_RECIPES[keyof typeof SMELTING_RECIPES];active:boolean;warm:boolean;output:number}) {
 const input=recipe.inputs[0]!;
 return <><div data-feedback-anchor="Smithing" className={`smith-furnace-scene ${active?'working':''}`}>
  <div className="furnace-wall"><div className="furnace-stack"><i/><i/><i/></div><div className="furnace-chamber"><span className="furnace-mouth"><i/><b/></span><div className="furnace-flame"><i/><i/><i/></div><span className="furnace-heat-waves"><i/><i/><i/></span></div><div className="furnace-base"><i/><i/><i/></div></div>
  <div className="furnace-feed"><GameItemFrame id={input.item} size="regular" count={`×${input.amount}`}/><span><small>CHARGE</small><b>{ITEMS_NAME(input.item)}</b><i>{input.amount} units per recipe</i></span></div>
  <div className="furnace-output"><GameItemFrame id={recipe.output.item} size="regular" state="reward" count={`×${recipe.output.amount}`}/><span><small>REFINED OUTPUT</small><b>{recipe.name}</b><i>{output} produced this run</i></span></div>
  <div className="furnace-state-caption"><span>{active?(warm?'SMELTING A UNIT':'BRINGING TO HEAT'):'FURNACE IDLE'}</span></div>
 </div><section className={`furnace-heat-meter ${warm?'is-warm':''} ${active&&!warm?'is-heating':''}`} aria-label="Chamber temperature">
   <div className="heat-meter-heading"><span><Icon name="furnace" size={16}/>CHAMBER TEMPERATURE</span><b>{warm?'WORKING RANGE':active?'HEATING':'COLD'}</b></div>
   <div className="heat-gauge" role="img" aria-label={warm?`Chamber ready. ${recipe.heatRequirement} heat required.`:active?`Chamber heating. ${recipe.heatRequirement} heat required.`:'Chamber cold.'}>{Array.from({length:10},(_,index)=><i key={index}/>)}</div>
 </section></>;
}
