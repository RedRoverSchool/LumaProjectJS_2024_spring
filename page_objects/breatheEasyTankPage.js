class BreatheEasyTankPage{
    constructor(page) {
        this.page = page;
    }

    locators = {
        getBreatheEasyTankHeader: () => this.page.getByRole('heading', {name: 'Breathe-Easy Tank'})
    }
}

export default BreatheEasyTankPage