import { test as base } from '@playwright/test';
import HomePage from '../../page_objects/homePage';
import { USER_DATA } from '../../helpers/testData';

export const test = base.extend({
    createNewAccount: [
        async ({ page }, use) => {
            const homePage = new HomePage(page);
            await homePage.open();
            const createAccountPage = await homePage.clickCreateAccountLink();
            await createAccountPage.fillFirstNameField(USER_DATA.firstName);
            await createAccountPage.fillLastNameField(USER_DATA.lastName);
            await createAccountPage.fillEmailField(USER_DATA.email);
            await createAccountPage.fillPasswordField(USER_DATA.password);
            await createAccountPage.fillConfirmPasswordField(USER_DATA.password);
            await createAccountPage.clickCreateAccountButton();

            await use("");
        },
        { scope: "test" },
    ],
});