import { test, expect } from "@playwright/test";

test.describe('page gear', () => {

  const whatNewUrl = 'https://magento.softwaretestingboard.com/what-is-new.html';
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
})
