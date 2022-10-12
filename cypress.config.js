const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'p5t3yv',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    Homepage: "http://the-internet.herokuapp.com",
    foo: 'bar',
    baz: 'quux'
  },
  "defaultCommandTimeout": 10000,

  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "reportFilename": "report",
    "overwrite": false,
    "html": true,
    "json": true,
    "charts": true
  },
  retries: {
    runMode: 2,
    openMode:1,
  },
  
    "testFiles": "**/*.feature"
  
});
