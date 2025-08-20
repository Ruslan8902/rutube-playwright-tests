import { test, expect } from '../fixtures/fixtures';
import path from 'path';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');
chromium.use(stealth());

test('auth setup', async ({}) => {
  // Set up the fixture.
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://rutube.ru/');
  await page
    .locator('.cookie-notify-module__cookie-consent')
    .getByRole('button', { name: 'Ок', exact: true })
    .click();

  await page
    .locator('.wdp-popup-overlay-module__overlay')
    .getByRole('button', { name: 'Закрыть' })
    .click();

  await page.getByRole('button', { name: 'Вход и регистрация' }).click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'войти с помощью Почта' })
    .click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('textbox', { name: 'Введите почту' })
    .fill(process.env.LOGIN!);
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Продолжить' })
    .click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .locator('#login-password')
    .fill(process.env.PASSWORD!);
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Войти', exact: true })
    .click();
  await page.getByRole('img', { name: 'Иконка канала channel64657349' }).click();
  await page.getByRole('link', { name: 'Профиль' }).click();

  await page.context().storageState({ path: authFile });
});
