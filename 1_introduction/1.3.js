const readlineSync = require("readline-sync") // Faire une demande à l'uilisateur

let firstName = readlineSync.question("What's your name?");
console.log("Hello " + firstName);