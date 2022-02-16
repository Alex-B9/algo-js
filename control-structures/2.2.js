const readlineSync=require("readline-sync");

let min= new Number(readlineSync.question("Choose a min number"));
let max= new Number(readlineSync.question("Choose a max number"));
if (min > max){
    console.log("Error: You didn't understand anything, try again");
}else{ 
let current= new Number(readlineSync.question("Good, now choose a current number"));
if (min>current){
    console.log("Error: You didn't understand anything, try again");
}else if (current>max){
    console.log("Error: You didn't understand anything, try again");
}
}