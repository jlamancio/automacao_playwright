import { expect } from '@playwright/test';

export class CartPage {
    constructor(page) {
        this.page = page;

        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartPrice = page.locator('.inventory_item_price');
        this.itemQuantity = page.locator('[data-test="item-quantity"]');
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });

    }

    async verifyCartContents() {
        await expect(this.page).toHaveURL(/cart/);
        await expect(this.page.getByText('Your Cart', { exact: true });
        await expect(this.itemQuantity).toHaveText('1');
        await expect(this.cartPrice).toHaveText('$29.99');
        await expect(this.cartBadge).toHaveText('1');
        
    }

    async proceedToCheckOut() {
        await this.checkoutButton.click();
    }
}
