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
const util_1 = require("../utility/util");
const VerifyPage_1 = require("../pageObject/VerifyPage");
var objectDataProvider = require('../DataSet/pageTitleData');
var using = require('jasmine-data-provider');
describe('verifyiong page titles', () => __awaiter(void 0, void 0, void 0, function* () {
    let pageVerify = new VerifyPage_1.VerifyPage();
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://demo.automationtesting.in/Register.html');
        let expectedTitle = util_1.util.getPageTitle();
        expect(expectedTitle).toBe('Register');
    }));
    using(objectDataProvider.vrifyTitles, (data, description) => __awaiter(void 0, void 0, void 0, function* () {
        it('vrifying opage title for subMenu' + description, () => __awaiter(void 0, void 0, void 0, function* () {
            pageVerify.getTopSeclectableMenu(data.TopMenu);
            pageVerify.getChildSeclectableMenu(data.SubMenu);
            let expectedTitle = util_1.util.getPageTitle();
            expect(expectedTitle).toBe(data.expectedSubMenu);
        }));
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVyaWZ5UGFnZVRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9UZXN0U3RlcC9WZXJpZnlQYWdlVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLDJDQUFxQztBQUNyQywwQ0FBdUM7QUFDdkMseURBQXNEO0FBQ2xELElBQUksa0JBQWtCLEdBQUUsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUE7QUFDM0QsSUFBSSxLQUFLLEdBQUUsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUE7QUFFM0MsUUFBUSxDQUFDLHdCQUF3QixFQUFDLEdBQU8sRUFBRTtJQUN2QyxJQUFJLFVBQVUsR0FBRSxJQUFJLHVCQUFVLEVBQUUsQ0FBQztJQUlqQyxVQUFVLENBQUMsR0FBUSxFQUFFO1FBRWpCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsQ0FBQztRQUVwRSxJQUFJLGFBQWEsR0FBRSxXQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUUvQyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFNLElBQVMsRUFBRSxXQUFnQixFQUFDLEVBQUU7UUFFdEUsRUFBRSxDQUFDLGtDQUFrQyxHQUFFLFdBQVcsRUFBRSxHQUFPLEVBQUU7WUFDekQsVUFBVSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBR2pELElBQUksYUFBYSxHQUFFLFdBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN2QyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQU1yRCxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRU4sQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUdGLENBQUMsQ0FBQSxDQUFDLENBQUEifQ==