import { LIST_OF_SHOPPING_OPTIONS_ON_WATCHES_PAGE_LOCATORS } from "../helpers/testData.js";
import WatchProductPage from "../page_objects/watchProductPage.js";

class GearWatchesPage {
  constructor(page) {
    this.page = page;
  }

    locators = {
        getShoppingOption: (option) => this.page.getByRole("tab", { name: option }),
        getWaitForListOfShoppingOptions: (option, idx) =>
            this.page.waitForSelector(
                LIST_OF_SHOPPING_OPTIONS_ON_WATCHES_PAGE_LOCATORS[idx]
            ),
        getArrayOfShoppingOptions: (option, idx) =>
            this.page
                .locator(LIST_OF_SHOPPING_OPTIONS_ON_WATCHES_PAGE_LOCATORS[idx])
                .allInnerTexts(),
        getNowShoppingBySubtitle: () => this.page.getByText("Now Shopping by"),
        getClearAllButton: () => this.page.locator(".action.clear.filter-clear"),
        getSubMenuItemLink: (option) =>
            this.page.getByRole("link", { name: option }),
        getAllProducts: () => this.page
            .locator("a.product-item-link[href]"),
        getProductPage: (product) => this.page.getByText(product),
        getFilterValue: () => this.page.locator(".filter-value"),
        getSaleOption: () => this.page.getByRole('tab', { name: 'Sale' }),
        getYesOption: () => this.page.getByRole('link', { name: " Yes " }),
        getCategory: () => this.page.locator("#narrow-by-list"),
        getCategoryOptions: () => this.page.locator("a[href*='?category_gear']")
  };

  async clickShoppingOption(option) {
    await this.locators.getShoppingOption(option).click();

    return this;
  }
  async clickClearAllButton() {
    await this.locators.getClearAllButton().click();

    return this;
  }

  async clickSubMenuLink(option) {
    await this.locators.getSubMenuItemLink(option).click();

    return this;
  }

  async openProductPage(product) {
    await this.locators.getProductPage(product).click();

    return new WatchProductPage(this.page);
  }

  async clickSaleOption(){
    await this.locators.getSaleOption().click()
    return this
  }

  async clickYesOption(){
    await this.locators.getYesOption().click()
    return new WatchProductPage(this.page)
  }

  async clickCategory() {
    await this.locators.getCategory().click();

    return this;
  }

  async getOptionsText(idx) {
    const text =(await this.locators.getCategoryOptions().nth(idx).innerText()).split(' ')[0];

    return text;
  }
}
export default GearWatchesPage;