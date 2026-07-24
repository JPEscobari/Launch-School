const readline = require('readline-sync');
let result = null;

function prompt(str) {
  console.log(`=> ${str}`);
}

function isValidNumber(number) {
  return Number.isInteger(Number(number)) && Number(number) > 0;
}

function isValidOperation(char) {
  return char === 's' || char === 'p';;
}

prompt("Please enter an integer greater than 0: ");
let answer = readline.question();

while (!isValidNumber(answer)) {
  prompt("Number out of range.");
  prompt("Please enter an integer greater than 0: ");
  answer = readline.question();
}

answer = Number(answer);

prompt('Enter "s" to compute the sum, or "p" to compute the product.');
let operation = readline.question();

while (!isValidOperation(operation)) {
  prompt("Invalid Choice.");
  prompt("Please type 's' to compute the sum or 'p' to compute the product: ");
  operation = readline.question();
}

switch (operation) {
  case 's':
    result = 0;
    for (let start = 1; start <= answer; start++) {
      result += start;
    }
    console.log(`The sum of the integers between 1 and ${answer} is: ${result}`);
    break;
  case 'p':
    result = 1;
    for (let start = 1; start <= answer; start++) {
      result *= start;
    }
    console.log(`The product of the integers between 1 and ${answer} is: ${result}`);
    break;

  default:
    break;
}
