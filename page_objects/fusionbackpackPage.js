

class FusionBackpackPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getFusionBackpackHeader: () => this.page.getByRole('heading', {name: 'Fusion Backpack'}),
        getFusionBackpackReviewsTab: () => this.page.locator('#product-review-container'),
        getFusionBackpackImage: () => this.page.locator('.fotorama__stage img[aria-hidden="false"]').first(),
        getFusionBackpackFullScreen: () => this.page.locator('.fotorama__img--full[aria-hidden="false"]').first(),
        getFusionBackpackActiveImage: () => this.page.locator('.fotorama__stage .fotorama__active .fotorama__img'),
        getSlideNextButton: () => this.page.locator('.fotorama__arr--next'),
        getZoomInButton: () => this.page.locator('.fotorama__zoom-in'),
        getZoomOutButton: () => this.page.locator('.fotorama__zoom-out'),
        getCloseButton: () => this.page.getByRole('button', {name: 'Exit fullscreen'})
    }

    async clickProductMainImage (){
        await this.locators.getFusionBackpackImage().click();
        return this;
    }

    async clickSlideNextButton (){
        await this.locators.getSlideNextButton().click();
        return this;
    }

    async clickActiveImage () {
        await this.locators.getFusionBackpackActiveImage().click();
        return this;
    }

    async clickZoomInButton () {
        await this.locators.getZoomInButton().click();
        return this;
    }
    
    async clickZoomOutButton () {
        await this.locators.getZoomOutButton().click();
        return this;
    }

    async clickCloseButton () {
        await this.locators.getCloseButton().click();
        return this;
    }
}

export default FusionBackpackPage