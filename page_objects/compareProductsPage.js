class CompareProductsPage {
	constructor(page) {
		 this.page = page;
	}

	locators = {
		getCompareProductsHeader: () => this.page.getByRole('heading', { name: 'Compare Products' }).locator('span'),
		getCompareProductsItem: () => this.page.getByText('Push It Messenger Bag', { exact: true })
		};


}
export default CompareProductsPage;