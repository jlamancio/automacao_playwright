import { test, expect } from '@playwright/test';

test.describe('Suite for Purchase Flow', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://saucedemo.com');
        await expect(page).toHaveTitle('Swag Labs');

        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');

        await expect(page).toHaveURL(/inventory/);
        await expect(page.getByText('Products', { exact: true })).toBeVisible();
   
 
    });

    test('Buy a product successfully', async ({ page }) => {
       
        await page.getByRole('link', { hasText: 'Sauce Labs Backpack' }).click();

    

    });
});

