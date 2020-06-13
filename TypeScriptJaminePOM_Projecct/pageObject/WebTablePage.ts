import { by, browser, element } from "protractor";
import{ElementAction} from "../utility/ElementAction";

export class WebTablePage{

  canceclButton= new ElementAction(by.xpath('//button[text()="Cancel"]')); 
  tableCellsElement= element.all(by.css('div[role="gridcell"]'));
  webTabltMenu= new ElementAction(by.css('a[href="WebTable.html"]'));
    


  async clickWebTableMenu(){
      await this.webTabltMenu.click();
  }
async getPageTitle(){
   let actualTitle= await browser.getTitle();
   expect(actualTitle).toBe("Web Table");   

}
async editTableCellName(){
    let   doublecLICKeditElement= element(by.css('div:nth-of-type(2) > div[role="row"] > div:nth-of-type(6) > .ng-isolate-scope.ng-scope .fa.fa-pencil'))
    let WidgetsElement =  element.all(by.css('div[role="gridcell"]'));

    await  WidgetsElement.then(async function(cellTextElement: any) {
      for (let i = 0; i < await cellTextElement.length; i++) {
        await  cellTextElement[i].getText().then(async function (cellText: any) {
             if (await cellText =="Vasantham") {
              await cellTextElement[i].click();
              await browser.actions().mouseMove(doublecLICKeditElement).doubleClick().perform();
             }
            

         })

      }

  })



    /* WidgetsElement.then(function (cellTextElement) {
        for (let i = 0; i < cellTextElement.length; i++) {
          cellTextElement[i].getText().then(async function (cellText: any) {
                if (cellText =="Vasantham") { */


 /*  await this.tableCellsElement.each(async function(row: any){
   let cell= await row.$$('div[ng-repeat*="(colRenderIndex, col) "]');
  await cell.get(1).getText().then(async function(cellText:any){
       if(cellText=="Vasantham") */
     // await cell.get(5).$$('user-click-select.ng-scope.ng-isolate-scope>div>button>i').click();
  
   
  }
}

