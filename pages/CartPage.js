import { expect } from '@playwright/test';

export class CartPage {
    constructor(page) {
        this.page = page;

        this.pageTitle = page.getByText('Your Cart', { exact: true });
        this.itemQuantity = page.locator('[data-test="item-quantity"]');
        this.cartPrice = page.locator('.inventory_item_price');
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });


    }

    async verifyCartContents() {
        await expect(this.page).toHaveURL(/cart/);
        await expect(this.pageTitle).toBeVisible();
        await expect(this.itemQuantity).toHaveText(expextedQty);
        await expect(this.cartPrice).toHaveText(expectedPrice);
        await expect(this.cartBadge).toHaveText(expectedQty);

    }

    async proceedToCheckOut() {
        await this.checkoutButton.click();
    }
}
