import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private cartButton: ElementFinder;

  constructor () {
    this.cartButton = $('[style*="display: block;"] .button-container > a');
  }

  public async addToCart(): Promise<void> {
    await this.cartButton.click();
  }

}
