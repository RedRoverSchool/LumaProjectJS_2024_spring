import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import TrainingPage from "../../page_objects/trainingPage.js";
import { TRAINING_URL, TRAINING_PAGE_HEADER } from "../../helpers/testData.js";

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

 });