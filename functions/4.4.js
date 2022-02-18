// Library
const readlineSync=require("readline-sync");
// Fonction qui renvoi la moyenne d'un tableau
const avg=(arr)=> {
    let i = 0, summ = 0, ArrayLen = arr.length;
    while (i < ArrayLen) {
        summ = summ + arr[i++];
    }
    return summ / ArrayLen;
}
let arr = [1, 2, 3, 4, 5];
let a = avg(arr);

// Fonction qui renvoie le plus petit nombre d'un tableau
const min=(arr)=> {
    return Math.min(...arr);
}
let tab = [2, 1, 3, 4, 5];
let m = Math.min(...tab);

// Fonction qui renvoie le plus grand nombre d'un tableau 
const max=(arr)=> {
    return Math.max(...arr);
}
let tab1 = [1, 2, 3, 5, 4];
let mx = Math.max(...tab1);

// Fonction qui renvoie un chiffre aléatoire en 0 et 10 
const rand10=()=>{
    return Math.trunc(Math.random()*11 );// 11 ne sera pas pris en compte,  si on avait mit 10 on aurait vu que 9 maximum
}
// Fonction qui demande à l'user le nombre de nombre aléatoire donnés.
const multiRand=(n/*numberOfMultiRand*/)=>{
    let arr= [];
    for (let i = 0; i<n; i++){
    arr[i]=rand10();
}
return arr;
}

//
const nbr=()=>{
    let tst = new Number(readlineSync.question("Number, please ? "))
    tst = multiRand(tst);
    console.log(tst);
    console.log(" Minimal number : " + min(tst)+ " Maximal number : " + max(tst) + " Average number : " + avg(tst));
}
nbr();