const readlineSync=require("readline-sync");

let nbr = readlineSync.questionInt("Enter a number : ")
var nbr1 = 0;
for(let i = 0; i < nbr; i++){
let newNbr=[];
newNbr[i] = readlineSync.questionInt("Enter a new number : ");
    nbr1 += newNbr[i];
console.log(nbr1);
}