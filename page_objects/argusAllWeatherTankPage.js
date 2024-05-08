class ArgusAllWeatherTankPage{
    constructor(page) {
        this.page = page;
    }

    locators = {
        getArgusAllWeatherTankPageHeader: () => this.page.getByRole('heading', { name: 'Argus All-Weather Tank' }),
    }
}

export default ArgusAllWeatherTankPage