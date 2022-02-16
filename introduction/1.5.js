const readlineSync = require("readline-sync");

let num1 = Math.trunc(readlineSync.question("What's your decimal number ?"));// Math.trunc() retourne la troncature(terme utilisé pour couper le développement décimal) entière d'un nombre en retirant sa partie décimale.
let num2 = new Number(readlineSync.question("What's your multiplier ?"));
let total = num1 * num2

console.log(total);