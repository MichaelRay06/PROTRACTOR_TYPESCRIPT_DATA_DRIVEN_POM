import { protractor, browser, element, by } from "protractor";
import { ElementAction } from "../utility/ElementAction";


export class util {
    

    static async VerifyAndCloseAlert(text: string, sendAlert: string, containText: String) {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 4000, "ALert not found");

        let alert = await browser.switchTo().alert();
        let alertText = await alert.getText();

        /*alertText.then(function(txt){
            log.debug(txt);
        })*/
        //log.debug(alertText);
        browser.sleep(2000);
       if (alertText==text){
        await alert.accept();
       }else{

       // let alert = await browser.switchTo().alert();
        await alert.sendKeys(sendAlert)
        browser.sleep(2000);
    expect<any>(alertText).toContain(containText);
    await alert.accept(); 

       }

       }
       

    

   /*  static async setAlertText(text1: string) {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 4000, "ALert not found");

        let alert = await browser.switchTo().alert();
        let alertText = await alert.sendKeys(text1)

    }
 */

    static async getURL(url: string) {
        await browser.manage().timeouts().pageLoadTimeout(30000)
        await browser.get(url);

    }
    static async getPageTitle() {
        let actualPageTitle = await browser.getTitle();
        return actualPageTitle;

    }
    static async way2AutomationLogin(){
        
       element(by.css('a[href="#login"]')).click()
        element(by.name("username")).sendKeys('michaelRay')
        element(by.name("password")).sendKeys('54SonsofGod54')
        element(by.css('input.button')).click()

    }

}