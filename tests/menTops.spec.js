import { test, expect } from '@playwright/test';

test.describe('menTops', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    if (await page.getByRole('dialog', { name: 'This site asks for consent to use your data' }).isVisible()) {
      await page.getByRole('button', { name: 'Consent' }).click();
    };
  })

  test("Check that the cards have an image, description, available sizes, colors and price.", async ({ page }) => {
    await page.locator('#ui-id-5').hover();
    await page.locator('#ui-id-17').click();
    const numberOfCards = await page.locator('li[class = "item product product-item"]').count()
  
    for (let index = 0; index < numberOfCards; index++) {
    await expect(page.locator('img.product-image-photo').nth(index)).toBeVisible();
    await expect(page.locator('a.product-item-link').nth(index)).toBeVisible()
    await expect(page.locator('span[data-price-type="finalPrice"]').nth(index)).toHaveText(/\$\d+\.00$/)
    await expect(page.getByRole('listbox',{name:'Size'}).nth(index)).toBeVisible() 
    await expect(page.getByRole('listbox',{name:'Color'}).nth(index)).toBeVisible()
    } 
  })
  test("Go to the page with men's tops", async ({ page }) => {
    await page.locator('#ui-id-5').hover();
    await page.locator('#ui-id-17').click();
 
     await expect(page.locator('.base') ).toHaveText('Tops');
     await expect(page).toHaveURL( 'https://magento.softwaretestingboard.com/men/tops-men.html');
   })
   test('Check that category drop-down displays the products', async ({page}) => {
    await page.goto('https://magento.softwaretestingboard.com/men/tops-men.html');
    await page.getByRole('tab', {name:'Category' }).click();
    await page.locator('.filter-options-content').first().hover();
    await page.getByText(['Jackets', 'Hoodies & Sweatshirts', 'Tees', 'Tanks']).all();
    
    expect(page.getByText(['Jackets', 'Hoodies & Sweatshirts', 'Tees', 'Tanks'])).toBeTruthy();
   })

   test('verify the sort option byPrice is available in drop-down menu', async ({ page }) => {
    await page.goto('/' + 'men/tops-men.html');
    await page.getByLabel('Sort by').click();
    await page.locator('#sorter').first().selectOption('Price');
    await expect(page.getByRole('option', {name: 'Price'})).toHaveText('Price');
  })

  test.skip('verify the ability to sort products in ascending order by price', async ({ page }) => {
    await page.goto('/' + 'men/tops-men.html');
    await page.getByLabel('Sort by').click();
    await page.locator('#sorter').first().selectOption('Price');
    
    await expect(page.locator('a.action.sorter-action.sort-asc').first()).toBeVisible();

    await page.locator('.product-items .price').first().waitFor({state: 'visible'});

    let prices = await page.$$eval('.product-items .price', elements => {
        return elements.map(element => parseInt(element.textContent.trim().replace(/[^\d.]/g, ''), 10));
      });

    const sortedPrices = prices.slice().sort((a, b) => a - b);

    await expect(prices).toEqual(sortedPrices);
  })

  test.skip('verify the ability to sort products in descending order by price', async ({ page }) => {
    await page.goto('/' + 'men/tops-men.html');
    await page.getByLabel('Sort by').click();
    await page.locator('#sorter').first().selectOption('Price');
 
    await page.locator('div.toolbar-sorter.sorter > a').first().hover();
    await page.locator('div.toolbar-sorter.sorter > a').first().click();

    await expect(page.locator('a.action.sorter-action.sort-desc').first()).toBeVisible({timeout: 4000});
    
    await page.locator('.product-items .price').first().waitFor({state: 'visible'});

    let prices = await page.$$eval('.product-items .price', elements => {
        return elements.map(element => parseInt(element.textContent.trim().replace(/[^\d.]/g, ''), 10));
      });

    const sortedPrices = prices.slice().sort((a, b) => b - a);

    await expect(prices).toEqual(sortedPrices);
  })
  test("Check the name of 14 shopping styles in the Men's/Tops section.", async ({ page }) => {
    const listStyle = [
    'Insulated',
    'Jacket',
    'Lightweight',
    'Hooded',
    'Heavy Duty',
    'Rain Coat',
    'Hard Shell',
    'Soft Shell',
    'Windbreaker',
    '¼ zip',
    'Full Zip',
    'Reversible',
    'Tank',
    'Tee']
    await page.goto('https://magento.softwaretestingboard.com/');
    await page.locator('#ui-id-5').hover();
    await page.locator('#ui-id-17').click();
    await page.getByRole("tab",{name:"Style"}).click()
       
    for (let index = 0; index < listStyle.length; index++) {
        await expect(page.locator('a[href*= "men/tops-men.html?style_general"]').nth(index)).toContainText(listStyle[index])
    }
 });
 test('displays the number of available products in the Insulated(5) category', async ({page}) => {
  await page.locator('#ui-id-5').hover()
  await page.locator('#ui-id-17').click()
  await page.getByRole('tab', { name: 'Style' }).click()
  
  await expect(page.locator('a[href*= "men/tops-men.html?style_general=116"]').filter({ hasText: 'Insulated 5 item' })).toBeVisible();
  })
})