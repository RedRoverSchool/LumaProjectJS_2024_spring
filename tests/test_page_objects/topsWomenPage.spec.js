import { expect, test } from "@playwright/test";
import HomePage from "../../page_objects/homePage";
import WomenPage from "../../page_objects/womenPage";
import TopsWomenPage from "../../page_objects/topsWomenPage";
import {
  BASE_URL,
  MY_WISH_LIST_EMPTY_MESSAGE,
  TOPS_WOMEN_PAGE_END_POINT,
  JACKET_ITEMS,
} from "../../helpers/testData";
import { MODE_GRID_ACTIVE_ATTR_CLASS, MODE_LIST_ACTIVE_ATTR_CLASS } from '../../helpers/testWomenData'
import MainMenuPage from "../../page_objects/mainMenu";

const setup = async (page) => {
  const homePage = new HomePage(page);
  const womenPage = new WomenPage(page);
  const topsWomenPage = new TopsWomenPage(page);

  await homePage.open();
  await homePage.clickWomenLink();
  await womenPage.clickWomenTopsLink();

  return topsWomenPage;
};

test.describe("topWomenPage.spec", () => {
  test("verify message displayed in Wish List Section for Empty Wish List", async ({
    page,
  }) => {
    const topsWomenPage = await setup(page);

    await expect(page).toHaveURL(BASE_URL + TOPS_WOMEN_PAGE_END_POINT);
    await expect(
      topsWomenPage.locators.getWomenMyWishListHeading()
    ).toBeVisible();
    await expect(
      topsWomenPage.locators.getWomenMyWishListEmptyMessage()
    ).toHaveText(MY_WISH_LIST_EMPTY_MESSAGE);
  });

  test("after applying the filter Jackets, only jackets are displayed on the page", async ({
    page,
  }) => {
    const topsWomenPage = await setup(page);

    await topsWomenPage.clickCategoryFilterOption();
    await topsWomenPage.clickFilterOptionJacketsLink();

    const allItemsOnTopsWomenPage =
      await topsWomenPage.locators.getArrayAllItems();

    const allItemsContainJacketText = allItemsOnTopsWomenPage.every((item) => {
      return JACKET_ITEMS.some((keyword) => item.includes(keyword));
    });

    expect(allItemsContainJacketText).toBeTruthy();
  });

  test("number of items in Jackets Category equals number of items on the page after filtering", async ({
    page,
  }) => {
    const topsWomenPage = await setup(page);

    await topsWomenPage.clickCategoryFilterOption();

    const textOfJacketItems =
      await topsWomenPage.locators.getTextCategoryJacketItems();
    const expectedNumberJacketItems = parseInt(textOfJacketItems.match(/\d+/));

    await topsWomenPage.clickFilterOptionJacketsLink();

    const allJacketItemsOnPage =
      await topsWomenPage.locators.getArrayAllItems();
    const actualNumberJacketItems = allJacketItemsOnPage.length;

    expect(expectedNumberJacketItems).toEqual(actualNumberJacketItems);
  });

  test('Women/Tops/Display mode can be changed, visible', async ({
    page
  }) => {
    const homePage = new HomePage(page)
    const womenPage = new WomenPage(page)
    const topsWomenPage = new TopsWomenPage(page)

    await homePage.open()
    await homePage.hoverWomenLink()
    await homePage.clickWomenTopsLink()

    await expect(topsWomenPage.locators.getDisplayModeGrid()).toBeVisible()

    await topsWomenPage.clickDisplayModeGrid()
    await expect(topsWomenPage.locators.getDisplayModeGrid()).toHaveClass(
      MODE_GRID_ACTIVE_ATTR_CLASS
    )
    await expect(topsWomenPage.locators.getDisplayModeList()).not.toHaveClass(
      MODE_LIST_ACTIVE_ATTR_CLASS
    )

    await topsWomenPage.clickDisplayModeList()
    await expect(topsWomenPage.locators.getDisplayModeList()).toBeVisible()
    await expect(topsWomenPage.locators.getDisplayModeList()).toHaveClass(
      MODE_LIST_ACTIVE_ATTR_CLASS
    )
  })

});
