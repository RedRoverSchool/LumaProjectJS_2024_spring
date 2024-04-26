import { test, expect } from "@playwright/test";

test.describe('page gear', () => {

  const whatNewUrl = 'https://magento.softwaretestingboard.com/what-is-new.html';
  const newInWomensMenuItemList = {
    "Hoodies & Sweatshirts": "/women/tops-women/hoodies-and-sweatshirts-women.html",
    "Jackets": "/women/tops-women/jackets-women.html",
    "Tees": "/women/tops-women/tees-women.html",
    "Bras & Tanks": "/women/tops-women/tanks-women.html",
    "Pants": "/women/bottoms-women/pants-women.html",
    "Shorts": "/women/bottoms-women/shorts-women.html"
  }
  const BASE_URL = "https://magento.softwaretestingboard.com";

    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    })

    test('should  be "new in women" section', async ({ page }) => {

        await page.goto(whatNewUrl);
        await expect(page).toHaveURL(whatNewUrl);
        await page.getByText("New in women's");
        await expect(page.getByText("New in women's")).toBeVisible();

        const newItems =  page.getByText('Hoodies & Sweatshirts Jackets Tees Bras & Tanks Pants Shorts');
        await page.getByText(newItems)
        await expect(newItems).toBeVisible();
    })

    test('should be a transition to the page "hoodies & sweatshirts"', async ({ page}) => {

      await page.goto(whatNewUrl);

      const hoodiesPage = page.locator('li.item > a[href="https://magento.softwaretestingboard.com/women/tops-women/hoodies-and-sweatshirts-women.html"]');

      await hoodiesPage.click();
      await expect(page).toHaveURL('https://magento.softwaretestingboard.com/women/tops-women/hoodies-and-sweatshirts-women.html');

    })

    test('should be a transition to the page "tees"', async ({ page}) => {

      await page.goto(whatNewUrl);

      const teesPage = page.locator('li.item > a[href="https://magento.softwaretestingboard.com/women/tops-women/tees-women.html"]');

      await teesPage.click();
      await expect(page).toHaveURL('https://magento.softwaretestingboard.com/women/tops-women/tees-women.html');

    })

    test('should be a transition to the page "jackets"', async ({ page}) => {

      await page.goto(whatNewUrl);

      const jacketsPage = page.locator('li.item > a[href="https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html"]');

      await jacketsPage.click();
      await expect(page).toHaveURL('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html');

    })

    test('should be a transition to the page " Bras & Tanks"', async ({ page}) => {

      await page.goto(whatNewUrl);

      const brasTanksPage = page.locator('li.item > a[href="https://magento.softwaretestingboard.com/women/tops-women/tanks-women.html"]');

      await brasTanksPage.click();
      await expect(page).toHaveURL('https://magento.softwaretestingboard.com/women/tops-women/tanks-women.html');

    })

    test('should be a going to the page "Pants"', async ({ page}) => {

      await page.goto(whatNewUrl);

      const pantsPage = page.locator('li.item > a[href="https://magento.softwaretestingboard.com/women/bottoms-women/pants-women.html"]');

      await pantsPage.click();
      await expect(page).toHaveURL('https://magento.softwaretestingboard.com/women/bottoms-women/pants-women.html');

    })

    test('should be a going to the page "Shorts"', async ({ page}) => {

      await page.goto(whatNewUrl);

      const shortsPage = page.locator('li.item > a[href="https://magento.softwaretestingboard.com/women/bottoms-women/shorts-women.html"]');

      await shortsPage.click();
      await expect(page).toHaveURL('https://magento.softwaretestingboard.com/women/bottoms-women/shorts-women.html');

    })

    for (let newInWomensMenuItem in newInWomensMenuItemList){
      test(`verify ${newInWomensMenuItem} link redirects to the new page ${newInWomensMenuItem}`, async({ page }) => {
        const menuItem = page.getByRole('link', { name: newInWomensMenuItem }).first();
        const pageHeader = page.locator('h1 .base');
        const pageURL = BASE_URL + newInWomensMenuItemList[newInWomensMenuItem];
        
        await page.goto(whatNewUrl);
        await menuItem.click();

        await expect(page).toHaveURL(pageURL);
        await expect(pageHeader).toHaveText(newInWomensMenuItem);
      })
    }
})
