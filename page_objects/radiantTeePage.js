class RadiantTeePage {
    constructor(page) {
        this.page = page;
    }

    locators = {

        getRadiantTeeSizeS: () => this.page.getByText('S', { exact: true }),
        getRadiantTeeSizeM: () => this.page.getByText('M', { exact: true }),
        getRadiantTeeColorBlue: () => this.page.getByRole('option', { name: "Blue" }),
        getAddToCartBtn: () => this.page.getByRole('button', { name: "Add to Cart" }),
        getRadiantTeeHeader: () => this.page.getByRole('heading', {name: 'Radiant Tee'}),
        getRadiantTeeReviewsTab: () => this.page.locator('#product-review-container'),
        getRadiantTeeColorPurple: () => this.page.getByRole('option', { name: "Purple" }),
        getRadiantTeeSizeMChoose: () => this.page.locator('.swatch-attribute-selected-option')
    }

    async clickRadiantTeeSizeS() {
        await this.locators.getRadiantTeeSizeS().click();

        return this.page;
    }

    async clickRadiantTeeSizeM() {
        await this.locators.getRadiantTeeSizeM().click();

        return this.page;
    }

    async clickRadiantTeeColorBlue() {
        await this.locators.getRadiantTeeColorBlue().click();

        return this.page;
    }

    async clickAddToCartBtn() {
        await this.locators.getAddToCartBtn().click();

        return this.page;
    }
    async clickRadiantTeeColorPurple() {
        await this.locators.getRadiantTeeColorPurple().click();

        return this.page;
    }
}
export default RadiantTeePage