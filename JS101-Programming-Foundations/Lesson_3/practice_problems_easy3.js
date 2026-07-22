function question (questionNumber) {
  let subtitle = `Question ${questionNumber}`;
  let paddingCalculation = Math.floor((40 - subtitle.length) / 2);
  console.log("\n------------------------------------------------------");
  console.log(`   ${subtitle.padStart(subtitle.length + paddingCalculation)}`);
  console.log("------------------------------------------------------\n");
}

question(1);
// Write three different ways to
// remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

while (numbers.length) {
  numbers.pop();
}


question(5);
// The following function
// unnecessarily uses two return statements to return boolean values.
// Can you rewrite this function so it only has one return statement
//  and does not explicitly use either true or false?

function isColorValid(color) {
  let flag = false;

  if (color === "blue" || color === "green") {
    flag = true;
  }

  return flag;
}

function isColorValid2(color) {
  return color === "blue" || color === "green";
}

