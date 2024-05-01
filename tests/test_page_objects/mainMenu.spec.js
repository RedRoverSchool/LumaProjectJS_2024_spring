import { test, expect } from '@playwright/test'
import HomePage from '../../page_objects/homePage.js'
import { BASE_URL, NAVBAR_MENU, NAVBAR_URLs, NAVBAR_URLs_END_POINTS, WHATS_NEW_PAGE_HEADER, WOMEN_PAGE_HEADER , GEAR_PAGE_HEADER, TRAINING_PAGE_HEADER, SALE_PAGE_HEADER} from '../../helpers/testData.js'
import { MEN_PAGE_HEADER } from '../../helpers/testMenData.js'
import MainMenuPage from '../../page_objects/mainMenu.js'
import WhatsNewPage from '../../page_objects/whatsNewPage.js'
import WomenPage from '../../page_objects/womenPage.js'
import MenPage from '../../page_objects/menPage.js'
import GearPage from '../../page_objects/gearPage.js'
import TrainingPage from '../../page_objects/trainingPage.js'
import SalePage from '../../page_objects/salePage.js'

test.describe
  ('mainMenu.spec', () => {
    test.beforeEach('Open main page', async ({ page }) => {
      const homePage = new HomePage(page)
      await homePage.open()
    })

    test(`verify 6 menu options on the main page have particular text and clickable`, async ({ page }) => {
        const homePage = new HomePage(page)
        const mainMenuPage = new MainMenuPage(page)
        const mainMenuLinks = await mainMenuPage.locators.getMainMenuLinks()

        for (let i = 0; i < NAVBAR_MENU.length; i++) {
          const link = mainMenuLinks.nth(i)
          await expect(link).toHaveText(NAVBAR_MENU[i]);
          
          await link.click()
          await expect(page).toHaveURL(NAVBAR_URLs_END_POINTS[i])
        }
      })
   });
  
      
  
    
    

  
 
  
  
