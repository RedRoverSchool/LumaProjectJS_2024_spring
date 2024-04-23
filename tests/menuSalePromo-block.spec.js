import { test, expect } from "@playwright/test";

test.describe("menuSalePromo-block", () => {
  const links = [
    { name: 'Hoodies and Sweatshirts', url: 'https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html', title: 'Hoodies & Sweatshirts' },
    { name: 'Jackets', url: 'https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html', title: 'Jackets' },
    { name: 'Tees', url: 'https://magento.softwaretestingboard.com/men/tops-men/tees-men.html', title: 'Tees' },
    { name: 'Pants', url: 'https://magento.softwaretestingboard.com/men/bottoms-men/pants-men.html', title: 'Pants' },
    { name: 'Shorts', url: 'https://magento.softwaretestingboard.com/men/bottoms-men/shorts-men.html', title: 'Shorts' }
  ];

  test.beforeEach(async ({ page }) => {
    await page.goto("/" + "sale.html");

  });

  test("Verify 'Sale' page contains 6 promo-blocks in body part", async ({ page }) => {
    const promoBlocks = page.locator("main a.block-promo");

    await expect(promoBlocks).toHaveCount(6);
  });

  for (const link of links) {
  test(`Check that ${link.name} link opens the corresponding page`, async ({ page }) => {
      await page.getByRole('link', { name: link.name }).last().click();
      await expect(page).toHaveURL(link.url);
      await expect(page.locator('#page-title-heading > span')).toHaveText(link.title);
    });
  }

  test(`Redirecting to "Men Sale" page after click on "Shop men’s deals" block`, async ({ page }) => {
    await page.locator("a.sale-mens").click();

    await expect(page).toHaveTitle("Men Sale");
    await expect(page.locator("span[data-ui-id='page-title-wrapper']")).toHaveText("Men Sale");
  });
})