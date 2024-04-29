class SalePage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getSideMenuSections: () => this.page.locator('.categories-menu span'),
        getSalePageHeader: () => this.page.getByRole('heading', { name: 'Sale'})
    }

    async obtainSideMenuSectionsText() {
        return await this.locators.getSideMenuSections().allInnerTexts();
    }
}

export default SalePage;
