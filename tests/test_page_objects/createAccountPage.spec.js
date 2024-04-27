import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import CreateAccountPage from "../../page_objects/createAccountPage.js";
import {FIRST_NAME, LAST_NAME, PASSWORD, PASSWORD_CONFIRM, EMAIL, MY_ACCOUNT_HEADER, THANKS_MESSAGE} from "../../helpers/testData.js";
import MyAccountPage from "../../page_objects/myAccountPage.js";



test.describe('createAccuntPage.spec', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.open();
    });
    test.skip('Check that user can possible to create account with entered all valid fields', async ({ page }) => {
        const homePage = new HomePage(page);
        const createAccountPage = new CreateAccountPage(page);
        const myAccountPage = new MyAccountPage(page);

        await homePage.clickCreateAccountLink();
        await createAccountPage.clickFirstNameField();
        await createAccountPage.fillFirstNameField(FIRST_NAME);
        await createAccountPage.clickLastNameField();
        await createAccountPage.fillLastNameField(LAST_NAME);
        await createAccountPage.clickEmailField();
        await createAccountPage.fillEmailField(EMAIL);
        await createAccountPage.clickPasswordField();
        await createAccountPage.fillPasswordField(PASSWORD);
        await createAccountPage.clickConfirmPasswordField();
        await createAccountPage.fillConfirmPasswordField(PASSWORD_CONFIRM);
        await createAccountPage.clickCreateAccountButton();

       await expect(myAccountPage.locators.getMyAccountHeader()).toHaveText(MY_ACCOUNT_HEADER);
       await expect(myAccountPage.locators.getThanksMessage()).toHaveText(THANKS_MESSAGE);
    });

})