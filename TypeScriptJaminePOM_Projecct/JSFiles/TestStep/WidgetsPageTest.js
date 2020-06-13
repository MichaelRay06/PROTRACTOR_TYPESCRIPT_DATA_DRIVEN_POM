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
            pageTitleTest.getTopSeclectableMenu(data.TopMenu);
            pageTitleTest.getChildSeclectableMenu(data.SubMenu);
            util_1.util.getPageTitle(data.expectedSubMenu);
        }));
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2lkZ2V0c1BhZ2VUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVGVzdFN0ZXAvV2lkZ2V0c1BhZ2VUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMENBQXNDO0FBQ3RDLDhDQUE4QztBQUM5QywyQ0FBcUM7QUFFckMsSUFBSSxrQkFBa0IsR0FBRSxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtBQUM3RCxJQUFJLEtBQUssR0FBRSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtBQUUzQyxRQUFRLENBQUMsd0JBQXdCLEVBQUMsR0FBTyxFQUFFO0lBQ3hDLHNDQUFzQztJQUN0QyxJQUFJLFVBQVUsRUFBRSxDQUFDO0lBRWhCLFVBQVUsQ0FBQyxHQUFRLEVBQUU7UUFFakIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1FBQ3BFLFdBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFdEMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBTSxJQUFTLEVBQUUsV0FBZ0IsRUFBQyxFQUFFO1FBRXRFLEVBQUUsQ0FBQyxrQ0FBa0MsR0FBRSxXQUFXLEVBQUUsR0FBTyxFQUFFO1lBQ3pELGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEQsYUFBYSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRCxXQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQU01QyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRU4sQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUdGLENBQUMsQ0FBQSxDQUFDLENBQUEifQ==