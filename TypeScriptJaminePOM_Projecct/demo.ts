
import { browser, protractor } from 'protractor';
import { element, by } from 'protractor';

describe('this is demo automation test', () => {

    it('page content confirmation test', async () => {

        await browser.get('http://demo.automationtesting.in/Register.html');


        await browser.getTitle().then(async function (actualTitle) {
            await expect(actualTitle).toBe("Register");
            await browser.sleep(1000);

            let firstName = element(by.model('FirstName'));
            let lastName = element(by.model('LastName'));
            await firstName.sendKeys("Wale");
            await lastName.sendKeys("Oriolowo");

            let emailAdress = element(by.model('Adress'));
            emailAdress.sendKeys("26, St Dontts Road");
            let emailBox = element(by.model('EmailAdress'));
            let phoneNum = element(by.model('Phone'));


            await emailBox.sendKeys("wale999@gmail.com");
            await phoneNum.sendKeys("9988579966");

            let radioButton = element.all(by.css('input[ng-model="radiovalue"]'));
            await radioButton.then(async function (items) {
                for (let i = 0; i < items.length; i++) {

                    (items[i].getAttribute('value')).then(async function (txt: any) {
                        if (txt == "Male") {
                            await items[i].click();


                            let hobbiescheckBox = element.all(by.css('label.checks'));


                            await hobbiescheckBox.then(async function (selectedHobby) {
                                for (let i = 0; i < selectedHobby.length; i++) {
                                    await selectedHobby[i].getText().then(async function (hobbies: any) {
                                        if (hobbies == "Movies") {
                                            selectedHobby[i].click();



                                            let hobbyElement = element(by.id("checkbox2"));
                                            await hobbyElement.click();

                                            let lanBox = element(by.id('msdd'));
                                            await lanBox.click();

                                            let selectText = element.all(by.css('li.ng-scope> a'));



                                            await selectText.then(async function (selectedText) {
                                                for (let i = 0; i < selectedText.length; i++) {
                                                    await selectedText[i].getText().then(async function (lang: any) {
                                                        if (lang == "Czech") {
                                                            await selectedText[i].click();

                                                            let skills = element(by.model('Skill'));
                                                            let options = skills.all(by.tagName('option'));

                                                            await options.then(async function (selectSkills) {
                                                                for (let i = 0; i < selectSkills.length; i++) {
                                                                    await selectSkills[i].getText().then(async function (mySkills: any) {
                                                                        if (mySkills == "Android") {
                                                                            await selectSkills[i].click();


                                                                            let country = element(by.model('country'));
                                                                            let options = country.all(by.tagName('option'));

                                                                            await options.then(async function (selectCountry) {
                                                                                for (let i = 0; i < selectCountry.length; i++) {
                                                                                    await selectCountry[i].getText().then(async function (country: any) {
                                                                                        if (country == "Nigeria") {
                                                                                            await selectCountry[i].click();

                                                                                            let selectCountries = element(by.css('span[role="combobox"]'));
                                                                                            let sendmyText = element(by.css('input[role="textbox"]'));
                                                                                            await selectCountries.click();
                                                                                            await sendmyText.sendKeys("Ho");
                                                                                            await sendmyText.sendKeys(protractor.Key.ENTER);

                                                                                            let yearElement = element(by.model('yearbox'));
                                                                                            let monthElement = element(by.model('monthbox'));
                                                                                            let daysElement = element(by.model('daybox'));


                                                                                            await yearElement.click();
                                                                                            await yearElement.sendKeys(protractor.Key.ARROW_DOWN);
                                                                                            await yearElement.sendKeys(protractor.Key.ENTER);

                                                                                            monthElement.click();
                                                                                            monthElement.sendKeys(protractor.Key.ARROW_DOWN);
                                                                                            monthElement.sendKeys(protractor.Key.ENTER);

                                                                                            await daysElement.click();
                                                                                            await daysElement.sendKeys(protractor.Key.ARROW_DOWN);
                                                                                            await daysElement.sendKeys(protractor.Key.ENTER);

                                                                                            let passwordElement = element(by.model('Password'));
                                                                                            let confirmPassword = element(by.model('CPassword'));

                                                                                            await passwordElement.sendKeys("Wale123")
                                                                                            await confirmPassword.sendKeys("Wale123")

                                                                                            let submitButton = element(by.id('submitbtn'));
                                                                                            await submitButton.click();

                                                                                            let titleTextElement = element(by.css('div[align="center"]'));
                                                                                            await titleTextElement.getText().then(async function (titleText) {
                                                                                                await expect(titleText).toBe("Automation Demo Site");

                                                                                                let MenuTextElement = element.all(by.css("ul.nav.navbar-nav>li>a"));
                                                                                                await MenuTextElement.then(async function (menuElements) {
                                                                                                    for (let i = 0; i < menuElements.length; i++) {
                                                                                                        await menuElements[i].getText().then(async function (menuText: any) {
                                                                                                            if (menuText == "Widgets") {
                                                                                                                await menuElements[i].click();
                                                                                                                //await menuElements[i].sendKeys(protractor.Key.ARROW_DOWN);
                                                                                                                // await  menuElements[i].sendKeys(protractor.Key.ENTER);

                                                                                                                let WidgetsElement = element.all(by.xpath('(//ul[@class="dropdown-menu"])[2]//li//a'));

                                                                                                                WidgetsElement.then(function (widgetChildMenu) {
                                                                                                                    for (let i = 0; i < widgetChildMenu.length; i++) {
                                                                                                                        widgetChildMenu[i].getText().then(async function (widgetChild: any) {
                                                                                                                            if (widgetChild =="Datepicker") {
                                                                                                                                widgetChildMenu[i].click();
                                                                                                                                await browser.getTitle().then(async function (accordionPageTitle) {
                                                                                                                                    await expect(accordionPageTitle).toBe("Datepicker")

                                                                                                                                    let menusElement= element.all(by.css('li.dropdown>a'));
                                                                                                                                    let subMenuElement=menusElement.all(by.css('ul.dropdown-menu>li>a'));
                                                                                                                       
                                                                                                                                    subMenuElement.then(function(selectSubMenu){
                                                                                                                                        for (let i=0; i<selectSubMenu.length; i++){
                                                                                                                                          selectSubMenu[i].getText().then(function(mySubMenu: any){
                                                                                                                                               if(mySubMenu=="Alerts"){
                                                                                                                                                   selectSubMenu[i].click();
                                                                                                                                                   
                                                                                                                                               }
                                                                                                                                              
                                                                                                                       
                                                                                                                                           })
                                                                                                                       
                                                                                                                                        }
                                                                                                                       
                                                                                                                                    })

                                                                                                                                })

                                                                                                                            }

                                                                                                                        })

                                                                                                                    }

                                                                                                                })

                                                                                                            }
                                                                                                        })

                                                                                                    }


                                                                                                })


                                                                                            })



                                                                                        }


                                                                                    })

                                                                                }

                                                                            })
                                                                        }


                                                                    })

                                                                }

                                                            })
                                                        }

                                                    })

                                                }

                                            })
                                        }

                                    })

                                }

                            })




                        }


                    })

                }

            })
        });



    })

})
