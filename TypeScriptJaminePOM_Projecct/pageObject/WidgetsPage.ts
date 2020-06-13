import {ElementAction} from "../utility/ElementAction";
import { by, element } from "protractor";

export class WidgetsPage{

    selectAlertType= new ElementAction(by.xpath('(//a[@class="analystic"])[3]'))
    clickDispayAlert= new ElementAction(by.css('button.btn.btn-info'))
    alertWindow=new ElementAction(by.xpath('(//a[@href="alert.php"])[2]'))


async clickAlertWindow(){
    await this.alertWindow.click()

}
async getChildSeclectableMenu(alertTextButton: string){
    let subMenuElement=element.all(by.css('button[onclick="myFunction()"]'));
    await subMenuElement.then(async function(selectSubMenu){
        for (let i=0; i<selectSubMenu.length; i++){
            await selectSubMenu[i].getText().then(async function(mySubMenu: any){
               if(mySubMenu==alertTextButton){
                await selectSubMenu[i].click();
            
        }
    })
}
})
}
async getTopSeclectableMenu(alertTpoMenu: string){
    let menusElement= element.all(by.css('a[href*="#example-1-tab"]'));
    await menusElement.then(async function(selectMenu){
        for (let i=0; i<selectMenu.length; i++){
            await selectMenu[i].getText().then(async function(myMenu: any){
               if(myMenu==alertTpoMenu){
                await selectMenu[i].click();


               
                
                
            }
        })
    }
})

}
}
/* async selectTheAlertType(){
    await this.selectAlertType.click()
}
async clickToDisplayAlert(){
    await this.clickDispayAlert.click();

}
}





 */