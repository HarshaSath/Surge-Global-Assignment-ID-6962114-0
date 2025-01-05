//methods

const { expect } = require("@playwright/test");
const { default: test } = require("node:test");



class productSearch {

    constructor(page) {
        this.page = page; // Initialize the page object
    }

    async verifySimilarProducts() {


        

        for (var i = 1; i <= 6; i++) {
            await this.page.locator('//*[@id="placement101875"]/div/div/div/div/div/div[1]/div[2]/div[' + i + ']').isVisible();

        }


    }

    async searchItem(Item){

        await this.page.click('//input[@id="gh-ac"]');
        await this.page.getByPlaceholder('Search for anything').fill(Item);
        await this.page.getByLabel(Item, { exact: true }).click();

        await this.page.locator('li').filter({ hasText:Item }).click();
    }

    async verifyProductCategory(){

        for (var i = 1; i <= 6; i++) {
            let productLocator = this.page.locator(`//*[@id="placement101875"]/div/div/div/div/div/div[1]/div[2]/div[${i}]/div/a/div/div[2]/div`);

           console.log(productLocator);
    
            // Assert the text content of the element
            await expect(productLocator).toContainText('wallet', { timeout: 5000 });
        }

    }


    async verifyPriceRange(){

        for (var i = 1; i <= 6; i++) {

            let productLocator = this.page.locator(`//*[@id="placement101875"]/div/div/div/div/div/div[1]/div[2]/div[${i}]/div/a/div/div[2]/div/div/div[2]/span`);

            if(productLocator>=6 && productLocator<=8){

                test.pass();
            }
            else {
                test.fail(`Price for product ${i} is outside the range: ${price}`);
            }
    


        }

    }

    async fewerSixProducts() {

        let count=0;
        for (var i = 1; i <= 6; i++) {

            
            await this.page.locator('//*[@id="placement101875"]/div/div/div/div/div/div[1]/div[2]/div[' + i + ']').isVisible();

         count=count+i;
        console.log(count);
       
        } 

    }

}

module.exports = productSearch;





