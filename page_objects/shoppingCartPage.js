
class ShoppingCartPage {
    constructor(page) {
        this.page = page;
    }
    locators = {
        getMoveToWishListLink: () => this.page.getByText('Move to Wishlist'),
    }
}

export default ShoppingCartPage;