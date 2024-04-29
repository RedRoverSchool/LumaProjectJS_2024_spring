import { NAVBAR_MENU } from '../helpers/testData'
import HomePage from './homePage'

class MainMenuPage {
  constructor (page) {
    this.page = page
  }

  locators = {
    getMainMenuLinks: () => this.page.locator('.level-top.ui-corner-all')
  }
  async pickMainMenuLinksText () {
    await this.locators.getMainMenuLinks()
    const mainMenuLinksText = await this.locators
      .getMainMenuLinks()
      .allInnerTexts()

    return mainMenuLinksText
  }
}
export default MainMenuPage
