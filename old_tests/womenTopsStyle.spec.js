import { test, expect } from "@playwright/test";

test.describe("womenTopsStyle", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        if (await page.getByRole('dialog', { name: 'This site asks for consent to use your data' }).isVisible()) 
            await page.getByRole('button', { name: 'Consent' }).click();
        });

    test('Verify user on Women Top page', async ({ page }) => {
        await page.getByText("Women").hover();
        await page.getByRole('menuitem', { name: 'Tops' }).click();
        await expect(page).toHaveURL("https://magento.softwaretestingboard.com/women/tops-women.html");   
    });

    test('Verify visability of Shopping Option in the menu on the left side.', async ({ page }) => {
        await page.getByText("Women").hover();
        await page.getByRole('menuitem', { name: 'Tops' }).click();
        await expect(page.getByRole('heading', { name: 'Shopping Options' })).toBeVisible();
        expect(page.getByRole('heading', { name: 'Shopping Options' })).toBeTruthy();
    });

    test('Verify dropdown menu has 19 Options', async ({ page }) => {
        await page.getByText("Women").hover();
        await page.getByRole('menuitem', { name: 'Tops' }).click();
        await page.getByRole('tab', { name: 'Style' }).click();
        
        const expectedItems = ['Insulated', 'Jacket', 'Lightweight', 'Hooded', 'Heavy Duty', 'Rain Coat', 'Hard Shell', 'Soft Shell', 'Windbreaker', 
            '¼ zip', 'Full Zip', 'Reversible', 'Bra', 'Sweatshirt', 'Tank', 'Tee', 'Pullover', 'Hoodie', 'Camisole'];
            
        const actualItems = await page.locator('#narrow-by-list').getByRole('list').locator('li').allInnerTexts();
        function extractAndCompareItems(actualResult, expectedItems) {
            const extractedItems = actualResult.map(item => {
                return item.replace(/\nitem$/, '').split(' ').slice(0, -1).join(' ');
            });
            const areEqual = extractedItems.length === expectedItems.length && 
                             extractedItems.every((item, index) => item === expectedItems[index]);
        
            return {
                extractedItems,  
                areEqual         
            };
         }
          const result = extractAndCompareItems(actualItems, expectedItems);

          expect(result.extractedItems).toEqual(expectedItems);
        });
    
})