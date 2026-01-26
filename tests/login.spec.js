import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Suite for Login Functionality', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('Login with valid credentials', async ({ page }) => {
        await loginPage.login(
            process.env.VALID_USER,
            process.env.VALID_PASSWORD,
        );
        await loginPage.submit();
        await expect(page).toHaveURL(process.env.BASE_URL + 'inventory.html');
    });

    test(' Login with valid credentials (Uppercase)', async ({ page }) => {
        const userUpper = process.env.VALID_USER.toUpperCase();
        const passUpper = process.env.VALID_PASSWORD.toUpperCase();
        await loginPage.login(userUpper, passUpper);
        await loginPage.submit();
        await expect(loginPage.errorMessageContainer).toBeVisible();
        await expect(loginPage.errorMessageContainer).toContainText(
            'Epic sadface: Username and password do not match any user in this service',
            { exact: true },
        );
    });

    test('Login with invalid User and valid Password', async ({ page }) => {
        await loginPage.login('invalid_user', process.env.VALID_PASSWORD);
        await loginPage.submit();
        await expect(loginPage.errorMessageContainer).toBeVisible();
        await expect(loginPage.errorMessageContainer).toContainText(
            'Epic sadface: Username and password do not match any user in this service',
            { exact: true },
        );
    });

    test('Login with valid User and invalid Password', async ({ page }) => {
        await loginPage.login(process.env.VALID_USER, 'invalid_password');
        await loginPage.submit();
        await expect(loginPage.errorMessageContainer).toBeVisible();
        await expect(loginPage.errorMessageContainer).toContainText(
            'Epic sadface: Username and password do not match any user in this service',
            { exact: true },
        );
    });

    test('Login with invalid credentials', async ({ page }) => {
        await loginPage.login('invalid_user', 'invalid_password');
        await loginPage.submit();
        await expect(loginPage.errorMessageContainer).toBeVisible();
        await expect(loginPage.errorMessageContainer).toContainText(
            'Epic sadface: Username and password do not match any user in this service',
            { exact: true },
        );
    });

    test('Login with empty User and valid Password', async ({ page }) => {
        await loginPage.login('', process.env.VALID_PASSWORD);
        await loginPage.submit();
        await expect(loginPage.errorMessageContainer).toBeVisible();
        await expect(loginPage.errorMessageContainer).toContainText(
            'Epic sadface: Username is required',
            { exact: true },
        );
    });

    test('Login with valid User and empty Password', async ({ page }) => {
        await loginPage.login(process.env.VALID_USER, '');
        await loginPage.submit();
        await expect(loginPage.errorMessageContainer).toBeVisible();
        await expect(loginPage.errorMessageContainer).toContainText(
            'Epic sadface: Password is required',
            { exact: true },
        );
    });

    test('Login with empty User and Password', async ({ page }) => {
        await loginPage.submit();
        await expect(loginPage.errorMessageContainer).toBeVisible();
        await expect(loginPage.errorMessageContainer).toContainText(
            'Epic sadface: Username is required',
            { exact: true },
        );
    });

    test.only('Login with locked out user', async ({ page }) => {
        await loginPage.login(process.env.LOCKED_USER, process.env.VALID_PASSWORD);
        await loginPage.submit();
        await expect(loginPage.errorMessageContainer).toBeVisible();
        await expect(loginPage.errorMessageContainer).toContainText(
            'Epic sadface: Sorry, this user has been locked out.',
            { exact: true },
        );
    })

});
