import { test, expect } from '../../config/auth.fixture';
import { LoginPage } from '../../pages/LoginPage';
import { ProfilePage } from '../../pages/ProfilePage';
import { environment } from '../../config/environment';

test('profile data - real API', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);

  await loginPage.login(environment.email, environment.password);

  await expect(page).toHaveURL(/dashboard/);

  await page.goto(`${environment.baseUrl}/patients`);

  await profilePage.patientName.click();

  await expect(page).toHaveURL(/patients/);

  await expect(profilePage.profileHeader).toBeVisible();
});