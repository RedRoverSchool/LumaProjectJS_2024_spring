import HomePage from "./homePage";

class MenPage {
    constructor (page) {
        this.page = page;
    }

    locators = {
        getMenPageHeader: () => this.page.locator('.page-title'),
        getCompareProducts: () => this.page.locator('[role="heading"]').first(),
        getMyWishList: () => this.page.locator('[role="heading"]').nth(1),
        breadcrumbsMenuHome: () => this.page.locator(
            'xpath = //li[@class="item home"]/a[@href="https://magento.softwaretestingboard.com/"]'),
        getCategoryBlock: () => this.page.locator('.options dt'),
        getTopsSubCategoryLink: () => this.page.getByRole('link', { name: 'Tops' }),
        getBottomsSubCategoryLink: () => this.page.getByRole('link', { name: 'Bottoms' }),
        getShopByCategoryBlock: () => this.page.locator('[class="sidebar sidebar-main"]'),
        getSubCaregoriesInCategoryBlock: () => this.page.locator('ol.items li'),
    }

    async clickBeadcrumbsMenuHome() {
        await this.locators.breadcrumbsMenuHome().click();

        return new HomePage(this.page);
    }
}
export default MenPage;