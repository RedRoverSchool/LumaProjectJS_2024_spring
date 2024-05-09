class GearFitnessPage  {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getGearFitnessEquipmentBreadcrumbsLocator: () => this.page.locator('ul.items'),
    }
}

export default GearFitnessPage;