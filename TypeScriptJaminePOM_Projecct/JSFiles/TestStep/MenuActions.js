"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const WidgetsPage_1 = require("../pageObject/WidgetsPage");
const HandleWidget_1 = require("../pageObject/HandleWidget");
const util_1 = require("../utility/util");
var objectDataProvider = require('../DataSet/homePageTestData');
var objectDataProvider2 = require('../DataSet/alertDataSet');
var using = require('jasmine-data-provider');
xdescribe('performimg menu actions', () => {
    let handleWidget = new HandleWidget_1.HandleWidget();
    let widgetsPage = new WidgetsPage_1.WidgetsPage();
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://way2automation.com/way2auto_jquery/index.php');
        let expectedTitle = util_1.util.getPageTitle();
        expect(expectedTitle).toBe('Welcome to the Test Site');
    }));
    xit('vrifying ACCRON DISPLAYED test  scenario', () => __awaiter(void 0, void 0, void 0, function* () {
        yield handleWidget.selectAccordionMenu();
        yield handleWidget.clickToDisplyedAccordion();
        yield handleWidget.verifyTextDisplayed.waitForEl();
        expect(yield handleWidget.verifyTextDisplayed.getText('displayedText')).toContain('Phasellus');
        let expectedTitle = util_1.util.getPageTitle();
        expect(expectedTitle).toBe('Welcome');
    }));
    using(objectDataProvider.dataAuto, (data, description) => __awaiter(void 0, void 0, void 0, function* () {
        xit('verifying auto complete text' + description, () => __awaiter(void 0, void 0, void 0, function* () {
            yield handleWidget.clickedAuctompleteWindow();
            yield handleWidget.getTopSeclectableWidgetsMenu(data.autoTopMenu);
            yield handleWidget.sendTextToAutoCompelete(data.autoCompleteText);
            yield handleWidget.getChildSeclectableAutoCompleteMenu(data.autoSelectText);
            yield handleWidget.autoCompleteElement1.waitForEl();
            // expect<any>(await handleWidget.autoCompleteElement1.getText('get text valeu')).toBe(data.expectedValue);
            expect(yield handleWidget.autoCompleteElement1.getAttribute('value')).toBe(data.expectedValue);
            let actualPageTitle = util_1.util.getPageTitle();
            expect(actualPageTitle).toBe(data.expectedTitle);
        }));
    }));
    using(objectDataProvider.alerts, (data, description) => __awaiter(void 0, void 0, void 0, function* () {
        xit('verifying alert text', () => __awaiter(void 0, void 0, void 0, function* () {
            yield widgetsPage.clickAlertWindow();
            yield widgetsPage.getTopSeclectableMenu(data.alertTpoMenu);
            yield widgetsPage.getChildSeclectableMenu(data.alertTextButton);
            yield util_1.util.VerifyAndCloseAlert(data.text, data.sendAlert, data.containText);
        }));
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVudUFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9UZXN0U3RlcC9NZW51QWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFvQztBQUNwQywyREFBdUQ7QUFDdkQsNkRBQTBEO0FBQzFELDBDQUF1QztBQUN2QyxJQUFJLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQ2hFLElBQUksbUJBQW1CLEdBQUUsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUE7QUFDM0QsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFHN0MsU0FBUyxDQUFDLHlCQUF5QixFQUFFLEdBQUcsRUFBRTtJQUN0QyxJQUFJLFlBQVksR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztJQUN0QyxJQUFJLFdBQVcsR0FBRSxJQUFJLHlCQUFXLEVBQUUsQ0FBQztJQUduQyxVQUFVLENBQUMsR0FBUyxFQUFFO1FBQ3RCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMscURBQXFELENBQUMsQ0FBQTtRQUV4RSxJQUFJLGFBQWEsR0FBRSxXQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBRXZELENBQUMsQ0FBQSxDQUFDLENBQUE7SUFJQyxHQUFHLENBQUMsMENBQTBDLEVBQUUsR0FBUyxFQUFFO1FBRXRELE1BQU0sWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekMsTUFBTSxZQUFZLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUM5QyxNQUFNLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUNuRCxNQUFNLENBQU0sTUFBTSxZQUFZLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BHLElBQUksYUFBYSxHQUFFLFdBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2QyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixLQUFLLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQU8sSUFBUyxFQUFFLFdBQWdCLEVBQUUsRUFBRTtRQUMxRSxHQUFHLENBQUMsOEJBQThCLEdBQUUsV0FBVyxFQUFFLEdBQVMsRUFBRTtZQUN2RCxNQUFNLFlBQVksQ0FBQyx3QkFBd0IsRUFBRSxDQUFBO1lBQzdDLE1BQU0sWUFBWSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUNqRSxNQUFNLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNsRSxNQUFNLFlBQVksQ0FBQyxtQ0FBbUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDNUUsTUFBTSxZQUFZLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLENBQUM7WUFFcEQsMkdBQTJHO1lBQzNHLE1BQU0sQ0FBTSxNQUFNLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRW5HLElBQUksZUFBZSxHQUFFLFdBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN6QyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBTyxJQUFTLEVBQUUsV0FBZ0IsRUFBRSxFQUFFO1FBQ25FLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxHQUFTLEVBQUU7WUFDbkMsTUFBTSxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNyQyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDM0QsTUFBTSxXQUFXLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBSWhFLE1BQU0sV0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDaEYsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUlOLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFLRixDQUFDLENBQUMsQ0FBQSJ9