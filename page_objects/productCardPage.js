import MenTopsPage from '../page_objects/menTopsPage.js';

class ProductCardPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getRelatedProductsSection: () => this.page.locator('div.block.related'),
        getRelatedProductsSectionTitle: () => this.page.locator('#block-related-heading'),
    };

    async goBackToMenTopsPage() {
       await this.page.goBack();

       return new MenTopsPage(this.page);
    }
}

export default ProductCardPage;
