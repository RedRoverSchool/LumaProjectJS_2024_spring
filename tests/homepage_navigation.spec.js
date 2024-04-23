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

  test("TC 04.1.1_02 <Menu/What's New> Visible title What's New", async ({page}) => {
    await expect (page.getByRole('menuitem', {name: "What's New"})).toBeVisible();
  })
  
  test('TC 04.2.1_04 <Menu/Women> Title Women is visible', async ({page}) => {
    await expect(page.getByRole('menuitem', {name: ' Women'})).toBeVisible();

  })

  test('TC 04.2.1_06 <Menu/Women> Click title Women', async ({page}) => {
    await page.getByRole('menuitem', {name: ' Women'}).click()
    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/women.html')
    
})

  test("TC 04.2.1_07 Verify user can hover over the title “Women” and see dropdown list with 2 subcategories", async ({ page }) => {
    const womenCategories = ["Tops", "Bottoms"];
    await page.getByText("Women", { exact: true }).hover();

    await expect(page.locator(".nav-2 > ul > li > a")).toHaveText(womenCategories);
  });

  test('TC 05.2.2 Women/Bottoms/Breadcrumbs', async ({ page }) => {
    await page.locator('.level0.nav-2').hover();
    await page.locator('#ui-id-10').click();

    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/women/bottoms-women.html');
    await expect(page.getByRole('heading', {name: 'Bottoms'})).toBeVisible();
    await expect(page.locator('.item.home')).toBeVisible();
    await expect(page.locator('.item.category20')).toBeVisible();
    await expect(page.locator('.item.category22')).toBeVisible();
  })

});
