import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private email: ElementFinder;
  private password: ElementFinder;
  private signInButton: ElementFinder;

  constructor () {
    this.email = $('#email');
    this.password = $('#passwd');
    this.signInButton = $('#SubmitLogin > span');
  }

  public async signIn(email: string, password: string): Promise<void> {
    await this.email.sendKeys(email);
    await this.password.sendKeys(password);
    await this.signInButton.click();
  }

}
