class Footer {
    constructor(page){
        this.page = page;
    }

    locators = {
        getFooter: () => this.page.locator('.page-wrapper footer')
    }
}

export default Footer;
