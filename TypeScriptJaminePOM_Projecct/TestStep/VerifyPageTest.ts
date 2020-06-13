
import { browser } from "protractor";
import { util } from "../utility/util";
import { VerifyPage } from "../pageObject/VerifyPage";
    var objectDataProvider= require('../DataSet/pageTitleData')
    var using= require('jasmine-data-provider')
    
    describe('verifyiong page titles',async()=>{
        let pageVerify= new VerifyPage(); 
      
      
    
        beforeEach(async ()=>{
    
            await browser.get('http://demo.automationtesting.in/Register.html');
           
            let expectedTitle= util.getPageTitle();
            expect(expectedTitle).toBe('Register');
    
    })
    
    using(objectDataProvider.vrifyTitles, async(data: any, description: any)=>{
    
        it('vrifying opage title for subMenu'+ description, async()=>{
            pageVerify.getTopSeclectableMenu(data.TopMenu);
            pageVerify.getChildSeclectableMenu(data.SubMenu);
           

            let expectedTitle= util.getPageTitle();
            expect(expectedTitle).toBe(data.expectedSubMenu);
    
    
    
    
    
        })
    
    })
    
        
    })