import { test, expect } from "@playwright/test";

test.describe('Forgot Password Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });
    
    test('Verify the Forgot Your Password link redirects to the Forgot Your Password page', async ({ page }) => {
        await page.getByRole('link', {name: 'Sign In'}).click();
        await page.getByRole('link', {name: 'Forgot Your Password?'}).click();

        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/customer/account/forgotpassword/');
        await expect(page.locator('h1.page-title')).toBeVisible();
    });

    test('The error message appears below the Email field after entering the incorrect email', async ({ page }) => {
        await page.getByRole('link', {name: 'Sign In'}).click();
        await page.getByRole('link', {name: 'Forgot Your Password?'}).click();
        await page.locator('#email_address').fill('qee@c');
        await page.locator('.action.submit.primary').click();

        await expect(page.locator('#email_address-error')).toHaveText('Please enter a valid email address (Ex: johndoe@domain.com).');
    });
});