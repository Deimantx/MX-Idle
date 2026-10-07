import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 2560, height: 1440 }, reducedMotion: 'reduce' });
const page = await context.newPage();
const errors = [];
page.on('pageerror', error => errors.push(error.message));
page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
await page.goto('http://127.0.0.1:5174/', { waitUntil: 'networkidle' });
await page.getByRole('button', { name: 'Create Profile' }).first().click();
await page.getByRole('textbox').fill('QA Miner');
await page.getByRole('button', { name: 'Begin', exact: true }).click();
await page.waitForTimeout(400);

const initialDensity = await page.locator('.mine-density-heading').innerText();
await page.getByRole('button', { name: 'Start Mining', exact: true }).click();
await page.waitForTimeout(2800);
const minedDensity = await page.locator('.mine-density-heading').innerText();
await page.screenshot({ path: 'artifacts/qa/equipment-mining-generation-47/mining-2560x1440.png', fullPage: true });
console.log('mining-densities', JSON.stringify({ initialDensity, minedDensity }));
await page.getByRole('button', { name: 'Equipment', exact: true }).click();
await page.waitForTimeout(200);

await page.getByRole('button', { name: 'DEV', exact: true }).click();
await page.locator('.dev-nav').getByRole('button', { name: 'Equipment', exact: true }).click();
await page.locator('select[aria-label="Dev grant item"]').selectOption({ label: 'Copper Sword' });
await page.getByRole('button', { name: 'Grant x10', exact: true }).click();
await page.locator('.dev-nav').getByRole('button', { name: 'Overview', exact: true }).click();
await page.getByRole('button', { name: 'Grant T1 field kit', exact: true }).click();
await page.getByRole('button', { name: 'Close developer tools' }).click();
await page.locator('.eq-slot-weapon').click();
await page.getByRole('option', { name: /Copper Sword/ }).click();
await page.getByRole('button', { name: 'Equip to loadout', exact: true }).click();
await page.waitForTimeout(300);
const swordEquipped = await page.locator('.eq-slot-weapon').innerText();
const swordBankView = await page.locator('.eq-item-tile').filter({ hasText: 'Copper Sword' }).innerText();
console.log('sword-equip', JSON.stringify({ swordEquipped, swordBankView }));
await page.screenshot({ path: 'artifacts/qa/equipment-mining-generation-47/equipment-sword-equipped-2560x1440.png', fullPage: true });

await page.locator('.eq-slot-offhand').click();
await page.getByRole('option', { name: /Copper Shield/ }).click();
await page.getByRole('button', { name: 'Equip to loadout', exact: true }).click();
const shieldEquipped = await page.locator('.eq-slot-offhand').innerText();
await page.locator('.eq-slot-weapon').click();
await page.getByRole('option', { name: /Copper Battle Axe/ }).click();
await page.getByRole('button', { name: 'Equip to loadout', exact: true }).click();
await page.waitForTimeout(250);
const replacedWeapon = await page.locator('.eq-slot-weapon').innerText();
const offhandRetainedForOneHander = await page.locator('.eq-slot-offhand').innerText();
await page.locator('.eq-slot-offhand').click();
await page.getByRole('button', { name: 'Return to Bank', exact: true }).click();
const offhandUnequipped = await page.locator('.eq-slot-offhand').innerText();
const returnedShield = await page.locator('.eq-item-tile').filter({ hasText: 'Copper Shield' }).innerText();
console.log('replacement-and-unequip', JSON.stringify({ shieldEquipped, replacedWeapon, offhandRetainedForOneHander, offhandUnequipped, returnedShield }));
await page.getByRole('button', { name: 'DEV', exact: true }).click();
await page.locator('.dev-nav').getByRole('button', { name: 'Equipment', exact: true }).click();
for (const accessory of ['Test Ring', 'Test Necklace', 'Test Cape']) {
  await page.locator('select[aria-label="Dev grant item"]').selectOption({ label: accessory });
  await page.getByRole('button', { name: 'Grant x10', exact: true }).click();
}
await page.getByRole('button', { name: 'Close developer tools' }).click();
for (const [slot, accessory] of [['ring', 'Test Ring'], ['necklace', 'Test Necklace'], ['cape', 'Test Cape']]) {
  await page.locator('.eq-slot-' + slot).click();
  await page.getByRole('option', { name: new RegExp(accessory) }).click();
  await page.getByRole('button', { name: 'Equip to loadout', exact: true }).click();
  console.log('accessory-equip', slot, await page.locator('.eq-slot-' + slot).innerText());
}
await page.screenshot({ path: 'artifacts/qa/equipment-mining-generation-47/equipment-accessories-2560x1440.png', fullPage: true });

