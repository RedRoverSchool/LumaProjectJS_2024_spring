import TeesWomenPage from "./teesWomenPage";

class MenPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getMenPageHeader: () => this.page.locator('.page-title'),
        getCompareProducts: () => this.page.locator('[role="heading"]').first(),
        getMyWishList: () => this.page.locator('[role="heading"]').nth(1)
    }

    async clickWomenTeesLink() {
        await this.locators.getWomenTeesLink().click();

        return new TeesWomenPage(this.page);
    }
}

export default MenPage;