const readlineSync=require("readline-sync");
// Fonction qui calcul la distance entre deux point : 
const calcDistance=(x1,y1,x2,y2)=>{
    return Math.sqrt(Math.pow(y2-y1,2) + Math.pow (x2-x1,2));// A(x1-y1) et B(x2-y2) : d(A,B) = V(x2-x1)² + (y2-x2)²
}
let xOne=new Number(readlineSync.question("Choose your X1 : "));
let yOne=new Number(readlineSync.question("Choose your Y1 : "));
let xTwo=new Number(readlineSync.question("Choose your X2 : "));
let yTwo=new Number(readlineSync.question("Choose your Y2 : "));
console.log(calcDistance(xOne,yOne,xTwo,yTwo));










