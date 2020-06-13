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
exports.pagesTitle = void 0;
const protractor_1 = require("protractor");
class pagesTitle {
    getChildSeclectableMenu(subMenuText) {
        return __awaiter(this, void 0, void 0, function* () {
            let subMenuElement = protractor_1.element.all(protractor_1.by.css('ul.dropdown-menu>li>a'));
            yield subMenuElement.then(function (selectSubMenu) {
                return __awaiter(this, void 0, void 0, function* () {
                    for (let i = 0; i < selectSubMenu.length; i++) {
                        yield selectSubMenu[i].getText().then(function (mySubMenu) {
                            return __awaiter(this, void 0, void 0, function* () {
                                if (mySubMenu == subMenuText) {
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
    getTopSeclectableMenu(selectTopMenu) {
        return __awaiter(this, void 0, void 0, function* () {
            let menusElement = protractor_1.element.all(protractor_1.by.css('li.dropdown>a'));
            yield menusElement.then(function (selectMenu) {
                return __awaiter(this, void 0, void 0, function* () {
                    for (let i = 0; i < selectMenu.length; i++) {
                        yield selectMenu[i].getText().then(function (myMenu) {
                            return __awaiter(this, void 0, void 0, function* () {
                                if (myMenu == selectTopMenu) {
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
exports.pagesTitle = pagesTitle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGl0bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L1RpdGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF5QztBQUV6QyxNQUFhLFVBQVU7SUFHakIsdUJBQXVCLENBQUMsV0FBbUI7O1lBQzdDLElBQUksY0FBYyxHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFlLGFBQWE7O29CQUNsRCxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQzt3QkFDdEMsTUFBTSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWUsU0FBYzs7Z0NBQ2hFLElBQUcsU0FBUyxJQUFFLFdBQVcsRUFBQztvQ0FDekIsTUFBTSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7b0NBQy9CLDRFQUE0RTtpQ0FFbkY7NEJBQ0wsQ0FBQzt5QkFBQSxDQUFDLENBQUE7cUJBQ0w7Z0JBQ0QsQ0FBQzthQUFBLENBQUMsQ0FBQTtRQUNGLENBQUM7S0FBQTtJQUNLLHFCQUFxQixDQUFDLGFBQXFCOztZQUM3QyxJQUFJLFlBQVksR0FBRSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDdkQsTUFBTSxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQWUsVUFBVTs7b0JBQzdDLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO3dCQUNuQyxNQUFNLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBZSxNQUFXOztnQ0FDMUQsSUFBRyxNQUFNLElBQUUsYUFBYSxFQUFDO29DQUN4QixNQUFNLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQ0FDNUIscUVBQXFFO2lDQU14RTs0QkFDTCxDQUFDO3lCQUFBLENBQUMsQ0FBQTtxQkFDTDtnQkFDTCxDQUFDO2FBQUEsQ0FBQyxDQUFBO1FBRUYsQ0FBQztLQUFBO0NBRUE7QUFyQ0QsZ0NBcUNDIn0=