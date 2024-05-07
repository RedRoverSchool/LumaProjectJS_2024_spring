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
  ('mainMenuNavigation.spec', () => {
    test.beforeEach('Open main page', async ({ page }) => {
      const homePage = new HomePage(page)
      await homePage.open()
    })

    test.skip('verify 6 menu options on the main page have particular text and clickable', async ({ page }) => {
      const homePage = new HomePage(page)
      const mainMenuPage = new MainMenuPage(page)
      const whatsNewPage = new WhatsNewPage(page)
      const womenPage = new WomenPage(page)
      const menPage = new MenPage(page)
      const gearPage = new GearPage(page)
      const trainingPage = new TrainingPage(page)
      const salePage = new SalePage(page)

      expect(await mainMenuPage.pickMainMenuLinksText()).toEqual(NAVBAR_MENU)

      await homePage.clickWhatsNewLink()
      expect(page).toHaveURL(BASE_URL + NAVBAR_URLs_END_POINTS[0])
      expect(await whatsNewPage.locators.getHeaderText()).toHaveText(WHATS_NEW_PAGE_HEADER)

      await homePage.clickWomenLink();
      await expect(page).toHaveURL(BASE_URL + NAVBAR_URLs_END_POINTS[1])
      await expect(womenPage.locators.getWomenPageHeader()).toHaveText(WOMEN_PAGE_HEADER)

      await homePage.clickMenLink()
      await expect(page).toHaveURL(BASE_URL + NAVBAR_URLs_END_POINTS[2])
      await expect(menPage.locators.getMenPageHeader()).toHaveText(MEN_PAGE_HEADER)

      await homePage.clickGearMenuItem()
      await expect(page).toHaveURL(BASE_URL + NAVBAR_URLs_END_POINTS[3])
      await expect(gearPage.locators.getGearPageHeader()).toHaveText(GEAR_PAGE_HEADER)
    
      await homePage.clickTrainingLink()
      await expect(page).toHaveURL(BASE_URL + NAVBAR_URLs_END_POINTS[4])
      await expect(trainingPage.locators.getTrainingHeader()).toHaveText(TRAINING_PAGE_HEADER)

      await homePage.clickSaleLink()
      await expect(page).toHaveURL(BASE_URL + NAVBAR_URLs_END_POINTS[5])
      await expect(salePage.locators.getSalePageHeader()).toHaveText(SALE_PAGE_HEADER)

    })
  })
