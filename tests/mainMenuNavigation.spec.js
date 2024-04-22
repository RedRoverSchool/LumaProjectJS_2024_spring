import { test, expect } from '@playwright/test'

test.describe('menu navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

     test('verify User can see 6 menu options on the main page with particular text', async ({
    page
  }) => {
    let array = ["What's New", 'Women', 'Men', 'Gear', 'Training', 'Sale']

    const menuOptionsLocator = page.locator('.level-top.ui-corner-all')
    const menuOptionsLocatorTexts = await menuOptionsLocator.allInnerTexts()
  
    expect(menuOptionsLocatorTexts).toEqual(array);
  
   })

})
