import WhatsNewPage from "./whatsNewPage.js";
import WomenPage from "./womenPage.js";
import MenPage from "./menPage";
import RadiantTeePage from "./radiantTeePage.js";
import CreateAccountPage from "./createAccountPage.js";

class HomePage {
  constructor(page) {
    this.page = page;
  }

  locators = {
    getWhatsNewLink: () => this.page.getByRole("listitem").filter({ hasText: "What's New" }),
    getWomenLink: () => this.page.locator(".nav-sections .navigation li a[href$='/women.html']"),
    getMenLink: () => this.page.getByRole('menuitem', {name: 'Men'}).last(),
    getSearchInputField: () => this.page.getByPlaceholder("Search entire store here..."),
    getWaitForAutocompleteSearchItems: () => this.page.waitForSelector("#search_autocomplete>ul>li>span:first-child"),
    getAutocompleteSearchItems: () => this.page.locator("#search_autocomplete>ul>li>span:first-child"),
    getSearchButton: () => this.page.locator('button[title="Search"]'),
    getRadiantTee: () => this.page.getByTitle('Radiant Tee'),
    getCreateAccountLink: () => this.page.getByRole('link', {name: 'Create an Account'})
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

  async clickMenLink() {
    await this.locators.getMenLink().click();

    return new MenPage(this.page);
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

    async clearSearchInputField() {
        await this.locators.getSearchInputField().clear();

        return this;
    }

  async clickRadiantTee() {
        await this.locators.getRadiantTee().click();

        return new RadiantTeePage(this.page);
  }

  async clickCreateAccountLink(){
    await this.locators.getCreateAccountLink().click();

    return new CreateAccountPage(this.page);
  }
}
export default HomePage;
