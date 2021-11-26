const { element, browser } = require("protractor")

let todo=function()
{
    var addtodo=element(by.xpath("//button[@id='add-btn']"));
    let nameTodo=element(by.xpath("//input[@id='todo-name']"));
    let typeTodo=element(by.css("option[label=Personal]"));
    let estimatedTodo=element(by.xpath("//select[@id='todo-estimated-time']//option[@label='5.5 h']"));
  

    this.get=function(url)
    {
        browser.get(url);
    }

    this.todobutton=function()
    {
        addtodo.click();
    }

    this.getName=function(todoname)
    {
        nameTodo.sendKeys(todoname);
    }
    this.selectType=function()
    {
        typeTodo.click();
    }
    this.selectEstimate=function(estimation)
    {
        estimatedTodo.click(estimation);
    }

    browser.executeScript("document.getElementById('todo-date').value='07/11/2020'"); //date sending





};
module.exports=new todo();