import { test } from '@playwright/test';
import { SubsriptionsPage } from '../../pages/SubscriptionsPage';

test('Проверка доступности контента для авторизованного пользователя', async ({ page }) => {
  const subscriptionsPage = new SubsriptionsPage(page);
  await subscriptionsPage.open();
  await subscriptionsPage.contentHasCorrectAriaSnapshot();
});
