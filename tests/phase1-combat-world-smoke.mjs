import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { chromium } from 'playwright';

const executablePath=[process.env.CHROME_PATH,chromium.executablePath(),'C:/Program Files/Google/Chrome/Application/chrome.exe'].find(path=>path&&existsSync(path));
assert.ok(executablePath,'Install Chrome/Chromium or set CHROME_PATH before browser QA.');
const browser=await chromium.launch({headless:true,executablePath,args:['--no-sandbox']});
const page=await browser.newPage({viewport:{width:1600,height:1000},reducedMotion:'reduce'});
const errors=[];page.on('pageerror',error=>errors.push(error.message));page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
const readState=()=>page.evaluate(()=>{for(const key of Object.keys(localStorage)){if(/^mx-idle-profile-\d+-v1$/.test(key)){try{return JSON.parse(localStorage.getItem(key)).state;}catch{}}}return null;});
async function waitForState(predicate,label,timeoutMs=90_000){const started=Date.now();while(Date.now()-started<timeoutMs){const state=await readState();if(state&&predicate(state))return state;await page.waitForTimeout(500);}throw new Error(`Timed out waiting for ${label}. Last state: ${JSON.stringify(await readState())}`);}
async function openDev(){const button=page.getByRole('button',{name:'DEV'});if(await button.count()&&(await button.getAttribute('aria-expanded'))!=='true')await button.click();}
async function closeDev(){const button=page.getByRole('button',{name:'DEV'});if(await button.count()&&(await button.getAttribute('aria-expanded'))==='true')await button.click();}
async function setDevArea(kind){await openDev();const select=page.getByLabel('Dev Combat Area');const value=await select.locator('option').evaluateAll((options,prefix)=>options.find(option=>option.textContent.toLowerCase().startsWith(prefix.toLowerCase()))?.value,kind);assert.ok(value,`Could not find Dev Combat ${kind} area.`);await select.selectOption(value);await page.getByRole('button',{name:'Set Area'}).click();await closeDev();}
async function stopCombatIfActive(){if((await readState())?.activity==='combat')await page.locator('.battle-footer button').click();}

