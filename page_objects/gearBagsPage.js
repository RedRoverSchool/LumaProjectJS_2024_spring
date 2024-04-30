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

}
export default GearBagsPage;