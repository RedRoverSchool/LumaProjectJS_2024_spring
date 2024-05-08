import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { TRAINING_URL, TRAINING_PAGE_HEADER, BASE_URL, TRAINING_PAGE_BREADCRUMBS_MENU_TRAINING_TEXT, TRAINING_PAGE_BREADCRUMBS_MENU_HOME_TEXT, TRAINING_PAGE_VIDEODOWNLOAD_URL, VIDEODOWNLOAD_PAGE_HEADER, COMPARE_URL_REGEX, COMPARE_PRODUCT_PAGE_HEADER, COMPARE_PRODUCT_PAGE_ITEM_TEXT, MY_WISHLIST_PAGE_URL, MY_WISHLIST_PAGE_ITEM_TEXT, MY_WISHLIST_PAGE_HEADER} from "../../helpers/testData.js";

test.describe('trainingPage.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();
  });

	test('Verify that the "Training" link redirects to the training\'s products page', async ({ page }) => {
	  const homePage = new HomePage(page);
 
	  const trainingPage = await homePage.clickTrainingLink();
 
	  await expect(page).toHaveURL(TRAINING_URL);
	  await expect(trainingPage.locators.getTrainingHeader()).toBeVisible();
	  await expect(trainingPage.locators.getTrainingHeader()).toContainText(TRAINING_PAGE_HEADER);

	});

	test('Verify that the correct breadcrumb navigation is displayed on the "Training" page and leading up to this section (Home > Training)', async({page}) => {
		const homePage = new HomePage(page);
  
		const trainingPage = await homePage.clickTrainingLink();
 
 		await expect(trainingPage.locators.getBreadcrumbMenuAll()).toBeVisible();
		await expect(trainingPage.locators.getBreadcrumbMenuTraining()).toBeVisible();
		await expect(trainingPage.locators.getBreadcrumbMenuTraining()).toHaveText(TRAINING_PAGE_BREADCRUMBS_MENU_TRAINING_TEXT);
		await expect(trainingPage.locators.getBreadcrumbMenuHome()).toBeVisible();
		await expect(trainingPage.locators.getBreadcrumbMenuHome()).toHaveText(TRAINING_PAGE_BREADCRUMBS_MENU_HOME_TEXT);
 
		await trainingPage.clickBreadcrumbMenuHome();
		await expect(page).toHaveURL(BASE_URL);
 
	})

	test('Verify that the promo block is displayed on the “Training” page', async({page}) => {
		const homePage = new HomePage(page);

		const trainingPage = await homePage.clickTrainingLink();

		expect(trainingPage.locators.getTrainingPromoBlock()).toBeTruthy();
		await expect(trainingPage.locators.getTrainingPromoBlock()).toBeVisible();

  })

  test('Verify that the "Shop By Category" section is displayed on the “Training” page', async({page}) => {
		const homePage = new HomePage(page);
	
		const trainingPage = await homePage.clickTrainingLink();
	
		expect(trainingPage.locators.getTrainingShopByCategorySection()).toBeTruthy();
		await expect(trainingPage.locators.getTrainingShopByCategorySection()).toBeVisible();
  })

  test('Verify that clicking on the "Video Download" link redirects to the correct "Video Download" page', async({page}) => {
		const homePage = new HomePage(page);
  
		const trainingPage = await homePage.clickTrainingLink();
		const videoDownloadPage = await trainingPage.clickVideoDownloadLink();

		await expect(page).toHaveURL(TRAINING_PAGE_VIDEODOWNLOAD_URL);
		await expect(videoDownloadPage.locators.getVideoDownloadHeader()).toBeVisible();
		await expect(videoDownloadPage.locators.getVideoDownloadHeader()).toContainText(VIDEODOWNLOAD_PAGE_HEADER);
  })

  test('Verify that the User can use the “Compare Products” feature to compare different training products and identify their features and benefits', async({page}) => {
		const homePage = new HomePage(page);

		await homePage.hoverGearMenuItem();
		const gearBagsPage = await homePage.clickGearBagsSubmenuItem();
		await page.waitForTimeout(3000);
		await gearBagsPage.hoverPushItMessengerItem();
		await page.waitForTimeout(5000);
		await gearBagsPage.clickgetPushItMessengerItemAddtoCampare();
		await page.waitForTimeout(5000);
		const trainingPage = await gearBagsPage.clickTrainingLink();
		const compareProductsPage = await trainingPage.clickTrainingCompareButton();
		
		const currentURL = page.url();
		expect(currentURL).toMatch(COMPARE_URL_REGEX);
		await expect(compareProductsPage.locators.getCompareProductsHeader()).toBeVisible();
		await expect(compareProductsPage.locators.getCompareProductsHeader()).toContainText(COMPARE_PRODUCT_PAGE_HEADER);
		await expect(compareProductsPage.locators.getCompareProductsItem()).toBeVisible();
		await expect(compareProductsPage.locators.getCompareProductsItem()).toContainText(COMPARE_PRODUCT_PAGE_ITEM_TEXT);
	})

		test('Verify that the User can add training products to the wish list for tracking and accessing additional information about them in the training materials', async({page}) => {
		const homePage = new HomePage(page);

		const signInPage = await homePage.clickSignInLink();
		await signInPage.fillEmailField();
		await signInPage.fillPasswordField();
		await signInPage.clickButtonSignIn();

		await homePage.hoverGearMenuItem();
		const gearBagsPage = await homePage.clickGearBagsSubmenuItem();
		await page.waitForTimeout(3000);
		const pushItMessengerBagPage = await gearBagsPage.clickPushItMessengerItem();
		await page.waitForTimeout(3000);
		const wishListPage = await pushItMessengerBagPage.clickPushItMessengerItemAddtoWishList();

		const trainingPage = await wishListPage.clickTrainingLink();

		await trainingPage.clickGoToWishListLink()
		
		await expect(page).toHaveURL(MY_WISHLIST_PAGE_URL);
		await expect(wishListPage.locators.getMyWishListHeader()).toBeVisible();
		await expect(wishListPage.locators.getMyWishListHeader()).toContainText(MY_WISHLIST_PAGE_HEADER);
		await wishListPage.hoverMyWishListItemName();
		await expect(wishListPage.locators.getMyWishListItemNameLocator()).toBeVisible();
		await expect(wishListPage.locators.getMyWishListItemNameLocator()).toHaveText(MY_WISHLIST_PAGE_ITEM_TEXT);
 })
  
});