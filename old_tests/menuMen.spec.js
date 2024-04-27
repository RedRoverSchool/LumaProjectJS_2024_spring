import { test, expect } from "@playwright/test";
test.describe('Menu/Men', () => {
    const hotSellersName = [
      "Argus All-Weather Tank",
      "Hero Hoodie",
      "Meteor Workout Short",
      "Geo Insulated Jogging Pant",
    ];
    const hotSellersEndPointUrl = [
      "argus-all-weather-tank.html",
      "hero-hoodie.html",
      "meteor-workout-short.html",
      "geo-insulated-jogging-pant.html",
    ];

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })

    test('Menu/Men available to click, see clothes only for men', async ({ page }) => {
        await page.getByRole('menuitem', {name: 'Men'}).last().click();

        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/men.html');
        await expect(page.locator('.page-title')).toContainText('Men');
        await expect(page.locator('[role="heading"]').first()).toBeVisible('Compare Products');
        await expect(page.locator('[role="heading"]').nth(1)).toBeVisible('My Wish List');
    })    
     
    test.skip("Verify the display of My Wish List on the men's page", async ({ page, }) => {
        await page.getByRole("link", { name: "Sign In" }).click();
        await page.getByLabel("Email").fill("svetik.buratino@gmail.com");
        await page.getByLabel("Password").fill("User123!");
        await page.getByRole("button", { name: "Sign In" }).click();
        await page.getByRole("menuitem", { name: "Men" }).last().click();
  
        await page.locator('.products-grid li').first().click();    
        await page.getByRole('link', {name:'Add to Wish List'}).click();       
        await page.getByRole("menuitem", { name: "Men" }).last().click();
        await page.locator('.products-grid li').nth(1).click();
        await page.getByRole('link', {name:'Add to Wish List'}).click();       
        await page.getByRole("menuitem", { name: "Men" }).last().click();
  
        await expect(page.getByRole('heading', {name:'My Wish List'})).toBeVisible(); 
  
        const countItemsBlockWishList = page.locator('#wishlist-sidebar li');
  
        await expect(countItemsBlockWishList).toHaveCount(2);  
    });

    test("Verify the display of Comparison Products on the men's page", async ({ page, }) => {
      await page.getByRole("link", { name: "Sign In" }).click();
      await page.getByLabel("Email").fill("svetik.buratino@gmail.com");
      await page.getByLabel("Password").fill("User123!");
      await page.getByRole("button", { name: "Sign In" }).click();
      await page.getByRole("menuitem", { name: "Men" }).last().click();

      await page.locator('.products-grid li').first().click();
      await page.getByRole('link', {name:'Add to Compare'}).click();   
      await page.getByRole("menuitem", { name: "Men" }).last().click();

      await expect(page.locator('#block-compare-heading')).toHaveText('Compare Products');
      
      const countItemsBlockCompare = page.locator('#compare-items li');
    
      await expect(countItemsBlockCompare).toHaveCount(1);
  });

  hotSellersName.forEach((productsName, idx) => {
    test(`Menu/Men/Hot Sellers Verify user can click on product's name and be redirected to the ${productsName} page`, async({ page }) => {    
        await page.getByText('Men', {exact: true}).click();
        await page.getByTitle(productsName).click();

        await expect(page).toHaveURL(new RegExp(hotSellersEndPointUrl[idx]));
        await expect(page.getByRole('heading', {name: productsName})).toHaveText(hotSellersName[idx]);
      });
  });
})