import { test, expect } from "@playwright/test";

test.describe("Check logo icon navigation", () => {

  const linksArr = [
    "https://magento.softwaretestingboard.com/what-is-new.html",
    "https://magento.softwaretestingboard.com/women.html",
    "https://magento.softwaretestingboard.com/men.html",
    "https://magento.softwaretestingboard.com/gear.html",
    "https://magento.softwaretestingboard.com/training.html",
    "https://magento.softwaretestingboard.com/sale.html",
    "https://magento.softwaretestingboard.com/customer/account/create/",
  ];

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  })

  test("Click on LOGO", async ({ page }) => {

    for (let i = 0; i < linksArr.length; i++) {
      let link = linksArr[i];
      await page.goto(link);
      await page.locator(".logo").click();
      await expect(page).toHaveURL("https://magento.softwaretestingboard.com");
    }
  });
});
