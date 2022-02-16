const readlineSync = require("readline-sync");

let firstName = readlineSync.question("What's your first name ?");
let name= readlineSync.question("What's your name ?");
let city= readlineSync.question("Where you living ?");

console.log("Hello " + firstName+ " " + name +" and you live in " + city);