class ProductPage {
    constructor (page) {
        this.page = page;
    }

    locators = {
        getProductName: () => this.page.getByRole('heading'),
    }
}

export default ProductPage;