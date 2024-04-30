import { test, expect } from '@playwright/test';
import HomePage from '../../page_objects/homePage.js';
import GearBagsPage from '../../page_objects/gearBagsPage.js';
import { BASE_URL, GEAR_BAGS_HEADER, GEAR_BAGS_PAGE_END_POINT } from '../../helpers/testData.js';
import { MATERIAL_OPTION_NAMES } from "../../helpers/testGearBagsData";

test.describe('gearBags.spec', () => {
    test.beforeEach(async({page}) => {
        const homePage = new HomePage(page);

        await homePage.open();
    })

     test('Redirect to "Gear Bags" page', async({page}) => {
        const homePage = new HomePage(page);
        const gearBagsPage = new GearBagsPage(page);

        await homePage.hoverGearMenuItem();
        await homePage.clickGearBagsSubmenuItem();
       
        await expect(page).toHaveURL(BASE_URL + GEAR_BAGS_PAGE_END_POINT);
        await expect(gearBagsPage.locators.getGearBagsPageHeader()).toHaveText(GEAR_BAGS_HEADER);
    }) 
    
    MATERIAL_OPTION_NAMES.forEach((name, idx) => {
        test(`Verify that ${name} from material options list is visible and has right name`, async ({ page }) => {
            const homePage = new HomePage(page);
            const gearBagsPage = new GearBagsPage(page);

            await homePage.hoverGearMenuItem();
            await homePage.clickGearBags();

            await gearBagsPage.clickMaterialOption();

            const materialName = gearBagsPage.locators.getMateialItemList().nth(idx)
            const materialNameText = await gearBagsPage.getMaterialItemNameText(idx);
            
            expect(materialName).toBeVisible();
            expect(materialNameText).toEqual(MATERIAL_OPTION_NAMES[idx]);           
        })
    }) 
    
})