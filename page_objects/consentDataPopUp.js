import HomePage from "./homePage";

class ConsentDataPopUp {
    constructor (page) {
        this.page = page;
    };

    locators = {
        getConsentDataPopUp: () => this.page.locator('[class="fc-dialog-container"]'),
        getConsentDataButton: () => this.page.getByRole('button', { name: 'Consent' })
    };

    async clickConsentDataButton() {
        await this.locators.getConsentDataButton().click();

        return new HomePage(this.page);
    };
}
export default ConsentDataPopUp;