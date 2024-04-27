import MenPage from "./menPage";

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
            'xpath=//li[@class="item category11"]/a[@href="https://magento.softwaretestingboard.com/men.html"]')
    }

    async clickBreadcrumbsMenuMen() {
        await this.locators.breadcrumbsMenuMen().click();

        return new MenPage(this.page);
    }
}
export default MenBottomsPage;