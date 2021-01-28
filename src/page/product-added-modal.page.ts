import { $, browser, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private cartButton: ElementFinder;

  constructor () {
    this.cartButton = $('[style*="display: block;"] .button-container > a');
    browser.manage().timeouts().implicitlyWait(1000);
  }

  public async addToCart(): Promise<void> {
    await this.cartButton.click();
  }

}
