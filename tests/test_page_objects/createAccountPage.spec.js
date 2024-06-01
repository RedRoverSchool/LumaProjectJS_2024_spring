import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import CreateAccountPage from "../../page_objects/createAccountPage.js";
import { FIRST_NAME, 
    LAST_NAME, 
    PASSWORD, 
    PASSWORD_CONFIRM, 
    EMAIL, 
    MY_ACCOUNT_HEADER, 
    THANKS_MESSAGE, 
    BASE_URL, 
    SIGN_IN_END_POINT, 
    BUTTON_REGISTRATION_TITLE, 
    CUSTOMER_ACCOUNT_CREATE_END_POINT, 
    CREATE_ACCOUNT_PAGE_HEADER, 
    GEN_RANDOM_NUMBER, 
    MY_ACCOUNT_PAGE_END_POINT, 
    CREATE_ACCOUNT_FORM_LABELS,
    ACCOUNT_FORM_EMPTY_INPUTS,
    NEW_USER_DATA,
    CREATE_ACCOUNT_PAGE_PASSWORD_ERROR_MESSAGE,
    CREATE_ACCOUNT_PAGE_PASSWORD_WITH_SPACES_MESSAGE } from "../../helpers/testData.js";
import MyAccountPage from "../../page_objects/myAccountPage.js";
import SignInPage from "../../page_objects/signInPage.js";



test.describe('createAccuntPage.spec', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.open();
    });
    test('Check that user can possible to create account with entered all valid fields', async ({ page }) => {
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

    test.skip('RF_TC 10.3.1_13 Registration/Create Account as a new user ', async({page})=>{
        const homePage = new HomePage(page)
        const signInPage = new SignInPage(page)
        const createAccountPage = new CreateAccountPage(page)
        const myAccountPage = new MyAccountPage(page)

        await homePage.clickSignInLink()

        await expect(page).toHaveURL(BASE_URL + SIGN_IN_END_POINT)
        await expect(signInPage.locators.getCreateAnAccountButton()).toHaveText(BUTTON_REGISTRATION_TITLE)

        await signInPage.clickCreateAnAccountButton()

        await expect(page).toHaveURL(BASE_URL + CUSTOMER_ACCOUNT_CREATE_END_POINT)
        await expect(createAccountPage.locators.getCreateAccountHeader()).toHaveText(CREATE_ACCOUNT_PAGE_HEADER)

        await createAccountPage.fillFirstNameField(`${FIRST_NAME}${GEN_RANDOM_NUMBER}`)
        await createAccountPage.fillLastNameField(`${LAST_NAME}${GEN_RANDOM_NUMBER}`)
        await createAccountPage.fillEmailField(EMAIL)
        await createAccountPage.fillPasswordField(`${PASSWORD}${GEN_RANDOM_NUMBER}`)
        await createAccountPage.fillConfirmPasswordField(`${PASSWORD_CONFIRM}${GEN_RANDOM_NUMBER}`)
        await createAccountPage.clickCreateAccountButton()
        await page.reload()

        await expect(page).toHaveURL(BASE_URL + MY_ACCOUNT_PAGE_END_POINT)
        await expect(myAccountPage.locators.getMyAccountHeader()).toHaveText(MY_ACCOUNT_HEADER)
        await expect(myAccountPage.locators.getThanksMessage()).toHaveText(THANKS_MESSAGE)
    })

    test('Check that all required fields are presented and empty in "Create New Customer Account" form', 
    async ({ page }) => {
        const homePage = new HomePage(page);
        const createAccountPage = await homePage.clickCreateAccountLink();

        expect(await createAccountPage.getArrayOfFormLabels()).toEqual(CREATE_ACCOUNT_FORM_LABELS);
        expect(await createAccountPage.getArrayOfFormInputs()).toEqual(ACCOUNT_FORM_EMPTY_INPUTS);
    })

    test("Check that user can't register with password less than 8 characters", async ({ page }) => {
        const homePage = new HomePage(page);
        const createAccountPage = await homePage.clickCreateAccountLink();

        await createAccountPage.fillFirstNameField(NEW_USER_DATA.firstName);
        await createAccountPage.fillLastNameField(NEW_USER_DATA.lastName);
        await createAccountPage.fillEmailField(NEW_USER_DATA.newEmail);
        await createAccountPage.fillPasswordField(NEW_USER_DATA.shortPassword);
        await createAccountPage.fillConfirmPasswordField(NEW_USER_DATA.shortPassword);
        await createAccountPage.clickCreateAccountButton();

        await expect(page).toHaveURL(BASE_URL + CUSTOMER_ACCOUNT_CREATE_END_POINT);
        await expect(createAccountPage.locators.getPasswordErrorMessage()).toHaveText(CREATE_ACCOUNT_PAGE_PASSWORD_ERROR_MESSAGE);
    })

    NEW_USER_DATA.passwordWithSpaces.spacesLocation.forEach((condition, indx) => {
        test(`Verify that user can't register with password that ${condition} with spaces`, async ({ page }) => {
            const homePage = new HomePage(page);
            const createAccountPage = await homePage.clickCreateAccountLink();

            await createAccountPage.fillFirstNameField(NEW_USER_DATA.firstName);
            await createAccountPage.fillLastNameField(NEW_USER_DATA.lastName);
            await createAccountPage.fillEmailField(NEW_USER_DATA.newEmail);
            await createAccountPage.fillPasswordField(NEW_USER_DATA.passwordWithSpaces.password[indx]);
            await createAccountPage.fillConfirmPasswordField(NEW_USER_DATA.passwordWithSpaces.password[indx]);
            await createAccountPage.clickCreateAccountButton();

            await expect(page).toHaveURL(BASE_URL + CUSTOMER_ACCOUNT_CREATE_END_POINT);
            await expect(createAccountPage.locators.getPageAlertBlock()).toHaveText(CREATE_ACCOUNT_PAGE_PASSWORD_WITH_SPACES_MESSAGE);
        });
    })
})