import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async closeCookiesAlert() {
    await this.page
      .locator('.cookie-notify-module__cookie-consent')
      .getByRole('button', { name: 'Ок', exact: true })
      .click();
  }

  async closPopupOverlay() {
    await this.page
      .locator('.wdp-popup-overlay-module__overlay')
      .getByRole('button', { name: 'Закрыть' })
      .click();
  }
}
