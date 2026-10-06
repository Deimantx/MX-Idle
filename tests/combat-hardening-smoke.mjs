import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { chromium } from 'playwright';

const executablePath=[process.env.CHROME_PATH,chromium.executablePath(),'C:/Program Files/Google/Chrome/Application/chrome.exe'].find(path=>path&&existsSync(path));
assert.ok(executablePath,'Install Chrome/Chromium or set CHROME_PATH before browser QA.');
const browser=await chromium.launch({headless:true,executablePath,args:['--no-sandbox']});
const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'}),errors=[];
page.on('pageerror',error=>errors.push(error.message));page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
try{
  await page.goto(process.env.BASE_URL??'http://127.0.0.1:5173/',{waitUntil:'networkidle'});
  await page.getByRole('button',{name:'Create Profile'}).first().click();await page.getByLabel('Name your adventurer').fill('Combat Hardening');await page.getByRole('button',{name:'Begin'}).click();await page.getByRole('heading',{name:'Mining'}).waitFor();
  await page.getByRole('button',{name:'DEV'}).click();await page.getByLabel('Dev Combat gear').selectOption('combat.weapon.melee.copper_sword');await page.getByRole('button',{name:'Grant & Equip',exact:true}).click();await page.getByRole('button',{name:'DEV'}).click();
  await page.getByRole('button',{name:'Combat',exact:true}).click();
  await page.getByRole('button',{name:'Stab',exact:false}).first().click();assert.equal(await page.locator('.resist-cell.chosen-type').getAttribute('class').then(x=>x.includes('chosen-type')),true,'Sword stance highlights its damage type');
  await page.getByRole('button',{name:'DEV'}).click();await page.getByLabel('Dev Combat gear').selectOption('combat.weapon.melee.copper_battle_axe');await page.getByRole('button',{name:'Grant & Equip',exact:true}).click();await page.getByRole('button',{name:'DEV'}).click();
  await page.getByLabel('Mode').selectOption('Manual');await page.getByRole('button',{name:/Queue Special/}).click();await page.getByRole('button',{name:'Begin Combat'}).click();await page.getByText('IN COMBAT').waitFor();await page.waitForTimeout(3100);await page.getByRole('button',{name:/Leave Encounter/}).click();
  await page.getByRole('button',{name:'DEV'}).click();await page.getByLabel('Dev Combat gear').selectOption('combat.weapon.melee.copper_mace');await page.getByRole('button',{name:'Grant & Equip',exact:true}).click();await page.getByLabel('Dev Combat Tier').selectOption('1');await page.getByLabel('Dev Combat enemy').selectOption('t1-watch-deserter');await page.getByRole('button',{name:'Set Target'}).click();await page.getByRole('button',{name:'DEV'}).click();
  await page.getByLabel('Mode').selectOption('Manual');await page.getByRole('button',{name:/Queue Special/}).click();await page.getByRole('button',{name:'Begin Combat'}).click();await page.getByText('IN COMBAT').waitFor();await page.waitForTimeout(2800);await page.getByRole('button',{name:/Leave Encounter/}).click();
  await page.getByRole('button',{name:/DUNGEON/}).first().click();
  const bossChoice=page.locator('.target-list .enemy-choice').filter({hasText:'Captain Veyr'});await bossChoice.click();
  await page.getByRole('button',{name:'Enter Dungeon'}).click();await page.getByText('IN COMBAT').waitFor();
  assert.match(await page.locator('.stage-caption').innerText(),/ENCOUNTER 1[\s\S]*WATCH DESERTER/i,'Dungeon entry still begins at encounter one after inspecting its boss');
  await page.getByRole('button',{name:/Leave Encounter/}).click();
  await page.getByRole('button',{name:'DEV'}).click();await page.getByLabel('Dev Combat Tier').selectOption('10');await page.getByLabel('Dev Dungeon',{exact:true}).selectOption('t10-astral-nexus');await page.getByLabel('Dev Dungeon Encounter').selectOption('3');await page.getByRole('button',{name:'Start Dungeon at encounter'}).click();await page.getByRole('button',{name:'DEV'}).click();
  assert.match(await page.locator('.enemy-prep-data').innerText(),/Phase 2[\s\S]*Phase 3/i,'Late boss inspector exposes all phases');
  await page.getByRole('button',{name:'DEV'}).click();await page.getByLabel('Dev Combat Tier').selectOption('3');await page.getByLabel('Dev Combat enemy').selectOption('t3-forgemaster-korr');await page.getByRole('button',{name:'Set Target'}).click();await page.getByRole('button',{name:'DEV'}).click();
  assert.match(await page.locator('.enemy-prep-data').innerText(),/Tempered Guard · Pure effect/,'Pure defensive action is shown without direct damage');
  assert.deepEqual(errors,[],'Combat hardening smoke has no browser console errors');console.log(JSON.stringify({errors,smoke:'passed'}));
}finally{await browser.close();}
