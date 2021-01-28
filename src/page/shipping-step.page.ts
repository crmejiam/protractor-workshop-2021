import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private termsServiceCheckbox: ElementFinder;
  private proceedButton2: ElementFinder;

  constructor () {
    this.termsServiceCheckbox = $('#cgv');
    this.proceedButton2 = $('#form > p > button > span');
  }

  public async markCheckbox(): Promise<void> {
    await this.termsServiceCheckbox.click();
  }

  public async proceedCheckout3(): Promise<void> {
    await this.proceedButton2.click();
  }

}
