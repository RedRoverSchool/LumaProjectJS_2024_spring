import { test, expect } from "@playwright/test";

test.describe("NEW in MEN", () => {
  const whatsNewUrl =
    "https://magento.softwaretestingboard.com/what-is-new.html";
  test.beforeEach(async ({ page }) => {
    await page.goto(whatsNewUrl);
  });
  test("TC 04.1.3_01 Verify the “NEW IN MEN'S section is displayed on the What's New page", async ({
    page,
  }) => {
    await expect(page.getByText("New in men's")).toBeVisible();
  });

  test("TC 04.1.3_02 Verify Hoodies & Sweatshirts, Jackets, Tees, Tanks, Pants, Shorts links are displayed", async ({
    page,
  }) => {
    const hoodiesSwetshirts = page.locator(
      'li.item > a[href="https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html"]'
    );
    const jackets = page.locator(
      'li.item > a[href="https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html"]'
    );
    const tees = page.locator(
      'li.item > a[href ="https://magento.softwaretestingboard.com/men/tops-men/tees-men.html"]'
    );
    const tanks = page.locator(
      'li.item > a[href ="https://magento.softwaretestingboard.com/men/tops-men/tanks-men.html"]'
    );
    const pants = page.locator(
      'li.item > a[href ="https://magento.softwaretestingboard.com/men/bottoms-men/pants-men.html"]'
    );
    const shorts = page.locator(
      'li.item > a[href ="https://magento.softwaretestingboard.com/men/bottoms-men/shorts-men.html"]'
    );
    let itemsArr = [hoodiesSwetshirts, jackets, tees, tanks, pants, shorts];
    for(let i = 0; i < itemsArr.length; i++) {
      await expect(itemsArr[i]).toBeVisible();
    }
  });
});
