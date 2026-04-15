import { Page } from '@playwright/test';
import { environment } from '../config/environment';

export class ProfilePage {
  constructor(private page: Page) {}

  get name() {
    return this.page.locator('a[href*="/patients/"]').first();
  }

//  get email() {
//     return this.page.locator('#profile-email');
//   }
}