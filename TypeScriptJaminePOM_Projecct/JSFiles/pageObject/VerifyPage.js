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
exports.VerifyPage = void 0;
const protractor_1 = require("protractor");
class VerifyPage {
    getChildSeclectableMenu(SubMenu) {
        return __awaiter(this, void 0, void 0, function* () {
            let subMenuElement = protractor_1.element.all(protractor_1.by.css('ul.dropdown-menu>li>a'));
            yield subMenuElement.then(function (selectSubMenu) {
                return __awaiter(this, void 0, void 0, function* () {
                    for (let i = 0; i < selectSubMenu.length; i++) {
                        yield selectSubMenu[i].getText().then(function (mySubMenu) {
                            return __awaiter(this, void 0, void 0, function* () {
                                if (mySubMenu == SubMenu) {
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
    getTopSeclectableMenu(TopMenu) {
        return __awaiter(this, void 0, void 0, function* () {
            let menusElement = protractor_1.element.all(protractor_1.by.css('li.dropdown>a'));
            yield menusElement.then(function (selectMenu) {
                return __awaiter(this, void 0, void 0, function* () {
                    for (let i = 0; i < selectMenu.length; i++) {
                        yield selectMenu[i].getText().then(function (myMenu) {
                            return __awaiter(this, void 0, void 0, function* () {
                                if (myMenu == TopMenu) {
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
}
exports.VerifyPage = VerifyPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVyaWZ5UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvVmVyaWZ5UGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUM7QUFFekMsTUFBYSxVQUFVO0lBRWIsdUJBQXVCLENBQUMsT0FBZTs7WUFDekMsSUFBSSxjQUFjLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7WUFDaEUsTUFBTSxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQWUsYUFBYTs7b0JBQ2xELEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO3dCQUN0QyxNQUFNLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBZSxTQUFjOztnQ0FDaEUsSUFBRyxTQUFTLElBQUUsT0FBTyxFQUFDO29DQUNyQixNQUFNLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQ0FDL0IsNEVBQTRFO2lDQUVuRjs0QkFDTCxDQUFDO3lCQUFBLENBQUMsQ0FBQTtxQkFDTDtnQkFDRCxDQUFDO2FBQUEsQ0FBQyxDQUFBO1FBQ0YsQ0FBQztLQUFBO0lBQ0sscUJBQXFCLENBQUMsT0FBZTs7WUFDdkMsSUFBSSxZQUFZLEdBQUUsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELE1BQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFlLFVBQVU7O29CQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQzt3QkFDbkMsTUFBTSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWUsTUFBVzs7Z0NBQzFELElBQUcsTUFBTSxJQUFFLE9BQU8sRUFBQztvQ0FDbEIsTUFBTSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7b0NBQzVCLHFFQUFxRTtpQ0FNeEU7NEJBQ0wsQ0FBQzt5QkFBQSxDQUFDLENBQUE7cUJBQ0w7Z0JBQ0wsQ0FBQzthQUFBLENBQUMsQ0FBQTtRQUlGLENBQUM7S0FBQTtDQUNKO0FBckNELGdDQXFDQyJ9