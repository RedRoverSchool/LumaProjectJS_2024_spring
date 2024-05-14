class BagItemPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getMoreInformationPanel: () => this.page.getByRole('link', {name: 'More Information'}),
        getMaterialInformation: () => this.page.locator('tbody tr td').nth(2)
    }

    async clickMoreImformationPanel() {
        await this.locators.getMoreInformationPanel().click();

        return this;
    }

    async getMaterialInformationText() {        
        return await this.locators.getMaterialInformation().innerText();        
    }
}
export default BagItemPage;