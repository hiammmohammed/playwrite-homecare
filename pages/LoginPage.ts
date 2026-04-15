import { Page, expect } from '@playwright/test';
import { environment } from '../config/environment';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(`${environment.baseUrl}/auth/login`);
  }

  get emailInput() {
    return this.page.locator('[formcontrolname="email"]');
  }

  get passwordInput() {
    return this.page.locator('input[type="password"]');
  }

  get rememberMeCheckbox() {
    return this.page.locator('input[type="checkbox"]');
  }

  get loginBtn() {
    return this.page.getByRole('button', { name: /Sign In/i });
  }

  get errorMessage() {
    return this.page.getByText('Invalid credentials'); 
    
  }

 async login(email: string, password: string) {
  await this.emailInput.fill(email);
  await this.passwordInput.fill(password);

  await Promise.all([
    this.page.waitForNavigation(),
    this.loginBtn.click()
  ]);

    // if (rememberMe) {
    //   await this.rememberMeCheckbox.check();
    // }

    await this.loginBtn.click();
  }

  async expectLoginSuccess() {
    await expect(this.page).not.toHaveURL(/auth\/login/);
  }

  async expectLoginFailed() {
    await expect(this.errorMessage).toBeVisible();
  }

}