
import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import MenBottomsPage from "../../page_objects/menBottomsPage.js";
import { BASE_URL, MEN_BOTTOMS_PAGE_END_POINT } from "../../helpers/testData.js";

  test.describe ('menBottomsPage.spec', () => {
    test.beforeEach(async({page}) => {
      const homePage = new HomePage(page);

      await homePage.open();

      if (await page.getByRole('dialog', { name: 'This site asks for consent to use your data' }).isVisible()) {
        await page.getByRole('button', { name: 'Consent' }).click();
    };
  })

    test ("Verify men's bottom tab", async ({ page }) => {

    const homePage = new HomePage(page);
    const menBottomsPage = new MenBottomsPage(page);

    await homePage.hoverMenLink();
    await homePage.clickMenBottomsLink();

    await expect(page).toHaveURL(BASE_URL + MEN_BOTTOMS_PAGE_END_POINT);
    await expect(menBottomsPage.locators.getBottomsHeading()).toBeVisible();
  });

  test('verify the sidebar is on the left', async ({ page }) => {
    const homePage = new HomePage(page);
    const menBottomsPage = new MenBottomsPage(page);

    await homePage.hoverMenLink();
    await homePage.clickMenBottomsLink();

    await expect(menBottomsPage.locators.getMenBottomsShopingOptionsSidebarTitle()).toBeVisible();
   
    const positionOfSidebar = await menBottomsPage.getPositionOfSidebar();

    expect(positionOfSidebar).toBe('left');
  })
});
  