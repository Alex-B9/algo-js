let ArrA = [1,2,3];
let ArrB = Object.values(ArrA);
let ArrC = [];
console.log(ArrB);

for(let i = 0; i < ArrA.length; i++){
    ArrC.push(ArrA[i]);
}
console.log(ArrC);