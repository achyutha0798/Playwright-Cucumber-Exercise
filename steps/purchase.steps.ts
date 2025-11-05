
import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PurchasePage } from 'purchase.pages.ts';
import { page } from '../support/hooks'; // shared Playwright Page instance

const purchasePage = new PurchasePage(page);

Given('I open the {string} page', async (url: string) => {
  await purchasePage.open(url);
});

Then('I will login as {string}', async (username: string) => {
  // All Sauce Demo users share the same password
  await purchasePage.login(username, 'secret_sauce');
});

Then('I will add the backpack to the cart', async () => {
  await purchasePage.addBackpackToCart();
});

Then('I will select the cart icon', async () => {
  await purchasePage.goToCart();
});

Then('I will select Checkout', async () => {
  await purchasePage.checkout();
});

Then('I will fill in the First Name, Last Name, and Zip Code', async () => {
  await purchasePage.fillUserInfo('John', 'Doe', '12345');
});

Then('I will select Continue', async () => {
  await purchasePage.continueCheckout();
});

Then('I will select Finish', async () => {
  await purchasePage.finishCheckout();
});

Then('I will validate the text {string}', async (expectedText: string) => {
  const actualText = await purchasePage.getConfirmationText();
  expect(actualText).toBe(expectedText);
});
