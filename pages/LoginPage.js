import { expect } from '@playwright/test';

export class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameInput = page.getByPlaceHolder('Username');
        this.passwordInput = page.getByPlaceHolder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });   

    }

    async goto() {
        await this.page.goto('https://saucedemo.com/');

    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        
    }

}