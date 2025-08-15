import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabsLocator: Locator;
  private readonly menuLocator: Locator;

  constructor(page) {
    super(page);
    this.headerLocator = this.page.locator('header');
    this.categoriesTabsLocator = this.page.locator('.wdp-tabs-module__tabs');
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
  }

  async open() {
    this.page.goto('https://rutube.ru/');
  }

  async headerHasCorrectAriaSnapShot() {
    await expect(this.headerLocator).toMatchAriaSnapshot();
  }

  async categoriesTabsHasCorrectAriaSnapShot() {
    await expect(this.categoriesTabsLocator).toMatchAriaSnapshot();
  }

  async menuHasCorrectAriaSnapShot() {
    await expect(this.menuLocator).toMatchAriaSnapshot();
  }
}
