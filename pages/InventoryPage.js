import { expect } from '@playwright/test';

export class InventoryPage {
    constructor(page) {
        this.page = page;

        this.title = page.locator('.title');
        this.addToCart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
    }

    async validateIsVisible() {
        await expect(this.page).toHaveURL(/inventory/);
        await expect(this.title).toHaveText('Products', { exact: true });
        await expect(this.title).toBeVisible();
    }

    async addItemToCart() {
        await this.addToCart.click();
    }

}                                        