
class MyOrdersPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getTitle: () => this.page.locator('span.base'),
        getViewOrdersLink: () => this.page.getByText('View Order'),
        getReorderLink: () => this.page.getByText('Reorder')
    }
    
}

export default MyOrdersPage;