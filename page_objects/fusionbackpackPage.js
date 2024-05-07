class FusionBackpack{
    constructor(page) {
        this.page = page;
    }

    locators = {
        getFusionBackpackHeader: () => this.page.getByRole('heading', {name: 'Fusion Backpack'}),
        getFusionBackpackReviewsTab: () => this.page.locator('#product-review-container')
    }
}

export default FusionBackpack