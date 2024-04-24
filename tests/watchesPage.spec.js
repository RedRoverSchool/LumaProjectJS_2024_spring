import { test, expect } from "@playwright/test";

test.describe('watchesPage', () => {
    test.slow();
    const baseURL = 'https://magento.softwaretestingboard.com';
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })

    test('verify navigation to watches page through gear section', async ({ page }) => {
        await page.getByRole('menuitem', { name: 'Gear' }).hover();
        await page.getByText('Watches').click();
        await expect(page).toHaveURL('/gear/watches.html');
        await page.waitForSelector('h1:has-text("Watches")');
    })

    test('verify only watches displayed on watches page', async ({ page }) => {
        await page.getByRole('menuitem', { name: 'Gear' }).hover();
        await page.getByText('Watches').click();
        await page.waitForSelector('.products .product-items li');
        const allTextItems = await page.locator('.products .product-items .product-item-link').allTextContents();
        for (const item of allTextItems) {
            expect(item).toContain('Watch');
        }
    })

    test('verify only sale watches displayed on watches page', async ({ page }) => {
        await page.getByRole('menuitem', { name: 'Gear' }).hover();
        await page.getByText('Watches').click();
        await page.waitForLoadState()
        await page.locator('.filter-options .filter-options-title', { hasText: 'Sale' }).click();
        const countSaleItems = await page.locator('.filter-options .active li .count').textContent();
        const totalSaleItems = parseInt(countSaleItems)
        await page.locator('.filter-options .active li a', { hasText: 'Yes' }).click();
        await expect(page).toHaveURL('/gear/watches.html?sale=1');
        const totalItems = await page.locator('.toolbar-products .toolbar-amount .toolbar-number').first()
        const totalNumberItems = await totalItems.textContent();
        expect(totalNumberItems).toContain(totalSaleItems.toString());
    })

    test('Verify only watches on sale displayed on page', async ({ page }) => {
        await page.getByRole('menuitem', { name: 'Gear' }).hover()
        await page.getByRole('menuitem', { name: 'Watches' }).click()
        await page.getByRole('tab', { name: 'Sale' }).click()
        await page.getByRole('link', { name: " Yes " }).click()
        const saleItemsNumber = await page.locator('#maincontent').getByRole('paragraph').getByText('2').innerText()
        const saleWatches = (await page.locator('.product-items').getByRole('listitem').count()).toString()
        expect(saleItemsNumber).toEqual(saleWatches)
    })

    test.skip('verify that material filter can be set/unset on watch', async ({ page }) => {
        await page.getByRole('menuitem', { name: 'Gear' }).hover();
        await page.getByText('Watches').click();
        await page.getByRole('tab', { name: 'Material' }).click();
        await page.getByText('Leather').click();
        const activeMaterialFilter = page.locator('.filter-value');
        expect(activeMaterialFilter).toHaveText('Leather');
        const clearAllFiltersButton = page.locator('.action.clear.filter-clear');
        await (clearAllFiltersButton).click();
        expect(activeMaterialFilter).not.toBeVisible();
    })

    test.skip('verify user able to reset the selected filter on sale watches page', async ({ page }) => {
        const saleWatchesURL = ("https://magento.softwaretestingboard.com/gear/watches.html?sale=1")
        await page.goto(saleWatchesURL);
        const totalSalesItems = await page.locator('.toolbar-products .toolbar-amount .toolbar-number').first().textContent()
        const totalSalesNumberItems = parseInt(totalSalesItems)
        const activeFilter = page.locator('.filter-value');
        expect(activeFilter).toHaveText('Yes');
        await page.locator('.filter-content .clear', { hasText: 'Clear All' }).click()
        await expect(page).toHaveURL('/gear/watches.html');
        const totalItems = await page.locator('.toolbar-products .toolbar-amount .toolbar-number').first().textContent()
        const totalNumberItems = parseInt(totalItems)
        expect(totalSalesNumberItems).not.toEqual(totalNumberItems)
        expect(activeFilter).not.toBeVisible();
    })
    test('verify navigation path to the watches', async ({ page }) => {
        await page.goto('/');
        
        if (await page.getByRole('dialog', { name: 'This site asks for consent to use your data' }).isVisible()) {
            await page.getByRole('button', { name: 'Consent' }).click();
        };

        await page.locator('#ui-id-6').hover();
        await page.locator('#ui-id-27').click();
        await expect(page.locator('ul.items')).toHaveText('Home Gear Watches');
    })

    test ('product page “Watches” is working', async ({page}) => {
        await page.locator('#ui-id-6').hover();
        await page.locator('#ui-id-27').click();
        const response = await page.request.get(baseURL + '/gear/watches.html?product_list_limit=24&product_list_mode=list');
    
        await expect(response).toBeOK();
        await expect(page).toHaveTitle(/Watches/);
    })   
     
    test('Verify that Gear>Watches>Shopping Options has Gender filter dropdown', async ({ page }) => {
        const expectedGenderOptions = ['Men', 'Women', 'Unisex']; 

        const arr = [];
       
        await page.getByRole('menuitem', { name: 'Gear' }).hover();
        await page.getByText('Watches').click();
        await page.getByRole('tab', {name: 'GENDER'}).click();

        const actualGender =  page.locator('.active li.item a');

        for( let i=0; i< await actualGender.count(); i++) {
           arr.push(await actualGender.nth(i).innerText());
        }

        const extractedGenders = arr.map(el =>el.split(' ')[0]);

        expect(extractedGenders).toEqual(expectedGenderOptions);
    })

    test ('There is only a “Watches” on the open page', async ({page}) => {
        await page.locator('#ui-id-6').hover();
        await page.locator('#ui-id-27').click();
        const response = await page.request.get(baseURL + '/gear/watches.html?product_list_limit=24&product_list_mode=list');
    
        await expect(page.getByRole('heading', {name: 'Watches'})).toBeVisible();
        const allTextItems = await page.locator('.products .product-items .product-item-link').allTextContents();
        for (const item of allTextItems) {
            expect(item).toContain('Watch');
        }
    })

    test('Verify User sees the watches according to the selected activity types', async ({page}) =>{
        const selectorOfSubcategory = [
            '.filter-options-item.allow.active > div.filter-options-content > ol > li:nth-child(1) > a',
            '.filter-options-item.allow.active > div.filter-options-content > ol > li:nth-child(2) > a',
            '.filter-options-item.allow.active > div.filter-options-content > ol > li:nth-child(3) > a',
            '.filter-options-item.allow.active > div.filter-options-content > ol > li:nth-child(4) > a',
            '.filter-options-item.allow.active > div.filter-options-content > ol > li:nth-child(5) > a'
        ];
        
        const expectedSubcategoryTitles = [
            'Outdoor',
            'Recreation',
            'Gym',
            'Athletic',
            'Sports'
        ];

        const subcategoryLinks = [
            'https://magento.softwaretestingboard.com/gear/watches.html?activity=5',
            'https://magento.softwaretestingboard.com/gear/watches.html?activity=9',
            'https://magento.softwaretestingboard.com/gear/watches.html?activity=11',
            'https://magento.softwaretestingboard.com/gear/watches.html?activity=16',
            'https://magento.softwaretestingboard.com/gear/watches.html?activity=17'

        ];

        for (let i = 0; i < selectorOfSubcategory.length; i++) {
            await page.goto('/gear/watches.html');
            await page.locator('.filter-options-title').getByText('Activity').click();
            await page.locator(selectorOfSubcategory[i]).click();
            await expect(page.locator(`.filter-value:has-text('${expectedSubcategoryTitles[i]}')`)).toContainText(expectedSubcategoryTitles[i]);
            await expect(page).toHaveURL(subcategoryLinks[i]);
            }
    })
    
    test("Verify the Material dropdown list items on the Gear/Watches page", async ({
      page,
    }) => {
      const listOfMaterialsExpected = [
        "Leather",
        "Metal",
        "Plastic",
        "Rubber",
        "Stainless Steel",
        "Silicone",
      ];

      await page.getByRole("menuitem", { name: "Gear" }).hover();
      await page.getByRole("menuitem", { name: "Watches" }).click();

      await page.getByRole("tab", { name: "Material" }).click();
      await page.waitForSelector("div.filter-options>div:nth-child(4) ol li a");

      const listOfMaterialsActual = await page
        .locator("div.filter-options>div:nth-child(4) ol li a ")
        .allInnerTexts();

      for (let i = 0; i < listOfMaterialsActual.length; i++) {
        expect(
          listOfMaterialsActual[i].includes(listOfMaterialsExpected[i])
        ).toBeTruthy();
      }
    });

    test("Verify that the filter is applied after selecting an option in the Material dropdown list on the Gear/Watches page", async ({
        page,
    }) => {
        test.slow();
        await page.getByRole("menuitem", { name: "Gear" }).hover();
        await page.getByRole("menuitem", { name: "Watches" }).click();

        await page.getByRole("tab", { name: "Material" }).click();
        await page.waitForSelector("div.filter-options>div:nth-child(4) ol li a");

        const listOfMaterialsActual = await page
            .locator("div.filter-options>div:nth-child(4) ol li a ")
            .allInnerTexts();

        const listOfMaterialsSplitedActual = listOfMaterialsActual.map(
            (item) => item.split(/\s\d+/)[0]
        );
       
        for (const material of listOfMaterialsSplitedActual)
        {
            await page.getByRole("link", { name: material }).click();
            await expect(page.getByText("Now Shopping by")).toBeVisible();
            await expect(page.locator("span.filter-value")).toHaveText(material);

            await page.locator(".action.clear.filter-clear").click();
            await page.getByRole("tab", { name: "Material" }).click();
        }
    });
})

    

