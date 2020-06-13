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
exports.HndlingInteraction = void 0;
const ElementAction_1 = require("../utility/ElementAction");
const protractor_1 = require("protractor");
class HndlingInteraction {
    constructor() {
        this.confirmDisplayedElement2 = new ElementAction_1.ElementAction(protractor_1.by.id('result'));
        this.confirmDisplayedElement1 = protractor_1.element(protractor_1.by.id('result'));
        this.elementMakeSelectable = new ElementAction_1.ElementAction(protractor_1.by.css('a[href="#Serialize"]'));
        this.crossBrowserElement = new ElementAction_1.ElementAction(protractor_1.by.xpath('(//li//b[text()="Sakinalium - Cross Browser Testing"])[2]'));
    }
    clickElementselectability() {
        return __awaiter(this, void 0, void 0, function* () {
            this.getChildSeclectableMenu();
            yield this.elementMakeSelectable.click();
        });
    }
    clickCrossBrowser() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.crossBrowserElement.click();
            /* }
            async confirDispalayedText(){
              const atualDisplayedText = await this.confirmDisplayedElement1.getText();
              return await atualDisplayedText; */
        });
    }
    getChildSeclectableMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            this.getTopSeclectableMenu();
            let subMenuElement = protractor_1.element.all(protractor_1.by.css('ul.dropdown-menu>li>a'));
            yield subMenuElement.then(function (selectSubMenu) {
                return __awaiter(this, void 0, void 0, function* () {
                    for (let i = 0; i < selectSubMenu.length; i++) {
                        yield selectSubMenu[i].getText().then(function (mySubMenu) {
                            return __awaiter(this, void 0, void 0, function* () {
                                if (mySubMenu == "Selectable") {
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
    getTopSeclectableMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            let menusElement = protractor_1.element.all(protractor_1.by.css('li.dropdown>a'));
            yield menusElement.then(function (selectMenu) {
                return __awaiter(this, void 0, void 0, function* () {
                    for (let i = 0; i < selectMenu.length; i++) {
                        yield selectMenu[i].getText().then(function (myMenu) {
                            return __awaiter(this, void 0, void 0, function* () {
                                if (myMenu == "Interactions") {
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
exports.HndlingInteraction = HndlingInteraction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG5kbGluZ0ludGVyYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9IbmRsaW5nSW50ZXJhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNERBQXlEO0FBQ3pELDJDQUF5QztBQUV6QyxNQUFhLGtCQUFrQjtJQUEvQjtRQUNJLDZCQUF3QixHQUFFLElBQUksNkJBQWEsQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDN0QsNkJBQXdCLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsMEJBQXFCLEdBQUUsSUFBSSw2QkFBYSxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLHdCQUFtQixHQUFFLElBQUksNkJBQWEsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJEQUEyRCxDQUFDLENBQUMsQ0FBQztJQW9EbEgsQ0FBQztJQWpESyx5QkFBeUI7O1lBQzNCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFBO1lBQzlCLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBRzdDLENBQUM7S0FBQTtJQUNLLGlCQUFpQjs7WUFDbkIsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFM0M7OztpREFHcUM7UUFDckMsQ0FBQztLQUFBO0lBRUssdUJBQXVCOztZQUN6QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUM3QixJQUFJLGNBQWMsR0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztZQUNoRSxNQUFNLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBZSxhQUFhOztvQkFDbEQsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7d0JBQ3RDLE1BQU0sYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFlLFNBQWM7O2dDQUNoRSxJQUFHLFNBQVMsSUFBRSxZQUFZLEVBQUM7b0NBQzFCLE1BQU0sYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29DQUMvQiw0RUFBNEU7aUNBRW5GOzRCQUNMLENBQUM7eUJBQUEsQ0FBQyxDQUFBO3FCQUNMO2dCQUNELENBQUM7YUFBQSxDQUFDLENBQUE7UUFDRixDQUFDO0tBQUE7SUFDSyxxQkFBcUI7O1lBQ3ZCLElBQUksWUFBWSxHQUFFLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUN2RCxNQUFNLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBZSxVQUFVOztvQkFDN0MsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7d0JBQ25DLE1BQU0sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFlLE1BQVc7O2dDQUMxRCxJQUFHLE1BQU0sSUFBRSxjQUFjLEVBQUM7b0NBQ3pCLE1BQU0sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29DQUM1QixxRUFBcUU7aUNBTXhFOzRCQUNMLENBQUM7eUJBQUEsQ0FBQyxDQUFBO3FCQUNMO2dCQUNMLENBQUM7YUFBQSxDQUFDLENBQUE7UUFFRixDQUFDO0tBQUE7Q0FDQTtBQXhERCxnREF3REMifQ==