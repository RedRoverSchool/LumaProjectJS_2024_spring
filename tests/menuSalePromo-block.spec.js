import { test, expect } from "@playwright/test";

test.describe("menuSalePromo-block", () => {

  const hoodiesAndSweatshirts_url = 'https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html';
  const jackets_url = 'https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html';
  const tees_url = 'https://magento.softwaretestingboard.com/men/tops-men/tees-men.html';
  const pants_url = 'https://magento.softwaretestingboard.com/men/bottoms-men/pants-men.html';
  const shorts_url = 'https://magento.softwaretestingboard.com/men/bottoms-men/shorts-men.html';

  test.beforeEach(async ({ page }) => {
    await page.goto("/" + "sale.html");

  });

  test("Verify 'Sale' page contains 6 promo-blocks as images", async ({ page }) => {
    const promoBlocks = page.locator("div.blocks-promo img");

    expect(promoBlocks).toHaveCount(6);
  });

  test('Check that Hoodies and Sweatshirts link opens the corresponding page', async ({page}) =>{
    await page.getByRole('link',{name:'Hoodies and Sweatshirts'}).last().click();

    await expect(page).toHaveURL(hoodiesAndSweatshirts_url);
    await expect(page.locator('#page-title-heading > span')).toHaveText('Hoodies & Sweatshirts');
});

  test('Check that Jackets link opens the corresponding page', async ({page}) =>{
    await page.getByRole('link',{name:'Jackets'}).last().click();

    await expect(page).toHaveURL(jackets_url);
    await expect(page.locator('#page-title-heading > span')).toHaveText('Jackets');
});

  test('Check that Tees link opens the corresponding page', async ({page}) =>{
    await page.getByRole('link',{name:'Tees'}).last().click();

    await expect(page).toHaveURL(tees_url);
    await expect(page.locator('#page-title-heading > span')).toHaveText('Tees');

});

  test('Check that Pants link opens the corresponding page', async ({page}) =>{
    await page.getByRole('link',{name:'Pants'}).last().click();

    await expect(page).toHaveURL(pants_url);
    await expect(page.locator('#page-title-heading > span')).toHaveText('Pants');
  });

  test('Check that Shorts link opens the corresponding page', async ({page}) =>{
    await page.getByRole('link',{name:'Shorts'}).last().click();
  
    await expect(page).toHaveURL(shorts_url);
    await expect(page.locator('#page-title-heading > span')).toHaveText('Shorts');
    
  
});

})