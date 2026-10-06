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
  await page.getByRole('button',{name:'Begin Combat'}).click();
  await waitForState(state=>(state.combat.defeated['road-wolf']??0)>0,'natural Road Wolf victory',120_000);
  assert.equal((await readState()).objectives.victory,true,'First Steps remains attached to the Road Wolf milestone');
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
  assert.deepEqual(errors,[],'Combat world browser smoke has no page or console errors');
  console.log('Fresh Copper path, Road Wolf victory, T1 locks, T5 Elite/Embervault/Cindermaw, and T10 Astral Nexus/Zenith Warden passed.');
}finally{await browser.close();}
