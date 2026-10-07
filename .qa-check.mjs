import { chromium } from 'playwright';
const browser=await chromium.launch({headless:true});const context=await browser.newContext({viewport:{width:1920,height:1080},reducedMotion:'reduce'});const page=await context.newPage();
const errors=[];page.on('console',m=>{if(m.type()==='error')errors.push('console: '+m.text())});page.on('pageerror',e=>errors.push('page: '+e.message));
await page.goto('http://127.0.0.1:5173/',{waitUntil:'networkidle'});await page.getByRole('button',{name:/Create Profile/}).first().click();await page.locator('input[maxlength="24"]').fill('QA Adventurer');await page.getByRole('button',{name:'Begin'}).click();await page.waitForTimeout(250);
await page.getByRole('button',{name:'Equipment',exact:true}).click();await page.waitForTimeout(400);
console.log('EQUIPMENT',(await page.locator('main').innerText()).slice(0,1000));
console.log('SLOTS',await page.locator('.eq-slot').count(),'OVERFLOW',await page.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth));
await page.screenshot({path:'qa-equipment-empty-1920.png',fullPage:true});
await page.getByRole('button',{name:'DEV',exact:true}).click();
console.log('DEV PREVIEW BUTTONS',await page.locator('[data-dev-section="Equipment Preview"]').count(),await page.locator('[data-dev-section="Equipment Preview"]').innerText());
await page.getByRole('button',{name:'Equip Test Ring'}).click();await page.getByRole('button',{name:'Equip Test Necklace'}).click();await page.getByRole('button',{name:'Equip Test Cape'}).click();
await page.getByRole('button',{name:'DEV',exact:true}).click();
await page.waitForTimeout(250);console.log('ACCESSORY SLOT CONTENT',await page.locator('.eq-slot-ring').innerText(),await page.locator('.eq-slot-necklace').innerText(),await page.locator('.eq-slot-cape').innerText());
await page.screenshot({path:'qa-equipment-accessories-1920.png',fullPage:true});
await page.locator('.eq-slot-ring').click();await page.waitForTimeout(200);console.log('RING FILTER',await page.locator('.eq-item-tile').allInnerTexts());
await page.getByRole('button',{name:'Mining',exact:true}).first().click();await page.getByRole('button',{name:'Start Mining'}).click();await page.waitForTimeout(1600);const density=await page.locator('.mine-density-heading').innerText();await page.getByRole('button',{name:'Equipment',exact:true}).click();await page.waitForTimeout(900);const activeHud=(await page.locator('main').innerText()).includes('Mining');await page.getByRole('button',{name:'Mining',exact:true}).first().click();await page.waitForTimeout(250);console.log('MINING',density,'ACTIVITY PERSISTED',activeHud,'ERRORS',errors);
await page.screenshot({path:'qa-mining-1920.png',fullPage:true});
for(const v of [{width:2560,height:1440},{width:1440,height:900},{width:390,height:844}]){await page.setViewportSize(v);await page.waitForTimeout(150);console.log('VIEWPORT',v.width,'OVERFLOW',await page.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth));await page.screenshot({path:`qa-mining-${v.width}.png`,fullPage:true});}
await browser.close();
