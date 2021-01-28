import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage,
         SummaryStepPage, SignInStepPage, AddressStepPage, ShippingStepPage,
         PaymentStepPage, BankPaymentPage, OrderSummaryPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    // await(browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.goToProductMenu();
    await(browser.sleep(5000));
    await productAddedModalPage.addToCart();
    // await(browser.sleep(1000));
    await summaryStepPage.proceedCheckout();
    // await(browser.sleep(3000));

    await signInStepPage.signIn('aperdomobo@gmail.com', 'WorkshopProtractor');
    // await(browser.sleep(3000));

    await addressStepPage.proceedCheckout2();
    // await(browser.sleep(3000));

    await shippingStepPage.markCheckbox();
    // await(browser.sleep(3000));

    await shippingStepPage.proceedCheckout3();
    // await(browser.sleep(3000));
    await paymentStepPage.selectPaymentMethod();
    // await(browser.sleep(3000));
    await bankPaymentPage.confirmOrder();
    // await(browser.sleep(3000));

    await expect(orderSummaryPage.finishOrder())
      .toBe('Your order on My Store is complete.');
  });
});
