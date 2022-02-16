const readlineSync = require("readline-sync");

let num1 = Math.trunc(readlineSync.question("What's your decimal number ?"));
let num2 = new Number(readlineSync.question("What's your multiplier ?"));
let total = num1 * num2

console.log(total);