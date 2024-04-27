
class SearchTermPopularPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
		getSearchTermPopular: () => this.page.getByRole('heading', { name: 'Popular Search Terms' })
	}
   
}
export default SearchTermPopularPage;
