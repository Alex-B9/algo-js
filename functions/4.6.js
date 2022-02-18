const readlineSync=require("readline-sync");
function factorielle(a) {
    let fac = 1;
    for (let i = 2; i < a + 1; i++) {
      fac = fac * i;
    }
    return fac;
  }
let ask=new Number(readlineSync.question("Choose a number : "))
console.log(factorielle(ask));