import { test, expect } from "@playwright/test";

test.describe('MenBottomsShoppingOptions', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })

    test('verify the user is on Men Bottoms page', async ({ page }) => {
        await page.locator('#ui-id-5').hover();
        await page.locator('#ui-id-18').click();

        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/men/bottoms-men.html');
    })    

    test('verify the sidebar is on the left', async ({ page }) => {
        await page.locator('#ui-id-5').hover();
        await page.locator('#ui-id-18').click();

        await expect(page.getByRole('heading', {name: 'Shopping Options'})).toBeVisible();
       
        const sidebarLeft = await page.$eval('.sidebar.sidebar-main', sidebar => {
            return window.getComputedStyle(sidebar).float;
          });

        expect(sidebarLeft).toBe('left');
    })

    test('verify the user can select a subcategory from the dropdown', async ({ page }) => {
        const expectedSubCategorySelector = [
            '.filter-options-item.allow.active > div.filter-options-content > ol > li:nth-child(1) > a', 
            '.filter-options-item.allow.active > div.filter-options-content > ol > li:nth-child(2) > a'
        ];
        
        const categoryTitles = [
            'Pants', 
            'Shorts'
        ];

        const categoryLinks = [
            'https://magento.softwaretestingboard.com/men/bottoms-men.html?cat=18',
            'https://magento.softwaretestingboard.com/men/bottoms-men.html?cat=19'
        ];

            for (let i = 0; i < expectedSubCategorySelector.length; i++) {
                await page.locator('#ui-id-5').hover();
                await page.locator('#ui-id-18').click();
                await expect(page).toHaveURL('https://magento.softwaretestingboard.com/men/bottoms-men.html');
                await page.locator('.filter-options-title').getByText('Category').hover();
                await page.locator('.filter-options-title').getByText('Category').click();
                
                await page.locator(expectedSubCategorySelector[i]).click();
                await expect(page.locator(`.filter-value:has-text('${categoryTitles[i]}')`)).toContainText(categoryTitles[i]);
                await expect(page).toHaveURL(categoryLinks[i]);
            }
    })
})