import { test, expect } from "@playwright/test";

test.describe('menuSaleWomenDeals', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/sale.html");
        if (await page.getByRole('dialog', { name: 'This site asks for consent to use your data' }).isVisible()) {
            await page.getByRole('button', { name: 'Consent' }).click();
        };  
    }) 
   
    test('redirect to Women Bottoms Shorts', async ({ page }) => {
        await page.getByRole('link', {name:'Shorts'}).first().click();
       
        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/women/bottoms-women/shorts-women.html');
    });
});

