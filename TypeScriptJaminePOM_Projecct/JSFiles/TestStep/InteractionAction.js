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
const DragAndDrop_1 = require("../pageObject/DragAndDrop");
const HndlingInteraction_1 = require("../pageObject/HndlingInteraction");
const util_1 = require("../utility/util");
describe('performing web interatction', () => {
    let dragandDrop = new DragAndDrop_1.DragAndDrop();
    let hndlingInteraction = new HndlingInteraction_1.HndlingInteraction();
    xit('drag and drop test case', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.ignorSynchronization = true;
        protractor_1.browser.waitForAngularEnabled(false);
        util_1.util.getURL('http://way2automation.com/way2auto_jquery/index.php');
        // util.way2AutomationLogin();
        yield protractor_1.element(protractor_1.by.css('a[href="#login"]')).click();
        yield protractor_1.element(protractor_1.by.xpath('//input[@type="text"]')).sendKeys("ichaelRay");
        yield protractor_1.element(protractor_1.by.xpath('//input[@type="password"]')).sendKeys("54SonsofGod54");
        yield protractor_1.element(protractor_1.by.css('input.button')).click();
        let expectedTitle = util_1.util.getPageTitle();
        expect(expectedTitle).toBe('Welcome to the Test Site');
        dragandDrop.dragandDropElement();
    }), 12000);
    it('selectable vrification test demo', () => __awaiter(void 0, void 0, void 0, function* () {
        util_1.util.getURL('http://demo.automationtesting.in/Register.html');
        yield hndlingInteraction.clickElementselectability();
        yield hndlingInteraction.clickCrossBrowser();
        expect(yield hndlingInteraction.confirmDisplayedElement2.getText("to confirm the dispyed text as")).toBe("Cross Browser Testing");
        let expectedTitle = util_1.util.getPageTitle();
        expect(expectedTitle).toBe('Selectable');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZXJhY3Rpb25BY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9UZXN0U3RlcC9JbnRlcmFjdGlvbkFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFpRDtBQUNqRCwyREFBd0Q7QUFDeEQseUVBQXNFO0FBQ3RFLDBDQUF1QztBQUV2QyxRQUFRLENBQUMsNkJBQTZCLEVBQUUsR0FBRSxFQUFFO0lBRTVDLElBQUksV0FBVyxHQUFFLElBQUkseUJBQVcsRUFBRSxDQUFDO0lBQ25DLElBQUssa0JBQWtCLEdBQUcsSUFBSSx1Q0FBa0IsRUFBRSxDQUFDO0lBRy9DLEdBQUcsQ0FBQyx5QkFBeUIsRUFBQyxHQUFRLEVBQUU7UUFDcEMsb0JBQU8sQ0FBQyxvQkFBb0IsR0FBQyxJQUFJLENBQUM7UUFDbEMsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxXQUFJLENBQUMsTUFBTSxDQUFDLHFEQUFxRCxDQUFDLENBQUM7UUFDcEUsOEJBQThCO1FBQy9CLE1BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNsRCxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3RFLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDOUUsTUFBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUU1QyxJQUFJLGFBQWEsR0FBRSxXQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3ZELFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBR3JDLENBQUMsQ0FBQSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBRVQsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLEdBQVEsRUFBRTtRQUVqRCxXQUFJLENBQUMsTUFBTSxDQUFDLGdEQUFnRCxDQUFDLENBQUM7UUFJL0QsTUFBTSxrQkFBa0IsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ3JELE1BQU0sa0JBQWtCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUczQyxNQUFNLENBQU0sTUFBTSxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBRXZJLElBQUksYUFBYSxHQUFFLFdBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBSWpELENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFTCxDQUFDLENBQUMsQ0FBQSJ9