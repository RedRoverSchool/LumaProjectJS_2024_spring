import { test, expect } from "@playwright/test";

test.describe("womenTops", () => {
  const WOMEN_TOPS_URL =
    "https://magento.softwaretestingboard.com/women/tops-women.html";

  const WOMEN_TOPS_ITEMS = [
    "Tank",
    "Tunic",
    "Top",
    "Bra",
    "Tee",
    "Jacket",
    "Shell",
    "Hoodie",
    "Fleece",
    "Sweatshirt",
    "Pullie",
  ];

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("verify that clicking on Women>Tops user is redirected to the Tops page", async ({ page }) => {
    await page.getByText("Women").hover();
    await page.locator("#ui-id-9").click();

    await expect(page).toHaveURL(WOMEN_TOPS_URL);
    await expect(page).toHaveTitle("Tops - Women");
  });

  test("verify that on the Tops page user sees women's outfits: jackets, hoodies & sweatshirts, tees, bras & tanks", async ({ page }) => {
    await page.getByText("Women").hover();
    await page.locator("#ui-id-9").click();

    const allWomenTopsItems = await page
      .locator(".products .product-items .product-item-link")
      .allTextContents();

    expect(allWomenTopsItems.length).toBeGreaterThan(0);

    const allItemsContainExpectedText = allWomenTopsItems.every((item) => {
      return WOMEN_TOPS_ITEMS.some((keyword) => item.includes(keyword));
    });

    expect(allItemsContainExpectedText).toBeTruthy();
  });
});
