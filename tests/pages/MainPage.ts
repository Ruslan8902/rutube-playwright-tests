import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabsLocator: Locator;
  private readonly menuLocator: Locator;
  private readonly headerAddButtonLocator: Locator;
  private readonly headerNotificationsButtonLocator: Locator;
  private readonly headerLoginButtonLocator: Locator;
  private readonly headerAddButtonPopupListLocator: Locator;
  private readonly headerNotificationsPopupLocator: Locator;
  private readonly authorizationModalLocator: Locator;
  private readonly menuButtonLocator: Locator;
  private readonly openMenuAriaLocator: Locator;
  private readonly changeThemeButtonLocator: Locator;

  constructor(page) {
    super(page);
    this.headerLocator = this.page.locator('header');
    this.categoriesTabsLocator = this.page.locator('.wdp-tabs-module__tabs');
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
    this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить' });
    this.headerNotificationsButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
    this.headerLoginButtonLocator = this.page.getByRole('button', { name: 'Вход и регистрация' });
    this.headerAddButtonPopupListLocator = this.page.locator(
      '.wdp-header-right-module__uploader ul',
    );
    this.headerNotificationsPopupLocator = this.page.locator(
      '.wdp-notifications-popup-module__wrapper',
    );
    this.authorizationModalLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .locator('div[role="form"]');
    this.menuButtonLocator = this.page.getByRole('button', { name: 'Открыть меню навигации' });
    this.openMenuAriaLocator = this.page.locator('.menu-content-module__menuOpen');
    this.changeThemeButtonLocator = this.page.getByRole('button', {
      name: 'Переключить на светлую тему',
    });
  }

  async open() {
    this.page.goto('https://rutube.ru/');
  }
  async openFullMenu() {
    this.menuButtonLocator.click();
  }

  async changeThemeToWhite() {
    await this.changeThemeButtonLocator.click();
  }
  async headerHasCorrectAriaSnapShot() {
    await expect(this.headerLocator).toMatchAriaSnapshot({ name: 'headerAriaSnapshot.yml' });
  }

  async categoriesTabsHasCorrectAriaSnapShot() {
    await expect(this.categoriesTabsLocator).toMatchAriaSnapshot({
      name: 'categoriesTabsAriaSnapshot.yml',
    });
  }

  async menuHasCorrectAriaSnapShot() {
    await expect(this.menuLocator).toMatchAriaSnapshot({ name: 'menuAriaSnapshot.yml' });
  }

  async openAddPopupList() {
    this.headerAddButtonLocator.click();
  }

  async openNotificationsPopup() {
    this.headerNotificationsButtonLocator.click();
  }
  async openAuthorizationModal() {
    this.headerLoginButtonLocator.click();
  }

  async addPopupListHasCorrectAriaSnapshot() {
    await expect(this.headerAddButtonPopupListLocator).toMatchAriaSnapshot({
      name: 'addPopupListAriaSnapshot.yml',
    });
  }

  async notificationsPopupHasCorrectAriaSnapshot() {
    await expect(this.headerNotificationsPopupLocator).toMatchAriaSnapshot({
      name: 'notificationsPopupAriaSnapshot.yml',
    });
  }

  async authorizationModalHasCorrectAriaSnapshot() {
    await expect(this.authorizationModalLocator).toMatchAriaSnapshot({
      name: 'authorizationModalAriaSnapshot.yml',
    });
  }

  async fullMenuHasCorrectAriaSnapshot() {
    await expect(this.openMenuAriaLocator).toMatchAriaSnapshot({
      name: 'fullMenuAriaSnapshot.yml',
    });
  }

  async checkThemeAttributeValue(attributeValue: 'dark2021' | 'white2022') {
    await expect(this.page.locator('html')).toHaveAttribute('data-pen-theme', attributeValue);
  }
}
