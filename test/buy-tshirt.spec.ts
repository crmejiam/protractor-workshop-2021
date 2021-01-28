import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage,
         SummaryStepPage, SignInStepPage, AddressStepPage, ShippingStepPage,
         PaymentStepPage, BankPaymentPage, OrderSummaryPage } from '../src/page';

describe('Open the website on Chrome', () => {
  it('then should be opened a website', async () => {
    await browser.get('http://automationpractice.com/');
  });
});

describe('Buy a t-shirt', () => {

  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();

  it('then should be bought a t-shirt', async () => {
    // await(browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.goToProductMenu();
    await(browser.sleep(5000));
    await productAddedModalPage.addToCart();
    // await(browser.sleep(1000));
    await summaryStepPage.proceedCheckout();
    // await(browser.sleep(3000));

  });
});

describe('Log in on the website', () => {

  const signInStepPage: SignInStepPage = new SignInStepPage();

  it('then should be logged in on the website', async () => {
    await(browser.sleep(3000));
    await signInStepPage.signIn('aperdomobo@gmail.com', 'WorkshopProtractor');
    await(browser.sleep(1000));
  });
});

describe('Select the default address', () => {

  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();

  it('then should be selected an address', async () => {

    await addressStepPage.proceedCheckout2();
    await(browser.sleep(3000));
    await shippingStepPage.markCheckbox();
    await(browser.sleep(3000));
    await shippingStepPage.proceedCheckout3();
    // await(browser.sleep(3000));

  });
});

describe('Pay in the bank', () => {

  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('then the product should be paid', async () => {

    await paymentStepPage.selectPaymentMethod();
    await(browser.sleep(3000));
    await bankPaymentPage.confirmOrder();
    await(browser.sleep(3000));
    await expect(orderSummaryPage.finishOrder())
      .toBe('Your order on My Store is complete.');

  });
});
