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
    getQuantity: () => this.page.locator('#qty'),
    getHotSellersProductCardsItemsText: () => this.page.locator('div .product-item-name'), 
    getHotSellersProductCardsItemsPrice: () => this.page.locator('.price'),
    getHotSellersProductCardsItemsLinks: () => this.page.locator('div .product-item-name [href]').all(), 
    getHotSellersProducrPageHeader: () => this.page.locator('.page-title'),
    getHotSellersProductPagePrice: () => this.page.locator('.price-wrapper').first(),
    getProductPageAvailabilityStatus: () => this.page.locator('.stock.available')
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

  async getQuantityValue() {

    return await this.locators.getQuantity().inputValue();
  }

  async enterQuantityNumber(number) {

    await this.page.getByLabel('Qty').fill(number);
    await this.page.getByLabel('Qty').press('Enter');
  }
  async clickHotSellersProductCardsItemsLinks(i) {
    const links = await this.locators.getHotSellersProductCardsItemsLinks();
    await links[i].click();
}

}

export default ProductCardPage;
