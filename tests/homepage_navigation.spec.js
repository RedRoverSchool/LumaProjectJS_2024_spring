import { test, expect } from "@playwright/test";

test.describe('Homepage | Navigation', () => {

  const allMenuLinks = ["What's New", "Women", "Men", "Gear", "Training", "Sale"];
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })

  test('TC 03.1.1_02 Verify that Navigation has 6 links', async ({ page }) => {
    const navigation = page.getByRole('navigation');
    const navitems = navigation.getByRole('listitem');

    expect(await navitems.count()).toEqual(6);   
  });  

  allMenuLinks.forEach(link => {
    test(`TC 03.1.1_03 Verify redirect to ${link} page`, async ({ page }) => { 
      const navLink = page.getByText(link, { exact: true });    
      await navLink.click(); 
      const actualTitle = await page.locator('h1>span').innerText();

      expect(actualTitle).toEqual(link);   
    });
  });

  test('TC 03.1.1_04 Verify text of Navigation links', async ({page}) => {
    const menuLinks = page.getByRole('navigation').getByRole('listitem');
    const allLinksText = await menuLinks.allInnerTexts();

    expect(allLinksText).toEqual(allMenuLinks);
  });

  test("US 04.1.1_02 <Menu/What's New> Visible title What's New", async ({page}) => {
    await expect (page.getByRole('menuitem', {name: "What's New"})).toBeVisible();
  })
  
});
