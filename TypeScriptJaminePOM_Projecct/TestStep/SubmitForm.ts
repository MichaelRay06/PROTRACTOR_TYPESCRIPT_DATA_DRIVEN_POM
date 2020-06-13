import { HomePage } from "../pageObject/HomePage"
import { browser } from "protractor";
import { WebTablePage } from "../pageObject/WebTablePage";
import { util } from "../utility/util";

var objectDataProvider = require('../DataSet/homePageTestData');
var using = require('jasmine-data-provider');


describe('demo automation homepage demo', () => {
    let homePage= new HomePage();
    let webTable = new WebTablePage();


    beforeEach(async ()=>{
    await browser.get('http://demo.automationtesting.in/Register.html');
    
    let expectedTitle= util.getPageTitle();
    expect(expectedTitle).toBe('Register');
    
    })

    using(objectDataProvider.dataDriven, async (data: any, description: any) =>{

 it('populating the register form'+ description, async () => {

   await homePage.identityDetails(data.firstName, data.lastName, data.homeAdress, data.emailBox, data.phoneNumber);
   await homePage.selectGender(data.selectGender);
   await homePage.selectHobby(data.selectHobby);
   await homePage.clickLangBox();
   await homePage.selectedLanguages(data.Languages);
   await homePage.selectedSkills(data.selectedSkills);
   await homePage.country(data.country);
   await homePage.selectedCountries(data.selectedCountries);
   await homePage.selectedDates(data.DOB_year ,data.DOB_month , data.DOB_day);
   await homePage.pupolatePassword(data.password, data.confirmPassword);
   await homePage.submitForm();
   await webTable.clickWebTableMenu();
   await webTable.getPageTitle();
   await webTable.editTableCellName();
 

   let expectedTitle= util.getPageTitle();
   expect(expectedTitle).toBe(data.expectedTitle);

   
  })

 })

})


