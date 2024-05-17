import { test, expect } from '@playwright/test';
import HomePage from '../../page_objects/homePage.js';
import GearBagsPage from '../../page_objects/gearBagsPage.js';
import { BASE_URL, GEAR_BAGS_HEADER, GEAR_BAGS_PAGE_END_POINT } from '../../helpers/testData.js';
import { MATERIAL_OPTION_NAMES, ACTIVE_PAGE_CLASS_PAGINATION, ACTIVE_PAGE_TEXT } from "../../helpers/testGearBagsData";
import { GEAR_BAGES_SECOND_PAGE_END_POINT } from '../../helpers/testGearBagsData.js';

test.describe('gearBags.spec', () => {
    test.beforeEach(async({page}) => {
        const homePage = new HomePage(page);

        await homePage.open();
        await homePage.hoverGearMenuItem();
        await homePage.clickGearBags();
    })

     test('Redirect to "Gear Bags" page', async({page}) => {       
        const gearBagsPage = new GearBagsPage(page);
       
        await expect(page).toHaveURL(BASE_URL + GEAR_BAGS_PAGE_END_POINT);
        await expect(gearBagsPage.locators.getGearBagsPageHeader()).toHaveText(GEAR_BAGS_HEADER);
    }) 
    
    MATERIAL_OPTION_NAMES.forEach((name, idx) => {
        test(`Verify that ${name} from material options list is visible and has right name`, async ({ page }) => {
            const gearBagsPage = new GearBagsPage(page);

            await gearBagsPage.clickMaterialOption();

            const materialName = await gearBagsPage.locators.getMateialItemList().nth(idx)
            const materialNameText = await gearBagsPage.getMaterialItemNameText(idx);
            
            expect(materialName).toBeVisible();
            expect(materialNameText).toEqual(MATERIAL_OPTION_NAMES[idx]);           
        })
    })
    
    test('BTN "Page" redirects to the corresponding page', async ({ page }) => {
        const homePage = new HomePage(page)     

        await homePage.hoverGearMenuItem()
        const gearBagsPage = await homePage.clickGearBags()
        await gearBagsPage.clickInactiveSecondPagePaginationLink()
        
        await expect(gearBagsPage.locators.getPaginationSecondPageAttr()).toHaveText(ACTIVE_PAGE_TEXT + '2')
        await expect(gearBagsPage.locators.getPaginationSecondPageAttr()).toHaveClass(ACTIVE_PAGE_CLASS_PAGINATION)
        await expect(gearBagsPage.locators.getPaginationFirstPageAttr()).not.toHaveText(ACTIVE_PAGE_TEXT)
        await expect(page).toHaveURL(BASE_URL + GEAR_BAGES_SECOND_PAGE_END_POINT)
    })
    
    test('Apply filter "Leather" and verify that each bag has selected material in the description', async ({ page }) => {
        const gearBagsPage = new GearBagsPage(page);

        await gearBagsPage.clickMaterialOption();
        await gearBagsPage.clickMaterialLeather();

        const numberOfItems = await gearBagsPage.getNumberOfProductItems();
    
        for (let i = 0; i < numberOfItems; i++) {
            const bagItemPage = await gearBagsPage.clickOneProduct(i);
            await bagItemPage.clickMoreImformationPanel();
          
            expect(await bagItemPage.getMaterialInformationText()).toContain(MATERIAL_OPTION_NAMES[3]);
                   
            await page.goBack();
            await page.goBack();
        }      
      })

      test("Verify that a User can change mode of products", async ({ page }) => {
        const gearBagsPage = new GearBagsPage(page);

        await gearBagsPage.clickListMode();
        
        expect(gearBagsPage.locators.getListMode()).toBeTruthy();
      })

      
})