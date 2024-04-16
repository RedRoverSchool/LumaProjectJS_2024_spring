import { test, expect } from "@playwright/test";

test.describe("Checking Promo blocks on page 'Women'", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/women.html");
  }) 

  test("Navigate to Women's Tees page by clicking Promo link on 'Women' page", async ({ page }) => {
    await page.getByRole('link', {name: 'Women’s Tees'}).click();

    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/women/tops-women/tees-women.html');
  })

  test("Navigate to Shop Pants page by clicking Promo link on 'Shop Pants", async ({ page }) => {
    await page.getByRole('link', {name: 'Hot pants'}).click();

    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/women/bottoms-women/pants-women.html');
  })

});