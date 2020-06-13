import { element, by, browser } from "protractor";
import { ElementAction } from "../utility/ElementAction";




export class DragAndDrop{
 
    widgetTopMenuElement=new ElementAction(by.xpath('//a[text()="Widgets"]'));
    clickDraggDropWindown= new ElementAction(by.xpath('(//a[@href="droppable.php"])[2]'))
    selectDragTopMenu= new ElementAction(by.xpath('//a[text()="Default functionality"]'))


async selectDropWindow(){
await this.clickDraggDropWindown.click()

}

async clickDragTopMenu(){
   await this.selectDragTopMenu.click()


}
async dragandDropElement(){
    let destination= element(by.id('droppable'))
    let source=element(by.id('draggable'))

    
    await browser.actions().dragAndDrop(source, destination).perform();
    
   
}
}

/* 
async getChildSeclectableMenu(){
    this.getTopSeclectableMenu();
    let subMenuElement=element.all(by.css('ul.dropdown-menu>li>a'));
    await subMenuElement.then(async function(selectSubMenu){
        for (let i=0; i<selectSubMenu.length; i++){
            await selectSubMenu[i].getText().then(async function(mySubMenu: any){
               if(mySubMenu=="Drag and Drop"){
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




 */