import { element, by } from "protractor";

export class VerifyPage{

    async getChildSeclectableMenu(SubMenu: string){
        let subMenuElement=element.all(by.css('ul.dropdown-menu>li>a'));
        await subMenuElement.then(async function(selectSubMenu){
            for (let i=0; i<selectSubMenu.length; i++){
                await selectSubMenu[i].getText().then(async function(mySubMenu: any){
                   if(mySubMenu==SubMenu){
                    await selectSubMenu[i].click();
                    //await  browser.actions().mouseMove(await selectSubMenu[i]).perform;       
                
            }
        })
    }
    })
    }
    async getTopSeclectableMenu(TopMenu: String){
        let menusElement= element.all(by.css('li.dropdown>a'));
        await menusElement.then(async function(selectMenu){
            for (let i=0; i<selectMenu.length; i++){
                await selectMenu[i].getText().then(async function(myMenu: any){
                   if(myMenu==TopMenu){
                    await selectMenu[i].click();
                    //await  browser.actions().mouseMove(await selectSubMenu[i]).perform;
    
    
                   
                    
                    
                }
            })
        }
    })



    }
}