class ProductCardPage {
    constructor (page) {
        this.page = page;
    }
    
locators = {
    getTitleOfProductCart : () => this.page.locator('span[data-ui-id="page-title-wrapper"]') ,
    getPriceOfProduct : () => this.page.locator('span[id="product-price-1556"]>span'),
    getProductInStock : () => this.page.locator('div[title="Availability"]')
}
}

export default ProductCardPage;