import { test, expect } from "@playwright/test";
import { assert } from "console";

test.describe("menuWomen", () => {
 
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  }) 
  
  test("dropdown for Women has 2 elements Tops and Bottoms", async ({ page }) => {
    await page.getByText('Women').hover();

    await expect(page.locator('#ui-id-9')).toBeVisible();
    await expect(page.locator('#ui-id-10')).toBeVisible();  
  })

  test("Women>Tops dropdown has items: Jackets, Hoodies & Sweatshirts, Tees, Bras & Tanks", async ({ page }) => {
    await page.getByText('Women').hover();
    await page.locator('#ui-id-9').hover();

    await expect(page
      .locator("#ui-id-2 > li.category-item > ul > li.parent.ui-menu-item > ul")
      .first())
      .toHaveText("JacketsHoodies & SweatshirtsTeesBras & Tanks");    
  })

  test("user is redirected to Women page", async ({ page }) => {
    await page.getByText('Women').click();
    
    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/women.html');
  })

  test("Women>Bottoms dropdown has items: Pants, Shorts", async ({ page }) => {
    await page.getByText('Women').hover();
    await page.locator('#ui-id-10').hover();

    await expect(page.locator('#ui-id-15')).toBeVisible();
    await expect(page.locator('#ui-id-15')).toHaveText('Pants');

    await expect(page.locator('#ui-id-16')).toBeVisible();
    await expect(page.locator('#ui-id-16')).toHaveText('Shorts');
  })
test("Verify Menu/Women is the second tab in the Navigation Menu", async ({page}) => {
  const menuLinks = page.getByRole('navigation').getByRole('listitem');
  const allLinksText = await menuLinks.allInnerTexts();
  expect(allLinksText[1]).toEqual("Women");
})
})  