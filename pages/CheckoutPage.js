import { expect } from '@playwright/test';

export class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.paymentInfo = page.locator('[data-test="payment-info-value"]');
        this.shippingInfo = page.locator('[data-test="shipping-info-value"]');
        this.subTotalLabel = page.locator('[data-test="subtotal-label"]');
        this.taxLabel = page.locator('[data-test="tax-label"]');
        this.totalLabel = page.locator('[data-test="total-label"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.checkoutCompleteTitle = page.locator('[class="title"]');
        this.thankYouMessage = page.locator('[data-test="complete-header"]');
        this.orderDispatchedMessage = page.locator('[data-test="complete-text"]');
        this.burgerMenuButton = page.locator('[id="react-burger-menu-btn"]');
        this.logoutLink = page.locator('[data-test="logout-sidebar-link"]');

    }

    async validateCheckoutInformationPageOne() {
        await expect(this.page).toHaveURL(/checkout-step-one/);
        await expect(this.page.getByText('Checkout: Your Information', { exact: true })).toBeVisible();

    }

    async fillPersonalInformation(firstName, lastName, postalCode) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);

    }

    async proceedToContinue() {
        await this.continueButton.click();

    }

    async validateOverviewDetails() {
         await expect(this.page).toHaveURL(/checkout-step-two/);
         await expect(this.page.getByText('Checkout: Overview', { exact: true })).toBeVisible();
         await expect(this.page.getByText('Payment Information:', { exact: true })).toBeVisible();
         await expect(this.paymentInfo).toHaveText('SauceCard #31337');
         await expect(this.page.getByText('Shipping Information:', { exact: true })).toBeVisible();
         await expect(this.shippingInfo).toHaveText('Free Pony Express Delivery!');
         await expect(this.page.getByText('Price Total', { exact: true })).toBeVisible();
         await expect(this.subTotalLabel).toHaveText('Item total: $29.99');
         await expect(this.taxLabel).toHaveText('Tax: $2.40');
         await expect(this.totalLabel).toHaveText('Total: $32.39');

    }

    async finalizeReviewDetails() {
        await this.finishButton.click();

    }

    async finalizePurchase() {
        const dispatchedMessage = 'Your order has been dispatched, and will arrive just as fast as the pony can get there!';
        await expect(this.page).toHaveURL(/checkout-complete/);
        await expect(this.page.getByText('Checkout: Complete!', { exact: true })).toBeVisible();
        await expect(this.thankYouMessage).toBeVisible();
        await expect(this.thankYouMessage).toHaveText('Thank you for your order!', { exact: true});
        await expect(this.orderDispatchedMessage).toBeVisible();
        await expect(this.orderDispatchedMessage).toHaveText(dispatchedMessage, { exact: true});
         
    }

    async logoutApplication() {
        await this.burgerMenuButton.click();
        await this.logoutLink.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com');
    }
}
