// Ask for the first number.
// Ask for the second number.
// Ask for the operator.
// Send all three to the 'calc' function.
// calc() checks the operator.
// perform the operation.
// print the result.

const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === ''  || Number.isNaN(Number(number));
}

console.log("Welcome to Calculator!");

prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Invalid Number. Please enter a valid number");
  number1 = readline.question();
}


prompt("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Invalid Number. Please enter a valid number");
  number2 = readline.question();
}

prompt(`Pick the operation: \n1) Add \n2) Substract \n3) Multiply \n4) Divide`);
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("Please choose 1, 2, 3 or 4");
  operation = readline.question();
}

let result = null;

switch (operation) {
  case "1":
    result = Number(number1) + Number(number2);
    console.log(`The result is ${result}`);
    break;
  case "2":
    result = Number(number1) - Number(number2);
    console.log(`The result is ${result}`);
    break;
  case "3":
    result = Number(number1) * Number(number2);
    console.log(`The result is ${result}`);
    break;
  default:
    result = number1 / number2;
    console.log(`The result is ${result}`);
    break;
}

