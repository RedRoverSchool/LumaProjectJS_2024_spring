import MenPage from "./menPage";

import WishListPage from "./wishListPage";

import { LIST_CATEGORY_MEN_BOTTOMS, LIST_OF_SUB_CATEGORY_ON_MEN_BOTTOMS_PAGE_LOCATORS } from "../helpers/testData";
import PierceGymShortPage from "./pierceGymShortPage";


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
        getMyWishList: () => this.page.getByText('Pierce Gym Short $27.00 Add'),

        getMenBottomsShopingOptionsSidebarTitle: () => this.page.getByRole('heading', {name: 'Shopping Options'}),
        getMenBottomsShopingOptionsSidebarPosition: () => this.page.locator('.sidebar.sidebar-main'),


        getMenBottomsCategory: () => this.page.getByText('Category'),
        getMenBottomsSubCategory: (i) => this.page.locator(LIST_OF_SUB_CATEGORY_ON_MEN_BOTTOMS_PAGE_LOCATORS[i]),
        getMenBottomsCategoryValue: (i) => this.page.locator('.filter-value').getByText(LIST_CATEGORY_MEN_BOTTOMS[i]),

        getMenBottomsFilterGrid: () => this.page.locator('strong[title="Grid"]').first(),
        getMenBottomsDefault12ItemCard: () => this.page.locator('li[class = "item product product-item"]'),
        getMenBottomsParagraphFilterGridText: () => this.page.locator('#maincontent').getByRole('paragraph'),
        getMenBottomsFilterListIcon:() => this.page.locator('a[class="modes-mode mode-list"]').first(),
        getMenBottomsFilterList: () => this.page.locator('strong[title="List"]').first(),
        getMenBottomsDefault10ItemCardList: () => this.page.locator('li[class = "item product product-item"]'),
        getMenBottomsParagraphFilterListText: () => this.page.locator('#maincontent').getByRole('paragraph'),

        getMenBottomsClearCategoryFilterLocator: () => this.page.locator('.action.clear.filter-clear'),
        getMenBottomsCategoryListOfItemsLocator: () => this.page.locator('#narrow-by-list > .active > .filter-options-content > ol > li'),
        getMenBottomsCategoryPants: () => this.page.locator(".filter-options li a[href$='bottoms-men.html?cat=18']"),
        getMenBottomsClearAllButton: () => this.page.getByRole('link', {name: 'Clear All'}),
    }

    async clickBreadcrumbsMenuMen() {
        await this.locators.breadcrumbsMenuMen().click();

        return new MenPage(this.page);
    }

    async ckickPierceGymc() {
        await this.locators.getPierceGymclick().click();
        return new PierceGymShortPage(this.page);
    }

    async getPositionOfSidebar() {
        const position = await this.page.$eval('.sidebar.sidebar-main', sidebar => {
            return window.getComputedStyle(sidebar).float;
          });

          return position;
    }

    async hoverMenBottomsCategory() {
        await this.locators.getMenBottomsCategory().hover();

        return this.page;
    }

    async clickMenBottomsCategory() {
        await this.locators.getMenBottomsCategory().click();

        return this.page;
    }

    async hoverMenBottomsSubCategory(i) {
        await this.locators.getMenBottomsSubCategory([i]).hover();

        return this.page;
    }

    async clickMenBottomsSubCategory(i) {
        await this.locators.getMenBottomsSubCategory([i]).click();

        return this.page;
    }

    async clickMenBottomsFilterList(){
        await this.locators.getMenBottomsFilterListIcon().click();

        return this.page;
    }

    async waitForTimeout(timeout) {
        await this.page.waitForTimeout(timeout);

        return this.page;
    }

    async clickMenBottomsClearCategoryFilter() {
        await this.locators.getMenBottomsClearCategoryFilterLocator().click();

        return this.page;
    }

    async clickMenBottomsCategoryPants() {
        await this.locators.getMenBottomsCategoryPants().click();

        return this.page;
    }

    async clickMenBottomsClearAllButton() {
        await this.locators.getMenBottomsClearAllButton().click();

        return this.page;
    }
}

export default MenBottomsPage;