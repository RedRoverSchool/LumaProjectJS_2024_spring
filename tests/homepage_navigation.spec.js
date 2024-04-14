import { test, expect } from "@playwright/test";

test.describe('Homepage | Navigation', () => {

  const allMenuLinks = ["What's New", "Women", "Men", "Gear", "Training", "Sale"];
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })

  test('verify Navigation links size', async ({ page }) => {
    const navigation = page.getByRole('navigation');
    const navitems = navigation.getByRole('listitem');

    expect(await navitems.count()).toEqual(6);   
  });  

  allMenuLinks.forEach(link => {
    test(`TC 03.1.1_03 Verify redirect to ${link} page`, async ({ page }) => { 
      const navLink = page.getByText(link, { exact: true });    
      await navLink.click(); 
      const actualTitle = await page.locator('h1>span').innerText() 

      expect(actualTitle).toEqual(link);   
    });
  })
});
