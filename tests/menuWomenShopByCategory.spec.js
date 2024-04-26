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
  
    test('Links with categories names are located on the page and clickable and blue', async ({ page }) => {
    
      const linkTops = await page.getByRole('link', { name: 'Tops' })
      const linkBottoms = await page.getByRole('link', { name: 'Bottoms' })

      await expect(linkTops).toHaveCSS('color', 'rgb(0, 107, 180)')
      await expect(linkBottoms).toHaveCSS('color', 'rgb(0, 107, 180)')

      await linkTops.click()
      await expect(page).toHaveURL('/women/tops-women.html')
      await expect(page.getByRole('heading', { name: 'Tops' })).toBeVisible()
      
      await page.locator('.logo>img').click()
      await page.getByRole('link', { name: 'Women'}).click()

      await linkBottoms.click()
      await expect(page).toHaveURL('women/bottoms-women.html')
      await expect(page.getByRole('heading', { name: 'Bottoms' })).toBeVisible();
      })
})

