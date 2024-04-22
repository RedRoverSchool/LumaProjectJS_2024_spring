import { test, expect } from '@playwright/test';

test.describe('menBottoms', () => {

  const menBottomsSizes = ['32', '33', '34', '36'];

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })

  test("Selection the men's bottom section", async ({ page }) => {
    await page.getByRole('menuitem', { name: ' Men' }).hover();
    await page.locator('#ui-id-18').click();

    await expect(page.locator('//span[@data-ui-id="page-title-wrapper" and text()= "Bottoms"]')).toHaveText('Bottoms');
    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/men/bottoms-men.html');
  })

  menBottomsSizes.forEach(size => {
    test(`Verify possibility to choose size ${size} from filter on side menu`, async ({ page }) => {
      await page.getByRole('menuitem', { name: ' Men' }).hover();
      await page.locator('#ui-id-18').click();

      await page.getByText('SIZE').click();
      await page.locator(`.swatch-attribute-options .swatch-option.text[option-label='${size}']`).last().click();

      const cardSizeLocator = page.locator('li').filter({ hasText: 'Pierce Gym Short' }).getByLabel(`${size}`);
      await expect(page.locator('.filter-value')).toHaveText(`${size}`);
      await expect(cardSizeLocator).toHaveCSS('outline', 'rgb(255, 85, 1) solid 2px');
    })
  })

  test("Verify men's bottom tab", async ({ page }) => {
    await page.locator ("#ui-id-5").hover();
    await page.getByRole('menuitem', { name: 'Bottoms'}).click();

    await expect (page.getByRole('heading', { name: 'Bottoms' })).toBeVisible();
    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/men/bottoms-men.html');
  })
})
