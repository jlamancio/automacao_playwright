import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

let loginPage;
let inventoryPage;
let cartPage;
let checkoutPage;

test.describe('Checkout - End to End (E2E)', () => {
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
        checkoutPage = new CheckoutPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.VALID_USER, process.env.VALID_PASSWORD);
        await loginPage.loginButton.click();

    });

    test('Should complete a purchase starting from the inventory page', async () => {
        await test.step('Select a product and add it to the cart', async () => {
            await inventoryPage.validateIsVisible();
            await inventoryPage.addProduct();
            await inventoryPage.validateCartBadge('1');
            await inventoryPage.goToCart();

        });

        await test.step('Validate cart items and proceed to checkout', async () => {
            await cartPage.validateIsVisible
            await cartPage.verifyCartContents('1', '$29.99');
            await cartPage.procedToCheckout();

        });

        await test.step('Fill in personal information and continue checkout', async () => {
            await checkoutPage.validateInformationIsVisible();
            await checkoutPage.fillPersonalInformation('Jose Luis', 'Amancio', '06524-003');
            await checkoutPage.procedToContinue();

        });

        await test.step('Validate overview details and finalize the purchase', async () => {
            await checkoutPage.validateOverviewIsVisible();
            await checkoutPage.validateOverviewDetails('Item total: $29.99', 'Tax: $2.40', 'Total: $32.39');
            await checkoutPage.finishCheckout();

        });

        await test.step('Validate order completion', async () => {
            await checkoutPage.validateCompletePageIsVisible();
            await checkoutPage.finalizePurchase();
            await checkoutPage.logoutApplication();

        });

    });
})