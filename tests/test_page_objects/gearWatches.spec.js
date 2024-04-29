import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import GearWatchesPage from "../../page_objects/gearWatchesPage.js";
import {
  LIST_OF_SHOPPING_OPTIONS_ON_WATCHES_PAGE
} from "../../helpers/testData.js";

test.describe('gearWatchesPage.spec', () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    await homePage.hoverGearMenuItem();
    await homePage.clickGearWatchesSubmenuItem();
  })

  LIST_OF_SHOPPING_OPTIONS_ON_WATCHES_PAGE.forEach((option, idx) => {
    test(`Verify the "Clear All" button after applying ${option} filters on the Gear/Watches page`, async ({ page }) => {
      test.slow();
      const gearWatchesPage = new GearWatchesPage(page);

      if (LIST_OF_SHOPPING_OPTIONS_ON_WATCHES_PAGE[idx] === "GENDER")
      {
        return;
      } else
      {
        await gearWatchesPage.clickShoppingOption(option);
        await gearWatchesPage.locators.getWaitForListOfShoppingOptions(option, idx);

        const LIST_OF_SUBMENU_ITEMS_ACTUAL = await gearWatchesPage.locators.getArrayOfShoppingOptions(option, idx);

        const LIST_OF_SUBMENU_ITEMS_SPLITTED_ACTUAL = LIST_OF_SUBMENU_ITEMS_ACTUAL.map(
          (item) => item.split(/\s\d+/)[0]
        );

        for (let i = 0; i < LIST_OF_SUBMENU_ITEMS_SPLITTED_ACTUAL.length; i++)
        {
          await gearWatchesPage.clickSubMenuLink(LIST_OF_SUBMENU_ITEMS_SPLITTED_ACTUAL[i]);

          await expect(gearWatchesPage.locators.getNowShoppingBySubtitle()).toBeVisible();
          await gearWatchesPage.clickClearAllButton();
          await expect(
            gearWatchesPage.locators.getNowShoppingBySubtitle()
          ).not.toBeVisible();

          await gearWatchesPage.clickShoppingOption(option);
        }
      }
    })
  })

   LIST_OF_MATERIALS_SUBITEMS_EXPECTED.forEach((material) => {
     test.only(`Verify the related products are displayed after applying ${material} Material filter on the Gear/Watches page`, async ({
       page,
     }) => {
       test.slow();
       const gearWatchesPage = new GearWatchesPage(page);
       const watchProductPage = new WatchProductPage(page);

       gearWatchesPage.clickShoppingOption(
         LIST_OF_SHOPPING_OPTIONS_ON_WATCHES_PAGE[3]
       );
       await gearWatchesPage.locators.getWaitForListOfShoppingOptions(
         LIST_OF_SHOPPING_OPTIONS_ON_WATCHES_PAGE,
         3
       );
       gearWatchesPage.clickSubMenuLink(material);

       await expect(
         gearWatchesPage.locators.getNowShoppingBySubtitle()
       ).toBeVisible();
       const arrayOfProducts = await gearWatchesPage.locators
         .getAllProducts()
         .allInnerTexts();

       for (let product of arrayOfProducts) {
         gearWatchesPage.openProductPage(product);
         watchProductPage.openMoreInformationSection();
         watchProductPage.locators
           .getMoreInformationSectionContent()
           .waitFor({ state: "visible" });

         await expect(
           watchProductPage.locators.getMoreInformationSectionContent()
         ).toContainText(material);
         await page.goBack();
       }
     });
   });
})