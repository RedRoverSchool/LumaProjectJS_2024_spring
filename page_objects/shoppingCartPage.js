
class ShoppingCartPage {
    constructor(page) {
        this.page = page;
    }
    locators = {
        getMoveToWishListLink: () => this.page.getByText('Move to Wishlist'),
        getAlerMessageAddToWishList: () => this.page.locator(`.page.messages`),
        getEmptyCartMessage: () => this.page.locator(`div.cart-empty`),

    }
    async clickMoveToWishListLink() {
        await this.locators.getMoveToWishListLink().click();

        return this;
    }
    async waitForMoveToWishListLink() {
        await this.locators.getMoveToWishListLink().waitFor();

        return this;
    }
}

export default ShoppingCartPage;