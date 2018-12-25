const cucumber = require('cucumber');
const mink = require('cucumber-mink');

const driver = new mink.Mink({
  baseUrl: 'http://127.0.0.1:4000/',
  viewport: {
    width: 1366,
    height: 768,
  },
  // Set no-sandbox to work around this problem:
  // https://github.com/GoogleChrome/puppeteer/issues/290
  noSandbox: true,
});

driver.hook(cucumber);
