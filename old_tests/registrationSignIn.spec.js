import { test, expect } from "@playwright/test";

test.describe('registrationSignIn', () => {
    const BASE_URL = "https://magento.softwaretestingboard.com";
    const myAccountPage = BASE_URL + '/customer/account/';
    const userEmail = 'autotestluma@mailinator.com';
    const userPassword = 'Heslo123';
    const userName = 'Test Testovich';

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test('Verify that user can log in', async ({ page }) => {
        const signInLink = page.getByRole('link', { name: 'Sign In' });
        const emailInput = page.getByLabel('Email', { exact: true });
        const passwordInput = page.getByLabel('Password');
        const signInButton = page.getByRole('button', { name: 'Sign In' });
        const userNameInHeader = page.locator('header .logged-in');
        const userMenu = page.getByRole('banner').locator('button').filter({ hasText: 'Change' });
        const myAccountButton = page.getByRole('link', { name: 'My Account' });
        const userContactInfo = page.locator('.box-information .box-content > p');

        await signInLink.click();
        await emailInput.fill(userEmail);
        await passwordInput.fill(userPassword);
        await signInButton.click();
        await page.waitForTimeout(3000);

        if (await userNameInHeader.isVisible()) {
            await userMenu.click();
            await myAccountButton.click();
        } else {
            await page.goto(myAccountPage);
        }

        await expect(page.locator('.base')).toHaveText('My Account');
        await expect(userContactInfo).toContainText(userName);
        await expect(userContactInfo).toContainText(userEmail);
    });

});