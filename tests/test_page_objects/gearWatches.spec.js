import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import GearWatchesPage from "../../page_objects/gearWatchesPage.js";
import {
  LIST_OF_SHOPPING_OPTIONS_ON_WATCHES_PAGE,
  LIST_OF_SHOPPING_OPTIONS_ON_WATCHES_PAGE_LOCATORS,
} from "../../helpers/testData.js";

test.describe('gearWatchesPage.spec', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.open();
        await homePage.hoverGearMenuItem();
        await homePage.clickGearWatchesSubmenuItem();
    })

    LIST_OF_SHOPPING_OPTIONS_ON_WATCHES_PAGE.forEach((option, idx) => {
        test('Verify the "Clear All" button after applying filters on the Gear/Watches page'), async ({ page }) => {
            const gearWatchesPage = new GearWatchesPage(page);

         if (LIST_OF_SHOPPING_OPTIONS_ON_WATCHES_PAGE[idx] === "GENDER")
            {
                return;
            } else
         {
           await gearWatchesPage.clickShoppingOptions(option);
           await gearWatchesPage.locators.getWaitForListOfShoppingOptions(option, idx);

           const listOfSubmenuItemsActual = await gearWatchesPage.locators.getItemOfShoppingOption(option, idx);

           const listOfSubmenuItemsSplitedActual = listOfSubmenuItemsActual.map(
             (item) => item.split(/\s\d+/)[0]
           );

           for (let i = 0; i < listOfSubmenuItemsSplitedActual.length; i++) {
             await page
               .getByRole("link", {
                 name: listOfSubmenuItemsSplitedActual[i],
               })
               .click();

             await expect(gearWatchesPage.locators.getNowShoppingBySubtitle()).toBeVisible();
             await gearWatchesPage.clickClearAllButton();
             await expect(
               gearWatchesPage.locators.getNowShoppingBySubtitle()
             ).not.toBeVisible();

             await page.getByRole("tab", { name: option }).click();
           }
         }
        }
    })
})