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
exports.HomePage = void 0;
const ElementAction_1 = require("../utility/ElementAction");
const protractor_1 = require("protractor");
class HomePage {
    constructor() {
        //personal details
        this.firstName = new ElementAction_1.ElementAction(protractor_1.by.model('FirstName'));
        this.lastName = new ElementAction_1.ElementAction(protractor_1.by.model('LastName'));
        this.homeAdress = new ElementAction_1.ElementAction(protractor_1.by.model('Adress'));
        this.emailBox = new ElementAction_1.ElementAction(protractor_1.by.model('EmailAdress'));
        this.phoneNumber = new ElementAction_1.ElementAction(protractor_1.by.model('Phone'));
        //select gender
        this.radioButton = new ElementAction_1.ElementAction(protractor_1.by.css('input[ng-model="radiovalue"]'));
        this.genderText = new ElementAction_1.ElementAction(protractor_1.by.model('radiovalue'));
        //seleclet hobbies
        this.hobbiescheckBox = new ElementAction_1.ElementAction(protractor_1.by.css('label.checks'));
        this.hobbyElement = new ElementAction_1.ElementAction(protractor_1.by.id("checkbox2"));
        //select language
        this.lanBox = new ElementAction_1.ElementAction(protractor_1.by.id('msdd'));
        // languagesBox = new ElementAction(by.css('li.ng-scope> a'));
        //select skills
        this.skillsBox = new ElementAction_1.ElementAction(protractor_1.by.model('Skill'));
        //select first country
        this.countryBox = new ElementAction_1.ElementAction(protractor_1.by.model('country'));
        //select second  country
        this.selectCountries = new ElementAction_1.ElementAction(protractor_1.by.css('span[role="combobox"]'));
        this.sendmyText = new ElementAction_1.ElementAction(protractor_1.by.css('input[role="textbox"]'));
        this.sendTextAction = new ElementAction_1.ElementAction(protractor_1.by.css('//input.select2-search__field'));
        //select dates of birth
        this.yearElement = new ElementAction_1.ElementAction(protractor_1.by.model('yearbox'));
        this.monthElement = new ElementAction_1.ElementAction(protractor_1.by.model('monthbox'));
        this.daysElement = new ElementAction_1.ElementAction(protractor_1.by.model('daybox'));
        //set password
        this.passwordElement = new ElementAction_1.ElementAction(protractor_1.by.model('Password'));
        this.confirmPassword = new ElementAction_1.ElementAction(protractor_1.by.model('CPassword'));
        //submit form
        this.submitButton = new ElementAction_1.ElementAction(protractor_1.by.id('submitbtn'));
    }
    identityDetails(firstName, lastName, homeAdress, emailBox, phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            this.firstName.sendKeys(firstName);
            this.lastName.sendKeys(lastName);
            this.homeAdress.sendKeys(homeAdress);
            this.emailBox.sendKeys(emailBox);
            this.phoneNumber.sendKeys(phoneNumber);
        });
    }
    selectGender(gender) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.radioButton.getAttribute(gender);
            yield this.genderText.click();
        });
    }
    // async selectHobby(selectedHobby: any) {
    selectHobby(hobby) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.hobbiescheckBox.getText(hobby);
            yield this.hobbyElement.click();
        });
    }
    //async selectedSkills(selectSkills: any) {
    selectedSkills(selectSkills) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.skillsBox.selectByOptionText(selectSkills);
        });
    }
    //async country(Country: any) {
    country(country) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.countryBox.selectByOptionText(country);
        });
    }
    selectedCountries(countriesSelected) {
        return __awaiter(this, void 0, void 0, function* () {
            let selectCountries1 = protractor_1.element(protractor_1.by.css('span[role="combobox"]'));
            let sendmyText1 = protractor_1.element(protractor_1.by.css('input[role="textbox"]'));
            yield selectCountries1.click();
            yield sendmyText1.sendKeys(countriesSelected);
            yield sendmyText1.sendKeys(protractor_1.protractor.Key.ENTER);
        });
    }
    selectedDates(years, months, date) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.yearElement.selectByOptionText(years);
            yield this.monthElement.selectByOptionText(months);
            yield this.daysElement.selectByOptionText(date);
        });
    }
    pupolatePassword(password, confirmPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.passwordElement.sendKeys(password);
            yield this.confirmPassword.sendKeys(confirmPassword);
        });
    }
    submitForm() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.submitButton.click();
        });
    }
    clickLangBox() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.lanBox.click();
        });
    }
    selectedLanguages(selectedLang) {
        return __awaiter(this, void 0, void 0, function* () {
            let languageBox = protractor_1.element.all(protractor_1.by.css('li.ng-scope> a'));
            yield languageBox.then(function (lanBoxElement) {
                return __awaiter(this, void 0, void 0, function* () {
                    for (let i = 0; i < (yield lanBoxElement.length); i++) {
                        yield lanBoxElement[i].getText().then(function (languageText) {
                            return __awaiter(this, void 0, void 0, function* () {
                                if ((yield languageText) == selectedLang) {
                                    yield lanBoxElement[i].click();
                                }
                            });
                        });
                    }
                });
            });
        });
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L0hvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLDREQUF5RDtBQUN6RCwyQ0FBOEQ7QUFJOUQsTUFBYSxRQUFRO0lBQXJCO1FBRUksa0JBQWtCO1FBQ2xCLGNBQVMsR0FBRyxJQUFJLDZCQUFhLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3JELGFBQVEsR0FBRyxJQUFJLDZCQUFhLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ25ELGVBQVUsR0FBRyxJQUFJLDZCQUFhLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25ELGFBQVEsR0FBRyxJQUFJLDZCQUFhLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3RELGdCQUFXLEdBQUcsSUFBSSw2QkFBYSxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUVuRCxlQUFlO1FBQ2YsZ0JBQVcsR0FBRyxJQUFJLDZCQUFhLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7UUFDeEUsZUFBVSxHQUFHLElBQUksNkJBQWEsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFFdkQsa0JBQWtCO1FBQ2xCLG9CQUFlLEdBQUcsSUFBSSw2QkFBYSxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUM1RCxpQkFBWSxHQUFHLElBQUksNkJBQWEsQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFckQsaUJBQWlCO1FBQ2pCLFdBQU0sR0FBRyxJQUFJLDZC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