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
		getTrainingVideoDownloadLink: () => this.page.getByRole('link', { name: 'Video Download' })
	};
	
	async clickBreadcrumbMenuHome() {
		await this.locators.getBreadcrumbMenuHome().click();
	
		return this.page;
	}

	async clickVideoDownloadLink() {
		await this.locators.getTrainingVideoDownloadLink().click();
	
		return this.page;
	}

}

export default TrainingPage;