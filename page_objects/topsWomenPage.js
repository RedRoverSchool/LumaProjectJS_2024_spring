class TopsWomenPage {
    constructor (page) {
        this.page = page;
    }

    locators = {
        getWomenTopsPageHeader: () => this.page.getByRole('heading', { name: 'Tops' })
        
    }
 }

export default TopsWomenPage;