const readlineSync=require("readline-sync");
// Fonction qui renvoie un chiffre aléatoire en 0 et 10 
const rand10=()=>{
    return Math.trunc(Math.random()*11 );// 11 ne sera pas pris en compte,  si on aurait pris 10 on aurait vu que 9
}
const multirand=(n/*numberOfMultiRand*/)=>{
    let arr= [];
    for (let i = 0; i<n; i++){
    arr[i]=rand10();
}
return arr;
}
let askn =  new Number(readlineSync.question("Choose a number of random numbers : "));
console.log(multirand(askn));