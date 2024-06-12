import { test, expect } from "@playwright/test";

test.describe('Redirect to Login page by click on Sign in', () => {
    const LOGINPAGE_URL = "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/";

    test.beforeEach(async ({page}) => {
        await page.goto('/');
    })

    test('Click on Sign in and assert user redirection to the Login page', async ({page}) => {
        await page.getByRole('link', { name: 'Sign In' }).click();
        await expect(page).toHaveURL(LOGINPAGE_URL);
        await expect(page.locator('.base')).toHaveText("Customer Login");
    })
})