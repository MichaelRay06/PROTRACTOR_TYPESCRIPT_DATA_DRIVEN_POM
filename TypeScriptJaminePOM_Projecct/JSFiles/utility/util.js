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
exports.util = void 0;
const protractor_1 = require("protractor");
class util {
    static VerifyAndCloseAlert(text, sendAlert, containText) {
        return __awaiter(this, void 0, void 0, function* () {
            let EC = protractor_1.protractor.ExpectedConditions;
            protractor_1.browser.wait(EC.alertIsPresent(), 4000, "ALert not found");
            let alert = yield protractor_1.browser.switchTo().alert();
            let alertText = yield alert.getText();
            /*alertText.then(function(txt){
                log.debug(txt);
            })*/
            //log.debug(alertText);
            protractor_1.browser.sleep(2000);
            if (alertText == text) {
                yield alert.accept();
            }
            else {
                // let alert = await browser.switchTo().alert();
                yield alert.sendKeys(sendAlert);
                protractor_1.browser.sleep(2000);
                expect(alertText).toContain(containText);
                yield alert.accept();
            }
        });
    }
    /*  static async setAlertText(text1: string) {
         let EC = protractor.ExpectedConditions;
         browser.wait(EC.alertIsPresent(), 4000, "ALert not found");
 
         let alert = await browser.switchTo().alert();
         let alertText = await alert.sendKeys(text1)
 
     }
  */
    static getURL(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.manage().timeouts().pageLoadTimeout(30000);
            yield protractor_1.browser.get(url);
        });
    }
    static getPageTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            let actualPageTitle = yield protractor_1.browser.getTitle();
            return actualPageTitle;
        });
    }
    static way2AutomationLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.element(protractor_1.by.css('a[href="#login"]')).click();
            protractor_1.element(protractor_1.by.name("username")).sendKeys('michaelRay');
            protractor_1.element(protractor_1.by.name("password")).sendKeys('54SonsofGod54');
            protractor_1.element(protractor_1.by.css('input.button')).click();
        });
    }
}
exports.util = util;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3V0aWxpdHkvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBOEQ7QUFJOUQsTUFBYSxJQUFJO0lBR2IsTUFBTSxDQUFPLG1CQUFtQixDQUFDLElBQVksRUFBRSxTQUFpQixFQUFFLFdBQW1COztZQUNqRixJQUFJLEVBQUUsR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO1lBQ3ZDLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUUzRCxJQUFJLEtBQUssR0FBRyxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0MsSUFBSSxTQUFTLEdBQUcsTUFBTSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFdEM7O2dCQUVJO1lBQ0osdUJBQXVCO1lBQ3ZCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLElBQUksU0FBUyxJQUFFLElBQUksRUFBQztnQkFDbkIsTUFBTSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDckI7aUJBQUk7Z0JBRUwsZ0RBQWdEO2dCQUMvQyxNQUFNLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7Z0JBQy9CLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixNQUFNLENBQU0sU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUVqQjtRQUVELENBQUM7S0FBQTtJQUtMOzs7Ozs7OztJQVFBO0lBRUMsTUFBTSxDQUFPLE1BQU0sQ0FBQyxHQUFXOztZQUMzQixNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3hELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0IsQ0FBQztLQUFBO0lBQ0QsTUFBTSxDQUFPLFlBQVk7O1lBQ3JCLElBQUksZUFBZSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMvQyxPQUFPLGVBQWUsQ0FBQztRQUUzQixDQUFDO0tBQUE7SUFDRCxNQUFNLENBQU8sbUJBQW1COztZQUU3QixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQzFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUNuRCxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDdEQsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFFM0MsQ0FBQztLQUFBO0NBRUo7QUE3REQsb0JBNkRDIn0=