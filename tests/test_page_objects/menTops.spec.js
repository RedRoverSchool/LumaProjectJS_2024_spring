import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import {
    LIST_STYLE_MEN_TOPS,
    BASE_URL,
    MEN_TOPS_PAGE_END_POINT,
    LIST_CATEGORY_MEN_TOPS,
    LIST_LABELS_SUB_CATEGORY,
    MEN_TOPS_CATEGORY_PAGES_END_POINT,
    LIST_OF_COUNT_SUB_CATEGORY_ON_MEN_TOPS_PAGE
} from "../../helpers/testData.js"
import {
    MEN_TOPS_PRICE_LIST,
    MEN_TOPS_PRICE_LIST_PRODUCT_COUNT,
    MEN_TOPS_TOTAL_TOOLBAR_AMOUNT
} from "../../helpers/testMenData.js";

test.describe('menTops', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.open();
    })

    test("Check the name of 14 shopping styles in the Men's/Tops section.", async ({ page }) => {
        const homePage = new HomePage(page)

        await homePage.hoverMenLink()
        const menTopsPage = await homePage.clickMenTopsLink()
        await menTopsPage.clickMenTopsStyle()
        for (let index = 0; index < LIST_STYLE_MEN_TOPS.length; index++) {
            await expect(menTopsPage.locators.getMenTopsListStyle().nth(index)).toContainText(LIST_STYLE_MEN_TOPS[index])
        }
        await expect(page).toHaveURL(BASE_URL + MEN_TOPS_PAGE_END_POINT)
    });

    test('check quantity of items is displayed', async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.hoverMenLink();
        const menTopsPage = await homePage.clickMenTopsLink();
        await page.waitForTimeout(6000);
        await menTopsPage.clickMenTopsCategory();
        LIST_CATEGORY_MEN_TOPS.forEach(item => {
            expect(/\d+/.test(item)).toBe(true)
        })
        await expect(menTopsPage.locators.getMenTopsListCategory()).toBeVisible();
    });

    test('displays the number of available products in the Insulated(5) category', async ({page}) => {
        const homePage = new HomePage(page)
    
        await homePage.hoverMenLink();
        const menTopsPage = await homePage.clickMenTopsLink();
        await menTopsPage.clickMenTopsStyle();

        await expect(menTopsPage.locators.getMenTopsStyleInsulated()).toBeVisible();
    });

    test('check Men/Tops price filter drop-down has 8 options', async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.hoverMenLink();
        const menTopsPage = await homePage.clickMenTopsLink();
        await menTopsPage.expandMenTopsPriceFilterDropDown();
        
        expect(await menTopsPage.getMenTopsPriceList()).toEqual(MEN_TOPS_PRICE_LIST);
    });

    test('check Men/Tops price drop-down has quantity of available items in each price category', async ({ page }) => {
        const homePage = new HomePage(page);       
        await homePage.hoverMenLink();
        const menTopsPage = await homePage.clickMenTopsLink();
        await menTopsPage.expandMenTopsPriceFilterDropDown();

        expect(await menTopsPage.getMenTopsPriceListProductCount()).toEqual(MEN_TOPS_PRICE_LIST_PRODUCT_COUNT);
        expect(await menTopsPage.getMenTopsPriceListProductCountPseudoElementBefore()).toEqual('(');
        expect(await menTopsPage.getMenTopsPriceListProductCountPseudoElementAfter()).toEqual(')');
    });

    MEN_TOPS_PRICE_LIST.forEach((priceRange, index) => {
        test(`After applying a ${priceRange} price filter, apropriate products are displayed on the page`, async ({ page }) => {
            const homePage = new HomePage(page);
            await homePage.hoverMenLink();
            const menTopsPage = await homePage.clickMenTopsLink();
            await menTopsPage.expandMenTopsPriceFilterDropDown();
            await menTopsPage.clickMenTopsPriceRange(index);

            expect(await menTopsPage.getShoppingOptionFilterValues()).toEqual([MEN_TOPS_PRICE_LIST[index]]);
            expect(await menTopsPage.getMinProductItemPrice()).toBeGreaterThanOrEqual(await menTopsPage.getPriceFilterMinThreshold());
            expect(await menTopsPage.getMaxProductItemPrice()).toBeLessThanOrEqual(await menTopsPage.getPriceFilterMaxThreshold());
        })
    });

    test('Verify that Men/Tops price filter is eliminated after clicking on the Clear All button', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.hoverMenLink();
        const menTopsPage = await homePage.clickMenTopsLink();
        await menTopsPage.expandMenTopsPriceFilterDropDown();
        await menTopsPage.applyFirstMenTopsPriceFilter();

        expect(await menTopsPage.getToolBarAmount()).not.toBe(MEN_TOPS_TOTAL_TOOLBAR_AMOUNT);

        await menTopsPage.clickClearAllButton();

        expect(await menTopsPage.getToolBarAmount()).toBe(MEN_TOPS_TOTAL_TOOLBAR_AMOUNT);
    })

    test.skip('Verify that user can apply the filter for categories within the Category dd list and reset the filter', async ({page}) =>{
        const homePage = new HomePage(page);

        await homePage.hoverMenLink();
        const menTopsPage = await homePage.clickMenTopsLink();
    
        for(let i = 0; i < LIST_LABELS_SUB_CATEGORY.length; i++){
        await menTopsPage.clickMenTopsCategory();
        await menTopsPage.clickCategoryOption(i);

        const labelLocator = await menTopsPage.locators.getLabelForEachCategory();
       
        await expect(labelLocator).toContain(LIST_LABELS_SUB_CATEGORY[i]);
        expect(page).toHaveURL(MEN_TOPS_CATEGORY_PAGES_END_POINT[i]);
        await menTopsPage.clickClearAllButton();
        await expect(page).toHaveURL(BASE_URL + MEN_TOPS_PAGE_END_POINT);
    }
    });

    test.skip('Verify the count for each subCategory on Tops page is the same as count of items on each specific page', async ({page}) =>{
        const homePage = new HomePage(page);       
        await homePage.hoverMenLink();
        const menTopsPage = await homePage.clickMenTopsLink();
        
        const maxCountOnPage = 12;

        for (let i = 0; i < LIST_OF_COUNT_SUB_CATEGORY_ON_MEN_TOPS_PAGE.length; i++) {
        await menTopsPage.clickMenTopsCategory();
        const countItemInTopPage = parseInt(await menTopsPage.locators.getCountForEachCategory(i).innerText(), 10);
        await menTopsPage.clickCategoryOption(i);

        let totalItemCountPerPage = 0;

        const countOfItemsInPage = await menTopsPage.countSubcategoryItems();
        totalItemCountPerPage += countOfItemsInPage;

        if (countItemInTopPage > maxCountOnPage) {
        await menTopsPage.clickNextPage();
        const countOfItemsInNextPage = await menTopsPage.countSubcategoryItems();
        totalItemCountPerPage += countOfItemsInNextPage;
        }

        expect(totalItemCountPerPage).toEqual(countItemInTopPage);
        await menTopsPage.clickClearAllButton();  
    }
});
    test('verify the ability to sort products in ascending order by price', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.hoverMenLink();
        const menTopsPage = await homePage.clickMenTopsLink();
        await page.waitForTimeout(3000);
        await menTopsPage.locators.getSortByLocator().selectOption('price');
        await page.waitForTimeout(3000);

        await expect(menTopsPage.locators.getAscOrderLocator().first()).toBeVisible();
        await expect(menTopsPage.locators.getProductsPriceLocator().first()).toBeVisible();

        const prices = await page.$$eval('.product-items .price', elements => {
            return elements.map(element => parseInt(element.textContent.trim().replace(/[^\d.]/g, ''), 10));
        });
        const sortedPrices = prices.slice().sort((a, b) => a - b);

        await expect(prices).toEqual(sortedPrices);
    })

    test('verify the ability to sort products in descending order by price', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.hoverMenLink();
        const menTopsPage = await homePage.clickMenTopsLink();
        await page.waitForTimeout(2000);
        await menTopsPage.locators.getSortByLocator().selectOption('price');
        await page.waitForTimeout(2000);
        await menTopsPage.hoverGetDescOrderLink();
        await menTopsPage.clickGetDescOrderLink();
        await page.waitForTimeout(3000);

        await expect(menTopsPage.locators.getDescOrderLocator().first()).toBeVisible();
        await expect(menTopsPage.locators.getProductsPriceLocator().first()).toBeVisible();
    
        const prices = await page.$$eval('.product-items .price', elements => {
            return elements.map(element => parseInt(element.textContent.trim().replace(/[^\d.]/g, ''), 10));
          });
        const sortedPrices = prices.slice().sort((a, b) => b - a);
   
        await expect(prices).toEqual(sortedPrices);
      })
})




