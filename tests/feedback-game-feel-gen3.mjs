import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { chromium } from 'playwright';

const output='artifacts/feedback-game-feel-gen3';
const executablePath=[process.env.CHROME_PATH,chromium.executablePath(),'C:/Program Files/Google/Chrome/Application/chrome.exe'].find(path=>path&&existsSync(path));
const browser=await chromium.launch({headless:true,executablePath,args:['--no-sandbox']});
const context=await browser.newContext({viewport:{width:2560,height:1440},reducedMotion:'reduce'}),page=await context.newPage(),errors=[];
page.on('pageerror',error=>errors.push(error.message));
page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
await mkdir(output,{recursive:true});
const shot=async(name)=>page.screenshot({path:`${output}/${name}.png`,fullPage:true});
const preview=async(name)=>{await page.getByRole('button',{name:'DEV'}).click();await page.locator('.dev-nav').getByRole('button',{name:'UI Lab'}).click();const button=page.locator('.feedback-preview-bench').getByRole('button',{name,exact:true});if(await button.count()===0) throw new Error(`Missing preview ${name}: ${await page.locator('.dev-active-page').innerText()}`);await button.click();await page.getByRole('button',{name:'Close developer tools'}).click();};
try {
  await page.goto(process.env.BASE_URL??'http://127.0.0.1:5174/',{waitUntil:'networkidle'});
  await page.getByRole('button',{name:'Create Profile'}).first().click();
  await page.getByLabel('Name your adventurer').fill('Feedback QA');
  await page.getByRole('button',{name:'Begin'}).click();
  await page.getByRole('button',{name:'Fishing',exact:true}).click();
  await page.getByRole('button',{name:'Start Fishing'}).click();
  await page.getByRole('button',{name:'Mining',exact:true}).click();
  await preview('Fishing XP');
  await page.locator('.xp-skill-orb.fishing').waitFor();
  assert.equal(await page.locator('.xp-skill-orb.mining').count(),0,'Fishing preview must not fabricate Mining XP');
  await shot('fishing-active-mining-screen');
  await page.locator('.activity-hud .dock-stop').click();
  await page.waitForFunction(()=>document.querySelectorAll('.global-xp-hud .xp-skill-orb').length===0,{timeout:12_000});

  await page.getByRole('button',{name:'DEV'}).click();
  await page.locator('.dev-nav').getByRole('button',{name:'Combat'}).click();
  await page.getByLabel('Dev Combat gear').selectOption('combat.weapon.melee.copper_sword');
  await page.getByRole('button',{name:'Grant & Equip'}).click();
  await page.getByRole('button',{name:'Close developer tools'}).click();
  await page.getByRole('button',{name:'Combat',exact:true}).click();
  await preview('Combat multi-XP');
  await page.locator('.xp-skill-orb.attack').waitFor();
  assert.equal(await page.locator('.xp-skill-orb').count(),3,'combat XP displays three skill circles');
  await shot('combat-multi-xp');

  await page.getByRole('button',{name:'Bank',exact:true}).click();
  const ore=page.locator('.bank-v2-grid .vault-item').filter({hasText:'Copper Ore'}).first();
  if(await ore.count()) { await ore.hover(); await page.waitForTimeout(350); await shot('bank-item-tooltip'); }
  else { await page.getByRole('button',{name:'DEV'}).click(); await page.locator('.dev-nav').getByRole('button',{name:'Mining'}).click(); await page.getByRole('button',{name:/Grant Copper Ore/}).click(); await page.getByRole('button',{name:'Close developer tools'}).click(); await page.getByRole('button',{name:'Bank',exact:true}).click(); await page.locator('.vault-item').filter({hasText:'Copper Ore'}).first().hover(); await page.waitForTimeout(350); await shot('bank-item-tooltip'); }
  assert.equal(await page.locator('.item-tooltip-v2').count(),1,'bank item hover opens structured tooltip');

  await page.getByRole('button',{name:'Equipment',exact:true}).click();
  await page.getByRole('tab',{name:/Combat loadout/}).click();
  await page.locator('.eq-owned-toggle').click();
  const sword=page.locator('.eq-item-tile').filter({hasText:'Copper Sword'}).first();
  if(await sword.count()) { await sword.locator('.tip-wrap').hover(); await page.waitForTimeout(350); await shot('equipment-weapon-tooltip'); assert.equal(await page.locator('.item-tooltip-v2').count(),1); }

  await page.getByRole('button',{name:'Smithing',exact:true}).click();
  await preview('Smithing');
  await page.locator('.local-game-feedback').waitFor();
  await shot('smithing-action-feedback');
  await page.getByRole('button',{name:'Mining',exact:true}).click();
  await preview('Mining');
  await page.locator('.local-game-feedback').waitFor();
  await shot('mining-action-feedback');
  await page.getByRole('button',{name:'Cooking',exact:true}).click();
  await preview('Cooking');
  await page.locator('.local-game-feedback').waitFor();
  await shot('cooking-action-feedback');

  for(const viewport of [{width:1920,height:1080},{width:1440,height:900}]) {
    await page.setViewportSize(viewport); await page.waitForTimeout(100);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`UI fits ${viewport.width}px`);
    await preview('All seven skills');
    assert.equal(await page.locator('.xp-skill-orb').count(),7,'seven-skill preview displays every skill');
    const geometry=await page.evaluate(()=>{const hud=document.querySelector('.global-xp-hud')?.getBoundingClientRect(),right=document.querySelector('.topbar-right')?.getBoundingClientRect();return {hud:hud&&{left:hud.left,right:hud.right,top:hud.top,bottom:hud.bottom},right:right&&{left:right.left,right:right.right,top:right.top,bottom:right.bottom}};}); const overlap=Boolean(geometry.hud&&geometry.right&&geometry.hud.right>geometry.right.left&&geometry.hud.left<geometry.right.right&&geometry.hud.bottom>geometry.right.top&&geometry.hud.top<geometry.right.bottom);console.log(viewport.width,geometry);
    assert.equal(overlap,false,`XP circles do not cover the topbar utilities at ${viewport.width}px`);
    await shot(`all-skills-${viewport.width}`);
  }
  await page.setViewportSize({width:2560,height:1440});
  const settings=async()=>{await page.getByRole('button',{name:'Settings'}).click();await page.getByRole('navigation',{name:'Settings categories'}).getByRole('button',{name:'Feedback'}).click();};
  await settings(); await page.getByRole('switch',{name:'XP Skill Circles'}).click(); await page.getByRole('button',{name:'Close',exact:true}).click();
  await preview('Fishing XP'); assert.equal(await page.locator('.global-xp-hud.xp-fallback').count(),1,'circles off and numbers on use the fallback feed'); assert.ok(await page.locator('.xp-fallback-gain.fishing').count()>0);
  await settings(); await page.getByRole('switch',{name:'XP Skill Circles'}).click(); await page.getByRole('switch',{name:'XP Gain Numbers'}).click(); await page.getByRole('button',{name:'Close',exact:true}).click();
  await preview('Fishing XP'); assert.ok(await page.locator('.xp-skill-orb.fishing').count()>0,'circles remain visible when XP numbers are off'); assert.equal(await page.locator('.xp-gain-pulse').count(),0);
  await settings(); await page.getByRole('switch',{name:'XP Skill Circles'}).click(); await page.getByRole('button',{name:'Close',exact:true}).click();
  await preview('Fishing XP'); assert.equal(await page.locator('.global-xp-hud').count(),0,'both XP display settings off hide XP presentation');
  assert.deepEqual(errors,[],'no browser console or page errors');
  console.log(JSON.stringify({screenshots:output,consoleErrors:errors,allSkills:7,expiry:'passed',settingsCombinations:'passed'},null,2));
} finally { await browser.close(); }
