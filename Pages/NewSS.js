const { browser } = require("protractor");

describe("Test SUit", function()
{
    it("newone", function()
    {
        browser.waitForAngularEnabled(false);
        browser.get("https://www.globalsqa.com/angularJs-protractor/Multiform/#/form/profile");
        browser.sleep();
        
    });
});