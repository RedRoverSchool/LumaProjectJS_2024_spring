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
});