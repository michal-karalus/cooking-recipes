import { defineConfig } from 'cypress'

export default defineConfig({
  videoUploadOnPasses: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
})
