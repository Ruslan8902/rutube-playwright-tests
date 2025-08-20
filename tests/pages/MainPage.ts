import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { threadId } from 'worker_threads';

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
  private readonly userLogoLocator: Locator;
  private readonly headerUserMenuLocator: Locator;

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
    this.userLogoLocator = this.page.getByRole('img', { name: 'Иконка канала channel64657349' });
    this.headerUserMenuLocator = this.page.getByText(
      'channel64657349ca****@mail.ruПрофильМой каналСтудия RUTUBEВыйти',
    );
  }

  // Actions
  async open() {
    await this.page.goto('https://rutube.ru/');
  }

  async openFullMenu() {
    await this.menuButtonLocator.click();
  }

  async openHeaderMenu() {
    await this.userLogoLocator.click();
  }

  async changeThemeToWhite() {
    await this.changeThemeButtonLocator.click();
  }

  async openAddPopupList() {
    await this.headerAddButtonLocator.click();
  }

  async openNotificationsPopup() {
    await this.headerNotificationsButtonLocator.click();
  }
  async openAuthorizationModal() {
    await this.headerLoginButtonLocator.click();
  }

  // Assetrions
  async headerHasCorrectAriaSnapShot() {
    await this.checkAriaSnapshot(this.headerLocator, 'headerAriaSnapshot.yml');
  }

  async categoriesTabsHasCorrectAriaSnapShot() {
    await this.checkAriaSnapshot(this.categoriesTabsLocator, 'categoriesTabsAriaSnapshot.yml');
  }

  async menuHasCorrectAriaSnapShot() {
    await this.checkAriaSnapshot(this.menuLocator, 'menuAriaSnapshot.yml');
  }

  async addPopupListHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(
      this.headerAddButtonPopupListLocator,
      'addPopupListAriaSnapshot.yml',
    );
  }

  async notificationsPopupHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(
      this.headerNotificationsPopupLocator,
      'notificationsPopupAriaSnapshot.yml',
    );
  }

  async authorizationModalHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(
      this.authorizationModalLocator,
      'authorizationModalAriaSnapshot.yml',
    );
  }

  async fullMenuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.openMenuAriaLocator, 'fullMenuAriaSnapshot.yml');
  }

  async headerUserManuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerUserMenuLocator, 'headerUserMenuAriaSnapshot.yml');
  }

  async checkThemeAttributeValue(attributeValue: 'dark2021' | 'white2022') {
    await expect(this.page.locator('html')).toHaveAttribute('data-pen-theme', attributeValue);
  }
}
