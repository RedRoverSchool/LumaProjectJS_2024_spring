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
  async clickMainMenuLinksAndCheckRedirect (NAVBAR_MENU, NAVBAR_URLs) {
    const links = await this.locators.getMainMenuLinks() // Получаем ссылки из локатора
   

      for (let i = 0; i < links.length; i++) {
        const link = links[i]
      const text = await link.innerText()
      expect(text).toEqual(NAVBAR_MENU[i]) // Проверяем текст ссылки
      await link.click() // Выполняем клик по ссылке
      await expect(page).toHaveURL(NAVBAR_URLs[i]) // Проверяем URL страницы после перехода
      await page.goBack() // Возвращаемся на предыдущую страницу
      // Добавьте здесь дополнительные проверки или действия, если необходимо
    }
  }
}
export default MainMenuPage
