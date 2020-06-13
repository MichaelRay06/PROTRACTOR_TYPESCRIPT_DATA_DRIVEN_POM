import { HomeDemo } from "../pageObject/homeDataDemo";
import { browser } from "protractor";
import { util } from "../utility/util";
var objectDataProvider = require('../DataSet/homePageTestData');
var using = require('jasmine-data-provider');




describe("damostrate data driven test", async()=>{
  let homeDataDemo=  new HomeDemo();
  
 beforeEach(async ()=>{
    await browser.get('http://demo.automationtesting.in/Register.html');
    
    let expectedTitle= util.getPageTitle();
           expect(expectedTitle).toBe('Register');
    })

    using(objectDataProvider.dataDriven, async (data: any, description: any) =>{

        it("home page data driven using dataprivider" + description, async()=>{
          
            homeDataDemo.identityDetails(data.firstName, data.lastName, data.homeAdress, data.emailBox, data.phoneNumber)
    
        })
    }) 

   


})