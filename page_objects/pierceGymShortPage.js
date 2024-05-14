import WishListPage from "./wishListPage";

class PierceGymShortPage {
    constructor(page) {
      this.page = page;
    }

    locators = {

        getWishList: () => this.page.getByRole('link', { name: ' Add to Wish List' }),
        getProductShort: () => this.page.getByRole('heading', { name: 'Pierce Gym Short' }).locator('span')

    }

    async addWishList () {
        await this.locators.getWishList().click();
        return new WishListPage(this.page);
    }

}export default PierceGymShortPage;
