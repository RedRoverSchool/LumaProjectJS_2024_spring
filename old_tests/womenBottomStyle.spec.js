import { test, expect } from "@playwright/test";

test.describe('Women/Bottoms/Style', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Verify the changes to the menuitem "Women" style when hover', async ({ page }) => {
    const wonenMenu = page.locator('a#ui-id-4');
    await page.getByRole('menuitem', {name: 'Women'}).hover();

    await expect(wonenMenu).toHaveClass(/ui-state-focus/);
    await expect(wonenMenu).toHaveCSS('color', 'rgb(51, 51, 51)');
    await expect(page.getByRole('menuitem', {name: 'Tops'})).toBeVisible();
    await expect(page.getByRole('menuitem', {name: 'Bottoms'})).toBeVisible();
  });

  test('Verify the changes to the menuitem "Bottoms" style when hover', async ({ page }) => {
    const womenMenu = page.locator('a#ui-id-4');
    await womenMenu.hover();
    const bottomsMenu = page.locator('a#ui-id-10');
    await bottomsMenu.hover();

    await expect(bottomsMenu).toHaveCSS('background', 'rgb(232, 232, 232) none repeat scroll 0% 0% / auto padding-box border-box');
    await expect(bottomsMenu).toHaveCSS('color', 'rgb(51, 51, 51)');
    await expect(page.getByRole('menuitem', {name: 'Pants'})).toBeVisible();
    await expect(page.getByRole('menuitem', {name: 'Shorts'})).toBeVisible();
  });

  test('Verify the transition to the "Women - Bottoms" page', async ({ page }) => {
    const womenMenu = page.locator('a#ui-id-4');
    await womenMenu.hover();
    await page.getByRole('menuitem', {name: 'Bottoms'}).click();
    
    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/women/bottoms-women.html');
    expect(page.getByTitle('Bottoms - Women'));
  });

  test('Verify style changes of the "Women" menu after navigating to "Bottoms - Women" page.', async ({ page }) => {
    const womenMenu = page.locator('a#ui-id-4');
    await womenMenu.hover();
    await page.getByRole('menuitem', { name: 'Bottoms' }).click();

    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/women/bottoms-women.html');
    await expect(womenMenu).toHaveCSS('border-color', 'rgb(255, 85, 1)');
    await expect(womenMenu).toHaveCSS('border-style', 'solid');
    await expect(womenMenu).toHaveCSS('color', 'rgb(51, 51, 51)');
  });

  test('Verify the availability of a list of 9 category in the "Style" option drop-down list', async ({ page }) => {
    const womenMenu = page.locator("a#ui-id-4");
    await womenMenu.hover();
    await page.getByRole("menuitem", { name: "Bottoms" }).click();

    await expect(page).toHaveURL("https://magento.softwaretestingboard.com/women/bottoms-women.html");

    const styleDrop = page.getByRole("tab", { name: "Style" });
    await styleDrop.click();

    expect(styleDrop.locator("[aria-selected]")).toBeTruthy();

    const expectedItems = ['Base Layer', 'Basic', 'Capri', 'Compression', 'Leggings', 'Parachute', 'Snug', 'Sweatpants', 'Track Pants'];
    const receivedResult = await page.locator('[aria-hidden="false"] .items > .item').allInnerTexts();

    function extractAndCompareItems(receivedResult, expectedItems) {
      const extractedItems = receivedResult.map(item => item.replace(/\nitem$/, '').split(' ').slice(0, -1).join(' '));
      const areEqual = JSON.stringify(extractedItems) === JSON.stringify(expectedItems);

      return { extractedItems, areEqual };
    }

    const result = extractAndCompareItems(receivedResult, expectedItems);

    expect(result.extractedItems).toEqual(expectedItems);
  });
});
