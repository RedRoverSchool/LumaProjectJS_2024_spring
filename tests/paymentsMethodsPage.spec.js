import { test, expect } from "@playwright/test";

test.describe('User Stored Payments Methods', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const email = 'TEST@TEST2024.test';
        const password = 'Test2024';

        await page.locator('ul li.authorization-link ').first().click();
        await page.locator('#email').fill(email);
        await page.locator('#pass[title="Password"]').fill(password);
        await page.locator('#send2.action.login').click();
        await page.locator("div[class='panel header'] span[role='button']").click();
        await page.getByRole('link', {name: 'My Account'}).click();
    });

    test('Verify the Stored Payment Methods link is on the left side of the users account page', async ({ page }) => {
        await expect(page.locator('#block-collapsible-nav ul li:nth-child(8)')).toBeVisible();
    });

    test('Verify if there is no payment methods entered then “You have no stored payment methods.” message is displayed', async ({ page }) => {
        await page.locator('#block-collapsible-nav ul li:nth-child(8)').click();

        await expect(page.locator('div.message.info.empty span')).toHaveText('You have no stored payment methods.');
    });
});