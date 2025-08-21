import { test } from '@playwright/test';
import { SubsriptionsPage } from '../../pages/SubscriptionsPage';

test('Проверка доступности контента для неавторизованного пользователя', async ({ page }) => {
  const subscriptionsPage = new SubsriptionsPage(page);
  await subscriptionsPage.open();
  await subscriptionsPage.closPopupOverlay();
  await subscriptionsPage.closeCookiesAlert();
  await subscriptionsPage.contentHasCorrectAriaSnapshot();
});
