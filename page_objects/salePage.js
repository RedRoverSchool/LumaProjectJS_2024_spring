import { LIST_OF_ITEMS_IN_MENS_DEALS_ON_SALE_PAGE} from "../helpers/testData.js";
import HoodiesAndSweatshirtsPage from "./hoodiesAndSweatshirtsPage.js";
import JacketsPage from "./jacketsPage.js";
import TeesPage from "./teesPage.js";
import PantsPage from "./pantsPage.js";
import ShortsPage from "./shortsPage.js";
import WomenShortsPage from "./womenShortsPage.js";


class SalePage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getSideMenuSections: () => this.page.locator('.categories-menu span'),
        getItemsFromMensDealsSection: (option) => this.page.getByRole("link", { name: option }).last(), 
        getTitleForEachPageFromMensDeals: () => this.page.locator('#page-title-heading > span'),
        getSalePageHeader: () => this.page.getByRole('heading', { name: 'Sale'}),
        getDealsLocator: () => this.page.locator('.categories-menu span'),
        getWomenShortsLink: () => this.page.getByRole('link', {name:'Shorts'}).first(),


    }

    async obtainSideMenuSectionsText() {
        return await this.locators.getSideMenuSections().allInnerTexts();
    }

    async clickOnItemsFromMensDealsSection(option){

        await this.locators.getItemsFromMensDealsSection(option).click();

        switch (option) {
            case 'Hoodies and Sweatshirts':
                return new HoodiesAndSweatshirtsPage(this.page);
            case 'Jackets':
                return new JacketsPage(this.page);
            case 'Tees':
                return new TeesPage(this.page);
            case 'Pants':
                return new PantsPage(this.page);
            case 'Shorts':
                return new ShortsPage(this.page);
        }}   

    async clickWomensShortsLink() {
        await this.locators.getWomenShortsLink().click();
        return new WomenShortsPage(this.page);
    }
}

export default SalePage;