import { Locator, Page } from '@playwright/test';

export class LoginPage {

    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(private page: Page) {

        this.username = page.locator('input[type="email"]');

        this.password = page.locator('input[type="password"]');

        this.loginButton = page.getByRole('button', {
                        name: 'Sign In'
        });

    }

    async login(email: string, password: string) {

        await this.username.fill(email);

        await this.password.fill(password);

        await this.loginButton.click();

    }

}