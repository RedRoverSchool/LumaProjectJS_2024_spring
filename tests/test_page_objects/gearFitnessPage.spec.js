import { test, expect } from '@playwright/test';
import HomePage from '../../page_objects/homePage.js';
import GearFitnessPage from '../../page_objects/gearFitnessPage.js';
import { BASE_URL, GEAR_FITNESS_PAGE_END_POINT, SORTED_LIST_FITNESS_PAGE_ENDPOINT, GEAR_FITNESS_NUMBER_ITEMS_IN_GRID_MODE, GEAR_FITNESS_NUMBER_ITEMS_IN_LIST_MODE } from '../../helpers/testData.js';

test.describe('gearFitnessPage.spec', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.open();
    })
    
    test('verify navigation path to the fitness equipment page', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.hoverGearMenuItem();
        const gearFitnessPage = await homePage.clickGearFitnessEquipmentSubmenuItem();
        
        await expect(gearFitnessPage.locators.getGearFitnessEquipmentBreadcrumbsLocator()).toHaveText('Home Gear Fitness Equipment');
    })

    test('change display mode in the Fitness Equipment section', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.hoverGearMenuItem();
        const gearFitnessPage = await homePage.clickGearFitnessEquipmentSubmenuItem();
        await page.waitForLoadState('load');

        await expect(page).toHaveURL(BASE_URL + GEAR_FITNESS_PAGE_END_POINT);
        await expect(gearFitnessPage.locators.getGearFitnessListModeLocator()).toBeVisible();
        await expect(gearFitnessPage.locators.getGearFitnessAmountOfItemsLocator()).toHaveText(GEAR_FITNESS_NUMBER_ITEMS_IN_GRID_MODE);

        await gearFitnessPage.hoverGearFitnessListMode();
        await gearFitnessPage.clickGearFitnessListMode();
        await page.waitForLoadState('load');

        await expect(page).toHaveURL(BASE_URL + SORTED_LIST_FITNESS_PAGE_ENDPOINT);
        await expect(gearFitnessPage.locators.getGearFitnessGridModeLocator()).toBeVisible();
        await expect(gearFitnessPage.locators.getGearFitnessAmountOfItemsLocator()).toHaveText(GEAR_FITNESS_NUMBER_ITEMS_IN_LIST_MODE);
    })
})
