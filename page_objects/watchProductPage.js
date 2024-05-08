import GearWatchesPage from "../page_objects/gearWatchesPage.js";
class WatchProductPage {
  constructor(page) {
    this.page = page;
  }

  locators = {
    getMoreInformationSection: () =>
      this.page.getByRole("tab", { name: "More Information" }),
    getWaitToMoreInformationSectionContent: () =>
      this.page.waitForSelector("#product-attribute-specs-table"),
    getMoreInformationSectionContent: () =>
      this.page.locator("table#product-attribute-specs-table tbody"),
    getSaleItemsNumber:() => this.page.locator('.toolbar-products .toolbar-amount .toolbar-number').first().innerText(),
    getSaleWatches:() => this.page.locator('.product-items').getByRole('listitem').count()
  };

  async openMoreInformationSection() {
    await this.locators.getMoreInformationSection().click();

    return this;
  }

  async goBackToGearWatchesPage() {
    await this.page.goBack();

    return new GearWatchesPage(this.page);
  }
}

export default WatchProductPage;