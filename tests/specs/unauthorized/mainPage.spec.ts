import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хэдера', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapShot();
});

test('Проверка доступности табов категорий', async ({ mainPage }) => {
  await mainPage.categoriesTabsHasCorrectAriaSnapShot();
});

test('Проверка доступности бокового меню', async ({ mainPage }) => {
  await mainPage.menuHasCorrectAriaSnapShot();
});

test('Проверка доступности элементов списка добавления контента', async ({ mainPage }) => {
  await mainPage.openAddPopupList();
  await mainPage.addPopupListHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов попапа уведомлений', async ({ mainPage }) => {
  await mainPage.openNotificationsPopup();
  await mainPage.notificationsPopupHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов модального окна авторизации', async ({ mainPage }) => {
  await mainPage.openAuthorizationModal();
  await mainPage.authorizationModalHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов открытого меню', async ({ mainPage }) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});

test('Переключение темы', async ({ mainPage }) => {
  await mainPage.checkThemeAttributeValue('dark2021');
  await mainPage.changeThemeToWhite();
  await mainPage.checkThemeAttributeValue('white2022');
});
