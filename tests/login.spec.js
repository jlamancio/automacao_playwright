import { test, expect } from '@playwright/test';

test.describe('Suite for Login Functionality', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://saucedemo.com');
        await expect(page).toHaveTitle('Swag Labs');

    });

    test('Login with valid credentials', async ({ page }) => {
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');

        await expect(page).toHaveURL(/inventory/);
        await expect(page.getByText('Products', { exact: true })).toBeVisible();

    });

    test(' Login with valid credentials (Uppercase)', async ({ page }) => {
        await page.fill('#user-name', 'STANDARD_USER');
        await page.fill('#password', 'SECRET_SAUCE');
        await page.click('#login-button');

        await expect(page.getByText('Epic sadface: Username and password do not match any user in this service', { exact: true })).toBeVisible();

    });

    test('Login with invalid User and valid Password', async ({ page }) => {
        await page.fill('#user-name', 'invalid_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');

        await expect(page.getByText(' Epic sadface: Username and password do not match any user in this service', { exact: true })).toBeVisible();

    });

    test('Login with valid User and invalid Password', async ({ page }) => {
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'invalid_password');
        await page.click('#login-button');

        await expect(page.getByText('Epic sadface: Username and password do not match any user in this service', { exact: true })).toBeVisible();

    });

    test('Login with invalid credentials', async ({ page }) => {
        await page.fill('#user-name', 'invalid_user');
        await page.fill('#password', 'invalid_password');
        await page.click('#login-button');

        await expect(page.getByText('Epic sadface: Username and password do not match any user in this service', { exact: true })).toBeVisible();

    });

    test('Login with empty User and valid Password', async ({ page }) => {
        await page.fill('#user-name', '');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');

        await expect(page.getByText(' Epic sadface: Username is required', { exact: true })).toBeVisible();

    });

    test('Login with valid User and empty Password', async ({ page }) => {
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', '');
        await page.click('#login-button');

        await expect(page.getByText('Epic sadface: Password is required', { exact: true })).toBeVisible();

    });

    test('Login with empty User and Password', async ({ page }) => {
        await page.fill('#user-name', '');
        await page.fill('#password', '');
        await page.click('#login-button');

        await expect(page.getByText('Epic sadface: Username is required', { exact: true })).toBeVisible();  
    });

});