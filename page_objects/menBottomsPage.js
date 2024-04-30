import MenPage from "./menPage";
import WishListPage from "./wishListPage";

class MenBottomsPage {
    constructor(page) {
        this.page = page;
    }
    locators = {
        getBottomsHeading: () => this.page.getByRole('heading', { name: 'Bottoms' }),
        getMenBottomsBreadcrumbs: () => this.page.locator('//div[@class="breadcrumbs"]'),
        getBreadcrumbsMenuHome: () => this.page.locator('[class="item home"]'),
        getBreadcrumbsMenuMen: () => this.page.locator('[class="item category11"]'),
        getBreadcrumbsMenuBottoms: () => this.page.locator('[class="item category13"]'),
        breadcrumbsMenuMen: () => this.page.locator(
            'xpath=//li[@class="item category11"]/a[@href="https://magento.softwaretestingboard.com/men.html"]'),
        // getAddWishListProduct: () => this.page.locator('li').filter({ hasText: 'Pierce Gym Short As low as $' }).getByLabel('Add to Wish List'),
        getPierceGymclick: () => this.page.getByRole('link', { name: 'Pierce Gym Short' }).first(),
        getMyWishList: () => this.page.getByText('Pierce Gym Short $27.00 Add')
    }

    async clickBreadcrumbsMenuMen() {
        await this.locators.breadcrumbsMenuMen().click();

        return new MenPage(this.page);
    }

    // async addWishListProductPierce() {
    //     await this.locators.getAddWishListProduct().click();
    //     return new WishListPage(this.page);


    async ckickPierceGymc() {
        await this.locators.getPierceGymclick().click();
        return this.page;
    }
}

export default MenBottomsPage;