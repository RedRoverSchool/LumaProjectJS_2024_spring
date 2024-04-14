import { test, expect } from "@playwright/test";

test.describe('menuTraining', () => {
	const BASE_URL = "https://magento.softwaretestingboard.com";
	const TRAINING_URL = "https://magento.softwaretestingboard.com/training.html";
    
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })
    
    test.only('Verify that the "Training" link redirects to the training\'s products page', async({page}) => {
        
        await expect(page).toHaveURL(BASE_URL);
		  await expect(page.locator('#ui-id-7')).toBeVisible();


		  await page.locator('#ui-id-7').click();


		  await expect(page).toHaveURL(TRAINING_URL);
		  await expect(page.locator('#page-title-heading')).toBeVisible();
    })
})