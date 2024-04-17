import { test, expect } from "@playwright/test";

test.describe("womenTops", () => {
  const WOMEN_TOPS_URL =
    "https://magento.softwaretestingboard.com/women/tops-women.html";

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("verify that clicking on Women>Tops user is redirected to the Tops page", async ({ page }) => {
    await page.getByText("Women").hover();
    await page.locator("#ui-id-9").click();

    await expect(page).toHaveURL(WOMEN_TOPS_URL);
    await expect(page).toHaveTitle("Tops - Women");
  });

  test ('Verify that choosing a category returns correct result', async ({ page }) => {
    await page.getByText('Women').hover();
    await page.getByRole('menuitem', { name: 'Tops' }).click();
    await page.getByText('Category').click();
    await page.getByRole('link', { name: 'Jackets' }).click();

    await expect(page.locator('span.filter-value')).toHaveText('Jackets');

    const expectedItemNumber = await page.locator('span.toolbar-number').first().innerText();
    console.log(expectedItemNumber);
    console.log(typeof expectedItemNumber);
    const atualItemNumber = await page.locator('.product-items').getByRole('listitem').count();
    console.log(atualItemNumber);
    console.log(typeof atualItemNumber);

    expect(atualItemNumber).toEqual(+expectedItemNumber)
})
});
