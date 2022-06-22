const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "gjw9sq",
  e2e: {
    baseUrl: 'https://buger-eats-qa.vercel.app'
  }
})