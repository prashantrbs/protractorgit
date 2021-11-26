//const { browser } = require("protractor");

const { browser } = require("protractor");

let listPage=function(){
    let formbutton=element(by.id("form-page-link"));
    let formname=element(by.xpath("//input[@data-ng-model='FC.contact.firstName']"));
    let formsurname=element(by.id("lastName"));
    let formemail=element(by.id("email"));
    let formgender=element(by.id("male"));
    let formage=element(by.id("age"));
    let formnote=element(by.id("info"));
    let formsave=element(by.id("save-btn"));

    this.get=function(url)
    {
        browser.get(url);
    }
    
    this.setForm=function(){
        formbutton.click();
    }

    this.setName=function(Name){
        formname.sendkeys(Name);
    }


};
module.exports=new listPage();