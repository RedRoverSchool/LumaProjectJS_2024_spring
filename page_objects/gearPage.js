import HomePage from "./homePage";

class GearPage {
    constructor (page) {
        this.page = page;
    }

    locators = {
        getGearPageHeader: () => this.page.getByRole('heading', { name: 'Gear' }),
        getSubCategoryBags: () => this.page.locator('#narrow-by-list2 > dd > ol > li:nth-child(1) > a'),
        getSubCategoryFitness: () => this.page.locator('#narrow-by-list2 > dd > ol > li:nth-child(2) > a'),
        getSubCategoryWatches: () => this.page.locator('#narrow-by-list2 > dd > ol > li:nth-child(3) > a'),
    }
 }

export default GearPage;