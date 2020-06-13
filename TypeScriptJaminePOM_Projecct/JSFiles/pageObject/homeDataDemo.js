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
exports.HomeDemo = void 0;
const protractor_1 = require("protractor");
const ElementAction_1 = require("../utility/ElementAction");
class HomeDemo {
    constructor() {
        /*  firstName = element(by.model('FirstName'));
        lastName = element(by.model('LastName'));
        homeAdress = element(by.model('Adress'));
        emailBox = element(by.model('EmailAdress'));
        phoneNumber = element(by.model('Phone')); */
        this.firstName = new ElementAction_1.ElementAction(protractor_1.by.model('FirstName'));
        this.lastName = new ElementAction_1.ElementAction(protractor_1.by.model('LastName'));
        this.homeAdress = new ElementAction_1.ElementAction(protractor_1.by.model('Adress'));
        this.emailBox = new ElementAction_1.ElementAction(protractor_1.by.model('EmailAdress'));
        this.phoneNumber = new ElementAction_1.ElementAction(protractor_1.by.model('Phone'));
    }
    identityDetails(firstName, lastName, homeAdress, emailBox, phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            this.firstName.sendKeys(firstName);
            this.lastName.sendKeys(lastName);
            this.homeAdress.sendKeys(homeAdress);
            this.emailBox.sendKeys(emailBox);
            this.phoneNumber.sendKeys(phoneNumber);
        });
    }
}
exports.HomeDemo = HomeDemo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZURhdGFEZW1vLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9ob21lRGF0YURlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXlDO0FBQ3pDLDREQUF5RDtBQUd6RCxNQUFhLFFBQVE7SUFBckI7UUFFSTs7OztvREFJNEM7UUFHaEQsY0FBUyxHQUFFLElBQUksNkJBQWEsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDcEQsYUFBUSxHQUFHLElBQUksNkJBQWEsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDbkQsZUFBVSxHQUFHLElBQUksNkJBQWEsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsYUFBUSxHQUFHLElBQUksNkJBQWEsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDdEQsZ0JBQVcsR0FBRyxJQUFJLDZCQUFhLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBYS9DLENBQUM7SUFWQyxlQUFlLENBQUMsU0FBaUIsRUFBRSxRQUFnQixFQUFFLFVBQWtCLEVBQUcsUUFBZ0IsRUFBRSxXQUFtQjs7WUFDakgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUE7UUFFMUMsQ0FBQztLQUFBO0NBR0k7QUExQkwsNEJBMEJLIn0=