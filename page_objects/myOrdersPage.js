
class MyOrdersPage {
    constructor (page) {
        this.page = page;
    }

    locators = {
        getTitle: () => this.page.locator('span.base'),
        
    }
}

export default MyOrdersPage;