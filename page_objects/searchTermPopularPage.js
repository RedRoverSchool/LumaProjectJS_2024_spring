class SearchTermPopularPage {
    constructor(page){
        this.page = page;
    }

    locators = {
      getSearchTermPopularHeader: () => this.page.getByRole('heading', {name: 'Popular Search Terms'})
     }
}

export default SearchTermPopularPage;
