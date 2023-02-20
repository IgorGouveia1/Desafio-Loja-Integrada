const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qastoredesafio.lojaintegrada.com.br',
    watchForFileChanges: false,
    defaultCommandTimeout: 15000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
