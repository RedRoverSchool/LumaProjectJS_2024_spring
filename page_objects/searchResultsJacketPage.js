class SearchResultsJacketPage {
    constructor(page){
        this.page = page;
    }

    locators = {
        getSearchResultsHeader: () => this.page.locator('.page-title-wrapper')
    }
}

export default SearchResultsJacketPage;