import TrainingPage from "./trainingPage";
import PushItMessengerBagPage from "./pushItMessengerBagPage";
import BagItemPage from "./bagItemPage";

class GearBagsPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getPushItMessengerItem: () => this.page.getByRole('link', { name: 'Push It Messenger Bag' }).first(),
        getPushItMessengerItemAddtoCampare: () => this.page.locator('li').filter({ hasText: 'Push It Messenger Bag Rating' }).getByLabel('Add to Compare'),
        getTrainingLink: () => this.page.getByRole('menuitem', { name: 'Training' }),
        getGearBagsPageHeader: () => this.page.getByRole('heading', { name: 'Bags' }),
        getMaterialOption: () => this.page.getByRole("tab", { name: "Material" }),
        getMateialItemList: () => this.page.locator('.filter-options>:nth-child(5) li'),
        getInactiveSecondPagePaginationLink: () =>this.page.locator('.items.pages-items').getByRole('link', { name: 'Page 2' }),
		getPaginationSecondPageAttr: () => this.page.locator('div.pages li').nth(2),
		getPaginationFirstPageAttr: () => this.page.locator('div.pages li').nth(1),
        getMateialLeather: () => this.page.getByRole('link', {name: 'Leather'}),
        getProductItamList: () => this.page.getByRole('img'),
        getListMode: () => this.page.getByRole('link', { name: 'List' }),         
    };

    async hoverPushItMessengerItem() {
        await this.locators.getPushItMessengerItem().hover();

        return this;
    } 

	 async clickPushItMessengerItem() {
		await this.locators.getPushItMessengerItem().click();

		return new PushItMessengerBagPage(this.page);
  } 

    async clickgetPushItMessengerItemAddtoCampare() {
        await this.locators.getPushItMessengerItemAddtoCampare().click();

        return this;
    }

    async clickTrainingLink() {
        await this.locators.getTrainingLink().click();

        return new TrainingPage(this.page);
    }

    async clickMaterialOption() {
        await this.locators.getMaterialOption().click();
        await this.locators.getMateialLeather().waitFor();

        return this;
    }

    async getMaterialItemNameText(idx) {
        const text = (await this.locators.getMateialItemList().nth(idx).innerText()).split(' ')[0];

        return text;
    }

    async clickInactiveSecondPagePaginationLink() {
		await this.locators.getInactiveSecondPagePaginationLink().click()
	}

    async clickMaterialLeather() {
        await this.locators.getMateialLeather().click();

        return this;
    }

    async getNumberOfProductItems() {
        return await this.locators.getProductItamList().count();        
    }

    async clickOneProduct(idx) {
        await this.locators.getProductItamList().nth(idx).click();

        return new BagItemPage(this.page);
    }

    async clickListMode() {
        await this.locators.getListMode().click();

        return this;

    }
}
export default GearBagsPage;