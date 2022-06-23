const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "gmjcuru",
  e2e: {
    baseUrl: 'https://buger-eats-qa.vercel.app'
  }
})