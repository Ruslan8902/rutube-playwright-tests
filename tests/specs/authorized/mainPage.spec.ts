import { test, expect } from '../../fixtures/fixtures';

test('Проверка доступности элементов хэдера аторизованного пользователя', async ({
  mainPageAuthorized,
}) => {
  await mainPageAuthorized.headerHasCorrectAriaSnapShot();
});

test('Проверка доступности элементов попапа уведомлений аторизованного пользователя', async ({
  mainPageAuthorized,
}) => {
  await mainPageAuthorized.openNotificationsPopup();
  await mainPageAuthorized.notificationsPopupHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов открытого меню аторизованного пользователя', async ({
  mainPageAuthorized,
}) => {
  await mainPageAuthorized.openFullMenu();
  await mainPageAuthorized.fullMenuHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов меню аторизованного пользователя в хэдере', async ({
  mainPageAuthorized,
}) => {
  await mainPageAuthorized.openHeaderMenu();
  await mainPageAuthorized.headerUserManuHasCorrectAriaSnapshot();
});
