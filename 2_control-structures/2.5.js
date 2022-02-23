const readlineSync=require("readline-sync");
let nbr = 42;

let nbre = new Number(readlineSync.question("What's your favorite number ?"));
if (nbre == nbr){
    console.log("Hello !");
}else{
    console.log("Are you sure ?");
    console.log(nbre);
}