import { test, expect } from "@playwright/test";

test.describe("womenTops", () => {
  const WOMEN_TOPS_URL =
    "https://magento.softwaretestingboard.com/women/tops-women.html";

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("verify that clicking on Women>Tops user is redirected to the Tops page", async ({ page }) => {
    await page.getByText("Women").hover();
    await page.locator("#ui-id-9").click();

    await expect(page).toHaveURL(WOMEN_TOPS_URL);
    await expect(page).toHaveTitle("Tops - Women");
  });
});
