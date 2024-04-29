import {LIST_OF_SHOPPING_OPTIONS_ON_WATCHES_PAGE_LOCATORS } from "../helpers/testData.js";

class GearWatchesPage {
  constructor(page) {
    this.page = page;
  }

  locators = {
    getShoppingOptions: (option) =>
      this.page.getByRole("tab", { name: option }),
    getWaitForListOfShoppingOptions: (option, idx) =>
      this.page.waitForSelector(
        LIST_OF_SHOPPING_OPTIONS_ON_WATCHES_PAGE_LOCATORS[idx]
      ),
    getItemOfShoppingOption: (option, idx) =>
      this.page
        .locator(LIST_OF_SHOPPING_OPTIONS_ON_WATCHES_PAGE_LOCATORS[idx])
        .allInnerTexts(),
      getNowShoppingBySubtitle: () => this.page.getByText("Now Shopping by"),
    getClearAllButton: () => this.page.locator(".action.clear.filter-clear"),
  };

  async clickShoppingOptions(option) {
    await this.locators.getShoppingOptions(option).click();

    return this;
    }
    async clickClearAllButton() {
        await this.locators.getClearAllButton().click();

        return this;
    }
}
    export default GearWatchesPage;