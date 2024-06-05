import { test as base } from '@playwright/test';
import HomePage from '../../page_objects/homePage';
import GearPage from '../../page_objects/gearPage';

export const test = base.extend({
    gearPage: [
        async ({ page }, use) => {
            const homePage = new HomePage(page);
            await homePage.open();
            const gearPage =  await homePage.clickGearMenuItem();   

            await use(gearPage);
        },
        { scope: "test" },
    ],

    homePage: [
        async ({ page }, use) => {
            const homePage = new HomePage(page);
            await use(homePage);
        },
        { scope: "test" },
    ],
});