const readlineSync = require("readline-sync");

function questions() {
  let question = 4;
  let one = readlineSync.question("blablabla ?" + ("Questions " + question + " : "));
  --question;
  let two = readlineSync.question("blablablablabla ?!" + ("Questions " + question + " : "));
  --question;
  let three = readlineSync.question("blablabla ?" + ("Questions " + question + " : "));
  --question;
  let four = readlineSync.question("bla?" + ("Questions : " + question + " : "));
  console.log("Blablablabla blababla " + one +" blabababla "+ two+ " bla " + three + "babla" + four + " blablabahahah !");
}
questions();