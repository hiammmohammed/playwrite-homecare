import { Page } from '@playwright/test';

export class ProfilePage {
  constructor(private page: Page) {}


  get firstPatient() {
    return this.page.locator('tbody tr').first();
  }

  get patientName() {
    return this.page.locator('tbody tr td:nth-child(2) a').first();
  }

  get profileHeader() {
    return this.page.getByRole('heading');
  }
}