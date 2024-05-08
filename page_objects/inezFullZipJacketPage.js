import ShoppingCartPage from "./shoppingCartPage";

class InezFullZipJacketPage {
    constructor(page) {
        this.page = page;
    }
    locators = {
        getInezJacketSizeOptionLable: () => this.page.locator('#option-label-size-143-item-169'),
        getInezJacketColorOptionLable: () => this.page.locator('div.swatch-option.color[option-label="Orange"]'),
        getInezJacketAddToCartButton: () => this.page.getByRole('button', { name: 'Add to Cart' }),
        getCartCounterNumber: () => this.page.locator('.counter-number'),
        getShoppingCartLink: () => this.page.getByRole('link', { name: 'shopping cart' }),

    }
    async clickInezJacketSizeOptionLable() {
        await this.locators.getInezJacketSizeOptionLable().click();

        return this;
    }

    async clickInezJacketColorOptionLable() {
        await this.locators.getInezJacketColorOptionLable().click();

        return this;
    }

    async clickInezJacketAddToCartButton() {
        await this.locators.getInezJacketAddToCartButton().click();

        return this;
    }

    async clickShoppingCartLink() {
        await this.locators.getShoppingCartLink().click();

        return new ShoppingCartPage(this.page);
    }

    async waitForShoppingCartLink() {
        await this.locators.getShoppingCartLink().waitFor();

        return this;
    }

}

export default InezFullZipJacketPage;