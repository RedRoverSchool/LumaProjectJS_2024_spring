import { test, expect } from "@playwright/test";

test.describe("gearBags", () => {
  const baseURL = "https://magento.softwaretestingboard.com/";

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("Verify material sidebar menu option exists", async ({ page }) => {
    await page.goto(baseURL);

    page.locator("#ui-id-6").hover();
    await page.locator("#ui-id-25").click();
    let title = await page.title();
    expect(title).toEqual("Bags - Gear");
    expect(page.getByText("Material")).toBeVisible();
  });
});
