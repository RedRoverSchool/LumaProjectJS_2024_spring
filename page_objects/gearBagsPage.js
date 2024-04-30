class GearBagsPage {
    constructor(page) {
        this.page = page;
    };

    locators = {
        getMaterialOption: () => this.page.getByRole("tab", { name: "Material" }),
        getMateialItemList: () => this.page.locator('.filter-options>:nth-child(4) li')
    }
    
    async clickMaterialOption() {
        await this.locators.getMaterialOption().click();

        return this;
    }

    async getMaterialItemNameText(idx) {
        const text = (await this.locators.getMateialItemList().nth(idx).innerText()).split(' ')[0];

        return text;    
    }        

}
export default GearBagsPage;