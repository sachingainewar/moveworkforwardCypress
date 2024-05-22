const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;


module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  numTestsKeptInMemory: 0,
  viewportWidth: 1360,
  viewportHeight: 768,
  env: {
    username: 'student',
    password: 'Password123',
    },
  "retries": 1, 
  "video": false,  
  e2e: {
    /**  Integrate @bahmutov/cypress-esbuild-preprocessor plugin.*/
   async setupNodeEvents(on, config) {
     const bundler = createBundler({
       plugins: [createEsbuildPlugin(config)],
       
     });
           // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
           on('file:preprocessor', bundler);
           await addCucumberPreprocessorPlugin(on, config);
           
     return config;

    },
    specPattern: 
    'cypress/e2e/**/*.feature'
  },
});
