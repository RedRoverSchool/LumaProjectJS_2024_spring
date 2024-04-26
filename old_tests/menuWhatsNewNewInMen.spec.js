import { test, expect } from "@playwright/test";

test.describe("NEW in MEN", () => {
  const whatsNewUrl =
    "https://magento.softwaretestingboard.com/what-is-new.html";
  test.beforeEach(async ({ page }) => {
    await page.goto(whatsNewUrl);
  });
  test("TC 04.1.3_01 Verify the “NEW IN MEN'S” section is displayed on the “What's New” page", async ({page}) => {
    await expect(page.getByText("New in men's")).toBeVisible();
  })
});
