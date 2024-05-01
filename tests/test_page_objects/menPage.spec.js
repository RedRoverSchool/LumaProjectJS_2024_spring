import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import {
    BASE_URL,
    MEN_PAGE_BOTTOMS_SUB_CATEGORY_LINK_COLOR,
    MEN_PAGE_SHOP_BY_CATEGORY_BLOCK_ALIGNMENT,
    MEN_PAGE_SHOP_BY_CATEGORY_SUB_CATEGORIES_AMOUNT,
    MEN_PAGE_TOPS_SUB_CATEGORY_LINK_COLOR,
    MEN_PAGE_SHOP_BY_CATEGORY_SUB_CATEGORIES_VALUES_REGEX,
    MEN_PAGE_SHOP_BY_CATEGORY_SUB_CATEGORIES_COUNTER_DATATYPE,
    MEN_BOTTOMS_PAGE_END_POINT
} from "../../helpers/testData.js";
import {
    MEN_PAGE_END_POINT,
    MEN_PAGE_HEADER,
    COMPARE_PRODUCTS_TEXT,
    MY_WISH_LIST_TEXT,
    HOT_SELLERS_NAME, 
    HOT_SELLERS_ENDPOINT_URL
} from "../../helpers/testMenData.js";
import MenPage from "../../page_objects/menPage";
import MenBottomsPage from "../../page_objects/menBottomsPage.js";

test.describe('menPage.spec', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.open();
    });
    test('Menu/Men available to click, see clothes only for men', async ({ page }) => {
        const homePage = new HomePage(page);
        const menPage = new MenPage(page);

        await homePage.clickMenLink();

        await expect(page).toHaveURL(BASE_URL + MEN_PAGE_END_POINT);
        await expect(menPage.locators.getMenPageHeader()).toContainText(MEN_PAGE_HEADER);
        await expect(menPage.locators.getCompareProducts()).toBeVisible(COMPARE_PRODUCTS_TEXT);
        await expect(menPage.locators.getMyWishList()).toBeVisible(MY_WISH_LIST_TEXT);
    })

    test('Men page contains Shop by category block which is located on the left side of the page', async ({ page }) => {
        const homePage = new HomePage(page);
        const menPage = new MenPage(page);

        await homePage.clickMenLink();

        await expect(menPage.locators.getShopByCategoryBlock()).toBeVisible();
        await expect(menPage.locators.getShopByCategoryBlock()).toHaveCSS('float', MEN_PAGE_SHOP_BY_CATEGORY_BLOCK_ALIGNMENT);
    });

    test('Category block contains sub-categories: Tops and Bottoms which are links in blue text', async ({ page }) => {
        const homePage = new HomePage(page);
        const menPage = new MenPage(page);

        await homePage.clickMenLink();

        await expect(menPage.locators.getTopsSubCategoryLink()).toHaveCSS('color', MEN_PAGE_TOPS_SUB_CATEGORY_LINK_COLOR);
        await expect(menPage.locators.getBottomsSubCategoryLink()).toHaveCSS('color', MEN_PAGE_BOTTOMS_SUB_CATEGORY_LINK_COLOR);
    });

    test('Tops and Bottoms sub-categories have a counter for items from the right side of the relevant link', async ({ page }) => {
        const homePage = new HomePage(page);
        const menPage = new MenPage(page);
        const subCaregoriesInCategoryBlock = menPage.locators.getSubCaregoriesInCategoryBlock();

        await homePage.clickMenLink();
        await expect(menPage.locators.getTopsSubCategoryLink()).toBeVisible();
        await expect(menPage.locators.getBottomsSubCategoryLink()).toBeVisible();
        await expect(subCaregoriesInCategoryBlock).toHaveCount(MEN_PAGE_SHOP_BY_CATEGORY_SUB_CATEGORIES_AMOUNT);

        for (let itx = 0; itx < await subCaregoriesInCategoryBlock.count(); itx++) {
            let rowArrayValue = (await subCaregoriesInCategoryBlock.nth(itx).textContent()).trim().split('\n');
            expect(rowArrayValue[0].match(MEN_PAGE_SHOP_BY_CATEGORY_SUB_CATEGORIES_VALUES_REGEX)).toBeTruthy();
            expect(typeof parseInt(rowArrayValue[1])).toEqual(MEN_PAGE_SHOP_BY_CATEGORY_SUB_CATEGORIES_COUNTER_DATATYPE);
        };
    });

    HOT_SELLERS_NAME.forEach((productsName, idx) => {
        test(`Menu/Men/Hot Sellers Verify user can click on product's name and be redirected to the ${productsName} page`, async({ page }) => {    
            const homePage = new HomePage(page);

            const menPage = await homePage.clickMenLink();
            const menHotSellersPage = await menPage.clickMenHotSellersName(productsName);
         
            await expect(page).toHaveURL(new RegExp(HOT_SELLERS_ENDPOINT_URL[idx]));
            await expect(menHotSellersPage.locators.getMenName(productsName)).toHaveText(HOT_SELLERS_NAME[idx]);
          });
      });

    test('Verify redirection to Men-Bottoms page from Men page', async({page}) => {
        const homePage = new HomePage(page);
        const menPage = new MenPage(page);
        const menBottomsPage = new MenBottomsPage(page);

        await homePage.clickMenLink();
        await menPage.clickBottomsSideMenuLink();
        
        await expect(menBottomsPage.locators.getBottomsHeading()).toBeVisible(); 
        await expect(page).toHaveURL(BASE_URL + MEN_BOTTOMS_PAGE_END_POINT);
    })
});