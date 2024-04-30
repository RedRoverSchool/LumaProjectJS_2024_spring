class MenHotSellersPage {
    constructor (page) {
        this.page = page;
    }

    locators = {
        getMenName: (productsName) => this.page.getByRole('heading', {name: productsName}),
    }
}
export default MenHotSellersPage;