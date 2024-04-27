class MenPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getMenPageHeader: () => this.page.locator('.page-title'),
        getCompareProducts: () => this.page.locator('[role="heading"]').first(),
        getMyWishList: () => this.page.locator('[role="heading"]').nth(1)
    }
}

export default MenPage;