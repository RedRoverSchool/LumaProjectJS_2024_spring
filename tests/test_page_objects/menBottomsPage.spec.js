
import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import MenBottomsPage from "../../page_objects/menBottomsPage.js";
import { BASE_URL, MEN_BOTTOMS_PAGE_END_POINT, LIST_CATEGORY_MEN_BOTTOMS, ID_PARAMETERS_OF_SUB_CATEGORY_ON_MEN_BOTTOMS_PAGE } from "../../helpers/testData.js";

  test.describe ('menBottomsPage.spec', () => {
    test.beforeEach(async({page}) => {
      const homePage = new HomePage(page);

      await homePage.open();
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

  test('verify the user can select a subcategory from the dropdown', async ({ page }) => {
    for (let i = 0; i < LIST_CATEGORY_MEN_BOTTOMS.length; i++) {
      const homePage = new HomePage(page);
      const menBottomsPage = new MenBottomsPage(page);
    
      await homePage.hoverMenLink();
      await homePage.clickMenBottomsLink();
      await expect(page).toHaveURL(BASE_URL + MEN_BOTTOMS_PAGE_END_POINT);

      await menBottomsPage.hoverMenBottomsCategory();
      await menBottomsPage.clickMenBottomsCategory();

      await menBottomsPage.clickMenBottomsSubCategory(i);

      await expect(menBottomsPage.locators.getMenBottomsCategoryValue(i)).toContainText(LIST_CATEGORY_MEN_BOTTOMS[i]);
      await expect(page).toHaveURL(BASE_URL + MEN_BOTTOMS_PAGE_END_POINT + ID_PARAMETERS_OF_SUB_CATEGORY_ON_MEN_BOTTOMS_PAGE[i]);
      }
    })
});
  