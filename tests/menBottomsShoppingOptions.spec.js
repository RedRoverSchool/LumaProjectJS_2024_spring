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
})