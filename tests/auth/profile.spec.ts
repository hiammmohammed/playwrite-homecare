import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProfilePage } from '../../pages/ProfilePage';
import { environment } from '../../config/environment';

test('profile data - real API', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);

  await loginPage.goto();
  await loginPage.login(environment.email, environment.password);

  // 🔥 مهم جدًا
  await expect(page).toHaveURL(/dashboard|home/);

  await page.goto(`${environment.baseUrl}/profile`);

  await expect(profilePage.name).toBeVisible();
});