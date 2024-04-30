import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import TrainingPage from "../../page_objects/trainingPage.js";
import VideoDownloadPage from "../../page_objects/videoDownloadPage.js";
import { TRAINING_URL, TRAINING_PAGE_HEADER, BASE_URL, TRAINING_PAGE_BREADCRUMBS_MENU_TRAINING_TEXT, TRAINING_PAGE_BREADCRUMBS_MENU_HOME_TEXT, TRAINING_PAGE_VIDEODOWNLOAD_URL, VIDEODOWNLOAD_PAGE_HEADER} from "../../helpers/testData.js";

test.describe('trainingPage.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();
  });

	test('Verify that the "Training" link redirects to the training\'s products page', async ({ page }) => {
	  const homePage = new HomePage(page);
	  const trainingPage = new TrainingPage(page);
 
	  await homePage.clickTrainingLink();
 
	  await expect(page).toHaveURL(TRAINING_URL);
	  await expect(trainingPage.locators.getTrainingHeader()).toBeVisible();
	  await expect(trainingPage.locators.getTrainingHeader()).toContainText(TRAINING_PAGE_HEADER);

	});

	test('Verify that the correct breadcrumb navigation is displayed on the "Training" page and leading up to this section (Home > Training)', async({page}) => {
		const homePage = new HomePage(page);
		const trainingPage = new TrainingPage(page);
  
		await homePage.clickTrainingLink();
 
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
		const trainingPage = new TrainingPage(page);
		        
		await homePage.clickTrainingLink();

		expect(trainingPage.locators.getTrainingPromoBlock()).toBeTruthy();
		await expect(trainingPage.locators.getTrainingPromoBlock()).toBeVisible();

  })

  test('Verify that the "Shop By Category" section is displayed on the “Training” page', async({page}) => {
		const homePage = new HomePage(page);
		const trainingPage = new TrainingPage(page);
		  
		await homePage.clickTrainingLink();	        
	

		expect(trainingPage.locators.getTrainingShopByCategorySection()).toBeTruthy();
		await expect(trainingPage.locators.getTrainingShopByCategorySection()).toBeVisible();
  })

  test('Verify that clicking on the "Video Download" link redirects to the correct "Video Download" page', async({page}) => {
		const homePage = new HomePage(page);
		const trainingPage = new TrainingPage(page);
		const videoDownloadPage = new VideoDownloadPage(page);
  
		await homePage.clickTrainingLink();
		await trainingPage.clickVideoDownloadLink();

		await expect(page).toHaveURL(TRAINING_PAGE_VIDEODOWNLOAD_URL);
		await expect(videoDownloadPage.locators.getVideoDownloadHeader()).toBeVisible();
		await expect(videoDownloadPage.locators.getVideoDownloadHeader()).toContainText(VIDEODOWNLOAD_PAGE_HEADER);
  })
  
});