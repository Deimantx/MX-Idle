import { useMemo, useState } from 'react';
import { Badge, Button, Icon, Modal } from '../../../ui/primitives';
import { ScreenHeading } from '../../../ui/game/ScreenPrimitives';
import { ActionProgress } from '../../../ui/game/ActionProgress';
import { COOKING_KNIVES, COOKING_METHOD_UNLOCK, COOKING_RECIPES, PHASE1_PANTRY } from '../../../game/content/cooking/cookingContent';
import { canStartCooking, cookingPrepTime, cookingMethodTime, resolveRecipeInputs, resolveCookingInput, type ItemId, type SaveState } from '../../../game/game';
import { GameEmpty, GameItemFrame, GameState, GameValue } from '../../../ui/game-v2/GameKit';
import { ITEMS } from '../../../game/game';

const METHODS=['All',...Object.keys(COOKING_METHOD_UNLOCK)];
const METHOD_ICONS:Record<string,string>={All:'food',Grill:'knife',Pot:'furnace',Oven:'furnace',Smokehouse:'spark','Banquet Station':'trophy','Prep Table':'knife'};
const pretty=(value:string)=>value.replace(/([A-Z])/g,' $1').replace(/[_-]/g,' ').replace(/^./,letter=>letter.toUpperCase());

