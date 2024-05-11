import MyAccountPage from "./myAccountPage";

class CheckoutOnepageSuccessPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getActionSwitchButton: () => this.page.locator('(//button[@class = "action switch"])[1]'),
        getMyAccountLink: () => this.page.locator('(//a[text() = "My Account"])[1]'),
        getTankYouText: () => this.page.locator('(//span[@class = "logged-in"])[1]')
    }

    async clickActionSwitchButton() {
        await this.locators.getActionSwitchButton().click();

        return this;
    }

    async waitTankYouText() {
        await this.locators.getTankYouText().waitFor();
        return this;
    }

    async clickMyAccountLink() {
        await this.locators.getMyAccountLink().waitFor();
        await this.locators.getMyAccountLink().click();

        return new MyAccountPage(this.page);
    }

}
export default CheckoutOnepageSuccessPage;