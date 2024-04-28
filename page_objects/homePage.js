import WhatsNewPage from "./whatsNewPage.js";
import WomenPage from "./womenPage.js";
import MenPage from "./menPage";
import RadiantTeePage from "./radiantTeePage.js";
import TrainingPage from "./trainingPage.js";
import CreateAccountPage from "./createAccountPage.js";
import MenBottomsPage from "./menBottomsPage";
import MenTopsPage from "./menTopsPage.js";
import BottomsWomenPage from "./bottomsWomenPage.js";
import SearchTermPopularPage from "./searchTermPopularPage.js";


class HomePage {
  constructor(page) {
    this.page = page;
  }

  locators = {
    getWhatsNewLink: () => this.page.getByRole("listitem").filter({ hasText: "What's New" }),
    getWomenLink: () => this.page.locator(".nav-sections .navigation li a[href$='/women.html']"),
    getMenLink: () => this.page.getByRole('menuitem', { name: 'Men' }).last(),
    getMenBottomsLink: () => this.page.getByRole('menuitem', { name: 'Bottoms' }),
    getSearchInputField: () => this.page.getByPlaceholder("Search entire store here..."),
    getWaitForAutocompleteSearchItems: () => this.page.waitForSelector("#search_autocomplete>ul>li>span:first-child"),
    getAutocompleteSearchItems: () => this.page.locator("#search_autocomplete>ul>li>span:first-child"),
    getSearchButton: () => this.page.locator('button[title="Search"]'),
    getSearchInputField: () => this.page.getByPlaceholder("Search entire store here..."),
    getWaitForAutocompleteSearchItems: () => this.page.waitForSelector("#search_autocomplete>ul>li>span:first-child"),
    getAutocompleteSearchItems: () => this.page.locator("#search_autocomplete>ul>li>span:first-child"),
    getRadiantTee: () => this.page.getByTitle('Radiant Tee'),
    getTrainingLink: () => this.page.getByRole('menuitem', { name: 'Training' }),
    getTrainingLink: () => this.page.getByRole('menuitem', { name: 'Training' }),
    getCreateAccountLink: () => this.page.getByRole('link', { name: 'Create an Account' }),
    getMenTopsLink: () => this.page.locator('#ui-id-17'),
    getCreateAccountLink: () => this.page.getByRole('link', { name: 'Create an Account' }),
    getBottomsWomenLink: () => this.page.getByRole('menuitem', { name: 'Bottoms' }),
    getSearchTermPopularLink: () => this.page.getByRole('link', { name: 'Search Terms' }),
    getFirstCardImage: () => this.page.getByAltText('Radiant Tee'),

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

  async clickTrainingLink() {
    await this.locators.getTrainingLink().click();

    return new TrainingPage(this.page);
  }

  async hoverMenLink() {
    await this.locators.getMenLink().hover();

    return this;
  }

  async clickMenBottomsLink() {
    await this.locators.getMenBottomsLink().click();

    return new MenBottomsPage(this.page);
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

  async hoverMenLink() {
    await this.locators.getMenLink().hover();

    return this;
  }

  async clickRadiantTee() {
    await this.locators.getRadiantTee().click();

    return new RadiantTeePage(this.page);
  }

  async clickCreateAccountLink() {
    await this.locators.getCreateAccountLink().click();

    return new CreateAccountPage(this.page);
  }
  async clickMenTopsLink() {
    await this.locators.getMenTopsLink().click()

    return new MenTopsPage(this.page)
  }

  async clickBottomsWomenLink() {
    await this.locators.getBottomsWomenLink().click();

    return new BottomsWomenPage(this.page);
  }

  async hoverWomenMenuitem() {
    await this.locators.getWomenLink().hover();

    return this;
  }

  async clickSearchTermPopularLink() {
    await this.locators.getSearchTermPopularLink().click();

    return new SearchTermPopularPage(this.page);
  }

  async clickFirstCardImage() {
    await this.locators.getFirstCardImage().click();

    return new RadiantTeePage(this.page);
  }
}
export default HomePage;
