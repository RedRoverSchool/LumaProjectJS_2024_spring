class Logo {
    constructor(page){
        this.page = page;
    }

    locators = {
        getLogo: () => this.page.locator('.logo')
    }

}

export default Logo;