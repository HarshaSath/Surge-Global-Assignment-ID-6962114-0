# Surge-Global-Assignment-ID-6962114-0

Files

1. productSearch.js

This file contains reusable methods encapsulated in a productSearch class. These methods perform specific actions and validations on the eBay product pages.

Methods:

verifySimilarProducts()-Verifies that up to six related products are displayed.

Ensures visibility of the related product elements.

searchItem(item)-Searches for a specific product by interacting with the search bar and selecting the item from the results.

verifyProductCategory()-Validates that all related products belong to the same category as the searched item.

verifyPriceRange()-Checks that the prices of related products fall within a specific range.

fewerSixProducts()-Validates the behavior when fewer than six related products are available.




2. productSearch.spec.js

This file contains test cases built using Playwright's test API. It utilizes the methods from the productSearch class to perform validations.

Test Cases:

Verify that up to six related products are displayed - Searches for "mens wallet" and verifies that up to six related products are shown.

Verify that related products belong to the same category - Ensures all related products are in the same category as the searched product.

Verify that related products fall within the same price range - Confirms the price range of related products is consistent.

Validate proper behavior when fewer than six related products exist - Handles cases where fewer than six related products are available.

Validate behavior when no related products exist - Tests the system behavior when no related products are found.

3. playwright.config.js

This file configures the Playwright test environment.

Key Configurations:

baseURL: https://www.ebay.com/ - Specifies the base URL for navigation.

fullyParallel: true - Runs tests in parallel.

browserName: chromium - Specifies the browser for testing.

trace: on-first-retry - Enables tracing for failed tests on the first retry.

reporter: html - Generates an HTML report of the test results.

