import MyAccountPage from "./myAccountPage";
import { expect } from '@playwright/test';
import CustomerLoginPage from "./customerLoginPage";

class EditAccountInformationPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getFirstNameInputField: () => this.page.getByRole('textbox', { name: 'First Name' }),
        getLastNameInputField: () => this.page.getByRole('textbox', { name: 'Last Name' }),
        getSaveBtn: () => this.page.getByRole('button', { name: 'Save' }),
        getChangeEmailCheckbox: () => this.page.getByRole('checkbox', {name: 'Change Email'}),
        getChangePasswordCheckbox: () => this.page.getByRole('checkbox', {name: 'Change Password'}),
        getEmailInputField: () => this.page.getByRole('textbox', {name: 'Email'}),
        getCurrentPasswordInputField: () => this.page.getByRole('textbox', {name: 'Current Password'}),
        getNewPasswordInputField: () => this.page.getByRole('textbox', {name: 'New Password'}).nth(0),
        getConfirmNewPasswordInputField: () => this.page.getByRole('textbox', {name: 'Confirm New Password'}),
    }

    async fillFirstNameInputField(firstName) {
        await this.locators.getFirstNameInputField().clear();
        await this.locators.getFirstNameInputField().fill(firstName);

        return this;
    }

    async fillLastNameInputField(lastName) {
        await this.locators.getLastNameInputField().clear();
        await this.locators.getLastNameInputField().fill(lastName);

        return this;
    }

    async clickSaveBtn() {
        await this.locators.getSaveBtn().click();

        await expect(this.page.getByText('You saved the account information.')).toBeVisible();

        return new MyAccountPage(this.page);
    }

    async checkChangeEmailCheckbox() {
        await this.locators.getChangeEmailCheckbox().check();

        return this;
    }

    async checkChangePasswordCheckbox() {
        await this.locators.getChangePasswordCheckbox().check()

        return this;
    }

    async fillEmailInputField(email) {
        await this.locators.getEmailInputField().clear();
        await this.locators.getEmailInputField().fill(email);

        return this;
    }

    async fillCurrentPasswordInputField(password) {
        await this.locators.getCurrentPasswordInputField().fill(password);

        return this;
    }

    async fillNewPasswordInputField(password) {
        await this.locators.getNewPasswordInputField().fill(password);

        return this;
    }

    async fillConfirmNewPasswordInputField(password) {
        await this.locators.getConfirmNewPasswordInputField().fill(password);

        return this;
    }

    async clickSaveBntAndGoLoginPage() {
        await this.locators.getSaveBtn().click();

        await expect(this.page.getByText('You saved the account information.')).toBeVisible();

        return new CustomerLoginPage(this.page);
    }
}
export default EditAccountInformationPage;