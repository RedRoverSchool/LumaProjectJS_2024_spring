class MenBottomsPage {
    constructor(page) {
        this.page = page;
    }
    locators = {
        getBottomsHeading: () => this.page.getByRole('heading', { name: 'Bottoms' }),
    }
}
export default MenBottomsPage;
