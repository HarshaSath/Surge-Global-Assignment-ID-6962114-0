// @ts-check
const { test, expect } = require('@playwright/test');
let page;

const TestBase = require('../testBase/productSearch');

let testBase;


test.beforeAll(async ({ browser }) => {


  page = await browser.newPage();
  await page.goto('/');


  testBase = new TestBase(page);

});

test('Verify that up to six related products are displayed', async ({ }) => {

  await testBase.searchItem('mens wallet');
  await testBase.verifySimilarProducts();


});

test('Verify that related products belong to the same category', async ({ }) => {

  await testBase.verifyProductCategory();


});

test('Verify that related products fall within the same price range', async ({ }) => {

  await testBase.verifyPriceRange();


});

test('Validate proper behavior when fewer than six related products exist', async ({ }) => {

  await testBase.searchItem('Earring');
  await testBase.fewerSixProducts();
    
    
    });

    test('Validate behavior when no related products exist', async ({ }) => {

      await testBase.searchItem('Cup');
      
        
        
        });

