import { expect } from "@playwright/test";
import { test, createNewAccount } from "./base.js"
import HomePage from "../../page_objects/homePage";
import { USER_DATA, NEW_USER_DATA, BASE_URL, CUSTOMER_LOGIN_PAGE_END_POINT_SHORT, MY_ACCOUNT_HEADER, MY_ACCOUNT_PAGE_END_POINT } from "../../helpers/testData";
import MyAccountPage from "../../page_objects/myAccountPage.js";

test.describe('My Account', () => {

    test.beforeEach('Create account', async ({ page, createNewAccount }) => {        
        const myAccountPage = new MyAccountPage(page);
        await myAccountPage.clickLogoLink();
    })

    test.skip('Veryfy that user name is changed', async ({ page }) => {
        const homePage = new HomePage(page);
        const name = USER_DATA.firstName + " " + USER_DATA.lastName;
        const newName = NEW_USER_DATA.firstName + " " + NEW_USER_DATA.lastName;

        const greetingText = await homePage.getGreetingText(name);

        expect(greetingText).toContain(name);

        await homePage.clickWelcomeDropdown();
        const myAccountPage = await homePage.clickMyAccountLink();
        const editMyAccountPage = await myAccountPage.clickEditLink()

        await editMyAccountPage.fillFirstNameInputField(NEW_USER_DATA.firstName);
        await editMyAccountPage.fillLastNameInputField(NEW_USER_DATA.lastName);
        await editMyAccountPage.clickSaveBtn();
        await myAccountPage.locators.getGreetingName(newName).waitFor();

        await expect(myAccountPage.locators.getNameInContactInformation()).toContainText(newName);
        await expect(myAccountPage.locators.getGreetting()).toContainText(newName);
    })

    test.skip('Change email and password and verify the User can sign in', async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.clickWelcomeDropdown();
        const myAccountPage = await homePage.clickMyAccountLink();
        const editMyAccountPage = await myAccountPage.clickAccountInformationSidebarLink();
        await editMyAccountPage.checkChangeEmailCheckbox();
        await editMyAccountPage.checkChangePasswordCheckbox();
        await editMyAccountPage.fillEmailInputField(NEW_USER_DATA.newEmail);
        await editMyAccountPage.fillCurrentPasswordInputField(USER_DATA.password);
        await editMyAccountPage.fillNewPasswordInputField(NEW_USER_DATA.newPassword);
        await editMyAccountPage.fillConfirmNewPasswordInputField(NEW_USER_DATA.newPassword);
        const customerLoginPage = await editMyAccountPage.clickSaveBntAndGoLoginPage();

        await expect(page).toHaveURL(BASE_URL + CUSTOMER_LOGIN_PAGE_END_POINT_SHORT);

        await customerLoginPage.fillEmailInputField(NEW_USER_DATA.newEmail);
        await customerLoginPage.fillPasswordInputField(NEW_USER_DATA.newPassword);
        await customerLoginPage.clickSignInBtn();

       // await expect(myAccountPage.locators.getNameInContactInformation()).toContainText(NEW_USER_DATA.newEmail);

        expect(await myAccountPage.getEmailFromContactInformation()).toEqual(NEW_USER_DATA.newEmail)
    })

    test("Verify that clicking on the 'My Account' section name in the menu redirects to the 'My Account' page", async ({page}) => {
        const homePage = new HomePage(page);

        await homePage.clickWelcomeDropdown();
        const myAccountPage = await homePage.clickMyAccountLink();

        await expect(page).toHaveURL(BASE_URL + MY_ACCOUNT_PAGE_END_POINT);
        await expect(myAccountPage.locators.getMyAccountHeader()).toBeVisible();
        await expect(myAccountPage.locators.getMyAccountHeader()).toHaveText(MY_ACCOUNT_HEADER)
    })
})
