import WishListPage from "./wishListPage";
import TrainingPage from "./trainingPage";

class PushItMessengerBagPage {
  constructor(page) {
    this.page = page;
  }
  locators = {
    getTrainingLink: () => this.page.getByRole('menuitem', { name: 'Training' }),
    getMyWishList: () => this.page.getByRole('link', { name: 'Add to Wish List' }).first(),
    getPushItMessengerBagPageHeader: () => this.page.getByRole('heading', {name: 'Push It Messenger Bag'}),
    getPushItMessengerBagPageReviewsTab: () => this.page.locator('#product-review-container')
  }

  async clickTrainingLink() {
    await this.locators.getTrainingLink().click();

    return new TrainingPage(this.page);
  }

  async clickPushItMessengerItemAddtoWishList() {
    await this.locators.getMyWishList().click();

    return new WishListPage(this.page);
  }
}
export default PushItMessengerBagPage;