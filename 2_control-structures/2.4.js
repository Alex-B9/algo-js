const readlineSync=require("readline-sync");
let nbr = 0
for (let nbr = 0 ; nbr < 101; nbr++){
    console.log(nbr);
if(nbr % 2 == 0){
    console.log(nbr/2);
}else{
    console.log(nbr * 3);
}
}