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
})

