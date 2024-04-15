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

  test('TC 01.1.2_01 | Verify that clicking on Sing in redirects to the login page', async ({page}) => {
    const signInLocator = page.locator('.page-header').getByRole('link', { name: 'Sign In' });
    const LOGIN_PAGE_URL = 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/';
    const loginMainHeaderLocator = page.getByRole('heading', {name: 'Customer Login'});
    const sighInHeader = 'Customer Login';
    await signInLocator.click();

    await expect(page).toHaveURL(LOGIN_PAGE_URL);   
    await expect(loginMainHeaderLocator).toHaveText(sighInHeader)    
    
})

  test('TC 01.4.1_01 <Header/Shopping Cart Icon> Verify a counter with the number of items in the cart is displayed after adding new product', async({ page }) => {
    await page.getByRole('option', {name: 'XS'}).first().click();
    await page.getByRole('option', {name: 'Blue'}).first().click();
    await page.getByTitle('Add to Cart').first().click();
    const itemsNumber = page.locator('.counter-number');
    await itemsNumber.waitFor();

    await expect(itemsNumber).toHaveText('1');
  })
  
})
