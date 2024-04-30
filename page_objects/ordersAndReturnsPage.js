class OrdersAndReturnsPage {
    constructor (page) {
        this.page = page
    }
  
    locators = {
        getOrdersAndReturnsHeader: () => this.page.locator("h1"),
    }
  }
  export default OrdersAndReturnsPage;