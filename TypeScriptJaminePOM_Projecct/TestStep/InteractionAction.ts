import { browser, element, by } from "protractor"
import { DragAndDrop } from "../pageObject/DragAndDrop";
import { HndlingInteraction } from "../pageObject/HndlingInteraction";
import { util } from "../utility/util";

describe('performing web interatction', ()=>{

let dragandDrop =new DragAndDrop();
let  hndlingInteraction = new HndlingInteraction();

  
    xit('drag and drop test case',async ()=>{
        browser.ignorSynchronization=true;
        browser.waitForAngularEnabled(false); 
        util.getURL('http://way2automation.com/way2auto_jquery/index.php');
       // util.way2AutomationLogin();
      await  element(by.css('a[href="#login"]')).click()
      await element(by.xpath('//input[@type="text"]')).sendKeys("ichaelRay")
      await element(by.xpath('//input[@type="password"]')).sendKeys("54SonsofGod54")
      await  element(by.css('input.button')).click()
       
        let expectedTitle= util.getPageTitle();
        expect(expectedTitle).toBe('Welcome to the Test Site');
        dragandDrop.dragandDropElement();
     

    },12000);
    
    it('selectable vrification test demo', async ()=>{
       
    util.getURL('http://demo.automationtesting.in/Register.html');

    
       
   await hndlingInteraction.clickElementselectability();
   await hndlingInteraction.clickCrossBrowser();
 

     expect<any>(await hndlingInteraction.confirmDisplayedElement2.getText("to confirm the dispyed text as")).toBe("Cross Browser Testing");
  
     let expectedTitle= util.getPageTitle();
           expect(expectedTitle).toBe('Selectable');
    
    

   })

})




