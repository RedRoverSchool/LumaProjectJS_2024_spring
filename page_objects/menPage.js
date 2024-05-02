import HomePage from "./homePage.js";
import MenHotSellersPage from "./menHotSellersPage.js";
import ProductPage from "./productPage.js";
import MenBottomsPage from "./menBottomsPage.js"

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
        getProductItemLink: () => this.page.locator('.product-item-link').first(),
        getBottomsSideMenuLink: () => this.page.getByRole('link', {name: 'Bottoms'})

    }

    async clickBeadcrumbsMenuHome() {
        await this.locators.breadcrumbsMenuHome().click();

        return new HomePage(this.page);
    }

    async clickMenHotSellersName(productsName) {
        await this.locators.getMenHotSellersName(productsName).click();

        return new MenHotSellersPage(this.page);
    }

    async clickProductItemLink() {
        await this.locators.getProductItemLink().click();
        return new ProductPage(this.page)
    }
      
    async clickBottomsSideMenuLink() {
        await this.locators.getBottomsSideMenuLink().click();

        return new MenBottomsPage(this.page);
    }
}
export default MenPage;
