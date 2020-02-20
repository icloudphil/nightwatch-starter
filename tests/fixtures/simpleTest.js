module.exports = {
  'Github Repositories Navigation' : function (browser) {
    browser
      .url('https://google.com')
      .waitForElementVisible('#body', 3000)
      .end();
  }
};
