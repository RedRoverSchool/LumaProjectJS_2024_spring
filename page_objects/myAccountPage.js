import { THANKS_MESSAGE } from "../helpers/testData";
import EditAccountInformation from "./editAccountInformationPage";
import HomePage from "./homePage";
import MyOrdersPage from "./myOrdersPage";
import WomenPage from "./womenPage";

class MyAccountPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getMyAccountHeader: () => this.page.getByRole('heading', { name: 'My Account' }),
        getThanksMessage: () => this.page.getByRole('alert').getByText(THANKS_MESSAGE),
        getMyOrdersLink: () => this.page.getByRole('link', {  name: 'My Orders'  }),
        getWomenLink: () => this.page.getByText('Women'),
        getLogoLink: () => this.page.getByRole("link", { name: "store logo" }),
        getEditLink: () => this.page.getByRole('link', {name: 'Edit', exact: true }),
        getNameInContactInformation: () => this.page.locator('[class="column main"] div:nth-child(5) [class="box-content"] p'),
        getGreetingName: (name) => this.page.locator('[class="panel header"]').filter({ hasText: `Welcome, ${name}`}),
        getGreetting: () => this.page.locator('[class="panel header"] [class="greet welcome"]'),
        getAccountInformationSidebarLink: () => this.page.locator('[class="nav items"] li:nth-child(7)'),
        getShoppingCart: () => this.page.locator('.minicart-wrapper'),
        getShoppingCartCounterNumber: () => this.page.locator('.counter-number'),    
        getShoppingCartEmptyMessage: () => this.page.locator('[class = "subtitle empty"]'),
        getCloseShoppingCartEmptyMessage: () => this.page.locator('#btn-minicart-close'),
        getShoppingCartRemoveProduct: (idx) => this.page.locator('.minicart-items-wrapper .secondary').nth(idx),
        getOkBtn: () => this.page.locator('.modal-footer').getByRole('button', {name: "OK"}),
        getMyWishListCounter: () => this.page.getByRole('heading', {name: 'My Wish List'}).locator('.counter'),
        // getMyWishListCounter: () => this.page.getByRole('heading', {name: 'My Wish List'}),
        getMyWishListRemoveProduct: () => this.page.locator('#wishlist-sidebar .delete'),
        getWishListEmptyMessage: () => this.page.getByText('You have no items in your wish list.'),
        getGoToWishList: () => this.page.getByRole('link', {name: 'Go to Wish List'}),
        
    }

    async clickMyOrdersLink() {
        await this.locators.getMyOrdersLink().click();

        return new MyOrdersPage(this.page);
    }

    async clickWomenLink() {
        await this.locators.getWomenLink().click();

        return new WomenPage(this.page);
    }

    async waitForMyAccountHeader() {
        await this.locators.getMyAccountHeader().waitFor();

        return this;
    }

    async clickLogoLink() {
        await this.locators.getLogoLink().click();

        return new HomePage(this.page);
    }

    async clickEditLink() {
        await this.locators.getEditLink().click();

        return new EditAccountInformation(this.page);
    }

    async getGreetingNameText(name) {
        return await this.locators.getGreetingName(name).innerText();
    }

    async getGreetingName() {
        return await this.locators.getGreetting().innerText();
    }

    async clickAccountInformationSidebarLink() {
        await this.locators.getAccountInformationSidebarLink().click();

        return new EditAccountInformation(this.page);
    }

    async getEmailFromContactInformation() {
        return (await this.locators.getNameInContactInformation().innerText()).split('\n')[1];
    }

    async clickShoppingCart() {
        await this.locators.getShoppingCart().focus();
        await this.locators.getShoppingCart().click();

        return this;
    }

    async clickShoppingCardCounterNumber() {
        await this.locators.getShoppingCartCounterNumber().click();

        return this.page;
    }

    async clickShoppingCartRemoveProduct(idx) {
        await this.locators.getShoppingCartRemoveProduct(idx).click();

        return this;
    }

    async clickOkBtn() {
        await this.locators.getOkBtn().click();

        return this;
    }

    async clickCloseShoppingCartEmptyMessage() {
        await this.locators.getCloseShoppingCartEmptyMessage().click();

        return this;
    }

    async clickMyWishListRemoveProduct() {
        await this.locators.getMyWishListRemoveProduct().click();

        return this;
    }
}

export default MyAccountPage;