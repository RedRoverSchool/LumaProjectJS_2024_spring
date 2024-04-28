class TrainingPage {
	constructor(page) {
		 this.page = page;
	}

	locators = {
		getTrainingHeader: () => this.page.getByLabel('Training').getByText('Training'),
		getBreadcrumbMenuAll: () => this.page.getByText('Home Training'),
		getBreadcrumbMenuTraining: () => this.page.locator('strong').filter({ hasText: /^Training$/ }),
		getBreadcrumbMenuHome: () => this.page.getByRole('link', { name: 'Home' })
	};
	
	async clickBreadcrumbMenuHome() {
		await this.locators.getBreadcrumbMenuHome().click();
	
		return this.page;
	}

}

export default TrainingPage;