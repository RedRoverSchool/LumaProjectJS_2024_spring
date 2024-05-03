class HeroHoodiePage{
    constructor(page) {
        this.page = page;
    }

    locators = {
        getHeroHoodieHeader: () => this.page.getByRole('heading', {name: 'Hero Hoodie'}),
    }
}

export default HeroHoodiePage