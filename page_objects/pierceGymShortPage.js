class PierceGymShortPage {
    constructor(page) {
      this.page = page;
    }

    locators = {

        getWishList: () => this.page.getByRole('link', { name: ' Add to Wish List' }),

    }

    async addWishList () {
        await this.locators.getWishList().click();
        return this.page;
    }

}export default PierceGymShortPage;
