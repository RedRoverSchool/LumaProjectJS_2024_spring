import { test, expect } from '@playwright/test';
import HomePage from "../../page_objects/homePage";
import GearBagsPage from "../../page_objects/gearBagsPage";
import { MATERIAL_OPTION_NAMES } from "../../helpers/testGearBagsData";

test.describe('gearBags', () => {

    MATERIAL_OPTION_NAMES.forEach((name, idx) => {
        test(`Verify that ${name} from material options list is visible and has right name`, async ({ page }) => {
            const homePage = new HomePage(page);
            const gearBagsPage = new GearBagsPage(page);

            await homePage.open();
            await homePage.hoverGearMenuItem();
            await homePage.clickGearBags();

            await gearBagsPage.clickMaterialOption();

            const materialName = gearBagsPage.locators.getMateialItemList().nth(idx)
            const materialNameText = await gearBagsPage.getMaterialItemNameText(idx);
            
            expect(materialName).toBeVisible();
            expect(materialNameText).toEqual(MATERIAL_OPTION_NAMES[idx]);           
        })
    }) 
   
});