import { test, expect } from "@playwright/test";

test.describe('User Registration', () => {
    const FIRST_NAME = 'firstname1';
    const LAST_NAME = "lastname1";
    const USER_EMAIL = 'useremail1@mail.com';
    const USER_PASSWORD = 'Pass^123';

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  })

  test('Verify that user can successfuly create a new account and will be redirected to account page after account creating', async ({page}) => {
    const SIGNUP_PAGE_URL = 'https://magento.softwaretestingboard.com/customer/account/create/';
    const LOCATORS = {
      "firstNameField": page.locator('#firstname'),
      "lastNameField": page.locator('#lastname'),
      "emailField": page.locator('#email_address'),
      "passwordField": page.locator('#password'),
      "passwordConfirmationField": page.locator('#password-confirmation'),
      "createAnAccountButton": page.getByRole('button', {name: 'Create an Account'})
    }

    await page.goto(SIGNUP_PAGE_URL)
    await LOCATORS.firstNameField.fill(FIRST_NAME);
    await LOCATORS.lastNameField.fill(LAST_NAME);
    await LOCATORS.emailField.fill(USER_EMAIL);
    await LOCATORS.passwordField.fill(USER_PASSWORD);
    await LOCATORS.passwordConfirmationField.fill(USER_PASSWORD);
    await LOCATORS.createAnAccountButton.click();
    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/customer/account/')
  })

})