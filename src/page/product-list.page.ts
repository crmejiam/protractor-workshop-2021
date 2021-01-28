import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private productMenu: ElementFinder;

  constructor () {
    this.productMenu = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToProductMenu(): Promise<void> {
    await this.productMenu.click();
  }

}
