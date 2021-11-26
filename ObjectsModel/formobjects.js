const { browser, element } = require('protractor');
let formRef=require('../ComponentModels/formcomp.js')
describe("Form Page Suit", function()
{
    browser.waitForAngularEnabled(false);
    beforeAll(function()
    {
        formRef.geurl("https://angular.io/features");
        
    });
    it("Test case1",function()
    {
        formRef.getstartedbutton();
        
        expect(browser.getTitle()).toBe('Angular - FEATURES & BENEFITS');
        
    });
});