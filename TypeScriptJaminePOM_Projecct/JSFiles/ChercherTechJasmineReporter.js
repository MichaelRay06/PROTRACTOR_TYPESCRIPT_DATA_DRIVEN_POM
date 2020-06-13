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
    specs: ['./TestStep/*.js'],
    //  './TestStep/SubmitForm.js', './TestStep/MenuActions.js' ,'demo.js', './TestStep/InteractionAction.js', Selectable, ./TestStep/homeDataAction.js, WidgetsPageTest.js
    //seleniumAddress: 'http://localhost:4444/wd/hub',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlcmNoZXJUZWNoSmFzbWluZVJlcG9ydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vQ2hlcmNoZXJUZWNoSmFzbWluZVJlcG9ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFHekQsK0JBQStCO0FBQzdCLE9BQU8sQ0FBQyxNQUFNLEdBQUc7SUFDZixTQUFTLEVBQUcsVUFBVTtJQUV0QixlQUFlLEVBQUM7UUFDWixVQUFVLEVBQUcsSUFBSTtRQUNqQixNQUFNLEVBQUcsSUFBSTtRQUNiLHNCQUFzQixFQUFFLEtBQUs7UUFDN0IsaUJBQWlCLEVBQUUsTUFBTTtRQUMxQix1QkFBdUI7S0FFekI7SUFDSCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUNELEtBQUssRUFBRSxDQUFDLGlCQUFpQixDQUFDO0lBQzFCLHVLQUF1SztJQUN2SyxrREFBa0Q7SUFHbEQsU0FBUyxFQUFFO1FBRVgsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BDLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDOUIsT0FBTyxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUNwQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxPQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEMsSUFBSSwyQkFBMkIsR0FBRyxRQUFRLENBQUMsMkJBQTJCLENBQUM7UUFDckUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLDJCQUEyQixDQUFDO1lBQ3pELGdCQUFnQixFQUFFLElBQUk7WUFDdEIsV0FBVyxFQUFDLEtBQUs7WUFDakIsT0FBTyxFQUFDLE9BQU87WUFDZixhQUFhLEVBQUMsSUFBSTtTQUNyQixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDRCxVQUFVLEVBQUMsVUFBUyxRQUFhO1FBQy9CLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO0lBQy9CLENBQUM7SUFFRCxXQUFXLEVBQUMsVUFBUyxRQUFjO1FBQ2pDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBUyxPQUFPO1lBQ2pDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtZQUN6QixPQUFPLENBQUMsQ0FBQTtRQUNWLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNKLENBQUMifQ==