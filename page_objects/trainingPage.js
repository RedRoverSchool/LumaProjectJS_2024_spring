class TrainingPage {
	constructor(page) {
		 this.page = page;
	}

	locators = {
		getTrainingHeader: () => this.page.getByLabel('Training').getByText('Training'),
	}

}

export default TrainingPage;