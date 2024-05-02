import { test, expect } from '@playwright/test';
import HomePage from '../../page_objects/homePage.js';
import WhatsNewPage from '../../page_objects/whatsNewPage.js';
import { BASE_URL,WHATS_NEW_PAGE_END_POINT, WHATS_NEW_PAGE_HEADER } from '../../helpers/testData.js';

test.describe('whatIsNewPage.spec', () => {
    test.beforeEach(async({page}) => {
        const homePage = new HomePage(page);

        await homePage.open();
    })

     test('Redirect to "Whats New" page', async({page}) => {
        const homePage = new HomePage(page);
        const whatsNewPage = new WhatsNewPage(page);

        await homePage.clickWhatsNewLink();
       
        await expect(page).toHaveURL(BASE_URL + WHATS_NEW_PAGE_END_POINT);
        await expect(whatsNewPage.locators.getPageHeader()).toHaveText(WHATS_NEW_PAGE_HEADER);
    });  
    
    test("TC 04.1.3_01 Verify the “NEW IN MEN'S section is displayed on the What's New page", async ({page}) => {
        const homePage = new HomePage(page);
        const whatsNewPage = new WhatsNewPage(page);

        await homePage.clickWhatsNewLink();

        await expect(whatsNewPage.locators.getMenuNewInMens()).toBeVisible();
      });
    
})
