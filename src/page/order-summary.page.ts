import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private finish: ElementFinder;

  constructor () {
    this.finish = $('#center_column > div > p > strong');
  }

  public async finishOrder(): Promise<String> {
    return await this.finish.getText();
  }

}
