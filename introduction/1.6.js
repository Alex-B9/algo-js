const readlineSync = require("readline-sync");

let num1 = new Number(readlineSync.question("What's your number ?"));
let num2 = new Number(readlineSync.question("What's your number division ?"));
let total = num1 / num2;

console.log(total);