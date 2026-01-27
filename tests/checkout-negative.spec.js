import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';
import { CheckoutPage } from '../pages/CheckoutPage';

let cartPage;
let inventoryPage;
let loginPage;
let checkoutPage;

test.describe('Suite for Checkout Negative Scenarios', () => {
    test.beforeEach(async ({ page }) => {
        cartPage = new CartPage(page);
        checkoutPage = new CheckoutPage(page);
        inventoryPage = new InventoryPage(page);
        loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.VALID_USER, process.env.VALID_PASSWORD);
        await loginPage.loginButton.click();

    });

    test('Validate missing first name error', async () => {
        const errorMessage = 'Error: First Name is required';

        await inventoryPage.validateIsVisible();
        await inventoryPage.goToCart();

        await cartPage.validateIsVisible();
        await cartPage.procedToCheckout();

        await checkoutPage.validateInformationIsVisible();
        await checkoutPage.fillPersonalInformation('', '', '');
        await checkoutPage.procedToContinue();

        await expect(checkoutPage.errorMessageContainer).toBeVisible();
        await expect(checkoutPage.errorMessageContainer).toContainText(errorMessage, { exact: true });

    });

     test('validate missing last name error', async () => {
        const errorMessage = 'Error: Last Name is required';

        await inventoryPage.validateIsVisible();
        await inventoryPage.goToCart();

        await cartPage.validateIsVisible();
        await cartPage.procedToCheckout();

        await checkoutPage.validateInformationIsVisible();
        await checkoutPage.fillPersonalInformation('Jose Luis', '', '06524-003');
        await checkoutPage.procedToContinue();

        await expect(checkoutPage.errorMessageContainer).toBeVisible();
        await expect(checkoutPage.errorMessageContainer).toContainText(errorMessage, { exact: true });

    });

     test('validate missing postal code erro', async () => {
        const errorMessage = 'Error: Postal Code is required';

        await inventoryPage.validateIsVisible();
        await inventoryPage.goToCart();

        await cartPage.validateIsVisible();
        await cartPage.procedToCheckout();

        await checkoutPage.validateInformationIsVisible();
        await checkoutPage.fillPersonalInformation('Jose Luis', 'Amancio', '');
        await checkoutPage.procedToContinue();

        await expect(checkoutPage.errorMessageContainer).toBeVisible();
        await expect(checkoutPage.errorMessageContainer).toContainText(errorMessage, { exact: true });

    });
})