import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import TrainingPage from "../../page_objects/trainingPage.js";
import { TRAINING_URL, TRAINING_PAGE_HEADER, BASE_URL, TRAINING_PAGE_BREADCRUMBS_MENU_TRAINING_TEXT, TRAINING_PAGE_BREADCRUMBS_MENU_HOME_TEXT} from "../../helpers/testData.js";

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

 });