export function CookingScreen({game:g,start,stop,choose,buyPantry,chooseKnife,setSpecialization}:{game:SaveState;start:()=>void;stop:()=>void;choose:(id:string)=>void;buyPantry:(id:ItemId)=>void;chooseKnife:(id:ItemId)=>void;setSpecialization:(value:string|null)=>void}) {
 const [method,setMethod]=useState('All'),[query,setQuery]=useState(''),[showSupplies,setShowSupplies]=useState(false);
 const c=g.cooking,recipe=COOKING_RECIPES.find(entry=>entry.id===c.recipe)??COOKING_RECIPES[0]!,active=g.activity==='cooking';
 const resolved=resolveRecipeInputs(g,recipe.id);
 const recipes=useMemo(()=>COOKING_RECIPES.filter(entry=>(method==='All'||entry.method===method)&&entry.name.toLowerCase().includes(query.toLowerCase())),[method,query]);
 const ingredients=useMemo(()=>{
   if(resolved)return resolved.map((entry,index)=>({key:`${entry.item}:${index}`,item:entry.item,amount:entry.amount,tag:entry.tag,owned:g.bank[entry.item]??0,available:true}));
   return recipe.inputs.map((requirement,index)=>{
     const options=requirement.type==='single'?[{tag:requirement.tag,amount:requirement.amount}]:requirement.options;
     const found=options.map(option=>({option,item:resolveCookingInput(g,option.tag)})).find(entry=>entry.item);
     const option=found?.option??options[0]!,item=(found?.item??recipe.output) as ItemId;
     return {key:`${option.tag}:${index}`,item,amount:option.amount,tag:option.tag,owned:found?.item?(g.bank[item]??0):0,available:false};
   });
 },[resolved,recipe,g.bank]);
 const completed=COOKING_RECIPES.reduce((sum,entry)=>sum+Math.floor((c.sessionOutputs[entry.output as ItemId]??0)/Math.max(1,entry.quantity)),0);
 const outputCount=c.sessionOutputs[recipe.output as ItemId]??0;
 const knife=COOKING_KNIVES.find(entry=>entry.id===c.knife)??COOKING_KNIVES[0]!;
 const prepTime=cookingPrepTime(g),cookTime=cookingMethodTime(g);
 const duration=c.phase==='prep'?prepTime:cookTime;

 return <div className="screen profession-screen cooking-screen cooking-v2" data-feedback-screen="Cooking">
    <ScreenHeading eyebrow="PROFESSION / HEARTH & FIELD" title="Cooking" sub="Choose a method, prepare the ingredients, and serve a useful batch." accent="cooking" skill="Cooking" level={g.skills.Cooking.level} xp={g.skills.Cooking.xp} maxXp={15+(g.skills.Cooking.level-1)*2}/>
  <div className="cooking-v2-tools"><nav className="cooking-method-rail" aria-label="Cooking method">{METHODS.map(value=><button key={value} type="button" aria-pressed={method===value} className={method===value?'selected':''} onClick={()=>setMethod(value)}><Icon name={METHOD_ICONS[value]??'food'} size={16}/><span>{value==='All'?'Recipe Book':value}</span>{value!=='All'&&<small>{g.skills.Cooking.level>=(COOKING_METHOD_UNLOCK as Record<string,number>)[value]?'OPEN':`LV ${(COOKING_METHOD_UNLOCK as Record<string,number>)[value]}`}</small>}</button>)}</nav><Button tone="quiet" aria-expanded={showSupplies} onClick={()=>setShowSupplies(true)}><Icon name="bank" size={16}/> Pantry &amp; kitchen</Button></div>
  <div className="cooking-v2-layout">
   <aside className="recipe-book-v2 g2-surface g2-cooking">
    <header className="recipe-book-head"><div><span className="g2-kicker">01 / RECIPE BOOK</span><h2>{method==='All'?'Kitchen ledger':method}</h2></div><Badge>{recipes.length} RECIPES</Badge></header>
    <label className="cooking-search-v2"><Icon name="search" size={16}/><span className="sr-only">Search kitchen recipes</span><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Find a dish or ingredient"/></label>
    <div className="cooking-recipe-list g2-scroll">
     {recipes.map(entry=>{
       const isLocked=entry.unlockLevel>g.skills.Cooking.level||g.skills.Cooking.level<(COOKING_METHOD_UNLOCK as Record<string,number>)[entry.method];
       return <button key={entry.id} className={`cooking-recipe-tile ${entry.id===recipe.id?'selected':''} ${isLocked?'locked':''}`} disabled={active||isLocked} onClick={()=>choose(entry.id)}>
        <GameItemFrame id={entry.output} size="regular" state={entry.id===recipe.id?'selected':entry.foodValue?'reward':'normal'} tier={entry.tier}/>
        <span className="cooking-recipe-copy"><b>{entry.name}</b><small>{entry.method} · {entry.role}</small><i>{entry.quantity} {entry.foodValue?'servings':'utility'} · {entry.xp} XP</i></span>
        <span className="recipe-level-mark">{isLocked?`LV ${Math.max(entry.unlockLevel,(COOKING_METHOD_UNLOCK as Record<string,number>)[entry.method])}`:`T${entry.tier}`}</span>
        <div className="recipe-scan-stats"><span>{entry.foodValue?`Heal ${entry.foodValue*10}`:'Utility'}</span><span>{entry.foodValue?`Satiety 20`:`${entry.prepSeconds+entry.cookSeconds}s`}</span></div>
       </button>;
     })}
     {recipes.length===0&&<GameEmpty icon="food" title="No matching recipes" detail="Adjust the method or search terms to browse more of the recipe book."/>}
    </div>
    <footer className="recipe-book-foot"><span><Icon name="spark" size={13}/> {completed} batches recorded</span><small>Selection pauses while cooking</small></footer>
   </aside>

   <section className={`kitchen-v2-stage g2-surface g2-cooking ${active?'is-active':''}`} aria-label={`${recipe.method} kitchen station`}>
    <header className="kitchen-stage-head"><div><span className="g2-kicker">02 / FIELD KITCHEN</span><h2>{recipe.method} station</h2><small>Batch {recipe.name} · {recipe.quantity} output</small></div>{!active&&!canStartCooking(g)&&<GameState tone="warning" icon={METHOD_ICONS[recipe.method]}>NEEDS INGREDIENTS</GameState>}</header>
    <div data-feedback-anchor="Cooking" className={`kitchen-scene-v2 method-${recipe.method.toLowerCase().replace(/ /g,'-')}`} data-method={recipe.method}>
     <div className="kitchen-wall-mark"><span/><i/><b>{recipe.method.toUpperCase()}</b></div>
     <div className="hearth-arch"><span className="hearth-back"><i/><i/><i/></span><div className="station-vessel"><span className="vessel-rim"/><i className="vessel-handle left"/><i className="vessel-handle right"/><span className="vessel-food"><GameItemFrame id={recipe.output} size="compact" state={outputCount?'reward':'normal'}/></span></div><span className="hearth-fire"><i/><i/><i/></span><span className="hearth-stone"/></div>
     <div className="kitchen-shelf shelf-left"><i/><i/><i/></div><div className="kitchen-shelf shelf-right"><i/><i/></div>
     <div className="kitchen-scene-caption"><span>{active?c.phase==='prep'?'KNIFE WORK / PREPARING':'HEARTH / COOKING':'RECIPE STATION'}</span><b>{recipe.name}</b></div>
     {active&&<div className="steam-trails" aria-hidden="true"><i/><i/><i/></div>}
    </div>
    <div className="cooking-progress-v2"><div><span>{active?c.phase==='prep'?'PREP TIME':'METHOD TIME':'NEXT BATCH'}</span><b>{active?`${(c.timer/1000).toFixed(1)}s remaining`:recipe.method}</b></div><ActionProgress active={active} remainingMs={c.timer||duration} durationMs={duration} phaseKey={`cooking:${c.actionSerial}`} label="Cooking preparation and cook progress" tone="heat"/></div>
    <div className="ingredient-placement"><header><span>03 / INGREDIENT BOARD</span><small>Resolved from stored supplies · lowest matching value first</small></header><div className="ingredient-slots-v2">
     {ingredients.map((entry,index)=><div className={`ingredient-slot-v2 ${entry.available?'available':'missing'}`} key={entry.key}><span className="ingredient-index">0{index+1}</span>{entry.available?<GameItemFrame id={entry.item} size="compact" count={`×${entry.amount}`}/>:<span className="ingredient-unresolved"><Icon name="food" size={20}/></span>}<span><b>{entry.available?ITEMS[entry.item]?.name??pretty(entry.tag):pretty(entry.tag)}</b><small>{entry.available?`${entry.amount} allocated · ${entry.owned} owned`:`Need ${entry.amount} · no matching item in pantry`}</small></span><i>{entry.available?'PLACED':'MISSING'}</i></div>)}
    </div></div>
    <div className="serving-platter" key={`${recipe.output}:${outputCount}`}><GameItemFrame id={recipe.output} size="regular" state={outputCount?'reward':'normal'} count={outputCount?`×${outputCount}`:undefined}/><span><small>FINISHED SERVING</small><b>{recipe.outputName}</b><i>{recipe.foodValue?`Heal ${recipe.foodValue*10} · Satiety 20`:'Utility output · not combat food'}</i></span><strong>{recipe.foodValue?`+${recipe.foodValue*10} HP`:'UTILITY'}</strong></div>
    <footer className="kitchen-action-foot"><div className="kitchen-tool-v2"><GameItemFrame id={knife.id} size="compact" state="equipped"/><span><small>PREP TOOL</small><b>{knife.name}</b><i>Power {knife.power} · Prep +{Math.round(knife.prepSpeed*100)}%</i></span><label>Change<select value={c.knife} disabled={active} onChange={event=>chooseKnife(event.target.value as ItemId)}>{COOKING_KNIVES.filter(entry=>entry.id===c.knife||(g.bank[entry.id as ItemId]??0)>0&&g.skills.Cooking.level>=entry.unlockLevel).map(entry=><option key={entry.id} value={entry.id}>{entry.name} · {entry.power}</option>)}</select></label></div><Button tone="copper" className="cook-action-v2" disabled={!active&&!canStartCooking(g)} onClick={active?stop:start}><Icon name={active?'combat':'knife'} size={18}/>{active?'Stop cooking':'Prepare batch'}</Button></footer>
    {c.message&&<p className="cooking-message-v2" role="status">{c.message}</p>}
   </section>

   <aside className="cooking-inspector-v2 g2-surface g2-cooking">
    <header className="cooking-inspector-head"><span className="g2-kicker">04 / DISH RECORD</span><h2>Serving details</h2></header>
    <div className="dish-hero-v2"><GameItemFrame id={recipe.output} size="hero" state={recipe.foodValue?'reward':'selected'} tier={recipe.tier}/><span className="g2-kicker">{recipe.method} · TIER {recipe.tier}</span><h3>{recipe.outputName}</h3><small>{recipe.role}</small></div>
    <div className="dish-values"><GameValue label="Batch size" value={`${recipe.quantity} ${recipe.foodValue?'servings':'items'}`} accent="cooking"/><GameValue label="Health restored" value={recipe.foodValue?`${recipe.foodValue*10} HP`:'—'} accent="positive"/><GameValue label="Satiety gained" value={recipe.foodValue?'20':'—'} accent="cooking"/><GameValue label="Cooking XP" value={recipe.xp} accent="cooking"/></div>
    <div className="method-record"><h3>Station timing</h3><div><span>Preparation</span><b>{(prepTime/1000).toFixed(1)}s</b></div><div><span>{recipe.method} cycle</span><b>{(cookTime/1000).toFixed(1)}s</b></div><div><span>Method unlock</span><b>Cooking {COOKING_METHOD_UNLOCK[recipe.method]}</b></div></div>
    <div className="specialization-v2"><label>COOKING SPECIALIZATION<select value={c.specialization??''} disabled={g.skills.Cooking.level<35||active} onChange={event=>setSpecialization(event.target.value||null)}><option value="">None</option>{['Provisioner','Hearth Chef','Gourmet Chef'].map(value=><option key={value}>{value}</option>)}</select></label>{g.skills.Cooking.level<35&&<small>Unlocks at Cooking 35</small>}</div>
    <footer className="cook-readiness"><i className={canStartCooking(g)||active?'ready':''}/><span>{active?'Batch in progress':canStartCooking(g)?'Ingredients are ready':'Resolve missing ingredients in the pantry'}</span></footer>
   </aside>
  </div>

  {showSupplies&&<Modal title="Pantry & kitchen access" eyebrow="FIELD PROVISIONS" onClose={()=>setShowSupplies(false)} className="pantry-modal-v2"><p>Buy phase one provisions for ingredients that are not yet available through other gathering skills. Each supply costs one Gold.</p><div className="pantry-v2-grid">{Object.values(PHASE1_PANTRY).filter(entry=>entry.name!=='Field Game Meat').map(entry=><button key={entry.id} onClick={()=>buyPantry(entry.id as ItemId)}><GameItemFrame id={entry.id} size="compact" count={`×${g.bank[entry.id as ItemId]??0}`}/><span><b>{entry.name}</b><small>1 Gold per unit</small></span><Icon name="gold" size={15}/></button>)}</div><div className="pantry-session-v2"><GameValue label="Recipes recorded" value={completed} accent="cooking"/><GameValue label="Servings produced" value={Object.values(c.sessionOutputs).reduce<number>((sum,value)=>sum+(value??0),0)} accent="cooking"/><GameValue label="Session XP" value={Math.round(c.sessionXp)} accent="cooking"/></div><div className="cooking-unlock-v2"><b>Kitchen stations</b>{Object.entries(COOKING_METHOD_UNLOCK).map(([name,level])=><span className={g.skills.Cooking.level>=level?'open':'locked'} key={name}>{name}<i>{g.skills.Cooking.level>=level?'OPEN':`Cooking ${level}`}</i></span>)}</div></Modal>}
 </div>;
}
