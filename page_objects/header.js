import ShippingPage from "./shippingPage";

class Header {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getLogoLink: () => this.page.getByLabel('store logo'),
        getCounterNumber: ()=> this.page.locator('.counter-number'),        
        getTotalQuantity: ()=> this.page.locator('.count:first-child'),
        getTotalCost: () => this.page.locator('.subtotal .price'),
        getProceedToCheckoutBtn: () => this.page.getByRole('button', {name: 'Proceed to Checkout'}),
        getShoppingCart: () => this.page.getByRole('link', { name: ' My Cart' }),
        getMiniCart: () => this.page.locator('#ui-id-1'),
        getEmptyCardMessage: () => this.page.locator('.block-minicart .subtitle.empty')
    }

    async clickLogoLink() {
        await this.locators.getLogoLink().click();

        return this.page;
    }

    async clickCounterNumber() {
        await this.locators.getCounterNumber().click();

        return this.page;
    }

    async clickProceedToCheckoutBtn() {
        await this.locators.getProceedToCheckoutBtn().click();

        return new ShippingPage(this.page);
    }

}
export default Header;