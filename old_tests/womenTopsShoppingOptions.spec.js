import { test, expect } from "@playwright/test";

test.describe("womenTopsShoppingOptions", () => {
  const JACKET_ITEMS = ["Jacket", "Shell"];

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("after applying the filter Jackets, only jackets are displayed on the page", async ({
    page,
  }) => {
    await page.getByText("Women").hover();
    await page.locator("#ui-id-9").click();

    await page.getByRole("tab", { name: "Category" }).click();
    await page.getByRole("link", { name: "Jackets" }).click();

    const allItems = await page
      .locator(".products .product-items .product-item-link")
      .allTextContents();

    const allItemsContainExpectedText = allItems.every((item) => {
      return JACKET_ITEMS.some((keyword) => item.includes(keyword));
    });

    expect(allItemsContainExpectedText).toBeTruthy();
  });
});
