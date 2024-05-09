import MenTopsPage from '../page_objects/menTopsPage.js';

class ProductCardPage {
  constructor(page) {
    this.page = page;
  }

  locators = {
    getRelatedProductsSection: () => this.page.locator("div.block.related"),
    getRelatedProductsSectionTitle: () =>
      this.page.locator("#block-related-heading"),
    getListOfRelatedProductsTitles: () =>
      this.page.locator("strong.product.name.product-item-name a"),
    getRelatedProductsTitle: (i) =>
      this.page.locator("strong.product.name.product-item-name a").nth(i),
    getProductCardTitile: () => this.page.locator("h1.page-title"),
  };

  async goBackToMenTopsPage() {
    await this.page.goBack();

    return new MenTopsPage(this.page);
  }

  async openRelatedProductCard(idx) {
    await this.locators.getRelatedProductsTitle(idx).click();

    return new ProductCardPage(this.page);
  }

  async goBackToProductCardPage() {
    await this.page.goBack();

    return new ProductCardPage(this.page);
  }
}

export default ProductCardPage;
