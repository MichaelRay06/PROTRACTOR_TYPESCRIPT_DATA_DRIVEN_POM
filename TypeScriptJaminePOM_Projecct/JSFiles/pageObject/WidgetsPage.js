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
exports.WidgetsPage = void 0;
const ElementAction_1 = require("../utility/ElementAction");
const protractor_1 = require("protractor");
class WidgetsPage {
    constructor() {
        this.selectAlertType = new ElementAction_1.ElementAction(protractor_1.by.xpath('(//a[@class="analystic"])[3]'));
        this.clickDispayAlert = new ElementAction_1.ElementAction(protractor_1.by.css('button.btn.btn-info'));
        this.alertWindow = new ElementAction_1.ElementAction(protractor_1.by.xpath('(//a[@href="alert.php"])[2]'));
    }
    clickAlertWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.alertWindow.click();
        });
    }
    getChildSeclectableMenu(alertTextButton) {
        return __awaiter(this, void 0, void 0, function* () {
            let subMenuElement = protractor_1.element.all(protractor_1.by.css('button[onclick="myFunction()"]'));
            yield subMenuElement.then(function (selectSubMenu) {
                return __awaiter(this, void 0, void 0, function* () {
                    for (let i = 0; i < selectSubMenu.length; i++) {
                        yield selectSubMenu[i].getText().then(function (mySubMenu) {
                            return __awaiter(this, void 0, void 0, function* () {
                                if (mySubMenu == alertTextButton) {
                                    yield selectSubMenu[i].click();
                                }
                            });
                        });
                    }
                });
            });
        });
    }
    getTopSeclectableMenu(alertTpoMenu) {
        return __awaiter(this, void 0, void 0, function* () {
            let menusElement = protractor_1.element.all(protractor_1.by.css('a[href*="#example-1-tab"]'));
            yield menusElement.then(function (selectMenu) {
                return __awaiter(this, void 0, void 0, function* () {
                    for (let i = 0; i < selectMenu.length; i++) {
                        yield selectMenu[i].getText().then(function (myMenu) {
                            return __awaiter(this, void 0, void 0, function* () {
                                if (myMenu == alertTpoMenu) {
                                    yield selectMenu[i].click();
                                }
                            });
                        });
                    }
                });
            });
        });
    }
}
exports.WidgetsPage = WidgetsPage;
/* async selectTheAlertType(){
    await this.selectAlertType.click()
}
async clickToDisplayAlert(){
    await this.clickDispayAlert.click();

}
}





 */ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2lkZ2V0c1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L1dpZGdldHNQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDREQUF1RDtBQUN2RCwyQ0FBeUM7QUFFekMsTUFBYSxXQUFXO0lBQXhCO1FBRUksb0JBQWUsR0FBRSxJQUFJLDZCQUFhLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUE7UUFDNUUscUJBQWdCLEdBQUUsSUFBSSw2QkFBYSxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFBO1FBQ2xFLGdCQUFXLEdBQUMsSUFBSSw2QkFBYSxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFBO0lBc0MxRSxDQUFDO0lBbkNLLGdCQUFnQjs7WUFDbEIsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRWxDLENBQUM7S0FBQTtJQUNLLHVCQUF1QixDQUFDLGVBQXVCOztZQUNqRCxJQUFJLGNBQWMsR0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztZQUN6RSxNQUFNLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBZSxhQUFhOztvQkFDbEQsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7d0JBQ3RDLE1BQU0sYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFlLFNBQWM7O2dDQUNoRSxJQUFHLFNBQVMsSUFBRSxlQUFlLEVBQUM7b0NBQzdCLE1BQU0sYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2lDQUV0Qzs0QkFDTCxDQUFDO3lCQUFBLENBQUMsQ0FBQTtxQkFDTDtnQkFDRCxDQUFDO2FBQUEsQ0FBQyxDQUFBO1FBQ0YsQ0FBQztLQUFBO0lBQ0sscUJBQXFCLENBQUMsWUFBb0I7O1lBQzVDLElBQUksWUFBWSxHQUFFLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1lBQ25FLE1BQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFlLFVBQVU7O29CQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQzt3QkFDbkMsTUFBTSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWUsTUFBVzs7Z0NBQzFELElBQUcsTUFBTSxJQUFFLFlBQVksRUFBQztvQ0FDdkIsTUFBTSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7aUNBTS9COzRCQUNMLENBQUM7eUJBQUEsQ0FBQyxDQUFBO3FCQUNMO2dCQUNMLENBQUM7YUFBQSxDQUFDLENBQUE7UUFFRixDQUFDO0tBQUE7Q0FDQTtBQTFDRCxrQ0EwQ0M7QUFDRDs7Ozs7Ozs7Ozs7OztHQWFHIn0=