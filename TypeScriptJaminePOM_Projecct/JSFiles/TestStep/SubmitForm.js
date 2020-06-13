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
const HomePage_1 = require("../pageObject/HomePage");
const protractor_1 = require("protractor");
const WebTablePage_1 = require("../pageObject/WebTablePage");
const util_1 = require("../utility/util");
var objectDataProvider = require('../DataSet/homePageTestData');
var using = require('jasmine-data-provider');
describe('demo automation homepage demo', () => {
    let homePage = new HomePage_1.HomePage();
    let webTable = new WebTablePage_1.WebTablePage();
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://demo.automationtesting.in/Register.html');
        let expectedTitle = util_1.util.getPageTitle();
        expect(expectedTitle).toBe('Register');
    }));
    using(objectDataProvider.dataDriven, (data, description) => __awaiter(void 0, void 0, void 0, function* () {
        it('populating the register form' + description, () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.identityDetails(data.firstName, data.lastName, data.homeAdress, data.emailBox, data.phoneNumber);
            yield homePage.selectGender(data.selectGender);
            yield homePage.selectHobby(data.selectHobby);
            yield homePage.clickLangBox();
            yield homePage.selectedLanguages(data.Languages);
            yield homePage.selectedSkills(data.selectedSkills);
            yield homePage.country(data.country);
            yield homePage.selectedCountries(data.selectedCountries);
            yield homePage.selectedDates(data.DOB_year, data.DOB_month, data.DOB_day);
            yield homePage.pupolatePassword(data.password, data.confirmPassword);
            yield homePage.submitForm();
            yield webTable.clickWebTableMenu();
            yield webTable.getPageTitle();
            yield webTable.editTableCellName();
            let expectedTitle = util_1.util.getPageTitle();
            expect(expectedTitle).toBe(data.expectedTitle);
        }));
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VibWl0Rm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1Rlc3RTdGVwL1N1Ym1pdEZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxREFBaUQ7QUFDakQsMkNBQXFDO0FBQ3JDLDZEQUEwRDtBQUMxRCwwQ0FBdUM7QUFFdkMsSUFBSSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUNoRSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUc3QyxRQUFRLENBQUMsK0JBQStCLEVBQUUsR0FBRyxFQUFFO0lBQzNDLElBQUksUUFBUSxHQUFFLElBQUksbUJBQVEsRUFBRSxDQUFDO0lBQzdCLElBQUksUUFBUSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO0lBR2xDLFVBQVUsQ0FBQyxHQUFRLEVBQUU7UUFDckIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1FBRXBFLElBQUksYUFBYSxHQUFFLFdBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2QyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXZDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixLQUFLLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLENBQU8sSUFBUyxFQUFFLFdBQWdCLEVBQUUsRUFBRTtRQUU5RSxFQUFFLENBQUMsOEJBQThCLEdBQUUsV0FBVyxFQUFFLEdBQVMsRUFBRTtZQUV6RCxNQUFNLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEgsTUFBTSxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMvQyxNQUFNLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzlCLE1BQU0sUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqRCxNQUFNLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckMsTUFBTSxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDekQsTUFBTSxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0UsTUFBTSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDckUsTUFBTSxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDNUIsTUFBTSxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNuQyxNQUFNLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM5QixNQUFNLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBR25DLElBQUksYUFBYSxHQUFFLFdBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN2QyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUdoRCxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUgsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVILENBQUMsQ0FBQyxDQUFBIn0=