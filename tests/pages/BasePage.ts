import { expect, Locator, Page } from '@playwright/test';

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

  protected async checkAriaSnapshot(locator: Locator, ariaName: string) {
    await expect(locator).toMatchAriaSnapshot({ name: ariaName });
  }

  protected async checklLayoutByScreenshot(locator: Locator, screenshotName: string) {
    await expect(locator).toHaveScreenshot(screenshotName, { maxDiffPixelRatio: 0.03 });
  }

  protected async hideElement(selector: string) {
    await this.page.evaluate((selector) => {
      const element = document.querySelector(selector);
      if (element) {
        (element as HTMLElement).style.display = 'none';
      }
    }, selector);
  }
}
