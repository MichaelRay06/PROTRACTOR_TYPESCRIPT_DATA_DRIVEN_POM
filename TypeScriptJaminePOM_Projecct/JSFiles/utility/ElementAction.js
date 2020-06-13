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
exports.ElementAction = void 0;
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
class ElementAction {
    constructor(byEl) {
        this.index = 0;
        this.EC = protractor_1.protractor.ExpectedConditions;
        this.byEL = byEl;
    }
    click() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (yield this.getElement()).click();
                //  log.debug("Clicked on " + this.byEL);
            }
            catch (ex) {
                // log.debug(ex);
                throw new Error(ex);
            }
        });
    }
    sendKeys(text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (yield this.getElement()).sendKeys(text);
                // log.debug("Entered "+ text + " on " + this.byEL);
            }
            catch (ex) {
                // log.debug(ex);
                throw new Error(ex);
            }
        });
    }
    getText(elementText) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let text = yield (yield this.getElement()).getText();
                //log.debug("Fetched  value as "+ text + " from " + this.byEL);
                // log.debug("Fetched  value as "+ text + " from " + elementText);
                return text;
            }
            catch (ex) {
                // log.debug(ex);
                throw new Error(ex);
            }
        });
    }
    getAttribute(elementText) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let attribute = yield (yield this.getElement()).getAttribute('value');
                //log.debug("Fetched  value as "+ text + " from " + this.byEL);
                //  log.debug("Fetched  value as "+ attribute + " from " + elementText);
                return attribute;
            }
            catch (ex) {
                // log.debug(ex);
                throw new Error(ex);
            }
        });
    }
    getAllAttribute(elementText) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let attribute = yield (yield this.getElements()).getAttribute('value');
                //log.debug("Fetched  value as "+ text + " from " + this.byEL);
                // log.debug("Fetched  value as "+ attribute + " from " + elementText);
                return attribute;
            }
            catch (ex) {
                // log.debug(ex);
                throw new Error(ex);
            }
        });
    }
    waitForEl() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_2.browser.wait(this.EC.presenceOf(protractor_2.element(this.byEL)), 30000, 'Element didnot found');
        });
    }
    getElement() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForEl();
            if (this.index == 0) {
                this.el = protractor_2.element(this.byEL);
            }
            else {
                this.el = protractor_2.element.all(this.byEL).get(this.index);
            }
            return this.el;
        });
    }
    getElements() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForEl();
            return protractor_2.element.all(this.byEL).asElementFinders_();
        });
    }
    size() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.getElements()).length;
        });
    }
    get(index) {
        return __awaiter(this, void 0, void 0, function* () {
            this.index = index;
            return this;
        });
    }
    getId() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.getElement()).getId();
        });
    }
    //elem.get(9).getText();
    //this.radiobtns.get(6).click()
    selectByOptionText(text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (yield this.getElement()).element(protractor_1.by.xpath('option[.= "' + text + '"]')).click();
                // log.debug("Selected " + text + " from " + this.byEL);
            }
            catch (ex) {
                //  log.debug(ex);
                throw new Error(ex);
            }
        });
    }
}
exports.ElementAction = ElementAction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxlbWVudEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3V0aWxpdHkvRWxlbWVudEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNEM7QUFDNUMsMkNBQTZEO0FBRTdELE1BQWEsYUFBYTtJQU90QixZQUFZLElBQVM7UUFGckIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQU1sQixPQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztRQUgvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBSUssS0FBSzs7WUFDUCxJQUFHO2dCQUNDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMxQyx5Q0FBeUM7YUFDMUM7WUFBQSxPQUFNLEVBQUUsRUFBQztnQkFDUCxpQkFBaUI7Z0JBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdkI7UUFDTCxDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsSUFBWTs7WUFDdkIsSUFBRztnQkFDQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hELG9EQUFvRDthQUN0RDtZQUFBLE9BQU0sRUFBRSxFQUFDO2dCQUNQLGlCQUFpQjtnQkFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN2QjtRQUNMLENBQUM7S0FBQTtJQUVLLE9BQU8sQ0FBQyxXQUFtQjs7WUFDN0IsSUFBRztnQkFDQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDckQsK0RBQStEO2dCQUNoRSxrRUFBa0U7Z0JBQ2pFLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7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