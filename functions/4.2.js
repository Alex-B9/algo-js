const readlineSync=require("readline-sync");
// Fonction qui renvoie un chiffre aléatoire en 0 et 10 
const rand10=()=>{
    return Math.trunc(Math.random()*11 );// 11 ne sera pas pris en compte,  si on aurait pris 10 on aurait vu que 9
}
console.log(rand10());