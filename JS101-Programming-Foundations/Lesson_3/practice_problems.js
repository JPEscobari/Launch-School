function newQuestion (questionNumber) {
  console.log("\n------------------");
  console.log(`   QUESTION ${questionNumber}`);
  console.log("------------------\n");
}

newQuestion(4);
let munstersDescription = "the Munsters are CREEPY and Spooky.";

function newString(str) {
  let myString = String(str).toLowerCase();
  let capitalized = myString[0].toLocaleUpperCase() + myString.slice(1);
  console.log(capitalized);
  return capitalized;
}

newString(munstersDescription);

newQuestion(6);
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };
let allAges = {...additionalAges, ...ages};
console.log(allAges);

newQuestion(7);
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

function dinoCheck(str) {
  if (str.includes('Dino')) {
    console.log("The string includes the word 'Dino'");
    return true;
  } else {
    console.log("The string doesn't contain the word 'Dino'");
    return false;
  }
}

dinoCheck(str1);
dinoCheck(str2);

newQuestion(10);
let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

function slicer(word = 'house', str) {
  let index = str.indexOf(word);
  let slicedPhrase = str.slice(0, index);
  return slicedPhrase;
}

console.log(slicer('house', advice));