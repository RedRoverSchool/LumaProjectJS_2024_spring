import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { LIST_STYLE_MEN_TOPS, BASE_URL, MEN_TOPS_PAGE_END_POINT, LIST_CATEGORY_MEN_TOPS, LIST_LABELS_SUB_CATEGORY, MEN_TOPS_CATEGORY_PAGES_END_POINT, LIST_OF_COUNT_SUB_CATEGORY_ON_MEN_TOPS_PAGE} from "../../helpers/testData.js"
import MenTopsPage from "../../page_objects/menTopsPage.js";
import { MEN_TOPS_PRICE_LIST, MEN_TOPS_PRICE_LIST_PRODUCT_COUNT } from "../../helpers/testMenData.js";

test.describe('menTops', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.open();
    })

    test("Check the name of 14 shopping styles in the Men's/Tops section.", async ({ page }) => {
        const homePage = new HomePage(page)
        const menTopsPage = new MenTopsPage(page)

        await homePage.hoverMenLink()
        await homePage.clickMenTopsLink()
        await menTopsPage.clickMenTopsStyle()
        for (let index = 0; index < LIST_STYLE_MEN_TOPS.length; index++) {
            await expect(menTopsPage.locators.getMenTopsListStyle().nth(index)).toContainText(LIST_STYLE_MEN_TOPS[index])
        }
        await expect(page).toHaveURL(BASE_URL + MEN_TOPS_PAGE_END_POINT)
    });

    test('check quantity of items is displayed', async ({ page }) => {
        const homePage = new HomePage(page);
        const menTopsPage = new MenTopsPage(page);

        await homePage.hoverMenLink();
        await homePage.clickMenTopsLink();
        await page.waitForTimeout(6000);
        await menTopsPage.clickMenTopsCategory();
        LIST_CATEGORY_MEN_TOPS.forEach(item => {
            expect(/\d+/.test(item)).toBe(true)
        })
        await expect(menTopsPage.locators.getMenTopsListCategory()).toBeVisible();
    });

    test('displays the number of available products in the Insulated(5) category', async ({page}) => {
        const homePage = new HomePage(page)
        const menTopsPage = new MenTopsPage(page)

        await homePage.hoverMenLink();
        await homePage.clickMenTopsLink();
        await menTopsPage.clickMenTopsStyle();

        await expect(menTopsPage.locators.getMenTopsStyleInsulated()).toBeVisible();
    })

    test('check Men/Tops price filter drop-down has 8 options', async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.hoverMenLink();
        const menTopsPage = await homePage.clickMenTopsLink();
        await menTopsPage.clickMenTopsPrice();
        
        expect(await menTopsPage.getMenTopsPriceList()).toEqual(MEN_TOPS_PRICE_LIST);
    })

    test('check Men/Tops price drop-down has quantity of available items in each price category', async ({ page }) => {
        const homePage = new HomePage(page);       
        await homePage.hoverMenLink();
        const menTopsPage = await homePage.clickMenTopsLink();
        await menTopsPage.clickMenTopsPrice();

        expect(await menTopsPage.getMenTopsPriceListProductCount()).toEqual(MEN_TOPS_PRICE_LIST_PRODUCT_COUNT);
        expect(await menTopsPage.getMenTopsPriceListProductCountPseudoElementBefore()).toEqual('(');
        expect(await menTopsPage.getMenTopsPriceListProductCountPseudoElementAfter()).toEqual(')');
    })

    test('Verify that user can apply the filter for categories within the Category dd list and reset the filter', async ({page}) =>{
        const homePage = new HomePage(page);
        const menTopsPage = new MenTopsPage(page);

        await homePage.hoverMenLink();
        await homePage.clickMenTopsLink();
    
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

    test('Verify the count for each subCategory on Tops page is the same as count of items on each specific page', async ({page}) =>{
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

test('The default quantity of products is specified: 12 in grid mode and 10 in list mode', async ({ page }) => {

    await page.goto("https://magento.softwaretestingboard.com");
        await page.locator('#ui-id-5').hover();
        await page.locator('#ui-id-17').click();
    expect(await page.locator('.limiter-options option[selected]').nth(1).textContent()).toContain('12');
    const displayModeList = page.locator('[data-value="list"]').first();

    await expect(displayModeList).toBeVisible();
        await expect(displayModeList).toBeEnabled();
        await displayModeList.click()
        await page.waitForTimeout(1000);
    await expect(page.locator('.limiter-options option[selected]').nth(1)).toHaveText(/10/, { timeout: 10000 });
})

});


