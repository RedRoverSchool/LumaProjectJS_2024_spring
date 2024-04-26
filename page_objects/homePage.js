import WhatsNewPage from "./whatsNewPage.js";
import WomenPage from "./womenPage.js";

class HomePage {
  constructor(page) {
    this.page = page;
  }

  locators = {
    getWhatsNewLink: () =>
      this.page.getByRole("listitem").filter({ hasText: "What's New" }),
    getWomenLink: () =>
      this.page.locator(".nav-sections .navigation li a[href$='/women.html']"),
    getSearchInputField: () =>
      this.page.getByPlaceholder("Search entire store here..."),
    getWaitForAutocompleteSearchItems: () =>
      this.page.waitForSelector("#search_autocomplete>ul>li>span:first-child"),
    getAutocompleteSearchItems: () =>
      this.page.locator("#search_autocomplete>ul>li>span:first-child"),
  };

  async open() {
    await this.page.goto("/");
  }

  async clickWhatsNewLink() {
    await this.locators.getWhatsNewLink().click();

    return new WhatsNewPage(this.page);
  }

  async clickWomenLink() {
    await this.locators.getWomenLink().click();

    return new WomenPage(this.page);
  }

  async fillSearchInputField(searchQuerry) {
    await this.locators.getSearchInputField().fill(searchQuerry);

    return this;
  }

  async executeSearchAutocompleteList() {
    await this.locators.getWaitForAutocompleteSearchItems();
    const searchAutocompleteList = await this.locators
      .getAutocompleteSearchItems()
      .allInnerTexts();

    return searchAutocompleteList;
  }
}
export default HomePage;