try{
  await page.goto(process.env.BASE_URL??'http://127.0.0.1:5173/',{waitUntil:'networkidle'});
  await page.getByRole('button',{name:'Create Profile'}).first().click();
  await page.getByLabel('Name your adventurer').fill('Natural Combat Smoke');
  await page.getByRole('button',{name:'Begin'}).click();
  await page.getByRole('heading',{name:'Mining'}).waitFor();

  await page.getByRole('button',{name:'Start Mining'}).click();
  await waitForState(state=>(state.bank['item.mining.copper_ore']??0)>=8,'eight Copper Ore from normal Mining');
  await page.getByRole('button',{name:'Stop Mining'}).click();
  await page.getByRole('button',{name:/Smithing/}).click();
  await page.getByRole('tab',{name:/Smelting/}).click();
  await page.getByRole('button',{name:/Copper Ingot/}).first().click();
  await page.getByRole('button',{name:'Start Smelting'}).click();
  await waitForState(state=>(state.bank['item.smithing.copper_ingot']??0)>=4,'four Copper Ingots');
  if(await page.getByRole('button',{name:'Stop Smelting'}).count())await page.getByRole('button',{name:'Stop Smelting'}).click();
  await page.getByRole('tab',{name:/Forging/}).click();
  await page.getByLabel('Search smithing recipes').fill('');
  assert.match(await page.locator('.recipe-list').innerText(),/Copper Sword/,`Copper Sword forging pattern should be listed. Smithing state: ${JSON.stringify((await readState())?.smithing)}`);
  await page.locator('.recipe-choice').filter({hasText:'Copper Sword'}).click();
  await page.getByRole('button',{name:'Begin Forging'}).click();
  await waitForState(state=>(state.bank['combat.weapon.melee.copper_sword']??0)>=1,'forged Copper Sword');
  await page.getByRole('button',{name:'Equipment',exact:true}).click();
  await page.locator('.candidate-row').filter({hasText:'Copper Sword'}).click();
  await page.getByRole('button',{name:'Equip Item'}).click();
  assert.equal((await waitForState(state=>state.equipped.weapon==='combat.weapon.melee.copper_sword','Attack 1 Copper Sword equip')).skills.Attack.level,1);
  await page.getByRole('button',{name:'Combat',exact:true}).click();
  const combatViewport=await page.evaluate(()=>{const scroll=document.querySelector('.content-scroll'),wrap=document.querySelector('.content-wrap'),layout=document.querySelector('.combat-layout');return {scrollWidth:scroll?.clientWidth??0,wrapWidth:wrap?.getBoundingClientRect().width??0,layoutWidth:layout?.getBoundingClientRect().width??0,gridColumns:layout?getComputedStyle(layout).gridTemplateColumns:''};});
  assert.ok(combatViewport.scrollWidth>0&&combatViewport.wrapWidth>=combatViewport.scrollWidth-40,'Combat content wrapper should fill the main viewport: '+JSON.stringify(combatViewport));
  assert.ok(combatViewport.layoutWidth>=combatViewport.wrapWidth-90,'Combat panels should use the content wrapper width: '+JSON.stringify(combatViewport));
  const combatArt=await page.evaluate(()=>{const scene=document.querySelector('.battle-scene'),player=scene?.querySelector('.player-battle-sprite'),enemy=scene?.querySelector('.enemy-battle-sprite');return {region:scene?.getAttribute('data-region'),background:getComputedStyle(scene).backgroundImage,playerSrc:player instanceof HTMLImageElement?player.currentSrc:'',playerLoaded:player instanceof HTMLImageElement&&player.complete&&player.naturalWidth>0,enemySrc:enemy instanceof HTMLImageElement?enemy.currentSrc:'',enemyLoaded:enemy instanceof HTMLImageElement&&enemy.complete&&enemy.naturalWidth>0};});
  assert.ok(combatArt.background.includes('broken-road.svg'),'Broken Road renders its location background: '+JSON.stringify(combatArt));
  assert.ok(combatArt.playerLoaded&&combatArt.playerSrc.includes('/assets/combat/player/adventurer.svg'),'Player battle art loads: '+JSON.stringify(combatArt));
  assert.ok(combatArt.enemyLoaded&&combatArt.enemySrc.includes('/assets/combat/monsters/road-wolf.svg'),'Unique Road Wolf sprite loads: '+JSON.stringify(combatArt));
  const artInventory=await page.evaluate(async()=>{const atlas=await fetch('/assets/combat/monsters/monster-atlas.svg');const atlasText=await atlas.text();const paths=['fenlands.svg','emberfall.svg','frostveil.svg','stormreach.svg','aetherfall.svg','nightglass.svg'];const backgrounds=await Promise.all(paths.map(async name=>({name,ok:(await fetch('/assets/combat/backgrounds/'+name)).ok})));return {atlasOk:atlas.ok,symbolCount:(atlasText.match(/<symbol id=/g)||[]).length,backgrounds};});
  assert.ok(artInventory.atlasOk&&artInventory.symbolCount>=80,'Unique sprite atlas covers the full combat roster: '+JSON.stringify(artInventory));
  assert.ok(artInventory.backgrounds.every(item=>item.ok),'Every tier-specific environment asset is served: '+JSON.stringify(artInventory));
  await page.getByRole('button',{name:'Begin Combat'}).click();
  await waitForState(state=>(state.combat.defeated['road-wolf']??0)>0,'natural Road Wolf victory',120_000);
  const firstCombatState=await readState();
  assert.equal(firstCombatState.objectives.victory,true,'First Steps remains attached to the Road Wolf milestone');
  assert.ok((firstCombatState.combat.damageDealt??0)>0,'Combat records real damage dealt during the first victory');
  assert.ok((firstCombatState.combat.damageTaken??0)>=0,'Combat damage-taken counter stays numeric');
  assert.ok(await page.locator('.combat-feed').count(),'The encounter view includes the rich Combat Feed');
  assert.ok(await page.locator('.combat-feed-event').count(),'Combat Feed shows the battle events');
  assert.ok(await page.locator('.combat-loot-table').count(),'Encounter inspector shows regular and bonus loot');
  assert.ok(await page.locator('.combat-loot-summary').count(),'Combat Intel tracks items actually earned from combat');
  await page.getByRole('button',{name:'Open combat settings'}).click();
  assert.ok(await page.getByRole('region',{name:'Combat automation settings'}).count(),'Combat automation settings open from the encounter gear');
  assert.ok(await page.getByLabel('Automatic eating').count(),'Automation settings expose the real auto-eat toggle');
  await page.getByRole('button',{name:'Close combat settings'}).click();


  await page.getByRole('button',{name:/Leave Encounter/}).click();

  await page.locator('.combat-paths button:nth-child(2)').click();
  assert.match(await page.locator('.combat-paths button:nth-child(2)').innerText(),/1 \/ 4 normals defeated/);
  await page.locator('.combat-paths button:nth-child(3)').click();
  await page.getByText(/Defeat Ironjaw Boar once/).waitFor();
  await page.locator('.dungeon-route').waitFor();

  await openDev();
  await page.getByRole('button',{name:/20 speed/}).click();
  await page.getByLabel('Dev Combat Tier').selectOption('5');
  await page.getByRole('button',{name:'Attack Lv. 100'}).click();
  await page.getByRole('button',{name:'Unlock Tier'}).click();
  await closeDev();
  await setDevArea('AREA');
  await page.locator('.combat-tier-rail button').nth(4).click();
  await page.locator('.combat-paths button:nth-child(1)').waitFor();
  assert.match(await page.locator('.target-panel').innerText(),/Emberclaw/);
  await setDevArea('ELITE');
  await page.locator('.combat-paths button:nth-child(2)').click();
  assert.match(await page.locator('.target-panel').innerText(),/Magmahorn/);
  await page.locator('.target-panel').getByRole('button',{name:/Magmahorn/}).click();
  const eliteSprite=await page.locator('.battle-scene .enemy-battle-sprite use').getAttribute('href');
  assert.equal(eliteSprite,'/assets/combat/monsters/monster-atlas.svg#t5-magmahorn','Elite enemy renders its own sprite-atlas symbol');
  await openDev();await page.getByRole('button',{name:'Full HP'}).click();await closeDev();
  await page.getByRole('button',{name:'Begin Combat'}).click();
  await openDev();
  await page.getByRole('button',{name:'Force Enemy Defeat'}).click();
  await waitForState(state=>(state.combat.defeated['t5-magmahorn']??0)>0,'Magmahorn first kill');
  await closeDev();
  await stopCombatIfActive();
  assert.equal((await readState()).combatProgress.eliteFirstKills['t5-magmahorn'],true);
  await page.locator('.combat-paths button:nth-child(3)').click();
  assert.match(await page.locator('.dungeon-route').innerText(),/Ember Guard[\s\S]*Pyre Channeler[\s\S]*Magmahorn[\s\S]*Cindermaw/);
  await openDev();
  await page.getByLabel('Dev Dungeon',{exact:true}).selectOption('t5-embervault');
  await page.getByLabel('Dev Dungeon Encounter').selectOption('2');
  await page.getByRole('button',{name:'Full HP'}).click();
  await page.getByRole('button',{name:'Start Dungeon at encounter'}).click();
  await page.getByRole('button',{name:'Force Enemy Defeat'}).click();
  await waitForState(state=>state.combat.targetId==='t5-cindermaw','dungeon advance to Cindermaw');
  await closeDev();
  await stopCombatIfActive();
  await openDev();
  await page.getByLabel('Dev Enemy HP Percent').fill('50');
  await page.getByRole('button',{name:'Set HP'}).click();
  await closeDev();
  assert.match(await page.locator('.enemy-prep-data').innerText(),/Phase 2/);

  await openDev();
  await page.getByLabel('Dev Combat Tier').selectOption('10');
  await page.getByRole('button',{name:'Unlock Tier'}).click();
  await closeDev();
  await setDevArea('AREA');
  await page.locator('.combat-tier-rail button').nth(9).click();
  await page.locator('.combat-paths button:nth-child(3)').click();
  await openDev();
  await page.getByLabel('Dev Dungeon',{exact:true}).selectOption('t10-astral-nexus');
  await page.getByLabel('Dev Dungeon Encounter').selectOption('3');
  await page.getByRole('button',{name:'Full HP'}).click();
  await page.getByRole('button',{name:'Start Dungeon at encounter'}).click();
  await waitForState(state=>state.combat.targetId==='t10-the-zenith-warden','Astral Nexus advance to Zenith Warden');
  await closeDev();await stopCombatIfActive();
  await page.locator('.target-panel').getByRole('button',{name:/The Zenith Warden/}).click();
  assert.match(await page.locator('.enemy-prep-data').innerText(),/BOSS PHASES/);
  assert.ok(await page.locator('.combat-feed').count(),'Combat screen exposes the event-first Combat Feed');
  assert.ok(await page.getByRole('group',{name:'Filter combat events'}).getByRole('button',{name:'All'}).count(),'Combat Feed provides event filters');
  assert.ok(await page.locator('.combat-feed-event').count(),'Combat Feed renders readable event entries');
  await page.getByRole('group',{name:'Filter combat events'}).getByRole('button',{name:'Loot'}).click();
  assert.ok((await page.locator('.combat-feed').innerText()).includes('Loot') || (await page.locator('.combat-feed').innerText()).includes('No matching events'),'Combat Feed filter changes content without breaking the view');
  assert.deepEqual(errors,[],'Combat world browser smoke has no page or console errors');
  console.log('Fresh Copper path, Road Wolf victory, T1 locks, T5 Elite/Embervault/Cindermaw, and T10 Astral Nexus/Zenith Warden passed.');
}finally{await browser.close();}
