
class WishListPage {
    constructor(page) {
      this.page = page;
    }
    locators = {

        getMyWishList: () => this.page.getByText('My Wish List 1 item Last'),
        getTitleMyWishList: () => this.page.locator('.page-title-wrapper'),
        getItemQuantity: () => this.page.getByText('1 Item').nth(2)
    }

}
export default WishListPage;