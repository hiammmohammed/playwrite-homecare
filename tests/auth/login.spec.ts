import { test, expect } from '../../config/auth.fixture';
import { LoginPage } from '../../pages/LoginPage';
import { environment } from '../../config/environment';

test('login success', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(environment.email, environment.password);

  await expect(page).toHaveURL(/dashboard/);
});