import HomePage from "./homePage";
import MenBottomsPage from "./menBottomsPage";
import MenHotSellersPage from "./menHotSellersPage";
import MenTopsPage from "./menTopsPage";

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
        getMenHotSellersName: (productsName) => this.page.getByTitle(productsName),
        getBottomsSideMenuLink: () => this.page.getByRole('link', { name: 'Bottoms' }),
        getSubCategoryLink: (subCategoryLink) => this.page.getByRole('link', { name: subCategoryLink }),
    }

    async clickBeadcrumbsMenuHome() {
        await this.locators.breadcrumbsMenuHome().click();

        return new HomePage(this.page);
    }

    async clickMenHotSellersName(productsName) {
        await this.locators.getMenHotSellersName(productsName).click();

        return new MenHotSellersPage(this.page);
    }

    async clickBottomsSideMenuLink() {
        await this.locators.getBottomsSideMenuLink().click();

        return new MenBottomsPage(this.page);
    }

    async clickSubCategoryLink(subCategoryLink) {
        await this.locators.getSubCategoryLink(subCategoryLink).click();

        if (subCategoryLink == 'Tops') {
            return new MenTopsPage(this.page);
        } else if (subCategoryLink == 'Bottoms') {
            return new MenBottomsPage(this.page);
        } else {
            throw new Error(`Unknown CategoryLink`)
        }
    }
}
export default MenPage;
