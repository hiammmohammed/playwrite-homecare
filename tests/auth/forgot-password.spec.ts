import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ForgotPasswordPage } from '../../pages/ForgotPasswordPage';

test('forgot password flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const forgotPage = new ForgotPasswordPage(page);

  await loginPage.goto();

  page.getByRole('link', { name: /forgot password/i }).click();

  await expect(forgotPage.mobileOption).toBeVisible();
  await expect(forgotPage.emailOption).toBeVisible();
});