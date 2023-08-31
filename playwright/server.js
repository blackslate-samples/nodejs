const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.example.com');
  // Perform actions and assertions here
  await browser.close();
})();

// Page Interactions 

await page.fill('input[name=username]', 'myUsername');
await page.fill('input[name=password]', 'myPassword');
await page.click('button[type=submit]');

// Taking Screenshot and recording videos

await page.screenshot({ path: 'screenshot.png' });

await page.video.startRecording({ path: 'video.mp4' });

// Perform actions
await page.video.stopRecording();

// Comparing Screenshots

const screenshot1 = await page.screenshot();
const screenshot2 = await page.goto('https://www.example.com/updated-page').then(() => page.screenshot());
const isSame = screenshot1.equals(screenshot2);
console.log(`Screenshots are the same: ${isSame}`);

// Handling Navigation nd urls

await page.goto('https://www.example.com');
await page.goBack();
await page.goForward();
// Intercept network requests
page.route('**/*', route => {
  route.continue();
});

// Asserting and Testing 

const { test, expect } = require('@playwright/test');

test('Check title of the page', async ({ page }) => {
  await page.goto('https://www.example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});

// Using Test Fixtures for Shared Context

const { test, expect } = require('@playwright/test');

test.describe('Login', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
  });

  test('Successful login', async () => {
    await page.goto('https://www.example.com/login');
    // Perform login and assertions
  });

  test('Failed login', async () => {
    await page.goto('https://www.example.com/login');
    // Perform failed login and assertions
  });
});

// Example 1 Google Search 

const { chromium, firefox } = require('playwright');

(async () => {
  const query = 'Playwright browser automation';

  // Perform Google search in Chrome
  const chromeBrowser = await chromium.launch();
  const chromePage = await chromeBrowser.newPage();
  await chromePage.goto('https://www.google.com');
  await chromePage.getByLabel('Search').fill(query);
  await chromePage.press('Enter');
  await chromePage.waitForSelector('h3');
  const chromeTitle = await chromePage.title();
  console.log(`Chrome search title: ${chromeTitle}`);
  await chromePage.screenshot({ path: 'chrome_google_search.png' });
  await chromeBrowser.close();

  // Perform Google search in Firefox
  const firefoxBrowser = await firefox.launch();
  const firefoxPage = await firefoxBrowser.newPage();
  await firefoxPage.goto('https://www.google.com');
  await firefoxPage.getByLabel('Search').fill(query);
  await firefoxPage.press('Enter');
  await firefoxPage.waitForSelector('h3');
  const firefoxTitle = await firefoxPage.title();
  console.log(`Firefox search title: ${firefoxTitle}`);
  await firefoxPage.screenshot({ path: 'firefox_google_search.png' });
  await firefoxBrowser.close();
})();



// Example 2 Github Login 


const { chromium, firefox } = require('playwright');

(async () => {
  const account = {
    username: 'your_username',
    password: 'your_password',
  };

  // Log into GitHub in Chrome
  const chromeBrowser = await chromium.launch();
  const chromePage = await chromeBrowser.newPage();
  await chromePage.goto('https://github.com/login');
  await chromePage.getByLabel('Username or email address').fill(account.username);
  await chromePage.getByLabel('Password').fill(account.password);
  await chromePage.click('input[type=submit]');
  await chromePage.waitForNavigation();
  await chromePage.screenshot({ path: 'chrome_github_login.png' });
  await chromeBrowser.close();

  // Log into GitHub in Firefox
  const firefoxBrowser = await firefox.launch();
  const firefoxPage = await firefoxBrowser.newPage();
  await firefoxPage.goto('https://github.com/login');
  await firefoxPage.getByLabel('Username or email address').fill(account.username);
  await firefoxPage.getByLabel('Password').fill(account.password);
  await firefoxPage.click('input[type=submit]');
  await firefoxPage.waitForNavigation();
  await firefoxPage.screenshot({ path: 'firefox_github_login.png' });
  await firefoxBrowser.close();
})();

