import MyAccountPage from "./myAccountPage";

class CheckoutOnepageSuccessPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getActionSwitchButton: () => this.page.locator('(//button[@class = "action switch"])[1]'),
        getMyAccountLink: () => this.page.locator('(//a[text() = "My Account"])[1]'),
        getContinueShoppingButton: () => this.page.getByText('Your order number is: ')
    }

    async clickActionSwitchButton() {
        await this.locators.getActionSwitchButton().click();

        return this;
    }

    async waitContinueShoppingButton() {
        await this.locators.getContinueShoppingButton().waitFor();
        return this;
    }
    async waitMyAccountLink(){
        await this.locators.getMyAccountLink().waitFor();
        return this;
    }

    async clickMyAccountLink() {
        
        await this.locators.getMyAccountLink().click();

        return new MyAccountPage(this.page);
    }

}
export default CheckoutOnepageSuccessPage;