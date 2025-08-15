import { test } from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хэдера', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closPopupOverlay();
  await mainPage.closeCookiesAlert();
  await mainPage.headerHasCorrectAriaSnapShot();
});

test('Проверка доступности табов категорий', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closPopupOverlay();
  await mainPage.closeCookiesAlert();
  await mainPage.categoriesTabsHasCorrectAriaSnapShot();
});

test('Проверка доступности бокового меню', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closPopupOverlay();
  await mainPage.closeCookiesAlert();
  await mainPage.menuHasCorrectAriaSnapShot();
});
