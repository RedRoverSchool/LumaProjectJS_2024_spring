import TrainingPage from "./trainingPage";

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
        getMateialItemList: () => this.page.locator('.filter-options>:nth-child(4) li'),
        getListDisplayMode: () => this.page.getByRole('link', { name: 'View as  List' }),
        getSelectorBagsNumber: () => this.page.locator('//select[@id="limiter"]//option[2]').last(),
        getListButtonPressed: () => this.page.locator('div.toolbar-products [title="List"]').first(),
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

    async clickMaterialOption() {
        await this.locators.getMaterialOption().click();

        return this;
    }

    async getMaterialItemNameText(idx) {
        const text = (await this.locators.getMateialItemList().nth(idx).innerText()).split(' ')[0];

        return text;
    }

    async clickListDisplayMode() {
        await this.locators.getListDisplayMode().click();
        
        return this;
    }
}
export default GearBagsPage;