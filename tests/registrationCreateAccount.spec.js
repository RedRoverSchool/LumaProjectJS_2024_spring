import { test, expect } from "@playwright/test";

test.describe("create account", () => {
    const createAccount_url = 'https://magento.softwaretestingboard.com/customer/account/create/';
    let  firstName, lastName, password, passwordConfirm, email;

    test.beforeEach(async ({ page }) => {
      await page.goto("/");

        firstName = 'Svetlana';
        lastName = 'Kudryvzeva';
        password = '12345Sveta!';
        passwordConfirm = '12345Sveta!';

        function generateRandomEmail() {
            const mailbox = Math.random().toString(36).substring(2, 10);
            const domain = "gmail.com";
            return `${mailbox}@${domain}`;
          }

        email = generateRandomEmail();

    })

    test('should be all fields are required', async ({ page }) => {

    await page.goto(createAccount_url);
    await expect(page).toHaveURL(createAccount_url);

    await page.getByRole('button', {name: 'Create an Account'}).click();
    const warninMessage = await page.$$('div[generated="true"]');


    await expect(warninMessage).toBeTruthy();
    await page.getByText('This is a required field.');
    await expect(page.locator('#firstname-error')).toBeVisible();
    await expect(page.locator('#lastname-error')).toBeVisible();
    await expect(page.locator('#email_address-error')).toBeVisible();
    await expect(page.locator('#password-error')).toBeVisible();
    await expect(page.locator('#password-confirmation-error')).toBeVisible();

    })

    test('should be presence of password length requirement message', async ({ page }) => {

    await page.goto(createAccount_url);

    const passwordField = await page.locator('#password');
    expect(passwordField).toBeTruthy();
    expect(await passwordField.inputValue()).toBe('');


    await page.fill('input[type="password"][name="password"]', 'test');

    const passwordLengthMessage = await page.locator('#password-error');

    expect(passwordLengthMessage).toBeTruthy();
     await page.getByText('Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.').isVisible();

    })

    test('Check that user can possible to create account with entered all valid fields', async ({ page }) => {
      await page.getByRole('link', {name: 'Create an Account'}).click();
      await page.locator('#firstname').click();
      await page.locator('#firstname').fill(firstName);
      await page.locator('#lastname').click();
      await page.locator('#lastname').fill(lastName);
      await page.locator('#email_address').click();
      await page.locator('#email_address').fill(email);
      await page.locator('#password').click();
      await page.locator('#password').fill(password);
      await page.locator('#password-confirmation').click();
      await page.locator('#password-confirmation').fill(passwordConfirm);
      await page.getByRole('button', { name: "Create an Account" }).click();


      await expect(page.locator('.base[data-ui-id="page-title-wrapper"]')).toHaveText('My Account');

      const thanksMessage = page.getByRole("alert").getByText("Thank you for registering with Main Website Store.");
      await expect(thanksMessage).toHaveText("Thank you for registering with Main Website Store.");

  })
  test('should be possible to create a new account', async ({ page }) => {

    await page.goto(createAccount_url);

    const randomNumber =Math.random().toString(36).substring(2, 10);
    const firstName = `user_${randomNumber}`;
    const lastName = `test_${randomNumber}`;
    const email = `user_${randomNumber}@example.com`;

    await page.getByRole('textbox', {name: 'First Name*'}).fill(firstName);
    await page.getByRole('textbox', {name: 'Last Name*'}).fill(lastName);
    await page.getByRole('textbox', {name: 'Email*'}).fill(email);
    await page.getByRole('textbox', { name: 'Password*', exact: true }).fill('Password!');
    await page.getByRole('textbox', {name: 'Confirm Password*'}).fill('Password!');
    await page.getByRole('button', {name: 'Create an Account'}).click();

    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/customer/account/');


})

})
