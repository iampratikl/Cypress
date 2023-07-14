const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
//to activate the sql server
const mysql = require("mysql");
const pg = require("pg")


async function setupNodeEvents(on, config) {
    //implement node event listners here
    on("file:preprocessor",browserify.default(config));

    await preprocessor.addCucumberPreprocessorPlugin(on, config);

    return config;
}
module.exports = defineConfig({
  e2e: {
    //experimentalSessionAndOrigin: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    
    setupNodeEvents,
    specPattern: [
      'cypress/e2e/4-automation/**/*.feature'],
    
      
    }
})
