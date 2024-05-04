import { email, password, EMAIL_WISHLIST, PASSWORD_WISHLIST } from "../helpers/testData";
import HomePage from "./homePage";


class SignInPage {
    constructor(page) {
        this.page = page
    }
    locators = {
        getfieldEmail: () => this.page.getByLabel('Email', { exact: true }),
        getFieldPassword: () => this.page.getByLabel('Password'),
        getButtonSignIn: () => this.page.getByRole('button', { name: 'Sign In' }),
        getGreetingElement: () => this.page.locator('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.greet.welcome > span'),
        getTabDropdown: () => this.page.getByRole('banner').locator('button').filter({ hasText: 'Change' }),
        getDropdownWishList: () => this.page.getByRole('banner').getByText('My Account My Wish List Sign'),
        getSignOutlinck: () => this.page.getByRole('link', { name: 'Sign Out' }),
        getMessageSignedOut: () => this.page.getByText('You are signed out'),
        getPageHeader: () => this.page.getByRole('heading').first()
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
        await this.locators.getSignOutlinck().click();
        return this;
    }

}
export default SignInPage;