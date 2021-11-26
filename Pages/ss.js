const { browser, element } = require("protractor");
var fs=require('fs')

describe("Test Suit", function()
{
    it("New Test", function()
    {
        browser.waitForAngularEnabled(false);
        browser.get("https://www.google.com");
        //browser.element(by.xpath("//a[normalize-space()='Clock']")).click();
        browser.takeScreenshot().then(function(png){
            var stream = fs.createWriteStream('./Pages/screenshot/one.png');
			stream.write(new Buffer(png, 'base64'));
			stream.end();
            browser.sleep();
        })
    });

});