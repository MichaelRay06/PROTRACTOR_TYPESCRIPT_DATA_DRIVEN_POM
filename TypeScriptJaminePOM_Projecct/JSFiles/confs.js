"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var HTMLReport = require('protractor-html-reporter-2');
var jasmineReporters = require('jasmine-reporters');
require('jasmine2-protractor-utils');
exports.config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // set to "custom" instead of cucumber.
    framework: 'jasmine2',
    getPageTimeOut: 200000,
    allScriptsTimeout: 500000,
    capabilities: {
        "browserName": 'chrome'
    },
    // require feature files
    specs: ['./TestStep/*.js'],
    //  './TestStep/SubmitForm.js', './TestStep/MenuActions.js' ,'demo.js', './TestStep/InteractionAction.js', Selectable
    jasmineNodeOpts: {
        defaultTimeOutInterval: 60000
    },
    plugins: [{
            package: 'jasmine2-protractor-utils',
            disableHTMLReport: true,
            disableScreenshot: false,
            screenshotPath: './screenshots',
            screenshotOnExpectFailure: false,
            screenshotOnSpecFailure: true,
            clearFoldersBeforeTest: true
        }],
    onPrepare: function () {
        protractor_1.browser.ignorSynchronization = false;
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().timeouts().implicitlyWait(6000);
        protractor_1.browser.waitForAngularEnabled(true);
        //jasmine allure reporter
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        //
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './',
            filePrefix: 'xmlresults'
        }));
    },
    onComplete: function () {
        var browserName, browserVersion;
        var capsPromise = protractor_1.browser.getCapabilities();
        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            const platform = caps.get('platform');
            var HTMLReport = require('protractor-html-reporter-2');
            const testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: './',
                outputFilename: 'ProtractorTestReport',
                screenshotPath: './screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from('xmlresults.xml', testConfig);
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb25mcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFxQztBQUVyQyxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUN2RCxJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3BELE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBRWpDLE9BQU8sQ0FBQyxNQUFNLEdBQUc7SUFDYiw0Q0FBNEM7SUFDNUMsbURBQW1EO0lBRW5ELGFBQWEsRUFBRSxJQUFJO0lBR3BCLHVDQUF1QztJQUN4QyxTQUFTLEVBQUUsVUFBVTtJQUVyQixjQUFjLEVBQUUsTUFBTTtJQUN0QixpQkFBaUIsRUFBRSxNQUFNO0lBSXpCLFlBQVksRUFBRTtRQUNWLGFBQWEsRUFBRSxRQUFRO0tBRTFCO0lBRUQsd0JBQXdCO0lBQ3hCLEtBQUssRUFBRSxDQUFDLGlCQUFpQixDQUFDO0lBQ3hCLHFIQUFxSDtJQUt2SCxlQUFlLEVBQUM7UUFDbEIsc0JBQXNCLEVBQUMsS0FBSztLQUN6QjtJQUVELE9BQU8sRUFBRSxDQUFDO1lBQ1IsT0FBTyxFQUFFLDJCQUEyQjtZQUNwQyxpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIsY0FBYyxFQUFDLGVBQWU7WUFDOUIseUJBQXlCLEVBQUMsS0FBSztZQUMvQix1QkFBdUIsRUFBQyxJQUFJO1lBQzVCLHNCQUFzQixFQUFFLElBQUk7U0FDN0IsQ0FBQztJQUdKLFNBQVMsRUFBRTtRQUVULG9CQUFPLENBQUMsb0JBQW9CLEdBQUMsS0FBSyxDQUFDO1FBQ25DLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0Qyx5QkFBeUI7UUFDekIsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDeEQsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLGNBQWMsQ0FBQztZQUM5QyxVQUFVLEVBQUUsZ0JBQWdCO1NBQzdCLENBQUMsQ0FBQyxDQUFDO1FBR0wsRUFBRTtRQUNGLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNsRSxjQUFjLEVBQUUsSUFBSTtZQUNwQixRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRSxZQUFZO1NBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0YsQ0FBQztJQUVELFVBQVUsRUFBRTtRQUNWLElBQUksV0FBVyxFQUFFLGNBQWMsQ0FBQztRQUNoQyxJQUFJLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRTVDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1lBQzVCLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RDLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFdEMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFFdkQsTUFBTSxVQUFVLEdBQUc7Z0JBQ2YsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLGNBQWMsRUFBRSxzQkFBc0I7Z0JBQ3RDLGNBQWMsRUFBRSxlQUFlO2dCQUMvQixXQUFXLEVBQUUsV0FBVztnQkFDeEIsY0FBYyxFQUFFLGNBQWM7Z0JBQzlCLGlCQUFpQixFQUFFLEtBQUs7Z0JBQ3hCLHdCQUF3QixFQUFFLElBQUk7Z0JBQzlCLFlBQVksRUFBRSxRQUFRO2FBQ3pCLENBQUM7WUFDRixJQUFJLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7Q0FHRSxDQUFDIn0=