import HomePage from "./homePage.js";

class WhatsNewPage {
    constructor(page) {
        this.page = page
    }

    locators = {
        getPageHeader: () => this.page.getByRole('heading').first(),
        getLogoLink: () => this.page.getByLabel('store logo'),
        getHeaderText: () => this.page.getByRole('heading', {name: "What's New"}),
        getMenuNewInMens: () => this.page.getByText("New in men's"),
    }

    async clickLogoLink() {
        await this.locators.getLogoLink().click();

        return new HomePage(this.page);
    }
}
export default WhatsNewPage;
