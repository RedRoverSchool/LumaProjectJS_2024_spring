import { test, expect } from "@playwright/test";

test.describe('menuTraining', () => {
	const BASE_URL = "https://magento.softwaretestingboard.com";
	const TRAINING_URL = "https://magento.softwaretestingboard.com/training.html";
    
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })
    
    test('Verify that the "Training" link redirects to the training\'s products page', async({page}) => {
        
        await expect(page).toHaveURL(BASE_URL);
		  await expect(page.locator('#ui-id-7')).toBeVisible();


		  await page.locator('#ui-id-7').click();


		  await expect(page).toHaveURL(TRAINING_URL);
		  await expect(page.locator('#page-title-heading')).toBeVisible();
    })

	 test('Verify that the correct breadcrumb navigation is displayed on the "Training" page and leading up to this section (Home > Training)', async({page}) => {
		await expect(page).toHaveURL(BASE_URL);
        
		await page.locator('#ui-id-7').click();

		await expect(page.locator('#page-title-heading')).toBeVisible();
		await expect(page.locator('.breadcrumbs li:nth-child(2)')).toBeVisible();
		expect(page.locator('.breadcrumbs li:nth-child(2)')).toBeTruthy();
		
  })
  	 test('Verify that the promo block is displayed on the “Training” page', async({page}) => {
		        
		await page.getByRole('menuitem', { name: 'Training' }).click();

		await expect(page.locator('.blocks-promo')).toBeVisible();
		expect(page.locator('.blocks-promo')).toBeTruthy();
  })
})