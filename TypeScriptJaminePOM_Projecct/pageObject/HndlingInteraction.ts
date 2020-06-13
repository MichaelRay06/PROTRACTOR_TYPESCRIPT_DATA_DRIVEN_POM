import { ElementAction } from "../utility/ElementAction";
import { by, element } from "protractor";

export class HndlingInteraction{
    confirmDisplayedElement2= new ElementAction(by.id('result'));
    confirmDisplayedElement1= element(by.id('result'));
    elementMakeSelectable= new ElementAction(by.css('a[href="#Serialize"]'));
    crossBrowserElement= new ElementAction(by.xpath('(//li//b[text()="Sakinalium - Cross Browser Testing"])[2]'));
 

async clickElementselectability(){
    this.getChildSeclectableMenu()
    await this.elementMakeSelectable.click();

    
}
async clickCrossBrowser(){
    await this.crossBrowserElement.click();

/* }
async confirDispalayedText(){
  const atualDisplayedText = await this.confirmDisplayedElement1.getText();
  return await atualDisplayedText; */
}

async getChildSeclectableMenu(){
    this.getTopSeclectableMenu();
    let subMenuElement=element.all(by.css('ul.dropdown-menu>li>a'));
    await subMenuElement.then(async function(selectSubMenu){
        for (let i=0; i<selectSubMenu.length; i++){
            await selectSubMenu[i].getText().then(async function(mySubMenu: any){
               if(mySubMenu=="Selectable"){
                await selectSubMenu[i].click();
                //await  browser.actions().mouseMove(await selectSubMenu[i]).perform;       
            
        }
    })
}
})
}
async getTopSeclectableMenu(){
    let menusElement= element.all(by.css('li.dropdown>a'));
    await menusElement.then(async function(selectMenu){
        for (let i=0; i<selectMenu.length; i++){
            await selectMenu[i].getText().then(async function(myMenu: any){
               if(myMenu=="Interactions"){
                await selectMenu[i].click();
                //await  browser.actions().mouseMove(await selectSubMenu[i]).perform;


               
                
                
            }
        })
    }
})

}
}






