import { expect, Locator, Page } from '@playwright/test';

export class Help {

    constructor(private page: Page) {}

 async selectDropdown(dropdown: Locator, option: string) {
        await dropdown.click();

        const optionLocator = this.page
            .locator('[role="option"]:visible')
            .filter({ hasText: option })
            .first();

        await optionLocator.click();
    }

    async waitLoading() {

        await this.page.waitForLoadState('networkidle');

    }

    async verifyTranslated(locator: Locator) {

    await expect(locator).not.toHaveValue('', {timeout: 10000});

}

}