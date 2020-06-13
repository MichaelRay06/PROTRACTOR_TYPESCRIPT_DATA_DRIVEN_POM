import {Config, browser} from 'protractor';
var reporter = require('chercher-tech-jasmine-reporter');


//export let config: Config = {
  exports.config = {
    framework : "jasmine2",

    jasmineNodeOpts:{
        showColors : true,
        silent : true,
        defaultTimeoutInterval: 50000,
        allScriptsTimeout: 500000
       // DefaultTimeout:10000
        
    },
  capabilities: {
    browserName: 'chrome'
  },
  specs: ['./TestStep/*.js'],
  //  './TestStep/SubmitForm.js', './TestStep/MenuActions.js' ,'demo.js', './TestStep/InteractionAction.js', Selectable, ./TestStep/homeDataAction.js, WidgetsPageTest.js
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  
  onPrepare: function(){

  let globals = require('protractor');
  let browser = globals.browser;
  browser.ignoreSynchronization = false;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(10000);
    browser.waitForAngularEnabled(true);

    var ChercherTechJasmineReporter = reporter.ChercherTechJasmineReporter;
      jasmine.getEnv().addReporter(new ChercherTechJasmineReporter({
          screenshotOnFail :true,
          showSkipped:false,
          browser:browser,
          showLineChart:true
      }));
    },
    onComplete:function(exitcode: any){
      reporter.write_consolidated()
    },

    afterLaunch:function(exitcode : any){
      return new Promise(function(resolve){
        reporter.processResults()
        return 0
      })
    }
};
  


