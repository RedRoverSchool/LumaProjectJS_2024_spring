import { test, expect } from '@playwright/test'

test.describe('menu navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should be main menu and options', async ({ page }) => {
    const navigation = page.locator('#ui-id-2')
    const menuOptions = [
      "What's New",
      'Women',
      'Men',
      'Gear',
      'Training',
      'Sale'
    ]
    await expect(navigation).toBeVisible()
    await expect(navigation).toHaveCSS(
      'background',
      'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'
    )
    await expect(navigation).toBeVisible(menuOptions)
  })

  test('verify Main menu is displayed on the top of the home page in the grey field', async ({
    page
  }) => {
    const menuBar = await page.locator('.navigation')

    await expect(menuBar).toHaveCSS('background-color', 'rgb(240, 240, 240)')
  })

  test('verify User can see 6 menu options on the main page with particular text', async ({
    page
  }) => {
    let array = ["What's New", 'Women', 'Men', 'Gear', 'Training', 'Sale']

    const menuOptions = await page.locator('.level-top.ui-corner-all')

    for (let i = 0; i < menuOptions.length; i++) {
      await expect(elements[i]).toBeVisible()

      const expectedLink = array[i]
      const actualLink = await link.innerText()

      await expect(menuOptions).toHaveCount(6)
      await expect(actualLink).toEqual(expectedLink)
    }
  })
})
