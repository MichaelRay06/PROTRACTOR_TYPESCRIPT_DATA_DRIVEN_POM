import { ElementAction } from "../utility/ElementAction";
import { by, protractor, element, browser } from "protractor";

export class HandleWidget{

    accordionColapseElement= new ElementAction(by.css('a[href="#collapse2"]'));
    autoCompleteElement= new ElementAction(by.id('tags'));
    autoCompleteElement1= new ElementAction(by.id('tags'));
    verifyTextDisplayed= new ElementAction(by.xpath('(//div[@id="ui-id-4"])[1]'));
    MenuTextElement= new ElementAction (by.css('ul.nav.navbar-nav>li>a'));
    selectAccordionWindow=new ElementAction(by.css('h3[class*="ui-state-hover"]'));
    clickeAutoCompleteWindow= new ElementAction(by.xpath('(//a[@href="autocomplete.php"])[2]'))

    async clickedAuctompleteWindow(){
       
            await this.clickeAutoCompleteWindow.click()
      
          
    }
   

    async getChildSeclectableAutoCompleteMenu(autoSelectText: string){
      
        let subMenuElement=element.all(by.css('ul#ui-id-1>li.ui-menu-item'));
        await subMenuElement.then(async function(selectSubMenu){
            for (let i=0; i<selectSubMenu.length; i++){
                await selectSubMenu[i].getText().then(async function(mySubMenu: any){
                   if(mySubMenu==autoSelectText){
                    await selectSubMenu[i].click();
                    //await  browser.actions().mouseMove(await selectSubMenu[i]).perform;       
                
            }
        })
    }
    })
    }
    async getTopSeclectableWidgetsMenu(autoTopMenu: string){
        let menusElement= element.all(by.css('ul.responsive-tabs>li'));
        await menusElement.then(async function(selectMenu){
            for (let i=0; i<selectMenu.length; i++){
                await selectMenu[i].getText().then(async function(myMenu: any){
                   if(myMenu==autoTopMenu){
                    await selectMenu[i].click();
                    //await  browser.actions().mouseMove(await selectSubMenu[i]).perform;
    
    
                   
                    
                    
                }
            })
        }
    })

}
async sendTextToAutoCompelete(autoCompleteText: string){
       
      
    await this.autoCompleteElement.sendKeys(autoCompleteText)
   // await this.autoCompleteElement1.sendKeys(protractor.Key.ARROW_DOWN);
    //await this.autoCompleteElement1.sendKeys(protractor.Key.ENTER);



}


async clickAccordionWindow(){
    
await this.selectAccordionWindow.click();

}
async selectAccordionMenu(){
this.clickAccordionWindow();

let WidgetsElement = element.all(by.css('a[href*="#example-1"]'));
await WidgetsElement.then(async function(ChildMenu){
    for(let i=0;  i<ChildMenu.length; i++){
        await  ChildMenu[i].getText().then(async function(widgetChild: any){
            if(widgetChild=="Default functionality"){
                await  ChildMenu[i].click(); 


            }

        })

    }

})


}
async clickToDisplyedAccordion(){
        
    await this.accordionColapseElement.click();

}
    
    }
    
    
    
    
    
    





