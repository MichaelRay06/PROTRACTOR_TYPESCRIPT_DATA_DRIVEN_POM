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
exports.WebTablePage = void 0;
const protractor_1 = require("protractor");
const ElementAction_1 = require("../utility/ElementAction");
class WebTablePage {
    constructor() {
        this.canceclButton = new ElementAction_1.ElementAction(protractor_1.by.xpath('//button[text()="Cancel"]'));
        this.tableCellsElement = protractor_1.element.all(protractor_1.by.css('div[role="gridcell"]'));
        this.webTabltMenu = new ElementAction_1.ElementAction(protractor_1.by.css('a[href="WebTable.html"]'));
    }
    clickWebTableMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.webTabltMenu.click();
        });
    }
    getPageTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            let actualTitle = yield protractor_1.browser.getTitle();
            expect(actualTitle).toBe("Web Table");
        });
    }
    editTableCellName() {
        return __awaiter(this, void 0, void 0, function* () {
            let doublecLICKeditElement = protractor_1.element(protractor_1.by.css('div:nth-of-type(2) > div[role="row"] > div:nth-of-type(6) > .ng-isolate-scope.ng-scope .fa.fa-pencil'));
            let WidgetsElement = protractor_1.element.all(protractor_1.by.css('div[role="gridcell"]'));
            yield WidgetsElement.then(function (cellTextElement) {
                return __awaiter(this, void 0, void 0, function* () {
                    for (let i = 0; i < (yield cellTextElement.length); i++) {
                        yield cellTextElement[i].getText().then(function (cellText) {
                            return __awaiter(this, void 0, void 0, function* () {
                                if ((yield cellText) == "Vasantham") {
                                    yield cellTextElement[i].click();
                                    yield protractor_1.browser.actions().mouseMove(doublecLICKeditElement).doubleClick().perform();
                                }
                            });
                        });
                    }
                });
            });
            /* WidgetsElement.then(function (cellTextElement) {
                for (let i = 0; i < cellTextElement.length; i++) {
                  cellTextElement[i].getText().then(async function (cellText: any) {
                        if (cellText =="Vasantham") { */
            /*  await this.tableCellsElement.each(async function(row: any){
              let cell= await row.$$('div[ng-repeat*="(colRenderIndex, col) "]');
             await cell.get(1).getText().then(async function(cellText:any){
                  if(cellText=="Vasantham") */
            // await cell.get(5).$$('user-click-select.ng-scope.ng-isolate-scope>div>button>i').click();
        });
    }
}
exports.WebTablePage = WebTablePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViVGFibGVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9XZWJUYWJsZVBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWtEO0FBQ2xELDREQUFzRDtBQUV0RCxNQUFhLFlBQVk7SUFBekI7UUFFRSxrQkFBYSxHQUFFLElBQUksNkJBQWEsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztRQUN4RSxzQkFBaUIsR0FBRSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUMvRCxpQkFBWSxHQUFFLElBQUksNkJBQWEsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztJQStDckUsQ0FBQztJQTNDTyxpQkFBaUI7O1lBQ25CLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxDQUFDO0tBQUE7SUFDRyxZQUFZOztZQUNmLElBQUksV0FBVyxHQUFFLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpDLENBQUM7S0FBQTtJQUNLLGlCQUFpQjs7WUFDbkIsSUFBTSxzQkFBc0IsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0dBQXNHLENBQUMsQ0FBQyxDQUFBO1lBQ3JKLElBQUksY0FBYyxHQUFJLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1lBRWxFLE1BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFlLGVBQW9COztvQkFDNUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFHLE1BQU0sZUFBZSxDQUFDLE1BQU0sQ0FBQSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUNyRCxNQUFPLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBZ0IsUUFBYTs7Z0NBQ2pFLElBQUksQ0FBQSxNQUFNLFFBQVEsS0FBRyxXQUFXLEVBQUU7b0NBQ2pDLE1BQU0sZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29DQUNqQyxNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7aUNBQ2xGOzRCQUdMLENBQUM7eUJBQUEsQ0FBQyxDQUFBO3FCQUVKO2dCQUVMLENBQUM7YUFBQSxDQUFDLENBQUE7WUFJQTs7O3dEQUc0QztZQUcvQzs7OzhDQUdrQztZQUM5Qiw0RkFBNEY7UUFHL0YsQ0FBQztLQUFBO0NBQ0Y7QUFuREQsb0NBbURDIn0=