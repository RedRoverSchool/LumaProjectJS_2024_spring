import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import WomenTopsPage from "../../page_objects/womenTopsPage.js";

test.describe('womenTopsPage.spec', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.open();
    });
    te('Verify visability of Shopping Option in the menu on the left side', async ({ page }) => {
        const homePage = new HomePage(page);
        const womenTopsPage = new WomenTopsPage(page);
  
        await homePage.open();
        await homePage.hoverWomenLink();
        await homePage.clickWomenTopsLink();
        await womenTopsPage.clickShoppingOptionsHeading();
  
        await expect(womenTopsPage.locators.getShoppingOptionsHeading()).toBeVisible();
      })
})