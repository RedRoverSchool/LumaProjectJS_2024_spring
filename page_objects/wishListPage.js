import TrainingPage from "./trainingPage";

class WishListPage {
    constructor(page) {
      this.page = page;
    }
    locators = {

        getTitleMyWishList: () => this.page.locator('.page-title-wrapper'),
        getItemQuantity: () => this.page.getByText('1 Item').nth(2),
		  getTrainingLink: () => this.page.getByRole('menuitem', { name: 'Training' }),
		  getMyWishListHeader: () => this.page.locator('span').filter({ hasText: 'My Wish List' }),
		  getMyWishListItemName: () => this.page.getByText('Push It Messenger Bag Rating'),
		  getMyWishListItemNameLocator: () => this.page.locator('.products-grid .product-item-link'),
		  getgotoWishListlink: () => this.page.getByRole('link', { name: 'Go to Wish List' }),
		  getButtonClose: () => this.page.locator('#wishlist-sidebar').getByRole('link', { name: ' Remove This Item' }),
		  getTitleNoItems: () => this.page.locator('#wishlist-view-form').getByText('You have no items in your'),
		  getAddToCard: () => this.page.locator('#wishlist-sidebar').getByRole('button', { name: 'Add to Cart' })
    }

	 async clickTrainingLink() {
		await this.locators.getTrainingLink().click();

		return new TrainingPage(this.page);
  }

	async hoverMyWishListItemName() {
		await this.locators.getMyWishListItemName().hover();

		return this;
	}

	async clickButtonDelete() {
		await this.locators.getButtonClose().click();
	}
    async clickAddCard() {
		await this.locators.getAddToCard().click();
	}
}
export default WishListPage;