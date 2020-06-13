"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reporter = require('chercher-tech-jasmine-reporter');
//export let config: Config = {
exports.config = {
    framework: "jasmine2",
    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 50000,
        allScriptsTimeout: 500000
        // DefaultTimeout:10000
    },
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./TestStep/InteractionAction.js'],
    //  './TestStep/SubmitForm.js', './TestStep/MenuActions.js' ,'demo.js', './TestStep/InteractionAction.js', Selectable
    seleniumAddress: 'http://localhost:4444/wd/hub',
    onPrepare: function () {
        let globals = require('protractor');
        let browser = globals.browser;
        browser.ignoreSynchronization = false;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(10000);
        browser.waitForAngularEnabled(true);
        var ChercherTechJasmineReporter = reporter.ChercherTechJasmineReporter;
        jasmine.getEnv().addReporter(new ChercherTechJasmineReporter({
            screenshotOnFail: true,
            showSkipped: false,
            browser: browser,
            showLineChart: true
        }));
    },
    onComplete: function (exitcode) {
        reporter.write_consolidated();
    },
    afterLaunch: function (exitcode) {
        return new Promise(function (resolve) {
            reporter.processResults();
            return 0;
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2hlclJlcG9ydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY2hlY2hlclJlcG9ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFHekQsK0JBQStCO0FBQzdCLE9BQU8sQ0FBQyxNQUFNLEdBQUc7SUFDZixTQUFTLEVBQUcsVUFBVTtJQUV0QixlQUFlLEVBQUM7UUFDWixVQUFVLEVBQUcsSUFBSTtRQUNqQixNQUFNLEVBQUcsSUFBSTtRQUNiLHNCQUFzQixFQUFFLEtBQUs7UUFDN0IsaUJBQWlCLEVBQUUsTUFBTTtRQUMxQix1QkFBdUI7S0FFekI7SUFDSCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUNELEtBQUssRUFBRSxDQUFDLGlDQUFpQyxDQUFDO0lBQzFDLHFIQUFxSDtJQUNySCxlQUFlLEVBQUUsOEJBQThCO0lBRy9DLFNBQVMsRUFBRTtRQUVYLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDcEMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsT0FBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBDLElBQUksMkJBQTJCLEdBQUcsUUFBUSxDQUFDLDJCQUEyQixDQUFDO1FBQ3JFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSwyQkFBMkIsQ0FBQztZQUN6RCxnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLFdBQVcsRUFBQyxLQUFLO1lBQ2pCLE9BQU8sRUFBQyxPQUFPO1lBQ2YsYUFBYSxFQUFDLElBQUk7U0FDckIsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0QsVUFBVSxFQUFDLFVBQVMsUUFBYTtRQUMvQixRQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUMvQixDQUFDO0lBRUQsV0FBVyxFQUFDLFVBQVMsUUFBYztRQUNqQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVMsT0FBTztZQUNqQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUE7WUFDekIsT0FBTyxDQUFDLENBQUE7UUFDVixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDSixDQUFDIn0=