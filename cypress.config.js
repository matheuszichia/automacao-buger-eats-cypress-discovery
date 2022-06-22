const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "gjw9sq"
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});