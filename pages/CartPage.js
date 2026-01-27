import { expect } from '@playwright/test';

export class CartPage {
    constructor(page) {
        this.page = page;

        this.pageTitle = page.getByText('Your Cart', { exact: true });
        this.itemQuantity = page.locator('[data-test="item-quantity"]');
        this.cartPrice = page.locator('.inventory_item_price');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });


    }
    async validateIsVisible() {
        await expect(this.page).toHaveURL(/cart/);
        await expect(this.pageTitle).toBeVisible();
    }

    async verifyCartContents(expectedQty, expectedPrice) {

        await expect(this.itemQuantity).toHaveText(expectedQty);
        await expect(this.cartPrice).toHaveText(expectedPrice);
        await expect(this.cartBadge).toHaveText(expectedQty);
    }

    async procedToCheckout() {
        await this.checkoutButton.click();
    }
}
