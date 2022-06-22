const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "gjw9sq"
  e2e: {
    baseUrl: 'http://localhost:1234'
  }
})