const readlineSync= require("readline-sync");
const calcSurface = (length, width) =>{
    return length * width;
}
let askle = readlineSync.questionInt("Choose the lenght of the rectangle : "); // Convention kamelCase (chaque mot = majuscule 1ere lettre sauf premier mot)
let askwi = readlineSync.questionInt("Choose the width of the rectangle : ");
console.log(calcSurface(askle, askwi));