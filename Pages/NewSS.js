const { browser } = require("protractor");

describe("Test SUit", function()
{
    it("newone", function()
    {
        //browser.waitForAngularEnabled(false);
        browser.get("https://www.globalsqa.com/angularJs-protractor/Multiform/#/form/profile");
        browser.sleep();
        browser.element(by.model("formData.name")).sendKeys("asdf");
        browser.element(by.model("formData.email")).sendKeys("sad@sd.com");
        browser.element(by.xpath("//a[@ui-sref='form.interests']")).click();
        browser.sleep(5000);
        
    });
});