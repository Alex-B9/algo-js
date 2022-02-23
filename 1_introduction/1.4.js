const readlineSync = require("readline-sync"); // formulation 

let firstName = readlineSync.question("What's your first name ?"); // question
let name= readlineSync.question("What's your name ?"); // question
let city= readlineSync.question("Where you living ?"); // question

console.log("Hello " + firstName+ " " + name +" and you live in " + city); // réponse