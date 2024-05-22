import { WOMEN_JACKETS_NAME } from "../helpers/testData";
import InezFullZipJacketPage from "./inezFullZipJacketPage";

class JacketsWomenPage {
    constructor(page) {
        this.page = page;
    }
    locators = {
        getWomenJacketsName: () => this.page.getByRole('link', { name: `${WOMEN_JACKETS_NAME}` }).first(),
        getOlivia14ZipLightJacket: () => this.page.getByRole('link', { name: 'Olivia 1/4 Zip Light Jacket' }).first(),
        getAddToCompareButton : () => this.page.locator('li').filter({ hasText: 'Olivia 1/4 Zip Light Jacket' }).getByLabel('Add to Compare'),
        //getMessageAddedProductComparisonList: () => this.page.locator('div').filter({ hasText: 'Product comparison list' }).first(),
        getMessageAddedProductComparisonList: () => this.page.locator('div.messages a').first()
        

    }
    async clickWomenJacketsName() {
        await this.locators.getWomenJacketsName().click();

        return new InezFullZipJacketPage(this.page);
    }

    async hoverOlivia14ZipLightJacket() {
        await this.locators.getOlivia14ZipLightJacket().hover();

        return this;
    }

    async clickAddToCompareButton() {
        await this.locators.getAddToCompareButton().click();

        return this; 
    }
}

export default JacketsWomenPage;