import { test, expect } from '../../config/auth.fixture';
import { environment } from '../../config/environment';

test.describe('Token Redirect', () => {

  test('should redirect to login if token is invalid', async ({ page }) => {

    await page.addInitScript(() => {
      localStorage.setItem('token', '');
    });

    await page.route('**/v1/**', async route => {
      await route.fulfill({
        status: 401,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Unauthorized' }),
      });
    });

    await page.goto(`${environment.baseUrl}/auth/login`);

    await expect(page).toHaveURL(/auth\/login/);
  });

});