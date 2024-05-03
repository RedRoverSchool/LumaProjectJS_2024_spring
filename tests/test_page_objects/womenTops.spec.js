import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import WomenTopsPage from "../../page_objects/womenTopsPage.js";
import { WOMEN_TOPS_STYLE_CATEGORIES, BASE_URL, WOMEN_TOPS_PAGE_END_POINT } from "../../helpers/testWomenData.js";

test.describe('womenTopsPage.spec', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.open();
    });
    test('Verify visability of Shopping Option in the menu on the left side', async ({ page }) => {
        const homePage = new HomePage(page);
        const womenTopsPage = new WomenTopsPage(page);
  
        await homePage.open();
        await homePage.hoverWomenLink();
        await homePage.clickWomenTopsLink();
        await womenTopsPage.clickShoppingOptionsHeading();
  
        await expect(womenTopsPage.locators.getShoppingOptionsHeading()).toBeVisible();
      })
      test('Verify dropdown menu has 19 Options', async ({ page }) => {
        const homePage = new HomePage(page);
        const womenTopsPage = new WomenTopsPage(page);

        await homePage.open();
        await homePage.hoverWomenLink();
        await homePage.clickWomenTopsLink();
        await womenTopsPage.clickStyleDropDownMenu();
        for (let index = 0; index < WOMEN_TOPS_STYLE_CATEGORIES.length; index++) {
          await expect(womenTopsPage.locators.getStyleList().nth(index)).toContainText(WOMEN_TOPS_STYLE_CATEGORIES[index])
        }
        await expect(page).toHaveURL(BASE_URL + WOMEN_TOPS_PAGE_END_POINT)
      });
      
})