import { test, expect } from "@playwright/test";

test.describe("menuSalePromo-block", () => {

  const HoodiesAndSweatshirts_url = 'https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html';
  const Jackets_url = 'https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html';
  const Tees_url = 'https://magento.softwaretestingboard.com/men/tops-men/tees-men.html';
  const Pants_url = 'https://magento.softwaretestingboard.com/men/bottoms-men/pants-men.html';
  const Shorts_url = 'https://magento.softwaretestingboard.com/men/bottoms-men/shorts-men.html';

  test.beforeEach(async ({ page }) => {
    await page.goto("/" + "sale.html");

  });

  test("Verify 'Sale' page contains 6 promo-blocks as images", async ({ page }) => {
    const promoBlocks = page.locator("div.blocks-promo img");

    expect(promoBlocks).toHaveCount(6);
  });

  test.only('Check that Hoodies and Sweatshirts link opens the corresponding page', async ({page}) =>{
    await page.getByRole('link',{name:'Hoodies and Sweatshirts'}).last().click();

    await expect(page).toHaveURL(HoodiesAndSweatshirts_url);
    await expect(page.locator('#page-title-heading > span')).toHaveText('Hoodies & Sweatshirts');
});

  test.only('Check that Jackets link opens the corresponding page', async ({page}) =>{
    await page.getByRole('link',{name:'Jackets'}).last().click();

    await expect(page).toHaveURL(Jackets_url);
    await expect(page.locator('#page-title-heading > span')).toHaveText('Jackets');
});

  test.only('Check that Tees link opens the corresponding page', async ({page}) =>{
    await page.getByRole('link',{name:'Tees'}).last().click();

    await expect(page).toHaveURL(Tees_url);
    await expect(page.locator('#page-title-heading > span')).toHaveText('Tees');

});

  test.only('Check that Pants link opens the corresponding page', async ({page}) =>{
    await page.getByRole('link',{name:'Pants'}).last().click();

    await expect(page).toHaveURL(Pants_url);
    await expect(page.locator('#page-title-heading > span')).toHaveText('Pants');
  });

  test.only('Check that Shorts link opens the corresponding page', async ({page}) =>{
    await page.getByRole('link',{name:'Shorts'}).last().click();
  
    await expect(page).toHaveURL(Shorts_url);
    await expect(page.locator('#page-title-heading > span')).toHaveText('Shorts');
    
  
});

})