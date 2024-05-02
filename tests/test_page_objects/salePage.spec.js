import { test, expect } from '@playwright/test';
import HomePage from '../../page_objects/homePage.js';
import SalePage from '../../page_objects/salePage.js';
import {SALE_SIDE_MENU_SECTIONS, LIST_OF_ITEMS_IN_MENS_DEALS_ON_SALE_PAGE, LIST_OF_TITLES_FOR_PAGES_FROM_MENS_DEALS, LIST_OF_URLS_MENS_DEALS_END_POINT } from '../../helpers/testData.js';

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
    });

    LIST_OF_ITEMS_IN_MENS_DEALS_ON_SALE_PAGE.forEach((option, ind) => {
        test(`Check that ${option} link opens the corresponding page`, async ({ page }) => {
        const homePage = new HomePage(page);
        const salePage = new SalePage(page);

        await homePage.clickSaleLink();
        await salePage.clickOnItemsFromMensDealsSection(LIST_OF_ITEMS_IN_MENS_DEALS_ON_SALE_PAGE[ind]);
        await expect(page).toHaveURL(LIST_OF_URLS_MENS_DEALS_END_POINT[ind]);

        const expectedTitle = LIST_OF_TITLES_FOR_PAGES_FROM_MENS_DEALS[ind];
        const actualTitle = await salePage.locators.getTitleForEachPageFromMensDeals()

        await expect(actualTitle).toHaveText(expectedTitle);
            })
        });
    
    })



