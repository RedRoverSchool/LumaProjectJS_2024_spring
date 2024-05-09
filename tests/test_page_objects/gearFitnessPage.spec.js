import { test, expect } from '@playwright/test';
import HomePage from '../../page_objects/homePage.js';
import GearFitnessPage from '../../page_objects/gearFitnessPage.js';

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
})
