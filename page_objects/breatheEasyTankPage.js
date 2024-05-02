class BreatheEasyTankPage{
    constructor(page) {
        this.page = page;
    }

    locators = {
        getBreatheEasyTankHeader: () => this.page.getByRole('heading', {name: 'Breathe-Easy Tank'}),
        getBreatheEasyTankReviewsTab: () => this.page.locator('#product-review-container')
    }
}

export default BreatheEasyTankPage