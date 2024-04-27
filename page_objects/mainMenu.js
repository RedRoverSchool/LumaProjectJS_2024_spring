import HomePage from "./homePage";

class MainMenuPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getMainMenuLinks: () => this.page.locator('.level-top.ui-corner-all'),
        
        
    }

    async pickMainMenuLinksText() {
        await this.locators.getMainMenuLinks().allInnerTexts()

        return this.page;
    }
}
export default MainMenuPage