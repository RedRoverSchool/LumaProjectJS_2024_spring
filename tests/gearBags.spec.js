import { test, expect } from "@playwright/test";

test.describe("gearBags", () => {
  let materialOption;
  const materialOptionNames = [
    "Burlap",
    "Canvas",
    "Cotton",
    "Leather",
    "Mesh",
    "Nylon",
    "Polyester",
    "Rayon",
    "Suede"
  ]

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    page.getByRole('menuitem', {name: 'Gear'}).hover();
    await page.getByRole('menuitem').filter({hasText: 'Bags'}).click();
    materialOption = page.locator("text=Material");
  });

  test("Verify material sidebar menu option exists", async ({ page }) => {
    await expect(page).toHaveTitle("Bags - Gear");

    await expect(materialOption).toBeVisible();
  });

  test("Verify user can choose a bag by material", async ({ page }) => {   
    await expect(page).toHaveTitle("Bags - Gear");
    await materialOption.click();
    const materialMenu = await page.locator(
      "ol.items > li.item > a:has-text(' Polyester ')",
      { timeout: 50000 } // Increase timeout value as needed
    );
    materialMenu.click();
    await expect(
      page.locator('.filter-value:has-text("Polyester")')
    ).toBeVisible();
  });

  materialOptionNames.forEach((name, idx) => {
    test(`Verify that ${name} from material options list is visible and has right name`, async ({ page }) => {        
      await page.getByRole('tab', {name: 'Material'}).click();
      const materialItemLocator = page.getByRole('link', {name: `${name}`});
      const materialItemText = (await materialItemLocator.innerText()).split(' ')[0];

      expect(materialItemLocator).toBeVisible;
      expect(materialItemText).toEqual(name);
    })
  })

});
