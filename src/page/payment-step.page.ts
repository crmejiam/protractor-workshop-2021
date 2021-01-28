import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private bankWireButton: ElementFinder;

  constructor () {
    this.bankWireButton = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async selectPaymentMethod(): Promise<void> {
    await this.bankWireButton.click();
  }

}
