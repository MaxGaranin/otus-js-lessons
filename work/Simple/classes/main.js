const { Agent } = require("./my");

var agent = new Agent();
agent.compare();

var { User } = require("./my.js");
 
var eugene = new User("Eugene", 32);
eugene.sayHi();