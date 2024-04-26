import { test, expect } from "@playwright/test";

test.describe("womenTops", () => {
  const WOMEN_TOPS_URL =
    "https://magento.softwaretestingboard.com/women/tops-women.html";

  const WOMEN_TOPS_ITEMS = [
    "Tank",
    "Tunic",
    "Top",
    "Bra",
    "Tee",
    "Jacket",
    "Shell",
    "Hoodie",
    "Fleece",
    "Sweatshirt",
    "Pullie",
  ];

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("verify that clicking on Women>Tops user is redirected to the Tops page", async ({ page }) => {
    await page.getByText("Women").hover();
    await page.locator("#ui-id-9").click();

    await expect(page).toHaveURL(WOMEN_TOPS_URL);
    await expect(page).toHaveTitle("Tops - Women");
  });

  test("verify that on the Tops page user sees women's outfits: jackets, hoodies & sweatshirts, tees, bras & tanks", async ({ page }) => {
    await page.getByText("Women").hover();
    await page.locator("#ui-id-9").click();

    const allWomenTopsItems = await page
      .locator(".products .product-items .product-item-link")
      .allTextContents();

    expect(allWomenTopsItems.length).toBeGreaterThan(0);

    const allItemsContainExpectedText = allWomenTopsItems.every((item) => {
      return WOMEN_TOPS_ITEMS.some((keyword) => item.includes(keyword));
    });

    expect(allItemsContainExpectedText).toBeTruthy();
  });

  test ('Verify that choosing a category returns correct result', async ({ page }) => {
    await page.getByText('Women').hover();
    await page.getByRole('menuitem', { name: 'Tops' }).click();
    await page.getByText('Category').click();
    await page.getByRole('link', { name: 'Jackets' }).click();

    await expect(page.locator('span.filter-value')).toHaveText('Jackets');

    const expectedItemNumber = await page.locator('span.toolbar-number').first().innerText();
    const atualItemNumber = await page.locator('.product-items').getByRole('listitem').count();
    
    expect(atualItemNumber).toEqual(+expectedItemNumber)
})

  test ('TC 05.1.4_01 Women/Tops/Display mode can be changed, visible', async ({ page }) => {
   await page.goto(WOMEN_TOPS_URL)
   const displayModeGrid = page.getByTitle('Grid', {exact:true}).first()
   await expect(displayModeGrid).toBeVisible()
   await displayModeGrid.click()
   
   const displayModeList = page.getByTitle('List', { exact: true }).first()
   await expect(displayModeList).toBeVisible()
   await displayModeList.click()

  })

  test ('TC 05.1.4_02 Women/Tops/Display mode_verify List mode of displaying the products on the page', async ({ page }) => {
    await page.goto(WOMEN_TOPS_URL)
    const displayModeList = page.getByTitle('List', { exact: true }).first()
    await displayModeList.click()
    expect(page.url()).toContain('product_list_mode=list')
 
    const listMode = page.locator('div.modes strong[title="List"]').first();
    await expect(listMode).toHaveClass('modes-mode active mode-list')
           
   })

   test ('TC 05.1.4_03 Women/Tops/Display mode_verify Grid mode displays the number of items presented on the page', async ({ page }) => {
    await page.goto(WOMEN_TOPS_URL)
     
    const gridMode = page.locator('div.modes strong[title="Grid"]').first();
    await expect(gridMode).toHaveClass('modes-mode active mode-grid');

    const gridModeList = page.locator('.products.list.items.product-items > li');
    const gridModeListNumber = await page.locator('.toolbar-number:nth-child(2)').first().innerText();
    const expectedGridNumberModeList = parseInt(gridModeListNumber, 10);
    const actualCount = await gridModeList.count();
    expect(actualCount).toBe(expectedGridNumberModeList);
           
   })
   
});
