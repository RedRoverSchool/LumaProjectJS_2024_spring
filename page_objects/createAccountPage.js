import MyAccountPage from "./myAccountPage";

class CreateAccountPage {
    constructor(page) {
        this.page = page
    }

    locators = {
        getFirstNameField: () => this.page.locator('#firstname'),
        getLastNameField: () => this.page.locator('#lastname'),
        getEmailField: () => this.page.locator('#email_address'),
        getPasswordField: () => this.page.locator('#password'),
        getConfirmPasswordField: () => this.page.locator('#password-confirmation'),
        getCreateAccountButton: () => this.page.getByRole('button', { name: "Create an Account" }),
        getCreateAccountHeader: () => this.page.getByRole('heading', {name: 'Create New Customer Account'}).first(),
        getFormLabels: () => this.page.locator("#form-validate label"),
        getFormInputs: () => this.page.locator("#form-validate input.input-text"),
        getPasswordErrorMessage: () => this.page.locator("#password-error"),
        getPageAlertBlock: () => this.page.locator('div[data-ui-id="message-error"]>div'),
    };

    async clickFirstNameField(){
        await this.locators.getFirstNameField().click();

        return this;
    }

    async fillFirstNameField(firstName){
        await this.locators.getFirstNameField().fill(firstName);

        return this;
    }

    async clickLastNameField(){
        await this.locators.getLastNameField().click();

        return this;
    }

    async fillLastNameField(lastName){
        await this.locators.getLastNameField().fill(lastName);

        return this;
    }

    async clickEmailField(){
        await this.locators.getEmailField().click();

        return this;
    }

    async fillEmailField(email){
        await this.locators.getEmailField().fill(email);

        return this;
    }

    async clickPasswordField(){
        await this.locators.getPasswordField().click();

        return this;
    }

    async fillPasswordField(password){
        await this.locators.getPasswordField().fill(password);

        return this;
    }

    async clickConfirmPasswordField(){
        await this.locators.getConfirmPasswordField().click();

        return this;
    }

    async fillConfirmPasswordField(confirmPassword){
        await this.locators.getConfirmPasswordField().fill(confirmPassword);

        return this;
    }

    async clickCreateAccountButton(){
        await this.locators.getCreateAccountButton().click();

        return new MyAccountPage(this.page);
    }

    async getArrayOfFormLabels() {
        return await this.locators.getFormLabels().allInnerTexts();
    }

    async getArrayOfFormInputs() {
        return await this.locators.getFormInputs().allInnerTexts();
    }
}

export default CreateAccountPage;