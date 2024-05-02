import HomePage from "./homePage";
import GearBagsPage from "./gearBagsPage"
import GearFitnessPage from "./gearFitnessPage";
import GearWatchesPage from './gearWatchesPage'

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

    async clickSubCategoryBags() {
        await this.locators.getSubCategoryBags().click();

        return new GearBagsPage;
    }

    async clickSubCategoryFitness() {
        await this.locators.getSubCategoryFitness().click();

        return new GearFitnessPage;
    }

    async clickSubCategoryWatches() {
        await this.locators.getSubCategoryWatches().click();

        return new GearWatchesPage;
    }
}

export default GearPage;