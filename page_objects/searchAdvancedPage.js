
class SearchAdvancedPage {
    constructor(page){
        this.page = page;
    }

    locators = {
        getPageHeader: () => this.page.getByRole('heading'),
    }
}

export default SearchAdvancedPage;