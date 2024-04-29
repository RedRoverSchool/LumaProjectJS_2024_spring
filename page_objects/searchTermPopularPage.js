import Header from "./header";

class SearchTermPopularPage {
    constructor(page){
        this.page = page;
    }

    locators = {
      getSearchTermPopularHeader: () => this.page.getByRole('heading', {name: 'Popular Search Terms'})
     }

    getHeader() {
        return new Header(this.page);
    }
}

export default SearchTermPopularPage;
