function question (questionNumber) {
  let subtitle = `Question ${questionNumber}`;
  let paddingCalculation = Math.floor((40 - subtitle.length) / 2);
  console.log("\n------------------------------------------------------");
  console.log(`   ${subtitle.padStart(subtitle.length + paddingCalculation)}`);
  console.log("------------------------------------------------------\n");
}

question(1);
// write a program that outputs The Flintstones Rock! 10 times,
// with each line indented 1 space to the right of the line above it.

function flintsPrinter(str) {
  let padding = ' ';
  for (let i = 0; i <= 10; i++) {
    let printOut = `${padding.repeat(i)} ${str}`;
    console.log(printOut);
  }
}

flintsPrinter("The Flinstones Rock!");

question(2);
// Return a string that swaps the case of all letters.

let munstersDescription = "The Munsters are creepy and spooky.";

function caseSwapper(str) {
  let words = str.split(" ");
  let modifiedArray = [];
  words.forEach(word => {
    let charArray = [...word];
    let modifiedWord = '';
    charArray.forEach(char => {
      if (char === char.toUpperCase()) {
        modifiedWord += char.toLowerCase();
      } else {
        modifiedWord += char.toUpperCase();
      }
    });
    modifiedArray.push(modifiedWord);
  });
  let result = modifiedArray.join(" ");
  console.log(result);
};

caseSwapper(munstersDescription);