import { test, expect } from "@playwright/test";

test.describe('header', () => {
  const BASE_URL = "https://magento.softwaretestingboard.com";

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })

  test('verify Home page title', async ({ page }) => {

    await expect(page).toHaveTitle('Home Page');
  })

  test('verify user can navigate to home page clicking on logo from "What\'s New" page', async ({ page }) => {
    await page.getByRole('listitem').filter({ hasText: "What's New" }).click();
    await expect(page).toHaveURL(BASE_URL + '/what-is-new.html');

    await page.getByLabel('store logo').click();
    await expect(page).toHaveURL(BASE_URL);
  })

  test('navigate to home page clicking on logo from "What\'s New" page', async ({ page }) => {
    await page.getByRole('listitem').filter({ hasText: "What's New" }).click();
    await expect(page).toHaveURL(BASE_URL + '/what-is-new.html');

    await page.getByLabel('store logo').click();
    await expect(page).toHaveURL(BASE_URL);
  })

  test('Verify the Create an Account link is displayed on the main page in the header', async ({ page }) => {
    
    const createAccountPage = page.locator('h1.page-title');
    await expect(createAccountPage).toBeVisible();
  });

  test('Verify after clicking the “Create an account" link the Create New Customer Account page opens', async ({ page }) => {
    await page.getByRole('link', {name: 'Create an Account'}).click();
        
    const createAccountPage = page.locator('h1.page-title');
    await expect(createAccountPage).toBeVisible();
    await expect(page).toHaveURL(BASE_URL + '/customer/account/create/');
  });
})
