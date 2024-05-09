

class FusionBackpackPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getFusionBackpackHeader: () => this.page.getByRole('heading', {name: 'Fusion Backpack'}),
        getFusionBackpackReviewsTab: () => this.page.locator('#product-review-container'),
        getFusionBackpackImage: () => this.page.locator('.fotorama__stage img[aria-hidden="false"]').first(),
        getFusionBackpackFullScreen: () => this.page.locator('.fotorama__img--full[aria-hidden="false"]').first()
    }

    async clickProductMainImage (){
        await this.locators.getFusionBackpackImage().click();
        return this;
    }
}

export default FusionBackpackPage