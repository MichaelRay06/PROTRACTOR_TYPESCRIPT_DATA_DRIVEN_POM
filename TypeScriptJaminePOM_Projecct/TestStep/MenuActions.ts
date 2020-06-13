import { browser } from "protractor"
import { WidgetsPage } from "../pageObject/WidgetsPage"
import { HandleWidget } from "../pageObject/HandleWidget";
import { util } from "../utility/util";
var objectDataProvider = require('../DataSet/homePageTestData');
var objectDataProvider2= require('../DataSet/alertDataSet')
var using = require('jasmine-data-provider');


xdescribe('performimg menu actions', () => {
    let handleWidget = new HandleWidget();
    let widgetsPage= new WidgetsPage();
 

    beforeEach(async () => {
    await browser.get('http://way2automation.com/way2auto_jquery/index.php')
  
    let expectedTitle= util.getPageTitle();
    expect(expectedTitle).toBe('Welcome to the Test Site');

    })
    
   

       xit('vrifying ACCRON DISPLAYED test  scenario', async () => {

            await handleWidget.selectAccordionMenu();
            await handleWidget.clickToDisplyedAccordion();
            await handleWidget.verifyTextDisplayed.waitForEl()
           expect<any>(await handleWidget.verifyTextDisplayed.getText('displayedText')).toContain('Phasellus');
           let expectedTitle= util.getPageTitle();
           expect(expectedTitle).toBe('Welcome');
        })
       
        using(objectDataProvider.dataAuto, async (data: any, description: any) =>{
       xit('verifying auto complete text'+ description, async () => {
            await handleWidget.clickedAuctompleteWindow()
            await handleWidget.getTopSeclectableWidgetsMenu(data.autoTopMenu)
            await handleWidget.sendTextToAutoCompelete(data.autoCompleteText);
            await handleWidget.getChildSeclectableAutoCompleteMenu(data.autoSelectText)
           await handleWidget.autoCompleteElement1.waitForEl();

           // expect<any>(await handleWidget.autoCompleteElement1.getText('get text valeu')).toBe(data.expectedValue);
           expect<any>(await handleWidget.autoCompleteElement1.getAttribute('value')).toBe(data.expectedValue); 
          
            let actualPageTitle= util.getPageTitle();
            expect(actualPageTitle).toBe(data.expectedTitle);
        })
    })

    using(objectDataProvider.alerts, async (data: any, description: any) =>{
        xit('verifying alert text', async () => {
            await widgetsPage.clickAlertWindow();
            await widgetsPage.getTopSeclectableMenu(data.alertTpoMenu);
            await widgetsPage.getChildSeclectableMenu(data.alertTextButton);
 
    
           
            await util.VerifyAndCloseAlert(data.text , data.sendAlert, data.containText)
        })
        
               
            
    })  
              
            
     
       
    }) 
    
 

    
    
    
  
