import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { chromium } from 'playwright';

const executablePath = [process.env.CHROME_PATH, chromium.executablePath(), 'C:/Program Files/Google/Chrome/Application/chrome.exe'].find((path) => path && existsSync(path));
assert.ok(executablePath, 'Install Chrome/Chromium or set CHROME_PATH before browser QA.');
const browser = await chromium.launch({ headless: true, executablePath, args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, reducedMotion: 'reduce' });
const errors = [];
page.on('pageerror', (error) => errors.push(error.message));
page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });

try {
  await page.goto(process.env.BASE_URL ?? 'http://127.0.0.1:5173/', { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Create Profile' }).first().click();
  await page.getByLabel('Name your adventurer').fill('Phase 1 Audit');
  await page.getByRole('button', { name: 'Begin' }).click();
  await page.getByRole('heading', { name: 'Mining' }).waitFor();

  await page.getByRole('button', { name: 'DEV' }).click();
  await page.getByRole('button', { name: 'Mining Lv. 100' }).click();
  await page.getByRole('button', { name: 'DEV' }).click();
  const astralite = page.locator('.deposit-selected').filter({ hasText: 'Astralite Vein' });
  assert.equal(await astralite.isEnabled(), true, 'Level 100 unlocks Astralite Vein');
  await astralite.click();
  assert.equal(await page.locator('.mine-focus h2').innerText(), 'Astralite Vein');
  await page.getByRole('button', { name: 'DEV' }).click();
  await page.getByRole('button', { name: 'Grant Copper Ore' }).click();
  await page.getByRole('button', { name: 'DEV' }).click();

  await page.getByRole('button', { name: /Smithing/ }).click();
  await page.getByRole('button', { name: 'DEV' }).click();
  await page.getByRole('button', { name: 'Smithing Lv. 100' }).click();
  await page.getByRole('button', { name: 'DEV' }).click();
  const astraliteIngot = page.getByRole('button', { name: /^Astralite Ingot/ });
  assert.equal(await astraliteIngot.isEnabled(), true, 'Level 100 unlocks Astralite smelting');
  await astraliteIngot.click();

  await page.getByRole('button', { name: 'Equipment', exact: true }).click();
  await page.getByRole('button', { name: 'DEV' }).click();
  await page.getByRole('button', { name: 'Grant T1 field kit' }).click();
  await page.getByRole('button', { name: 'DEV' }).click();
  await page.locator('.candidate-row').filter({ hasText: 'Copper Battle Axe' }).click();
  await page.getByRole('button', { name: 'Equip Item' }).click();
  await page.setViewportSize({ width: 768, height: 900 });
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, 'Equipment fits at 768px');
  await page.setViewportSize({ width: 1600, height: 1000 });

  await page.getByRole('button', { name: /Fishing/ }).click();
  assert.equal(await page.locator('.profession-choice').filter({ hasText: 'Astral Expanse' }).isDisabled(), true, 'Fishing Spot 10 stays locked at Fishing 1');
  await page.getByRole('button', { name: /Cooking/ }).click();
  assert.equal(await page.locator('.recipe-choice').count() > 0, true, 'Cooking recipe browser renders');
  assert.deepEqual(errors, [], 'Focused Phase 1 flow has no browser console errors');
  console.log(JSON.stringify({ flow: 'Mining → Smithing → Equipment → Fishing → Cooking', consoleErrors: errors }));
} finally {
  await browser.close();
}
