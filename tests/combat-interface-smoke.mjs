import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { chromium } from 'playwright';

const executablePath=[process.env.CHROME_PATH,chromium.executablePath(),'C:/Program Files/Google/Chrome/Application/chrome.exe'].find(path=>path&&existsSync(path));
assert.ok(executablePath,'Install Chrome/Chromium or set CHROME_PATH before browser QA.');
const browser=await chromium.launch({headless:true,executablePath,args:['--no-sandbox']});
const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'}),errors=[];
page.on('pageerror',error=>errors.push(error.message));
page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
try {
  await page.goto(process.env.BASE_URL??'http://127.0.0.1:5173/',{waitUntil:'networkidle'});
  await page.getByRole('button',{name:'Create Profile'}).first().click();
  await page.getByLabel('Name your adventurer').fill('Combat Interface QA');
  await page.getByRole('button',{name:'Begin'}).click();
  await page.getByRole('heading',{name:'Mining'}).waitFor();

  await page.getByRole('button',{name:'DEV'}).click();
  await page.locator('.dev-nav').getByRole('button',{name:'Combat',exact:true}).click();
  await page.getByLabel('Dev Combat gear').selectOption('combat.weapon.melee.copper_battle_axe');
  await page.getByRole('button',{name:'Grant & Equip',exact:true}).click();
  await page.getByRole('button',{name:'Close developer tools'}).click();
  await page.getByRole('button',{name:'Combat',exact:true}).click();

  const commandStrip=page.getByTestId('combat-command-strip');
  await commandStrip.waitFor();
  assert.equal(await page.locator('.combat-hp-topline .health-unit').count(),2,'player and enemy HP sit above the battle scene');
  assert.equal(await page.locator('.combat-resource-grid .resource-meter').count(),2,'stamina and satiety remain visible beneath the battle scene');
  assert.equal(await page.locator('.battle-scene .scene-combatant-tag').count(),1,'the enemy is labeled while the player sprite is omitted');
  assert.equal(await page.locator('.battle-scene .player-battle-sprite').count(),0,'combat scene does not render a player sprite');
  assert.equal(await page.locator('.enemy-insight-strip > div').count(),3,'enemy inspection summarizes resistance, pattern and reward pool');
  await page.locator('.enemy-telegraph').waitFor();
  await page.locator('.sequence-flow').waitFor();
  await page.getByRole('tab',{name:'Combat stats'}).click();
  await page.getByText('YOUR RESISTANCES').waitFor();
  await page.getByRole('tab',{name:'Equipment'}).click();
  await page.getByRole('tab',{name:'Defenses'}).click();
  await page.getByText('RESISTANCES & WEAKNESSES').waitFor();
  await page.getByRole('tab',{name:'Attacks'}).click();
  await page.getByText('ATTACK SEQUENCE').waitFor();
  await page.getByRole('tab',{name:'Loot'}).click();
  await page.getByText('POSSIBLE DROPS').waitFor();
  await page.getByRole('tab',{name:'Overview'}).click();
  await page.getByRole('button',{name:'Browse Combat Zones'}).click();
  await page.getByRole('heading',{name:'Combat World'}).waitFor();
  await page.getByRole('button',{name:'Close combat zones'}).click();

  const start=page.getByRole('button',{name:'Start Auto Combat'});
  assert.equal(await start.isEnabled(),true,'auto-combat can start with the equipped weapon');
  await start.click();
  assert.equal(await page.locator('.combat-auto-toggle').getAttribute('aria-pressed'),'true','auto-combat control exposes its running state');
  await page.getByRole('button',{name:'Stop Auto Combat'}).click();
  assert.equal(await page.locator('.combat-auto-toggle').getAttribute('aria-pressed'),'false','stopping combat restores the paused state');

  await page.getByRole('button',{name:'Open combat settings'}).click();
  await page.getByRole('region',{name:'Combat automation settings'}).waitFor();
  const threshold=page.getByLabel('Eat below HP threshold');
  await threshold.fill('60');
  await threshold.press('Tab');
  assert.equal(await threshold.inputValue(),'60','auto-eat threshold can be changed from combat settings');
  await page.getByLabel('Weapon special').selectOption('Manual');
  assert.equal(await page.getByLabel('Weapon special').inputValue(),'Manual','special mode selection is interactive');
  const quickEat=commandStrip.locator('input[type="checkbox"]');
  await quickEat.check();
  assert.equal(await quickEat.isChecked(),true,'quick auto-eat switch updates the shared game setting');
  await quickEat.uncheck();

  await page.getByRole('button',{name:'Close combat settings'}).click();
  for(const [width,expectedColumns] of [[1920,3],[1440,3],[1100,2],[390,1]]) {
    await page.setViewportSize({width,height:900});
    await page.waitForTimeout(60);
    const layout=page.locator('.combat-layout');
    const columns=await layout.evaluate(element=>getComputedStyle(element).gridTemplateColumns.trim().split(/\s+/).filter(Boolean).length);
    assert.equal(columns,expectedColumns,`combat layout uses ${expectedColumns} columns at ${width}px`);
    const metrics=await layout.evaluate(element=>({clientWidth:element.clientWidth,scrollWidth:element.scrollWidth}));
    assert.ok(metrics.scrollWidth<=metrics.clientWidth+3,`combat layout has no horizontal overflow at ${width}px: ${JSON.stringify(metrics)}`);
    assert.equal(await page.locator('.battle-scene').isVisible(),true,`battle scene remains visible at ${width}px`);
  }
  assert.deepEqual(errors,[],'combat interface workflow has no browser console or runtime errors');
  console.log(JSON.stringify({smoke:'passed',checks:['resource HUD','player/enemy scene','enemy insight','auto combat start/stop','auto-eat threshold and quick toggle','special mode','desktop/tablet/mobile layout'],errors}));
} finally {
  await browser.close();
}
