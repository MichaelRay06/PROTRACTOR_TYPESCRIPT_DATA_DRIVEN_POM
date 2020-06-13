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
//import { pagesTitle } from "../pageObject/";
const protractor_1 = require("protractor");
var objectDataProvider = require('../DataSet/autoComplteDast');
var using = require('jasmine-data-provider');
describe('verifyiong page titles', () => __awaiter(void 0, void 0, void 0, function* () {
    //let pageTitleTest= new pagesTitle();
    new PagesTitle();
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://demo.automationtesting.in/Register.html');
        util_1.util.getPageTitle('Register');
    }));
    using(objectDataProvider.vrifyTitles, (data, description) => __awaiter(void 0, void 0, void 0, function* () {
        it('vrifying opage title for subMenu' + description, () => __awaiter(void 0, void 0, void 0, function* () {
            //  pageTitleTest.getTopSeclectableMenu(data.TopMenu);
            // pageTitleTest.getChildSeclectableMenu(data.SubMenu);
            util_1.util.getPageTitle(data.expectedSubMenu);
        }));
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZVRpdGxlVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1Rlc3RTdGVwL1BhZ2VUaXRsZVRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBc0M7QUFDdEMsOENBQThDO0FBQzlDLDJDQUFxQztBQUVyQyxJQUFJLGtCQUFrQixHQUFFLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO0FBQzdELElBQUksS0FBSyxHQUFFLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0FBRTNDLFFBQVEsQ0FBQyx3QkFBd0IsRUFBQyxHQUFPLEVBQUU7SUFDeEMsc0NBQXNDO0lBQ3RDLElBQUksVUFBVSxFQUFFLENBQUM7SUFHaEIsVUFBVSxDQUFDLEdBQVEsRUFBRTtRQUVqQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7UUFDcEUsV0FBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUV0QyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFNLElBQVMsRUFBRSxXQUFnQixFQUFDLEVBQUU7UUFFdEUsRUFBRSxDQUFDLGtDQUFrQyxHQUFFLFdBQVcsRUFBRSxHQUFPLEVBQUU7WUFDM0Qsc0RBQXNEO1lBQ3JELHVEQUF1RDtZQUN0RCxXQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQU01QyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRU4sQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUdGLENBQUMsQ0FBQSxDQUFDLENBQUEifQ==