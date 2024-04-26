import { test, expect } from "@playwright/test";

test.describe("Checking Promo blocks on page 'Women'", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/women.html");
  }) 

  test("Navigate to Women's Tees page by clicking Promo link on 'Women' page", async ({ page }) => {
    await page.getByRole('link', {name: 'Women’s Tees'}).click();

    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/women/tops-women/tees-women.html');
  })

  test("Navigate to Shop Pants page by clicking Promo link on 'Hot Pants/Hot deals", async ({ page }) => {
    await page.getByRole('link', {name: 'Hot pants'}).click();

    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/women/bottoms-women/pants-women.html');
  })  

  test('Each sub-category link in filter “Sort By Category” has a blue color', async ({ page }) => {
    await expect(page.getByRole('link', {name: 'Tops'})).toHaveCSS('color', 'rgb(0, 107, 180)');
    await expect(page.getByRole('link', {name: 'Bottoms'})).toHaveCSS('color', 'rgb(0, 107, 180)');
  })
  
  test.fail('click Promo link', async ({page}) => {//has to fail because there's a bug on the page
    await page.getByText('Shop New Yoga').click();

    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/collections/yoga-new.html')
    await expect(page).locator('.page-title-heading').toHaveText('New Luma Yoga Collection') 
  })
})