class TopsWomenPage {
    constructor (page) {
        this.page = page;
    }

    locators = {
        getWomenTopsPageHeader: () => this.page.getByRole('heading', { name: 'Tops' }),
        getWomenMyWishListHeading: () => this.page.getByRole('heading', { name: 'My Wish List' }),
        getWomenMyWishListEmptyMessage: () => this.page.locator('div.block.block-wishlist .empty'),
        getCategoryFilterOption: () => this.page.getByRole("tab", { name: "Category" }),
        getFilterOptionJacketsLink: () => this.page.getByRole("link", { name: "Jackets" }),        
        getArrayAllItems: () => this.page.locator(".products .product-items .product-item-link").allTextContents(),
    }

    async clickCategoryFilterOption() {
        await this.locators.getCategoryFilterOption().click();

        return this.page;
    }
    async clickFilterOptionJacketsLink() {
        await this.locators.getFilterOptionJacketsLink().click();

        return this.page;
    }      
 }

export default TopsWomenPage;