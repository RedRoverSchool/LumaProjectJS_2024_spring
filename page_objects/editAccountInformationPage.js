import MyAccountPage from "./myAccountPage";

class EditAccountInformationPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
       getFirstNameInputField: () => this.page.getByRole('textbox', {name: 'First Name'}),
       // getFirstNameInputField: () => this.page.locator('#firstname'),
       getLastNameInputField: () => this.page.getByRole('textbox', {name: 'Last Name'}),
      //  getLastNameInputField: () => this.page.locator('#lastname'),
       getSaveBtn: () => this.page.getByRole('button', {name: 'Save'}),
        //getSaveBtn: () => this.page.locator('[title="Save"]'),
    }

    async fillFirstNameInputField(firstName) {
        // await this.locators.getFirstNameInputField().clear();
      //  await this.locators.getFirstNameInputField().waitFor();
        await this.locators.getFirstNameInputField().fill(firstName);
      
        return this;
    }

    async fillLastNameInputField(lastName) {
        // await this.locators.getLastNameInputField().clear();
      //  await this.locators.getLastNameInputField().waitFor();
        await this.locators.getLastNameInputField().fill(lastName);        

        return this;
    }

    async clickSaveBtn() {
        await this.locators.getSaveBtn().click();

        return new MyAccountPage(this.page);
    }
}
export default EditAccountInformationPage;