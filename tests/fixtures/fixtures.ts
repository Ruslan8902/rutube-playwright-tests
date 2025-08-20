import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { CategoriesPage } from '../pages/CategoriesPage';

// Declare the types of your fixtures.
type MyFixtures = {
  mainPageUnauthorized: MainPage;
  mainPageAuthorized: MainPage;
  categoriesPage: CategoriesPage;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.

export const test = base.extend<MyFixtures>({
  mainPageUnauthorized: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.closPopupOverlay();
    await mainPage.closeCookiesAlert();
    // Use the fixture value in the test.
    await use(mainPage);
  },

  mainPageAuthorized: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    // Use the fixture value in the test.
    await use(mainPage);
  },
  categoriesPage: async ({ page }, use) => {
    const categoriesPage = new CategoriesPage(page);
    await categoriesPage.open();
    await categoriesPage.closPopupOverlay();
    await categoriesPage.closeCookiesAlert();
    await categoriesPage.hideHeader();
    await use(categoriesPage);
  },
});
export { expect } from '@playwright/test';
