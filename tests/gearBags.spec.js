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
    "Suede",
  ];

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    page.getByRole("menuitem", { name: "Gear" }).hover();
    await page.getByRole("menuitem").filter({ hasText: "Bags" }).click();
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
    test(`Verify that ${name} from material options list is visible and has right name`, async ({
      page,
    }) => {
      await page.getByRole("tab", { name: "Material" }).click();
      const materialItemLocator = page.getByRole("link", { name: `${name}` });
      const materialItemText = (await materialItemLocator.innerText()).split(
        " "
      )[0];

      expect(materialItemLocator).toBeVisible;
      expect(materialItemText).toEqual(name);
    });
  });
  test("Verify user can choose a bag by material leather", async ({ page }) => {
    await page.getByText("Gear", { exact: true }).nth(1).click();
    await expect(page).toHaveTitle("Gear");
    await expect(page).toHaveURL(
      "https://magento.softwaretestingboard.com/gear.html"
    );
    page.locator("#ui-id-6").hover();
    await page.locator("#ui-id-25").click();
    await page.getByText("Material", { exact: true }).click();
    await expect(page).toHaveURL(
      "https://magento.softwaretestingboard.com/gear/bags.html"
    );
    await page
      .getByRole("listitem")
      .locator("li")
      .filter({ hasText: " Leather " });
    await expect(page.locator("#toolbar-amount")).toHaveCount(2);
  });

  test("Verify user can switch between materials", async ({ page }) => {
    await page.hover("#ui-id-6");
    await page.click("#ui-id-25");

    await expect(page).toHaveTitle("Bags - Gear");

    await materialOption.click();
    await expect(
      page.locator("ol.items > li.item > a:has-text(' Polyester ')")
    ).toBeVisible();

    const selectedOptions = ["Polyester", "Leather", "Mesh"];

    for (const optionName of selectedOptions) {
      const selector = `a:has-text('${optionName}')`;
      await page.click(selector);
      await page.waitForSelector(`text=${optionName}`, { state: "visible" });

      await page.waitForSelector(`a[title="Remove Material ${optionName}"]`, {
        state: "visible",
      });

      await page.click(`a[title="Remove Material ${optionName}"]`);

      await page.waitForSelector(`text=${optionName}`, { state: "hidden" });

      await page.waitForSelector("text=Material");
      await page.click("text=Material");
    }
  });
});
