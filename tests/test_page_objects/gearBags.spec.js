import { test, expect } from '@playwright/test';
import HomePage from '../../page_objects/homePage.js';
import GearBagsPage from '../../page_objects/gearBagsPage.js';
import { BASE_URL, GEAR_BAGS_HEADER, GEAR_BAGS_PAGE_END_POINT } from '../../helpers/testData.js';
import { MATERIAL_OPTION_NAMES, ACTIVE_SECOND_PAGE_TEXT, ACTIVE_PAGE_CLASS_PAGINATION, ACTIVE_PAGE_TEXT } from "../../helpers/testGearBagsData";
import { GEAR_BAGES_SECOND_PAGE_END_POINT } from '../../helpers/testGearBagsData.js'

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
        test.skip(`Verify that ${name} from material options list is visible and has right name`, async ({ page }) => {
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
    test('BTN "Page" redirects to the corresponding page', async ({ page }) => {
        const homePage = new HomePage(page)
        const gearBagsPage = new GearBagsPage(page)

        await homePage.hoverGearMenuItem()
        await homePage.clickGearBags()
        await gearBagsPage.clickInactiveSecondPagePaginationLink()
        
        await expect(gearBagsPage.locators.getPaginationSecondPageAttr()).toHaveText(ACTIVE_PAGE_TEXT + '2')
        await expect(gearBagsPage.locators.getPaginationSecondPageAttr()).toHaveClass(ACTIVE_PAGE_CLASS_PAGINATION)
        await expect(gearBagsPage.locators.getPaginationFirstPageAttr()).not.toHaveText(ACTIVE_PAGE_TEXT)
        await expect(page).toHaveURL(BASE_URL + GEAR_BAGES_SECOND_PAGE_END_POINT)
    })
})