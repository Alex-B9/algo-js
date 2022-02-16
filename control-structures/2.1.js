const readlineSync=require("readline-sync");

let age=new Number(readlineSync.question("How old are you?"));
if (age>18){
    console.log("You're adult");
}else {
    console.log("You're not adult");
}