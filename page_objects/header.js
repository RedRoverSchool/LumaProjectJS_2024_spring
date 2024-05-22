import HomePage from "./homePage";
import ShippingPage from "./shippingPage";
import GearPage from "./gearPage";

class Header {
    constructor (page) {
        this.page = page;
    }

    locators = {
        getLogoLink: () => this.page.getByLabel('store logo'),
        getCounterNumber: () => this.page.locator('.counter-number'),
        getTotalQuantity: () => this.page.locator('.count:first-child'),
        getTotalCost: () => this.page.locator('.subtotal .price'),
        getProceedToCheckoutBtn: () => this.page.getByRole('button', { name: 'Proceed to Checkout' }),
        getShoppingCart: () => this.page.getByRole('link', { name: ' My Cart' }),
        getMiniCart: () => this.page.locator('#ui-id-1'),
        getEmptyCardMessage: () => this.page.locator('.block-minicart .subtitle.empty'),
        getCrossIconModalWindowShoppingCart: () => this.page.locator('.action.close'),
        getGearSubMenu: () => this.page.locator('.nav-4.level0 ul'),
        getGearSubMenuItems: () => this.page.locator('.nav-4.level0 ul li'),
        getGearMenu: () => this.page.getByRole('menuitem', { name: 'Gear' }),
    }

    async clickLogoLink() {
        await this.locators.getLogoLink().click();

        return new HomePage(this.page);
    }

    async clickCounterNumber() {
        await this.locators.getCounterNumber().click();

        return this.page;
    }

    async clickProceedToCheckoutBtn() {
        await this.locators.getProceedToCheckoutBtn().click();

        return new ShippingPage(this.page);
    }

    async waitForCounterNumber() {
        await this.locators.getCounterNumber().waitFor();

        return this;
    }

    async clickShoppingCartIcon() {
        await this.locators.getShoppingCart().click();

        return this;
    }

    async clickCrossIconModalWindowShoppingCart() {
        await this.locators.getCrossIconModalWindowShoppingCart().click();

        return this;
    }

    async getGearSubMenuActualItems() {
        return await this.locators.getGearSubMenuItems().allTextContents();
    }

    async hoverGearMenu() {
        await this.locators.getGearMenu().hover();

        return this;
    }

    async clickGearMenu() {
        await this.locators.getGearMenu().click();

        return new GearPage(this.page);
    }

}
export default Header;