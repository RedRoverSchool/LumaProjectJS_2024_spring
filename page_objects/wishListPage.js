
class WishListPage {
    constructor(page) {
      this.page = page;
    }
    locators = {

        getTitleMyWishList: () => this.page.locator('.page-title-wrapper'),
        getItemQuantity: () => this.page.getByText('1 Item').nth(2)
    }

}
export default WishListPage;