await page.waitForTimeout(500);
await page.reload({ waitUntil: 'networkidle' });
console.log('profile-after-reload', (await page.locator('body').innerText()).slice(0, 1000));
await page.getByRole('button', { name: /Continue/ }).first().click();
await page.waitForTimeout(400);
const reloadedWeapon = await page.locator('.eq-slot-weapon').innerText();
const reloadedAccessories = await Promise.all(['ring','necklace','cape'].map(slot => page.locator('.eq-slot-' + slot).innerText()));
console.log('reloaded-equipment', JSON.stringify({ reloadedWeapon, reloadedAccessories }));

const dimensions = [];
for (const viewport of [{ width: 1920, height: 1080 }, { width: 1440, height: 900 }, { width: 390, height: 844 }]) {
  await page.setViewportSize(viewport);
  await page.waitForTimeout(120);
  dimensions.push({ ...viewport, scrollWidth: await page.locator('body').evaluate(node => node.scrollWidth), clientWidth: await page.locator('body').evaluate(node => node.clientWidth) });
  await page.screenshot({ path: 'artifacts/qa/equipment-mining-generation-47/equipment-' + viewport.width + 'x' + viewport.height + '.png', fullPage: true });
}
await page.getByRole('button', { name: 'Mining', exact: true }).first().click();
await page.waitForTimeout(250);
await page.setViewportSize({ width: 2560, height: 1440 });
await page.getByRole('tab', { name: 'Quarry', exact: true }).click();
const quarryRows = await page.locator('.deposit-selected').count();
await page.getByRole('textbox', { name: 'Search deposits' }).fill('fieldstone');
const searchRows = await page.locator('.deposit-selected').allTextContents();
await page.getByRole('button', { name: 'Clear deposit search' }).click();
await page.getByRole('tab', { name: 'All Deposits', exact: true }).click();
const fieldstone = page.locator('.deposit-selected').filter({ hasText: 'Fieldstone Quarry' });
await fieldstone.locator('.item-inspect-tip').hover();
await page.waitForSelector('.item-tooltip-v2');
const fieldstoneTooltip = await page.locator('.item-tooltip-v2').innerText();
await page.screenshot({ path: 'artifacts/qa/equipment-mining-generation-47/tooltip-fieldstone-2560x1440.png', fullPage: true });
await fieldstone.click();
const lockReason = await page.locator('.mine-lock-note').innerText();
console.log('mining-browser', JSON.stringify({ quarryRows, searchRows, fieldstoneTooltip, lockReason }));
await page.waitForTimeout(10000);
const resumedDensity = await page.locator('.mine-density-heading').innerText();
const currentStage = await page.locator('.stage-name-line').innerText();
const stageAccessibleName = await page.locator('[role="listitem"][aria-current="step"]').getAttribute('aria-label');
const xpFeedback = await page.locator('.global-xp-hud').innerText().catch(() => '');
const itemFeedback = await page.locator('.global-reward-feed').innerText();
const reducedMotionAnimation = await page.locator('.mine-impact-ring').evaluate(node => getComputedStyle(node).animationName);
console.log('mining-continuity-and-feedback', JSON.stringify({ minedDensity, resumedDensity, currentStage, stageAccessibleName, xpFeedback, itemFeedback, reducedMotionAnimation }));
await page.screenshot({ path: 'artifacts/qa/equipment-mining-generation-47/mining-after-stage-2560x1440.png', fullPage: true });
await page.getByRole('button', { name: 'Bank', exact: true }).click();
await page.waitForTimeout(150);
console.log('background-feedback-in-bank', JSON.stringify({ xp: await page.locator('.global-xp-hud').innerText().catch(() => ''), rewards: await page.locator('.global-reward-feed').innerText(), activity: await page.locator('.activity-hud').innerText().catch(() => '') }));
await page.screenshot({ path: 'artifacts/qa/equipment-mining-generation-47/bank-during-mining-2560x1440.png', fullPage: true });
await page.getByRole('button', { name: 'Mining', exact: true }).first().click();
const miningDimensions = [];
for (const viewport of [{ width: 2560, height: 1440 }, { width: 1920, height: 1080 }, { width: 1440, height: 900 }, { width: 390, height: 844 }]) {
  await page.setViewportSize(viewport);
  await page.waitForTimeout(100);
  miningDimensions.push({ ...viewport, scrollWidth: await page.locator('body').evaluate(node => node.scrollWidth), clientWidth: await page.locator('body').evaluate(node => node.clientWidth) });
  await page.screenshot({ path: 'artifacts/qa/equipment-mining-generation-47/mining-' + viewport.width + 'x' + viewport.height + '.png', fullPage: true });
}
console.log('dimensions', JSON.stringify(dimensions));
console.log('mining-dimensions', JSON.stringify(miningDimensions));
console.log('errors', JSON.stringify(errors));
console.log('storage-keys', await page.evaluate(() => Object.keys(localStorage)));
await browser.close();
