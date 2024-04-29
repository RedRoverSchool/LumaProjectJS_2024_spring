class SalePage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getSideMenuSections: () => this.page.locator('.categories-menu span')
    }

    async obtainSideMenuSectionsText() {
        return await this.locators.getSideMenuSections().allInnerTexts();
    }
}

export default SalePage;
