const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "mjcuru",
  e2e: {
    baseUrl: 'https://buger-eats-qa.vercel.app'
  }
})