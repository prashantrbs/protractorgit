const { browser, element } = require("protractor");

let formpage=function()
{
    let getstarted=element(by.xpath("//a[text()='Get Started']"));
    
    
    this.geurl=function(url)
    {
        browser.get(url);
    }
    this.getstartedbutton=function()
    {
        getstarted.click();
    }
    
};
module.exports=new formpage();