const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity:false,
  e2e: {

    baseUrl:'https://www.saucedemo.com/',
    watechForFileChanges:false,
    defautCommendTimeout:3000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
