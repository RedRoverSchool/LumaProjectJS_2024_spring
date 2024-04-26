class Header {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getLogoLink: () => this.page.getByLabel('store logo'),
        getShoppingCartLink: ()=> this.page.locator('.counter-number'),        
        getTotalQuantity: ()=> this.page.locator('.count:first-child'),
        getTotalCost: () => this.page.locator('.subtotal .price')
    }

    async clickLogoLink() {
        await this.locators.getLogoLink().click();

        return this.page;
    }

    async clickShoppingCartLink() {
        await this.locators.getShoppingCartLink().click();

        return this.page;
    }

}
export default Header;