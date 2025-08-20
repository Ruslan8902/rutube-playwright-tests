import test from '@playwright/test';
import { ForCreatorsPage } from '../../pages/ForCreatorsPage';

ForCreatorsPage.testParams.forEach(({ url, screenshotName, name }) => {
  test(`Проверка лэйаута таба - ${name}`, async ({ page }) => {
    const forCreatorsPage = new ForCreatorsPage(page);
    await forCreatorsPage.open(url);
    await forCreatorsPage.pageHasCorrectLayout(screenshotName);
  });
});
