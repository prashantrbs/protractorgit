//var HtmlReporter = require('C:/Users/prash/AppData/Roaming/npm/node_modules/protractor/node_modules/protractor-beautiful-reporter');
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities:  {
    'browserName': 'firefox'
    
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['..//ObjectsModel//formobjects.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
 /*  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'screenshot/screenshots'
    }).getJasmine2Reporter());
 } */
  


};
