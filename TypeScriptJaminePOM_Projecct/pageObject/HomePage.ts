
import { ElementAction } from "../utility/ElementAction";
import { by, protractor, browser, element } from "protractor";



export class HomePage {

    //personal details
    firstName = new ElementAction(by.model('FirstName'));
    lastName = new ElementAction(by.model('LastName'));
    homeAdress = new ElementAction(by.model('Adress'));
    emailBox = new ElementAction(by.model('EmailAdress'));
    phoneNumber = new ElementAction(by.model('Phone'));

    //select gender
    radioButton = new ElementAction(by.css('input[ng-model="radiovalue"]'));
    genderText = new ElementAction(by.model('radiovalue'));

    //seleclet hobbies
    hobbiescheckBox = new ElementAction(by.css('label.checks'));
    hobbyElement = new ElementAction(by.id("checkbox2"));

    //select language
    lanBox = new ElementAction(by.id('msdd'));
    // languagesBox = new ElementAction(by.css('li.ng-scope> a'));
    //select skills
    skillsBox = new ElementAction(by.model('Skill'));

    //select first country
    countryBox = new ElementAction(by.model('country'));


    //select second  country
    selectCountries = new ElementAction(by.css('span[role="combobox"]'));
    sendmyText = new ElementAction(by.css('input[role="textbox"]'));
    sendTextAction = new ElementAction(by.css('//input.select2-search__field'));

    //select dates of birth
    yearElement = new ElementAction(by.model('yearbox'));
    monthElement = new ElementAction(by.model('monthbox'));
    daysElement = new ElementAction(by.model('daybox'));

    //set password
    passwordElement = new ElementAction(by.model('Password'));
    confirmPassword = new ElementAction(by.model('CPassword'));

    //submit form
    submitButton = new ElementAction(by.id('submitbtn'));
    

    

    async identityDetails(firstName: string, lastName: string, homeAdress: string , emailBox: string, phoneNumber: string) {
        this.firstName.sendKeys(firstName)
        this.lastName.sendKeys(lastName)
        this.homeAdress.sendKeys(homeAdress)
        this.emailBox.sendKeys(emailBox)
        this.phoneNumber.sendKeys(phoneNumber)

    }

    async selectGender(gender: string) {
        await this.radioButton.getAttribute(gender)
        await this.genderText.click();

    }
    // async selectHobby(selectedHobby: any) {
    async selectHobby(hobby: string) {
        await this.hobbiescheckBox.getText(hobby)
        await this.hobbyElement.click();


    }
    //async selectedSkills(selectSkills: any) {
    async selectedSkills(selectSkills: string) {
        await this.skillsBox.selectByOptionText(selectSkills);
    }

    //async country(Country: any) {
    async country(country: string) {
        await this.countryBox.selectByOptionText(country);
    }

    async selectedCountries(countriesSelected: string) {

        let selectCountries1 = element(by.css('span[role="combobox"]'));
        let sendmyText1 = element(by.css('input[role="textbox"]'));
        await selectCountries1.click();
        await sendmyText1.sendKeys(countriesSelected)
        await sendmyText1.sendKeys(protractor.Key.ENTER);


    }
    async selectedDates(years: any, months: string, date: any) {
        await this.yearElement.selectByOptionText(years)
        await this.monthElement.selectByOptionText(months)
        await this.daysElement.selectByOptionText(date)

    }
    async pupolatePassword(password: any, confirmPassword: any) {
        await this.passwordElement.sendKeys(password)
        await this.confirmPassword.sendKeys(confirmPassword)

    }
    async submitForm() {
        await this.submitButton.click();

    }
    async clickLangBox() {
        await this.lanBox.click();
    }


    async selectedLanguages(selectedLang: string) {
        
        let languageBox = element.all(by.css('li.ng-scope> a'));
        await languageBox.then(async function (lanBoxElement: any) {
            for (let i = 0; i < await lanBoxElement.length; i++) {
                await  lanBoxElement[i].getText().then(async function (languageText: any) {
                    if (await languageText ==selectedLang) {
                        await  lanBoxElement[i].click();
                    }


                })

            }

        })


    }
}

