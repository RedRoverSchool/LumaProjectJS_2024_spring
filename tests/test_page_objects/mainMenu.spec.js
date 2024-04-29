import { test, expect } from '@playwright/test'
import HomePage from '../../page_objects/homePage.js'
import { BASE_URL, NAVBAR_MENU, NAVBAR_URLs } from '../../helpers/testData.js'
import MainMenuPage from '../../page_objects/mainMenu.js'

test.describe('mainMenuNavigation.spec', () => {
  test.beforeEach('Open main page', async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.open()
  })

  test('verify 6 menu options on the main page have particular text and clickable', async ({page
  }) => {
    const mainMenuPage = new MainMenuPage(page)
    

      expect(await mainMenuPage.pickMainMenuLinksText()).toEqual(NAVBAR_MENU)
      expect(await mainMenuPage.clickMainMenuLinksAndCheckRedirect())
  })
})
