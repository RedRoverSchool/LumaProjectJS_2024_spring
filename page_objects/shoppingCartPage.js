import ShippingPage from "./shippingPage";

class ShoppingCartPage {
    constructor(page) {
        this.page = page;
    }
    locators = {
        getMoveToWishListLink: () => this.page.getByText('Move to Wishlist'),
        getAlerMessageAddToWishList: () => this.page.locator(`.page.messages`),
        getEmptyCartMessage: () => this.page.locator(`div.cart-empty`),
        getOrderTotalText: () => this.page.getByText('Order Total'),
        getProceedToCheckoutButton: () => this.page.locator('button[data-role="proceed-to-checkout"].checkout')

    }

    async clickMoveToWishListLink() {
        await this.locators.getMoveToWishListLink().click();

        return this;
    }

    async waitForMoveToWishListLink() {
        await this.locators.getMoveToWishListLink().waitFor();

        return this;
    }
    async waitForOrderTotalText() {
        await this.locators.getOrderTotalText().waitFor();

        return this;
    }

    async clickProceedToCheckoutButton() {
        await this.locators.getProceedToCheckoutButton().click();

        return new ShippingPage(this.page);
    }
}
export default ShoppingCartPage;