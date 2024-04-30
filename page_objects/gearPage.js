import HomePage from "./homePage";

class GearPage {
    constructor (page) {
        this.page = page;
    }

    locators = {
        getGearPageHeader: () => this.page.getByRole('heading', { name: 'Gear' }),
        
    }
 }

export default GearPage;