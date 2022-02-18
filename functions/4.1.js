const readlineSync= require("readline-sync");
// This function takes 2 parameters and designates them in order to calculate the area of a rectangle
const calcSurface = (length, width) =>{
    return length * width;
}
let askle = readlineSync.questionInt("Choose the lenght of the rectangle : "); // Convention kamelCase (chaque mot = majuscule 1ere lettre sauf premier mot)
let askwi = readlineSync.questionInt("Choose the width of the rectangle : ");
console.log(calcSurface(askle, askwi));