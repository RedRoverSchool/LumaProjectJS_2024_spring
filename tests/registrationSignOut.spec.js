import { test, expect } from "@playwright/test";

test.describe('sign out', () => {


  test.beforeEach(async ({ page }) => {
    await page.goto('/');

  })
  test('should be a greeting with the users name ', async ({page }) => {

        const email = 'katikati3@gmail.com';
        const password = 'Password!';

        await page.getByRole('link', { name: 'Sign In' }).click();
		await page.getByLabel('Email', { exact: true }).fill(email);
		await page.getByLabel('Password').fill(password);
		await page.getByRole('button', { name: 'Sign In' }).click();
        await page.waitForTimeout(3000);
        await page.locator('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.greet.welcome > span');
        await expect(page.locator('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.greet.welcome > span')).toBeVisible();
 })

})
