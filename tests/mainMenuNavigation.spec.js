import { test, expect } from '@playwright/test'

test.describe('menu navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  
  test('verify Main menu is displayed on the top of the home page in the grey field', async ({
    page
  }) => {
    const menuBar = await page.locator('.navigation')

    await expect(menuBar).toHaveCSS('background-color', 'rgb(240, 240, 240)')
  })

  
  
})
