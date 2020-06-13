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
const protractor_2 = require("protractor");
describe('this is demo automation test', () => {
    it('page content confirmation test', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://demo.automationtesting.in/Register.html');
        yield protractor_1.browser.getTitle().then(function (actualTitle) {
            return __awaiter(this, void 0, void 0, function* () {
                yield expect(actualTitle).toBe("Register");
                yield protractor_1.browser.sleep(1000);
                let firstName = protractor_2.element(protractor_2.by.model('FirstName'));
                let lastName = protractor_2.element(protractor_2.by.model('LastName'));
                yield firstName.sendKeys("Wale");
                yield lastName.sendKeys("Oriolowo");
                let emailAdress = protractor_2.element(protractor_2.by.model('Adress'));
                emailAdress.sendKeys("26, St Dontts Road");
                let emailBox = protractor_2.element(protractor_2.by.model('EmailAdress'));
                let phoneNum = protractor_2.element(protractor_2.by.model('Phone'));
                yield emailBox.sendKeys("wale999@gmail.com");
                yield phoneNum.sendKeys("9988579966");
                let radioButton = protractor_2.element.all(protractor_2.by.css('input[ng-model="radiovalue"]'));
                yield radioButton.then(function (items) {
                    return __awaiter(this, void 0, void 0, function* () {
                        for (let i = 0; i < items.length; i++) {
                            (items[i].getAttribute('value')).then(function (txt) {
                                return __awaiter(this, void 0, void 0, function* () {
                                    if (txt == "Male") {
                                        yield items[i].click();
                                        let hobbiescheckBox = protractor_2.element.all(protractor_2.by.css('label.checks'));
                                        yield hobbiescheckBox.then(function (selectedHobby) {
                                            return __awaiter(this, void 0, void 0, function* () {
                                                for (let i = 0; i < selectedHobby.length; i++) {
                                                    yield selectedHobby[i].getText().then(function (hobbies) {
                                                        return __awaiter(this, void 0, void 0, function* () {
                                                            if (hobbies == "Movies") {
                                                                selectedHobby[i].click();
                                                                let hobbyElement = protractor_2.element(protractor_2.by.id("checkbox2"));
                                                                yield hobbyElement.click();
                                                                let lanBox = protractor_2.element(protractor_2.by.id('msdd'));
                                                                yield lanBox.click();
                                                                let selectText = protractor_2.element.all(protractor_2.by.css('li.ng-scope> a'));
                                                                yield selectText.then(function (selectedText) {
                                                                    return __awaiter(this, void 0, void 0, function* () {
                                                                        for (let i = 0; i < selectedText.length; i++) {
                                                                            yield selectedText[i].getText().then(function (lang) {
                                                                                return __awaiter(this, void 0, void 0, function* () {
                                                                                    if (lang == "Czech") {
                                                                                        yield selectedText[i].click();
                                                                                        let skills = protractor_2.element(protractor_2.by.model('Skill'));
                                                                                        let options = skills.all(protractor_2.by.tagName('option'));
                                                                                        yield options.then(function (selectSkills) {
                                                                                            return __awaiter(this, void 0, void 0, function* () {
                                                                                                for (let i = 0; i < selectSkills.length; i++) {
                                                                                                    yield selectSkills[i].getText().then(function (mySkills) {
                                                                                                        return __awaiter(this, void 0, void 0, function* () {
                                                                                                            if (mySkills == "Android") {
                                                                                                                yield selectSkills[i].click();
                                                                                                                let country = protractor_2.element(protractor_2.by.model('country'));
                                                                                                                let options = country.all(protractor_2.by.tagName('option'));
                                                                                                                yield options.then(function (selectCountry) {
                                                                                                                    return __awaiter(this, void 0, void 0, function* () {
                                                                                                                        for (let i = 0; i < selectCountry.length; i++) {
                                                                                                                            yield selectCountry[i].getText().then(function (country) {
                                                                                                                                return __awaiter(this, void 0, void 0, function* () {
                                                                                                                                    if (country == "Nigeria") {
                                                                                                                                        yield selectCountry[i].click();
                                                                                                                                        let selectCountries = protractor_2.element(protractor_2.by.css('span[role="combobox"]'));
                                                                                                                                        let sendmyText = protractor_2.element(protractor_2.by.css('input[role="textbox"]'));
                                                                                                                                        yield selectCountries.click();
                                                                                                                                        yield sendmyText.sendKeys("Ho");
                                                                                                                                        yield sendmyText.sendKeys(protractor_1.protractor.Key.ENTER);
                                                                                                                                        let yearElement = protractor_2.element(protractor_2.by.model('yearbox'));
                                                                                                                                        let monthElement = protractor_2.element(protractor_2.by.model('monthbox'));
                                                                                                                                        let daysElement = protractor_2.element(protractor_2.by.model('daybox'));
                                                                                                                                        yield yearElement.click();
                                                                                                                                        yield yearElement.sendKeys(protractor_1.protractor.Key.ARROW_DOWN);
                                                                                                                                        yield yearElement.sendKeys(protractor_1.protractor.Key.ENTER);
                                                                                                                                        monthElement.click();
                                                                                                                                        monthElement.sendKeys(protractor_1.protractor.Key.ARROW_DOWN);
                                                                                                                                        monthElement.sendKeys(protractor_1.protractor.Key.ENTER);
                                                                                                                                        yield daysElement.click();
                                                                                                                                        yield daysElement.sendKeys(protractor_1.protractor.Key.ARROW_DOWN);
                                                                                                                                        yield daysElement.sendKeys(protractor_1.protractor.Key.ENTER);
                                                                                                                                        let passwordElement = protractor_2.element(protractor_2.by.model('Password'));
                                                                                                                                        let confirmPassword = protractor_2.element(protractor_2.by.model('CPassword'));
                                                                                                                                        yield passwordElement.sendKeys("Wale123");
                                                                                                                                        yield confirmPassword.sendKeys("Wale123");
                                                                                                                                        let submitButton = protractor_2.element(protractor_2.by.id('submitbtn'));
                                                                                                                                        yield submitButton.click();
                                                                                                                                        let titleTextElement = protractor_2.element(protractor_2.by.css('div[align="center"]'));
                                                                                                                                        yield titleTextElement.getText().then(function (titleText) {
                                                                                                                                            return __awaiter(this, void 0, void 0, function* () {
                                                                                                                                                yield expect(titleText).toBe("Automation Demo Site");
                                                                                                                                                let MenuTextElement = protractor_2.element.all(protractor_2.by.css("ul.nav.navbar-nav>li>a"));
                                                                                                                                                yield MenuTextElement.then(function (menuElements) {
                                                                                                                                                    return __awaiter(this, void 0, void 0, function* () {
                                                                                                                                                        for (let i = 0; i < menuElements.length; i++) {
                                                                                                                                                            yield menuElements[i].getText().then(function (menuText) {
                                                                                                                                                                return __awaiter(this, void 0, void 0, function* () {
                                                                                                                                                                    if (menuText == "Widgets") {
                                                                                                                                                                        yield menuElements[i].click();
                                                                                                                                                                        //await menuElements[i].sendKeys(protractor.Key.ARROW_DOWN);
                                                                                                                                                                        // await  menuElements[i].sendKeys(protractor.Key.ENTER);
                                                                                                                                                                        let WidgetsElement = protractor_2.element.all(protractor_2.by.xpath('(//ul[@class="dropdown-menu"])[2]//li//a'));
                                                                                                                                                                        WidgetsElement.then(function (widgetChildMenu) {
                                                                                                                                                                            for (let i = 0; i < widgetChildMenu.length; i++) {
                                                                                                                                                                                widgetChildMenu[i].getText().then(function (widgetChild) {
                                                                                                                                                                                    return __awaiter(this, void 0, void 0, function* () {
                                                                                                                                                                                        if (widgetChild == "Datepicker") {
                                                                                                                                                                                            widgetChildMenu[i].click();
                                                                                                                                                                                            yield protractor_1.browser.getTitle().then(function (accordionPageTitle) {
                                                                                                                                                                                                return __awaiter(this, void 0, void 0, function* () {
                                                                                                                                                                                                    yield expect(accordionPageTitle).toBe("Datepicker");
                                                                                                                                                                                                    let menusElement = protractor_2.element.all(protractor_2.by.css('li.dropdown>a'));
                                                                                                                                                                                                    let subMenuElement = menusElement.all(protractor_2.by.css('ul.dropdown-menu>li>a'));
                                                                                                                                                                                                    subMenuElement.then(function (selectSubMenu) {
                                                                                                                                                                                                        for (let i = 0; i < selectSubMenu.length; i++) {
                                                                                                                                                                                                            selectSubMenu[i].getText().then(function (mySubMenu) {
                                                                                                                                                                                                                if (mySubMenu == "Alerts") {
                                                                                                                                                                                                                    selectSubMenu[i].click();
                                                                                                                                                                                                                }
                                                                                                                                                                                                            });
                                                                                                                                                                                                        }
                                                                                                                                                                                                    });
                                                                                                                                                                                                });
                                                                                                                                                                                            });
                                                                                                                                                                                        }
                                                                                                                                                                                    });
                                                                                                                                                                                });
                                                                                                                                                                            }
                                                                                                                                                                        });
                                                                                                                                                                    }
                                                                                                                                                                });
                                                                                                                                                            });
                                                                                                                                                        }
                                                                                                                                                    });
                                                                                                                                                });
                                                                                                                                            });
                                                                                                                                        });
                                                                                                                                    }
                                                                                                                                });
                                                                                                                            });
                                                                                                                        }
                                                                                                                    });
                                                                                                                });
                                                                                                            }
                                                                                                        });
                                                                                                    });
                                                                                                }
                                                                                            });
                                                                                        });
                                                                                    }
                                                                                });
                                                                            });
                                                                        }
                                                                    });
                                                                });
                                                            }
                                                        });
                                                    });
                                                }
                                            });
                                        });
                                    }
                                });
                            });
                        }
                    });
                });
            });
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2RlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSwyQ0FBaUQ7QUFDakQsMkNBQXlDO0FBRXpDLFFBQVEsQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLEVBQUU7SUFFMUMsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLEdBQVMsRUFBRTtRQUU1QyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7UUFHcEUsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFnQixXQUFXOztnQkFDckQsTUFBTSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUUxQixJQUFJLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDakMsTUFBTSxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUVwQyxJQUFJLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDOUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FB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