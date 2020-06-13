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
exports.HandleWidget = void 0;
const ElementAction_1 = require("../utility/ElementAction");
const protractor_1 = require("protractor");
class HandleWidget {
    constructor() {
        this.accordionColapseElement = new ElementAction_1.ElementAction(protractor_1.by.css('a[href="#collapse2"]'));
        this.autoCompleteElement = new ElementAction_1.ElementAction(protractor_1.by.id('tags'));
        this.autoCompleteElement1 = new ElementAction_1.ElementAction(protractor_1.by.id('tags'));
        this.verifyTextDisplayed = new ElementAction_1.ElementAction(protractor_1.by.xpath('(//div[@id="ui-id-4"])[1]'));
        this.MenuTextElement = new ElementAction_1.ElementAction(protractor_1.by.css('ul.nav.navbar-nav>li>a'));
        this.selectAccordionWindow = new ElementAction_1.ElementAction(protractor_1.by.css('h3[class*="ui-state-hover"]'));
        this.clickeAutoCompleteWindow = new ElementAction_1.ElementAction(protractor_1.by.xpath('(//a[@href="autocomplete.php"])[2]'));
    }
    clickedAuctompleteWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clickeAutoCompleteWindow.click();
        });
    }
    getChildSeclectableAutoCompleteMenu(autoSelectText) {
        return __awaiter(this, void 0, void 0, function* () {
            let subMenuElement = protractor_1.element.all(protractor_1.by.css('ul#ui-id-1>li.ui-menu-item'));
            yield subMenuElement.then(function (selectSubMenu) {
                return __awaiter(this, void 0, void 0, function* () {
                    for (let i = 0; i < selectSubMenu.length; i++) {
                        yield selectSubMenu[i].getText().then(function (mySubMenu) {
                            return __awaiter(this, void 0, void 0, function* () {
                                if (mySubMenu == autoSelectText) {
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
    getTopSeclectableWidgetsMenu(autoTopMenu) {
        return __awaiter(this, void 0, void 0, function* () {
            let menusElement = protractor_1.element.all(protractor_1.by.css('ul.responsive-tabs>li'));
            yield menusElement.then(function (selectMenu) {
                return __awaiter(this, void 0, void 0, function* () {
                    for (let i = 0; i < selectMenu.length; i++) {
                        yield selectMenu[i].getText().then(function (myMenu) {
                            return __awaiter(this, void 0, void 0, function* () {
                                if (myMenu == autoTopMenu) {
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
    sendTextToAutoCompelete(autoCompleteText) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.autoCompleteElement.sendKeys(autoCompleteText);
            // await this.autoCompleteElement1.sendKeys(protractor.Key.ARROW_DOWN);
            //await this.autoCompleteElement1.sendKeys(protractor.Key.ENTER);
        });
    }
    clickAccordionWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.selectAccordionWindow.click();
        });
    }
    selectAccordionMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            this.clickAccordionWindow();
            let WidgetsElement = protractor_1.element.all(protractor_1.by.css('a[href*="#example-1"]'));
            yield WidgetsElement.then(function (ChildMenu) {
                return __awaiter(this, void 0, void 0, function* () {
                    for (let i = 0; i < ChildMenu.length; i++) {
                        yield ChildMenu[i].getText().then(function (widgetChild) {
                            return __awaiter(this, void 0, void 0, function* () {
                                if (widgetChild == "Default functionality") {
                                    yield ChildMenu[i].click();
                                }
                            });
                        });
                    }
                });
            });
        });
    }
    clickToDisplyedAccordion() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.accordionColapseElement.click();
        });
    }
}
exports.HandleWidget = HandleWidget;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFuZGxlV2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9IYW5kbGVXaWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNERBQXlEO0FBQ3pELDJDQUE4RDtBQUU5RCxNQUFhLFlBQVk7SUFBekI7UUFFSSw0QkFBdUIsR0FBRSxJQUFJLDZCQUFhLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDM0Usd0JBQW1CLEdBQUUsSUFBSSw2QkFBYSxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0RCx5QkFBb0IsR0FBRSxJQUFJLDZCQUFhLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELHdCQUFtQixHQUFFLElBQUksNkJBQWEsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztRQUM5RSxvQkFBZSxHQUFFLElBQUksNkJBQWEsQ0FBRSxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUN0RSwwQkFBcUIsR0FBQyxJQUFJLDZCQUFhLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDL0UsNkJBQXdCLEdBQUUsSUFBSSw2QkFBYSxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFBO0lBd0YzRixDQUFDO0lBdEZLLHdCQUF3Qjs7WUFFdEIsTUFBTSxJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxFQUFFLENBQUE7UUFHbkQsQ0FBQztLQUFBO0lBR0ssbUNBQW1DLENBQUMsY0FBc0I7O1lBRTVELElBQUksY0FBYyxHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FB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