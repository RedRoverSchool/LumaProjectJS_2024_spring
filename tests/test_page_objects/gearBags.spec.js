import { test, expect } from '@playwright/test';
import HomePage from '../../page_objects/homePage.js';
import GearBagsPage from '../../page_objects/gearBagsPage.js';
import { BASE_URL, GEAR_BAGS_HEADER, GEAR_BAGS_PAGE_END_POINT } from '../../helpers/testData.js';

test.describe('gearBagsPage.spec', () => {
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
})


