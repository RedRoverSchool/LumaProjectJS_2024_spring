class FusionBackpack{
    constructor(page) {
        this.page = page;
    }

    locators = {
        getFusionBackpackHeader: () => this.page.getByRole('heading', {name: 'Fusion Backpack'})
    }
}

export default FusionBackpack