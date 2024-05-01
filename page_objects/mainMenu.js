import { NAVBAR_MENU } from '../helpers/testData'
import GearPage from './gearPage'
import HomePage from './homePage'
import MenPage from './menPage'
import SalePage from './salePage'
import TrainingPage from './trainingPage'
import WhatsNewPage from './whatsNewPage'
import WomenPage from './womenPage'

class MainMenuPage {
  constructor (page) {
    this.page = page
  }

  locators = {
    getMainMenuLinks: () => this.page.locator('.level-top.ui-corner-all')
  }

  async clickMainMenuLinks (link) {
    await this.locators.getMainMenuLinks(link).click()

    switch (link) {
      case "What's New":
        return new WhatsNewPage(this.page)
      case 'Women':
        return new WomenPage(this.page)
      case 'Men':
        return new MenPage(this.page)
      case 'Gear':
        return new GearPage(this.page)
      case 'Training':
        return new TrainingPage(this.page)
      case 'Sale':
        return new SalePage(this.page)
    }
  }
}

export default MainMenuPage
