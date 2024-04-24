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
    test('If there is an account associated with … (here your email)... displays if the user enters valid data', async ({ page }) => {
        function generateRandomEmail() {
            const mailbox = Math.random().toString(36).substring(2, 10);
            const domain = "example.com";
            return `${mailbox}@${domain}`;
          }

        const email = generateRandomEmail();
        await page.getByRole('link', {name: 'Sign In'}).click();
        await page.getByRole('link', {name: 'Forgot Your Password?'}).click();
        await page.locator('#email_address').fill(email);
        await page.locator('.action.submit.primary').click();

        await expect(page.getByRole('alert').first()).toHaveText(`If there is an account associated with ${email} you will receive an email with a link to reset your password.`);
    });

    test('After entering a valid email to the Email field and clicking the Reset My Password button the Customer Login page opens', async({ page }) => {
        function generateRandomEmail() {
            const mailbox = Math.random().toString(36).substring(2, 10);
            const domain = "example.com";
            return `${mailbox}@${domain}`;
          }

        const email = generateRandomEmail();
        await page.getByRole('link', {name: 'Sign In'}).click();
        await page.getByRole('link', {name: 'Forgot Your Password?'}).click()
        await page.locator('#email_address').fill(email);
        await page.locator('.action.submit.primary').click();

        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/');
        await expect(page.locator('h1.page-title')).toHaveText('Customer Login');
    });
});