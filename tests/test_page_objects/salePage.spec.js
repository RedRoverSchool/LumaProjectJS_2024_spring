import { test, expect } from '@playwright/test';
import HomePage from '../../page_objects/homePage.js';
import SalePage from '../../page_objects/salePage.js';
import { SALE_SIDE_MENU_SECTIONS } from '../../helpers/testData.js';

test.describe('salePage.spec', () => {
    test.beforeEach(async({page}) => {
        const homePage = new HomePage(page);

        await homePage.open();
    })

    test('Verify visibility of sections with discounted items on Sale page', async({page}) => {
        const homePage = new HomePage(page);
        const salePage = new SalePage(page);

        await homePage.clickSaleLink();
        
        expect(await salePage.obtainSideMenuSectionsText()).toEqual(SALE_SIDE_MENU_SECTIONS);
    })
})
