import { element, by } from "protractor";
import { ElementAction } from "../utility/ElementAction";


export class HomeDemo{

    /*  firstName = element(by.model('FirstName'));
    lastName = element(by.model('LastName'));
    homeAdress = element(by.model('Adress'));
    emailBox = element(by.model('EmailAdress'));
    phoneNumber = element(by.model('Phone')); */
 

firstName =new ElementAction(by.model('FirstName'));
lastName = new ElementAction(by.model('LastName'));
homeAdress = new ElementAction(by.model('Adress'));
emailBox = new ElementAction(by.model('EmailAdress'));
phoneNumber = new ElementAction(by.model('Phone')); 


async identityDetails(firstName: string, lastName: string, homeAdress: string , emailBox: string, phoneNumber: string) {
    this.firstName.sendKeys(firstName)
    this.lastName.sendKeys(lastName)
    this.homeAdress.sendKeys(homeAdress)
    this.emailBox.sendKeys(emailBox)
    this.phoneNumber.sendKeys(phoneNumber)

}
  
    
    }
    
