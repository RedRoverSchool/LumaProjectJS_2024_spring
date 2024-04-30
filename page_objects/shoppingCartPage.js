
class ShoppingCartPage {
    constructor(page) {
        this.page = page;
    }
    locators = {
        getMoveToWishListLink: () => this.page.getByText('Move to Wishlist'),
        getAlerMessageAddToWishList: () => this.page.locator(`.message-success`),

    }

    async clickMoveToWishListLink() {
        await this.locators.getMoveToWishListLink().click();

        return this;
    }
}

export default ShoppingCartPage;