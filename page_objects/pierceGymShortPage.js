class PierceGymShortPage {
    constructor(page) {
      this.page = page;
    }

    locators = {

        getWishList: () => this.page.getByRole('link', { name: ' Add to Wish List' }),

    }

    async open() {
        await this.page.goto('https://magento.softwaretestingboard.com/pierce-gym-short.html');
    }

    async addWishList () {
        await this.locators.getWishList().click();
        return this.page;
    }

}export default PierceGymShortPage;
