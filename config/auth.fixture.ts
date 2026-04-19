import { test as base, expect, Page } from '@playwright/test';
import { environment } from '../config/environment';

type Fixtures = {
  loggedInPage: Page;
};

export const test = base.extend<Fixtures>({
  loggedInPage: async ({ page }, use) => {
    await page.goto(`${environment.baseUrl}/auth/login`);

    await page.getByLabel('Email').fill(environment.email);
    await page.getByLabel('Password').fill(environment.password);

    await page.getByRole('button', { name: /sign in/i }).click();

    await expect(page).toHaveURL(/dashboard/);

    await use(page);
  },
});

export function generateRandomBledName() {
  const syllables = ['ba','be','bi','bo','bu','da','de','di','do','du','la','le','li','lo','lu','ma','me','mi','mo','mu'];
  const length = Math.random() < 0.5 ? 3 : 4;

  let name = '';
  for (let i = 0; i < length; i++) {
    name += syllables[Math.floor(Math.random() * syllables.length)];
  }

  return name.charAt(0).toUpperCase() + name.slice(1);
}

export { expect };