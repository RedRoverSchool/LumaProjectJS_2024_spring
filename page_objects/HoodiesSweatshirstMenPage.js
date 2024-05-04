import HomePage from "./homePage"

class HoodiesSweatshirtsMenPage {
    constructor(page) {
        this.page = page
    }

    locators = {
    };

async clickLogoLink() {
await this.locators.getLogoLink().click();
return new HomePage(this.page);
    }
}
