import { expect } from '@playwright/test';

export class InventoryPage {
    constructor(page) {
        this.page = page;

        this.pageTitle = page.getByText('Products', { exact: true });
        this.productAddButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartItemsCounter = page.locator('.shopping_cart_badge');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async validateIsVisible() {
        await expect(this.page).toHaveURL(/inventory/);
        await expect(this.pageTitle).toBeVisible();
    }

    async validateCartBadge(expectedCount) {
        await expect(this.cartItemsCounter).toHaveText(expectedCount);
    }

    async addProduct() {
        await this.productAddButton.click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}                                        