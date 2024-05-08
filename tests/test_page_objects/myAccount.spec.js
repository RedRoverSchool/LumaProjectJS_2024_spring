import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage";
import { USER_DATA, NEW_USER_DATA } from "../../helpers/testData";

test.describe('My Account', () => {

    test.beforeEach('Create account', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.open();
        const createAccountPage = await homePage.clickCreateAccountLink();
        await createAccountPage.fillFirstNameField(USER_DATA.firstName);
        await createAccountPage.fillLastNameField(USER_DATA.lastName);
        await createAccountPage.fillEmailField(USER_DATA.email);
        await createAccountPage.fillPasswordField(USER_DATA.password);
        await createAccountPage.fillConfirmPasswordField(USER_DATA.password);
        const myAccountPage = await createAccountPage.clickCreateAccountButton();
        await myAccountPage.clickLogoLink();
    })

    test('Veryfy that user name is changed', async ({ page }) => {
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
})
