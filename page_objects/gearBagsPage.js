<<<<<<< HEAD
class GearBagsPage {
    constructor(page) {
        this.page = page;
    };

    locators = {
        getMaterialOption: () => this.page.getByRole("tab", { name: "Material" }),
        getMateialItemList: () => this.page.locator('.filter-options>:nth-child(4) li')
    }
    
    async clickMaterialOption() {
        await this.locators.getMaterialOption().click();

        return this;
    }

    async getMaterialItemNameText(idx) {
        const text = (await this.locators.getMateialItemList().nth(idx).innerText()).split(' ')[0];

        return text;    
    }        
=======
import TrainingPage from "./trainingPage";

class GearBagsPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
		getPushItMessengerItem: () => this.page.getByRole('link', { name: 'Push It Messenger Bag' }).first(),
		getPushItMessengerItemAddtoCampare: () => this.page.locator('li').filter({ hasText: 'Push It Messenger Bag Rating' }).getByLabel('Add to Compare'),
		getTrainingLink: () => this.page.getByRole('menuitem', { name: 'Training' }),
    };

	 async hoverPushItMessengerItem() {
		await this.locators.getPushItMessengerItem().hover();
	 
		return this;
	 }

	 async clickgetPushItMessengerItemAddtoCampare() {
		await this.locators.getPushItMessengerItemAddtoCampare().click();
	 
		return this;
	 }

	 async clickTrainingLink() {
		await this.locators.getTrainingLink().click();
	 
		return new TrainingPage(this.page);
	 }
>>>>>>> 8e550eadc13ef6c68c0ef49afaf768dd2145f1cd

}
export default GearBagsPage;