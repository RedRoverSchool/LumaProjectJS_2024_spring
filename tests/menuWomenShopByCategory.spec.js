import { test, expect } from '@playwright/test'

test.describe('menu women shop by category', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/women.html')
  })

    test('verify filter on page Women has title “Shop By Category', async ({ page }) => {
      
      const titleShopBy = page.getByText('Shop By')
      const categoryTitle = page.getByText('Category')
      
      await expect(titleShopBy).toBeVisible()
        await expect(titleShopBy).toHaveCSS('color', 'rgb(51, 51, 51)')
      await expect(categoryTitle).toBeVisible()
        await expect(categoryTitle).toHaveCSS('color', 'rgb(51, 51, 51)')
  })
})
