import {email, password, EMAIL_WISHLIST, PASSWORD_WISHLIST} from "../helpers/testData";
import CreateAccountPage from "./createAccountPage";
import HomePage from "./homePage";
import WishListPage from "./wishListPage";

class SignInPage {
    constructor(page) {
        this.page = page
    }

    locators = {
        getfieldEmail: () => this.page.getByLabel('Email', {exact: true}),
        getFieldPassword: () => this.page.getByLabel('Password'),
        getButtonSignIn: () => this.page.getByRole('button', {name: 'Sign In'}),
        getGreetingElement: () => this.page.locator('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.greet.welcome > span'),
        getTabDropdown: () => this.page.getByRole('banner').locator('button').filter({hasText: 'Change'}),
        getDropdownWishList: () => this.page.getByRole('banner').getByText('My Account My Wish List Sign'),
        getSignOutlinck: () => this.page.getByRole('link', {name: 'Sign Out'}),
        getMessageSignedOut: () => this.page.getByText('You are signed out'),
        getPageHeader: () => this.page.getByRole('heading').first(),
        getCreateAnAccountButton: () => this.page.locator('div.primary>a[href="https://magento.softwaretestingboard.com/customer/account/create/"]'),
    }

    async clickCreateAnAccountButton() {
        await this.locators.getCreateAnAccountButton().click();
        return new CreateAccountPage(this.page)
    }

    async fillFieldEmail() {
        await this.locators.getfieldEmail().fill(email);
        return this;
    }

    async fillFieldPassword() {
        await this.locators.getFieldPassword().fill(password);
        return this;
    }

    async fillEmailField() {
        await this.locators.getfieldEmail().fill(EMAIL_WISHLIST);
        return this;
    }

    async fillPasswordField() {
        await this.locators.getFieldPassword().fill(PASSWORD_WISHLIST);
        return this;
    }

    async clickButtonSignIn() {
        await this.locators.getButtonSignIn().click();
        // return
        return new HomePage(this.page)
    }

    async fillEmailInputField(myEmail) {
        await this.page.getByLabel('Email', {exact: true}).click();
        await this.locators.getfieldEmail().fill(myEmail);

        return this;
    }

    async fillPasswordInputField(myPassword) {
        await this.locators.getFieldPassword().focus();
        await this.locators.getFieldPassword().fill(myPassword);

        return this;
    }
    async welcomeUser() {
        // return this.locators.getGreetingElement()
        await this.locators.getGreetingElement();
        return getGreetingElement.isVisible();

    }

    async clickDpopdown() {
        await this.locators.getTabDropdown().click();
        return new HomePage(this.page);
    }

    async clickSignOut() {
        await this.locators.getSignOutlinck().focus();
        await this.locators.getSignOutlinck().click();
        return this;
    }

    async clickButtonSignInAndGoToWishlist() {
        await this.locators.getButtonSignIn().focus();
        await this.locators.getButtonSignIn().click();

        return new WishListPage(this.page)
    }
}

export default SignInPage;