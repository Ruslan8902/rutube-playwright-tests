import { test, expect } from '../../fixtures/fixtures';

test('Проверка доступности элементов хэдера неаторизованного пользователя', async ({
  mainPageUnauthorized,
}) => {
  await mainPageUnauthorized.headerHasCorrectAriaSnapShot();
});

test('Проверка доступности табов категорий неаторизованного пользователя', async ({
  mainPageUnauthorized,
}) => {
  await mainPageUnauthorized.categoriesTabsHasCorrectAriaSnapShot();
});

test('Проверка доступности бокового меню неаторизованного пользователя', async ({
  mainPageUnauthorized,
}) => {
  await mainPageUnauthorized.menuHasCorrectAriaSnapShot();
});

test('Проверка доступности элементов списка добавления контента неаторизованного пользователя', async ({
  mainPageUnauthorized,
}) => {
  await mainPageUnauthorized.openAddPopupList();
  await mainPageUnauthorized.addPopupListHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов попапа уведомлений неаторизованного пользователя', async ({
  mainPageUnauthorized,
}) => {
  await mainPageUnauthorized.openNotificationsPopup();
  await mainPageUnauthorized.notificationsPopupHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов модального окна авторизации неаторизованного пользователя', async ({
  mainPageUnauthorized,
}) => {
  await mainPageUnauthorized.openAuthorizationModal();
  await mainPageUnauthorized.authorizationModalHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов открытого меню неаторизованного пользователя', async ({
  mainPageUnauthorized,
}) => {
  await mainPageUnauthorized.openFullMenu();
  await mainPageUnauthorized.fullMenuHasCorrectAriaSnapshot();
});

test('Переключение темы неаторизованного пользователя', async ({ mainPageUnauthorized }) => {
  await mainPageUnauthorized.checkThemeAttributeValue('dark2021');
  await mainPageUnauthorized.changeThemeToWhite();
  await mainPageUnauthorized.checkThemeAttributeValue('white2022');
});
