import { test, expect } from '../fixtures/fixtures';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

test('test', async ({ mainPage }) => {
  await mainPage.page.getByRole('button', { name: 'Вход и регистрация' }).click();
  await mainPage.page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'войти с помощью Почта' })
    .click();
  await mainPage.page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('textbox', { name: 'Введите почту' })
    .fill(process.env.LOGIN!);
  await mainPage.page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Продолжить' })
    .click();
  await mainPage.page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .locator('#login-password')
    .fill(process.env.PASSWORD!);
  await mainPage.page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Войти', exact: true })
    .click();
  await mainPage.page.getByRole('img', { name: 'Иконка канала channel64657349' }).click();
  await mainPage.page.getByRole('link', { name: 'Профиль' }).click();
  await mainPage.page.context().storageState({ path: authFile });
});
