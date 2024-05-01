class ProductPage {
    constructor (page) {
        this.page = page;
    }

    locators = {
        getProductName: () => this.page.getByRole('heading'),
    }

    // async obtainProductNameText() {
    //     await this.locators.getProductName().toHaveTe;
    //     return 
    // }
}

export default ProductPage;