import MenPage from "./menPage";
import { LIST_CATEGORY_MEN_BOTTOMS, LIST_OF_SUB_CATEGORY_ON_MEN_BOTTOMS_PAGE_LOCATORS } from "../helpers/testData";

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
        getMenBottomsShopingOptionsSidebarTitle: () => this.page.getByRole('heading', {name: 'Shopping Options'}),
        getMenBottomsShopingOptionsSidebarPosition: () => this.page.locator('.sidebar.sidebar-main'),
        getMenBottomsCategory: () => this.page.locator('.filter-options-title').getByText('Category'),
        getMenBottomsSubCategory: (i) => this.page.locator(LIST_OF_SUB_CATEGORY_ON_MEN_BOTTOMS_PAGE_LOCATORS[i]),
        getMenBottomsCategoryValue: (i) => this.page.locator('.filter-value').getByText(LIST_CATEGORY_MEN_BOTTOMS[i]),
    }

    async clickBreadcrumbsMenuMen() {
        await this.locators.breadcrumbsMenuMen().click();

        return new MenPage(this.page);
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

    async clickMenBottomsSubCategory(i) {
        await this.locators.getMenBottomsSubCategory([i]).click();

        return this.page;
    }
}
export default MenBottomsPage;