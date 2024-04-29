class TopsWomenPage {
    constructor (page) {
        this.page = page;
    }

    locators = {
        getWomenTopsPageHeader: () => this.page.getByRole('heading', { name: 'Tops' }),
        getWomenMyWishListHeading: () => this.page.getByRole('heading', { name: 'My Wish List' }),
        getWomenMyWishListEmptyMessage: () => this.page.locator('div.block.block-wishlist .empty'),
    }
 }

export default TopsWomenPage;