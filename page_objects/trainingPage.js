import CompareProductsPage from "./compareProductsPage";
import VideoDownloadPage from "./videoDownloadPage";

class TrainingPage {
	constructor(page) {
		 this.page = page;
	}

	locators = {
		getTrainingHeader: () => this.page.getByLabel('Training').getByText('Training'),
		getBreadcrumbMenuAll: () => this.page.getByText('Home Training'),
		getBreadcrumbMenuTraining: () => this.page.locator('strong').filter({ hasText: /^Training$/ }),
		getBreadcrumbMenuHome: () => this.page.getByRole('link', { name: 'Home' }),
		getTrainingPromoBlock: () => this.page.locator('div').filter({ hasText: 'Motivate yourself. Reach' }).nth(2),
		getTrainingCompareProductsSection: () => this.page.getByRole('heading', { name: 'Compare Products' }),
		getTrainingShopByCategorySection: () => this.page.getByText('Shop By Shopping Options'),
		getTrainingVideoDownloadLink: () => this.page.getByRole('link', { name: 'Video Download' }),
		getTrainingCompareButton: () => this.page.getByRole('link', { name: 'Compare', exact: true }),
		getGoToWishListLink: () => this.page.getByRole('link', { name: 'Go to Wish List' })
	};
	
	async clickBreadcrumbMenuHome() {
		await this.locators.getBreadcrumbMenuHome().click();
	
		return this.page;
	}

	async clickVideoDownloadLink() {
		await this.locators.getTrainingVideoDownloadLink().click();
	
		return  new VideoDownloadPage(this.page);
	}

	async clickTrainingCompareButton() {
		await this.locators.getTrainingCompareButton().click();
	
		return new CompareProductsPage(this.page);
	}

	async clickGoToWishListLink() {
		await this.locators.getGoToWishListLink().click();
	
		return this.page;
	}

}

export default TrainingPage;