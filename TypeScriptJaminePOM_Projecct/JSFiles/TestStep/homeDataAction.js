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
const homeDataDemo_1 = require("../pageObject/homeDataDemo");
const protractor_1 = require("protractor");
const util_1 = require("../utility/util");
var objectDataProvider = require('../DataSet/homePageTestData');
var using = require('jasmine-data-provider');
describe("damostrate data driven test", () => __awaiter(void 0, void 0, void 0, function* () {
    let homeDataDemo = new homeDataDemo_1.HomeDemo();
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://demo.automationtesting.in/Register.html');
        let expectedTitle = util_1.util.getPageTitle();
        expect(expectedTitle).toBe('Register');
    }));
    using(objectDataProvider.dataDriven, (data, description) => __awaiter(void 0, void 0, void 0, function* () {
        it("home page data driven using dataprivider" + description, () => __awaiter(void 0, void 0, void 0, function* () {
            homeDataDemo.identityDetails(data.firstName, data.lastName, data.homeAdress, data.emailBox, data.phoneNumber);
        }));
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZURhdGFBY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9UZXN0U3RlcC9ob21lRGF0YUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDZEQUFzRDtBQUN0RCwyQ0FBcUM7QUFDckMsMENBQXVDO0FBQ3ZDLElBQUksa0JBQWtCLEdBQUcsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDaEUsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFLN0MsUUFBUSxDQUFDLDZCQUE2QixFQUFFLEdBQU8sRUFBRTtJQUMvQyxJQUFJLFlBQVksR0FBRyxJQUFJLHVCQUFRLEVBQUUsQ0FBQztJQUVuQyxVQUFVLENBQUMsR0FBUSxFQUFFO1FBQ2xCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsQ0FBQztRQUVwRSxJQUFJLGFBQWEsR0FBRSxXQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDaEMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFPLElBQVMsRUFBRSxXQUFnQixFQUFFLEVBQUU7UUFFdkUsRUFBRSxDQUFDLDBDQUEwQyxHQUFHLFdBQVcsRUFBRSxHQUFPLEVBQUU7WUFFbEUsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUVqSCxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUtOLENBQUMsQ0FBQSxDQUFDLENBQUEifQ==