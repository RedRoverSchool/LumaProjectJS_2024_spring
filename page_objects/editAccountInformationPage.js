import MyAccountPage from "./myAccountPage";
import { expect } from '@playwright/test'

class EditAccountInformationPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getFirstNameInputField: () => this.page.getByRole('textbox', { name: 'First Name' }),
        getLastNameInputField: () => this.page.getByRole('textbox', { name: 'Last Name' }),
        getSaveBtn: () => this.page.getByRole('button', { name: 'Save' }),
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
}
export default EditAccountInformationPage;