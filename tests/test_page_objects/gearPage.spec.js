import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import GearPage from "../../page_objects/gearPage.js";

test.describe('menPage.spec', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.open();
    });
    
    test("Verify that each sub-category link in filter “Shop By Category” to be blue.", async ({ page }) => {
        const homePage = new HomePage(page);
        const gearPage = new GearPage(page);

        await homePage.clickGearMenuItem();
        const SubCategoryBagsColour = await gearPage.locators.getSubCategoryBags();
        const SubCategoryFitnessColour = await gearPage.locators.getSubCategoryFitness();
        const SubCategoryWatchesColour = await gearPage.locators.getSubCategoryWatches();

        await expect (SubCategoryBagsColour).toHaveCSS('border-color', "rgb(0, 107, 180)");
        await expect(SubCategoryFitnessColour).toHaveCSS('border-color', "rgb(0, 107, 180)");
        await expect(SubCategoryWatchesColour).toHaveCSS('border-color', "rgb(0, 107, 180)");
    });
});