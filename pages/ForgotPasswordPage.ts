import { Page, expect } from '@playwright/test';

export class ForgotPasswordPage {
  constructor(private page: Page) {}

  get mobileOption() {
    return this.page.getByText(/continue with mobile/i);
  }

  get emailOption() {
    return this.page.getByText(/continue with email/i);
  }

  async openMobileFlow() {
    await this.mobileOption.click();
  }

  async openEmailFlow() {
    await this.emailOption.click();
  }

  async goBack() {
    await this.page.getByRole('button', { name: /send in another way/i }).click();
  }
}