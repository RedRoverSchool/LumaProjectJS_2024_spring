import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage";
import CreateAccountPage from "../../page_objects/createAccountPage";
import {FIRST_NAME, LAST_NAME, PASSWORD, PASSWORD_CONFIRM, EMAIL} from "../../helpers/testData.js";

test.describe("myAccount.spec", () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    const createAccountPage = new CreateAccountPage(page);

    await homePage.open();
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
    await createAccountPage.clickLogoLink();
  });

  test("Verify that clicking on the 'Welcome, username' inscription opens the menu", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.clickMyAccountMenuButton();
   
    await expect(homePage.locators.getMyAccountDropDown()).toBeVisible();

  })
});
