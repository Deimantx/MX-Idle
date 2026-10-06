import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { chromium } from 'playwright';

const executablePath=[process.env.CHROME_PATH,chromium.executablePath(),'C:/Program Files/Google/Chrome/Application/chrome.exe'].find(path=>path&&existsSync(path));
assert.ok(executablePath,'Install Chrome/Chromium or set CHROME_PATH before browser QA.');
const browser=await chromium.launch({headless:true,executablePath,args:['--no-sandbox']});
const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'}),errors=[];
page.on('pageerror',error=>errors.push(error.message));page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
async function dev(){await page.getByRole('button',{name:'DEV',exact:true}).click();}
try{
  await page.goto(process.env.BASE_URL??'http://127.0.0.1:5173/',{waitUntil:'networkidle'});
  await page.getByRole('button',{name:'Create Profile'}).first().click();await page.getByLabel('Name your adventurer').fill('Combat Audit');await page.getByRole('button',{name:'Begin'}).click();await page.getByRole('heading',{name:'Mining'}).waitFor();
  await dev();await page.getByRole('button',{name:'Attack Lv. 100'}).click();await page.getByRole('button',{name:/20 speed/}).click();await page.getByLabel('Dev Combat gear').selectOption('combat.weapon.melee.copper_sword');await page.getByRole('button',{name:'Grant & Equip',exact:true}).click();await dev();await page.getByRole('button',{name:'Combat',exact:true}).click();

  await dev();await page.getByLabel('Dev Combat Tier').selectOption('4');await page.getByLabel('Dev Combat enemy').selectOption('t4-moon-priest');await page.getByRole('button',{name:'Set Target'}).click();await dev();
  assert.match(await page.locator('.enemy-prep-data').innerText(),/Pale Ward.*Self Resistance Air\/Fire\/Water\/Earth \+8 pp for 2 actions/,'Moon Priest inspector shows the scoped two-action Pale Ward');
  await dev();await page.getByLabel('Dev Combat Tier').selectOption('9');await page.getByLabel('Dev Combat enemy').selectOption('t9-the-hollow-regent');await page.getByRole('button',{name:'Set Target'}).click();await dev();
  const decree=await page.locator('.enemy-prep-data').innerText();assert.match(decree,/Hollow Decree.*Resistance Down: Slash.Stab.Crush.Pierce.Puncture.Air.Fire.Water.Earth/,'Regent inspector shows all resistance types once');assert.match(decree,/10 pp for 8s/,'Regent resistance-down amount and duration are visible');

  await dev();await page.getByLabel('Dev Combat Tier').selectOption('4');await page.getByLabel('Dev Dungeon',{exact:true}).selectOption('t4-mooncrypt');await page.getByLabel('Dev Dungeon Encounter').selectOption('1');await page.getByRole('button',{name:'Start Dungeon at encounter'}).click();
  await page.getByLabel('Dev Sequence Step').fill('1');await page.getByRole('button',{name:'Set Step'}).click();await dev();
  await page.getByText('IN COMBAT').waitFor();await page.waitForFunction(()=>document.querySelector('.readiness-mini')?.textContent?.includes('ResistanceUp'),null,{timeout:10000});
  await dev();await page.getByRole('button',{name:'Force Enemy Defeat'}).click();await dev();
  assert.doesNotMatch(await page.locator('.readiness-mini').innerText(),/ResistanceUp/,'Defeating the buffed Dungeon encounter clears its Combat statuses');
  await page.waitForFunction(()=>document.querySelector('.stage-caption')?.textContent?.includes('ENCOUNTER 3'),null,{timeout:10000});
  assert.doesNotMatch(await page.locator('.readiness-mini').innerText(),/ResistanceUp/,'The next Dungeon encounter does not inherit the previous enemy buff');

  await dev();await page.getByLabel('Dev Combat Tier').selectOption('5');await page.getByLabel('Dev Dungeon',{exact:true}).selectOption('t5-embervault');await page.getByLabel('Dev Dungeon Encounter').selectOption('3');await page.getByRole('button',{name:'Start Dungeon at encounter'}).click();await page.getByRole('button',{name:/1 speed/}).click();
  await page.getByLabel('Dev Combat enemy').selectOption('t5-cindermaw');await page.getByLabel('Dev Boss Phase').selectOption('1');await page.getByRole('button',{name:'Set Phase'}).click();await page.getByLabel('Dev Enemy HP Percent').fill('29');await page.getByRole('button',{name:'Set HP'}).click();await dev();
  await page.waitForFunction(()=>document.querySelector('.log-lines')?.textContent?.includes('changes its attack pattern'),null,{timeout:10000});
  const enemyAction=await page.locator('.timer-unit').nth(1).locator('b').innerText();assert.match(enemyAction,/Tail Crush.*2.[5-9]s|Tail Crush.*3.00s/,'The new phase starts at its first authored action with a fresh timer');
  assert.deepEqual(errors,[],'Combat post-hardening smoke has no browser console errors');console.log(JSON.stringify({smoke:'passed',enemyAction,errors}));
}finally{await browser.close();}
