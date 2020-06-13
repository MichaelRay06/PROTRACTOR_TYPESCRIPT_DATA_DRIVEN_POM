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
exports.HandlingSwitch = void 0;
const protractor_1 = require("protractor");
const ElementAction_1 = require("../utility/ElementAction");
class HandlingSwitch {
    constructor() {
        this.selectAlertType = new ElementAction_1.ElementAction(protractor_1.by.css('a[href="#Textbox"]'));
        this.displayedAlert = new ElementAction_1.ElementAction(protractor_1.by.css('button.btn.btn-info'));
    }
    getChildAlretMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            this.getSwitchToTopMenu();
            let subMenuElement = protractor_1.element.all(protractor_1.by.css('ul.dropdown-menu>li>a'));
            yield subMenuElement.then(function (selectSubMenu) {
                return __awaiter(this, void 0, void 0, function* () {
                    for (let i = 0; i < selectSubMenu.length; i++) {
                        yield selectSubMenu[i].getText().then(function (mySubMenu) {
                            return __awaiter(this, void 0, void 0, function* () {
                                if (mySubMenu == "Alerts") {
                                    yield selectSubMenu[i].click();
                                    //await  browser.actions().mouseMove(await selectSubMenu[i]).perform;       
                                }
                            });
                        });
                    }
                });
            });
        });
    }
    getSwitchToTopMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            let menusElement = protractor_1.element.all(protractor_1.by.css('li.dropdown>a'));
            yield menusElement.then(function (selectMenu) {
                return __awaiter(this, void 0, void 0, function* () {
                    for (let i = 0; i < selectMenu.length; i++) {
                        yield selectMenu[i].getText().then(function (myMenu) {
                            return __awaiter(this, void 0, void 0, function* () {
                                if (myMenu == "SwitchTo") {
                                    yield selectMenu[i].click();
                                    //await  browser.actions().mouseMove(await selectSubMenu[i]).perform;
                                }
                            });
                        });
                    }
                });
            });
        });
    }
    selectTheAlertType() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.selectAlertType.click();
        });
    }
    clickToDisplayAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.displayedAlert.click();
        });
    }
}
exports.HandlingSwitch = HandlingSwitch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG5kbGluZ1N3aXRjaGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9IbmRsaW5nU3dpdGNoZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXlDO0FBQ3pDLDREQUF5RDtBQUt6RCxNQUFhLGNBQWM7SUFBM0I7UUFFSSxvQkFBZSxHQUFFLElBQUksNkJBQWEsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztRQUNqRSxtQkFBYyxHQUFFLElBQUksNkJBQWEsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQTtJQTRDaEUsQ0FBQztJQTFDSyxpQkFBaUI7O1lBQ25CLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFCLElBQUksY0FBYyxHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFlLGFBQWE7O29CQUNsRCxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQzt3QkFDdEMsTUFBTSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWUsU0FBYzs7Z0NBQ2hFLElBQUcsU0FBUyxJQUFFLFFBQVEsRUFBQztvQ0FDdEIsTUFBTSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7b0NBQy9CLDRFQUE0RTtpQ0FFbkY7NEJBQ0wsQ0FBQzt5QkFBQSxDQUFDLENBQUE7cUJBQ0w7Z0JBQ0QsQ0FBQzthQUFBLENBQUMsQ0FBQTtRQUNGLENBQUM7S0FBQTtJQUNLLGtCQUFrQjs7WUFDcEIsSUFBSSxZQUFZLEdBQUUsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELE1BQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFlLFVBQVU7O29CQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQzt3QkFDbkMsTUFBTSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWUsTUFBVzs7Z0NBQzFELElBQUcsTUFBTSxJQUFFLFVBQVUsRUFBQztvQ0FDckIsTUFBTSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7b0NBQzVCLHFFQUFxRTtpQ0FNeEU7NEJBQ0wsQ0FBQzt5QkFBQSxDQUFDLENBQUE7cUJBQ0w7Z0JBQ0wsQ0FBQzthQUFBLENBQUMsQ0FBQTtRQUVGLENBQUM7S0FBQTtJQUNLLGtCQUFrQjs7WUFDcEIsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXZDLENBQUM7S0FBQTtJQUNLLG1CQUFtQjs7WUFDckIsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXRDLENBQUM7S0FBQTtDQUNBO0FBL0NMLHdDQStDSyJ9