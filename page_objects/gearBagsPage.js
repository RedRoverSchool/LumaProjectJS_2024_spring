class GearBagsPage {
    constructor (page) {
        this.page = page;
    }

    locators = {
        getGearBagsPageHeader: () => this.page.getByRole('heading', { name: 'Bags' }),  
    }
 }

export default GearBagsPage;

