import { test, expect } from "@playwright/test";

test.describe("create account", () => {
    const createAccount_url = 'https://magento.softwaretestingboard.com/customer/account/create/'

    test.beforeEach(async ({ page }) => {
      await page.goto("/");
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
})

