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
const util_1 = require("../utility/util");
const protractor_1 = require("protractor");
const WebTablePage_1 = require("../pageObject/WebTablePage");
//import { Title } from "../pageObject/Title";
var objectDataProvider = require('../DataSet/autoComplteDast');
var using = require('jasmine-data-provider');
describe('verifyiong page titles', () => __awaiter(void 0, void 0, void 0, function* () {
    //let pageTitleTest= new pagesTitle();
    let pageTitleTest = new WebTablePage_1.Title();
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://demo.automationtesting.in/Register.html');
        util_1.util.getPageTitle('Register');
    }));
    using(objectDataProvider.vrifyTitles, (data, description) => __awaiter(void 0, void 0, void 0, function* () {
        it('vrifying opage title for subMenu' + description, () => __awaiter(void 0, void 0, void 0, function* () {
            pageTitleTest.getTopSeclectableMenu(data.TopMenu);
            pageTitleTest.getChildSeclectableMenu(data.SubMenu);
            util_1.util.getPageTitle(data.expectedSubMenu);
        }));
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGl0bGVUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVGVzdFN0ZXAvVGl0bGVUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMENBQXNDO0FBRXRDLDJDQUFxQztBQUNyQyw2REFBbUQ7QUFDbkQsOENBQThDO0FBQzlDLElBQUksa0JBQWtCLEdBQUUsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUE7QUFDN0QsSUFBSSxLQUFLLEdBQUUsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUE7QUFFM0MsUUFBUSxDQUFDLHdCQUF3QixFQUFDLEdBQU8sRUFBRTtJQUN4QyxzQ0FBc0M7SUFDdkMsSUFBSSxhQUFhLEdBQUUsSUFBSSxvQkFBSyxFQUFFLENBQUM7SUFJN0IsVUFBVSxDQUFDLEdBQVEsRUFBRTtRQUVqQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7UUFDcEUsV0FBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUV0QyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFNLElBQVMsRUFBRSxXQUFnQixFQUFDLEVBQUU7UUFFdEUsRUFBRSxDQUFDLGtDQUFrQyxHQUFFLFdBQVcsRUFBRSxHQUFPLEVBQUU7WUFDekQsYUFBYSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsRCxhQUFhLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BELFdBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBTTVDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFTixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBR0YsQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9