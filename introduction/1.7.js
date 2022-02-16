const readlineSync = require("readline-sync");

let sizeShoes= Math.trunc(readlineSync.question("What's your size shoes ?"));
let year= new Number(readlineSync.question("What's your year of birthday ?"));
let multi= sizeShoes*2;
let ad= multi +5;
let add= ad * 50;
let years= add - year;
let fin= year + 1766;
console.log(fin);