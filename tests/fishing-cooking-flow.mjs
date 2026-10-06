import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { chromium } from 'playwright';

const out='artifacts/ui-generation-2', executablePath=[process.env.CHROME_PATH,chromium.executablePath(),'C:/Program Files/Google/Chrome/Application/chrome.exe'].find(path=>path&&existsSync(path)),browser=await chromium.launch({headless:true,executablePath,args:['--no-sandbox']}), context=await browser.newContext({viewport:{width:2560,height:1440},reducedMotion:'reduce'}),page=await context.newPage(),errors=[];
page.on('pageerror',error=>errors.push(error.message));page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
await mkdir(out,{recursive:true});
const shot = async (name) => page.screenshot({ path: `${out}/${name}.png`, fullPage: true });
try {
 await page.goto(process.env.BASE_URL??'http://127.0.0.1:5173/',{waitUntil:'networkidle'});
 await page.getByRole('button',{name:'Create Profile'}).first().click();await page.getByLabel('Name your adventurer').fill('Angler QA');await page.getByRole('button',{name:'Begin'}).click();
 await page.getByRole('button',{name:'Fishing',exact:true}).click();await page.getByRole('button',{name:'DEV'}).click();await page.locator('.dev-nav').getByRole('button',{name:'Player'}).click();await page.getByRole('button',{name:'Fishing Lv. 100'}).click();
 await page.locator('.dev-nav').getByRole('button',{name:'Fishing'}).click();await page.getByLabel('Dev Fish',{exact:true}).selectOption('fishing.fish.brook_minnow');await page.getByRole('button',{name:'Grant Fish'}).click();await page.getByRole('button',{name:'Close developer tools'}).click();
 await page.getByRole('button',{name:'Start Fishing'}).click();await page.waitForTimeout(3300);assert.match(await page.locator('.fish-reveal').innerText(),/Brook Minnow|REELING IN/);
 await page.waitForFunction(()=>Number(document.querySelector('.profession-stats .stat-strip > div:nth-child(2) b')?.textContent??'0')>0,{timeout:15000});const landedFishCount=await page.locator('.profession-stats .stat-strip > div:nth-child(2) b').innerText();await shot('fishing-desktop');
 await page.setViewportSize({width:768,height:900});await page.waitForTimeout(100);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,'Fishing screen fits at 768px');await shot('fishing-768');
 await page.getByRole('button',{name:/Stop Fishing/}).click();await page.getByRole('button',{name:'Cooking',exact:true}).click();await page.getByRole('button',{name:'DEV'}).click();await page.locator('.dev-nav').getByRole('button',{name:'Player'}).click();await page.getByRole('button',{name:'Cooking Lv. 100'}).click();await page.getByRole('button',{name:'Close developer tools'}).click();await page.getByRole('button',{name:/Prepare batch/}).click();
 await page.setViewportSize({width:2560,height:1440});await shot('cooking-desktop');assert.equal(await page.locator('.ingredient-placement').isVisible(),true);
 await page.setViewportSize({width:768,height:900});await page.waitForTimeout(100);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,'Cooking screen fits at 768px');await shot('cooking-768');
 assert.deepEqual(errors,[],'Profession screens have no console or page errors');
 console.log(JSON.stringify({consoleErrors:errors,landedFishCount,recipes:await page.locator('.cooking-recipe-tile').count()}));
} finally { await browser.close(); }
