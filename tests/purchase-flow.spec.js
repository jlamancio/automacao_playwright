import { test, expect } from '@playwright/test';

test.describe('Checkout - End to End (E2E)', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://saucedemo.com');
        await expect(page).toHaveTitle('Swag Labs');

        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page).toHaveURL(/inventory/);
        await expect(page.getByText('Products', { exact: true })).toBeVisible();


    });

    test('Should complete a purchase starting from the inventory page', async ({ page }) => {

        await test.step('Acessar vitrine e adicionar produto ao carrinho', async () => {
            const addToCart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
            const cartBadge = page.locator('.shopping_cart_badge');
            const cartLink = page.locator('.shopping_cart_link');

            await addToCart.click();
            await expect(cartBadge).toHaveText('1');
            await cartLink.click();
        });

        await test.step('Validar itens e prosseguir no carrinho', async () => {
            await expect(page).toHaveURL(/cart/);
            const cartBadge = page.locator('.shopping_cart_badge');
            const cartPrice = page.locator('.inventory_item_price');
            const itemQuantity = page.locator('[data-test="item-quantity"]');

            await expect(page.getByText('Your Cart', { exact: true })).toBeVisible();
            await expect(page.getByText('Sauce Labs Backpack', { exact: true })).toBeVisible();
            await expect(itemQuantity).toHaveText('1');
            await expect(cartPrice).toHaveText('$29.99');
            await expect(cartBadge).toHaveText('1');

            await page.getByRole('button', { name: 'Checkout' }).click();
        });

        await test.step('Validar informações pessoais e prosseguir no checkout', async () => {

            await expect(page).toHaveURL(/checkout-step-one/);
            await expect(page.getByText('Checkout: Your Information', { exact: true })).toBeVisible();
            await page.getByPlaceholder('First Name').fill('Jose Luis');
            await page.getByPlaceholder('Last Name').fill('Amancio');
            await page.getByPlaceholder('Zip/Postal Code').fill('06524-003');

            await page.getByRole('button', { name: 'Continue' }).click();
        });

        await test.step('Validar forma de pagamento, valores e seguir para conclusão da compra', async () => {

            await expect(page).toHaveURL(/checkout-step-two/);

            const cardId = page.locator('[data-test="payment-info-value"]');
            const shippInformation = page.locator('[data-test="shipping-info-value"]');
            const subTotalPrice = page.locator('[data-test="subtotal-label"]')
            const tax = page.locator('[data-test="tax-label"]');
            const totalPrice = page.locator('[data-test="total-label"]');


            await expect(page.getByText('Checkout: Overview', { exact: true })).toBeVisible();

            await expect(page.getByText('Payment Information:', { exact: true })).toBeVisible();
            await expect(cardId).toHaveText('SauceCard #31337');

            await expect(page.getByText('Shipping Information:', { exact: true })).toBeVisible();
            await expect(shippInformation).toHaveText('Free Pony Express Delivery!');


            await expect(page.getByText('Price Total', { exact: true })).toBeVisible();
            await expect(subTotalPrice).toHaveText('Item total: $29.99');
            await expect(tax).toHaveText('Tax: $2.40');
            await expect(totalPrice).toHaveText('Total: $32.39');

            await page.getByRole('button', { name: 'Finish' }).click();
        });

        await test.step('Compra finalizada com sucesso', async () => {

            await expect(page).toHaveURL(/checkout-complete/);

            await expect(page.getByText('Checkout: Complete!', { exact: true })).toBeVisible();
            await expect(page.getByText('Thank you for your order!', { exact: true })).toBeVisible();
            await expect(page.getByText('Your order has been dispatched, and will arrive just as fast as the pony can get there!', { exact: true })).toBeVisible();
            await expect(page.getByRole('button', { name: 'Back Home' })).toBeVisible();


        });

        await test.step('Logout application', async () => {
            const burgerMenuButton = await page.locator('#react-burger-menu-btn');
            const logoutLink = await page.locator('#logout_sidebar_link');

            await burgerMenuButton.click();
            await logoutLink.click();

            await expect(page).toHaveURL('https://www.saucedemo.com');
            await expect(page.getByText('Swag Labs', { exact: true })).toBeVisible();
        });
    });

});

