const readlineSync= require("readline-sync");

const askTvSeries=()=>{
    let tvSeries ={};
    let cast = 0
    tvSeries.name = readlineSync.question("Name  of your film/series ? ");
    tvSeries.year=readlineSync.questionInt("Year of production of your film/serie ? ");
    cast = new Number(readlineSync.question("How many actors participate in the casting ? "))
    tvSeries.castMember = [];
    for (let i = 0;i < cast; i++){
        tvSeries.castMember.push(readlineSync.question("Names of the cast members : "));
    }
    return tvSeries;
}
let ask = askTvSeries();
console.log(JSON.stringify(ask, null, 5)); 