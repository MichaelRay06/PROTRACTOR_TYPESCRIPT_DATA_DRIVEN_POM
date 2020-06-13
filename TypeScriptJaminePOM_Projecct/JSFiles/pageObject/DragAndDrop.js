"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragAndDrop = void 0;
const protractor_1 = require("protractor");
const ElementAction_1 = require("../utility/ElementAction");
class DragAndDrop {
    constructor() {
        this.widgetTopMenuElement = new ElementAction_1.ElementAction(protractor_1.by.xpath('//a[text()="Widgets"]'));
        this.clickDraggDropWindown = new ElementAction_1.ElementAction(protractor_1.by.xpath('(//a[@href="droppable.php"])[2]'));
        this.selectDragTopMenu = new ElementAction_1.ElementAction(protractor_1.by.xpath('//a[text()="Default functionality"]'));
    }
    selectDropWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clickDraggDropWindown.click();
        });
    }
    clickDragTopMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.selectDragTopMenu.click();
        });
    }
    dragandDropElement() {
        return __awaiter(this, void 0, void 0, function* () {
            let destination = protractor_1.element(protractor_1.by.id('droppable'));
            let source = protractor_1.element(protractor_1.by.id('draggable'));
            yield protractor_1.browser.actions().dragAndDrop(source, destination).perform();
        });
    }
}
exports.DragAndDrop = DragAndDrop;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhZ0FuZERyb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L0RyYWdBbmREcm9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFrRDtBQUNsRCw0REFBeUQ7QUFLekQsTUFBYSxXQUFXO0lBQXhCO1FBRUkseUJBQW9CLEdBQUMsSUFBSSw2QkFBYSxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBQzFFLDBCQUFxQixHQUFFLElBQUksNkJBQWEsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQTtRQUNyRixzQkFBaUIsR0FBRSxJQUFJLDZCQUFhLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUE7SUFzQnpGLENBQUM7SUFuQkssZ0JBQWdCOztZQUN0QixNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUV4QyxDQUFDO0tBQUE7SUFFSyxnQkFBZ0I7O1lBQ25CLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFBO1FBR3ZDLENBQUM7S0FBQTtJQUNLLGtCQUFrQjs7WUFDcEIsSUFBSSxXQUFXLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7WUFDNUMsSUFBSSxNQUFNLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7WUFHdEMsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFHdkUsQ0FBQztLQUFBO0NBQ0E7QUExQkQsa0NBMEJDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUNHIn0=