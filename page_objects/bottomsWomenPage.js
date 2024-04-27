class BottomsWomenPage {
    constructor(page) {
        this.page = page;
    }
    locators = {
        getWomenBottomsPageHeader: () => this.page.getByRole('heading', { name: 'Bottoms' })
    }
}
export default BottomsWomenPage;