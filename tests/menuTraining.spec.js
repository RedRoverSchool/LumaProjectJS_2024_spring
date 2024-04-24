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
   test('Verify that the "Shop By Category" section is displayed on the “Training” page', async({page}) => {
		        
		await page.getByRole('menuitem', { name: 'Training' }).click();

		const locatorSection = page.getByText('Shop By Shopping Options');

		await expect(locatorSection).toBeVisible();
		expect(locatorSection).toBeTruthy();
  })

  	test('Verify that clicking on the "Video Download" link redirects to the correct "Video Download" page', async({page}) => {
		await page.goto(TRAINING_URL);        
		
		await page.getByRole('link', { name: 'Video Download' }).click();
		const VIDEODOWNLOAD_URL = "https://magento.softwaretestingboard.com/training/training-video.html";

		await expect(page).toHaveURL(VIDEODOWNLOAD_URL);
		await expect(page.getByLabel('Video Download').getByText('Video Download')).toBeVisible();
		expect(page.getByLabel('Video Download').getByText('Video Download')).toBeTruthy();
 })
 
   test('Verify that the User can use the “Compare Products” feature to compare different training products and identify their features and benefits', async({page}) => {
		const COMPARE_URL_REGEX = new RegExp("https://magento.softwaretestingboard.com/catalog/product_compare/index/uenc/.+");
		const headerCompare = page.getByRole('heading', { name: 'Compare Products' }).locator('span');
		await page.getByRole('menuitem', { name: 'Gear' }).hover();
		await page.getByRole('menuitem', { name: 'Bags' }).click();
		await page.getByRole('link', { name: 'Push It Messenger Bag' }).first().hover();
		await page.waitForTimeout(5000);
		await page.locator('li').filter({ hasText: 'Push It Messenger Bag Rating' }).getByLabel('Add to Compare').click();
		await page.waitForTimeout(5000);
		await page.goto(TRAINING_URL);
	
		await page.getByRole('link', { name: 'Compare', exact: true }).click();
		
		const currentURL = page.url();
		expect(currentURL).toMatch(COMPARE_URL_REGEX);
		await expect(headerCompare).toBeVisible();
		expect(headerCompare).toBeTruthy();
 })
 	test.skip('Verify that the User can add training products to the wish list for tracking and accessing additional information about them in the training materials', async({page}) => {
		const headerWishlist = page.locator('span').filter({ hasText: 'My Wish List' })
		const WISHLIST_URL = "https://magento.softwaretestingboard.com/wishlist/";

		await page.getByRole('link', { name: 'Sign In' }).click();
		await page.getByLabel('Email', { exact: true }).fill('sapa2017@gmail.com');
		await page.getByLabel('Password').fill('Admin1234');
		await page.getByRole('button', { name: 'Sign In' }).click();

		await page.getByRole('menuitem', { name: 'Gear' }).hover();
		await page.getByRole('menuitem', { name: 'Bags' }).click();
		await page.getByRole('link', { name: 'Push It Messenger Bag' }).first().hover();
		await page.locator('li').filter({ hasText: 'Push It Messenger Bag Rating' }).getByLabel('Add to Wish List').click();
		await page.getByRole('menuitem', { name: 'Gear' }).hover();
		await page.getByRole('menuitem', { name: 'Bags' }).click();
		await page.getByRole('link', { name: 'Overnight Duffle' }).first().hover();
		await page.locator('li').filter({ hasText: 'Overnight Duffle Rating: 60%' }).getByLabel('Add to Wish List').click();

		await page.goto(TRAINING_URL); 

		await page.getByRole('link', { name: 'Go to Wish List' }).click();
		
		await expect(page).toHaveURL(WISHLIST_URL);
		await expect(headerWishlist).toBeVisible();
		expect(headerWishlist).toBeTruthy();
 })

})