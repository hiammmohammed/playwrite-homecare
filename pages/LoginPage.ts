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
    await this.goto();

    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);

  
    await this.loginBtn.click();

    await this.page.waitForURL(/dashboard/);
  }

  async expectLoginSuccess() {
    await expect(this.page).toHaveURL(/dashboard/);
  }

  async expectLoginFailed() {
    await expect(this.errorMessage).toBeVisible();
  }
}