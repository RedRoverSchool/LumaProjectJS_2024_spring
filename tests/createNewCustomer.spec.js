import { test, expect} from "@playwright/test"; 

test.describe('Create New Customer page', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Verify Create New Customer Account page presents an empty forms for Personal Information and Sign-in Information', async ({ page }) => {
        await page.getByRole('link', {name: 'Create an Account'}).click();

        await expect(page.locator('#firstname')).toBeEmpty();
        await expect(page.locator('#lastname')).toBeEmpty();
        await expect(page.locator('#email_address')).toBeEmpty();
        await expect(page.locator('.field.password.required .control #password')).toBeEmpty();
        await expect(page.locator('#password-confirmation')).toBeVisible();
    });

    test.skip('Verify if the Password and Confirm Password do not match "Please enter the same value again." an error message is displayed', async ({ page }) => {
        await page.getByRole('link', {name: 'Create an Account'}).click();

        await page.locator('.field.password.required .control #password').fill('Test2024');
        await page.locator('#password-confirmation').fill('Test2025');
        await page.getByRole('button', {name: 'Create an Account'}).click();

        await expect(page.locator('#password-confirmation-error')).toHaveText('Please enter the same value again.');
    });
    
    test('Verify after clicking the "Create an Account" link redirects the user to the Create New Customer Account page', async ({page}) => {
        await page.getByRole('link',{name: 'Create an Account'}).click();

        await expect(page.locator('.base')).toHaveText('Create New Customer Account');


    })
});