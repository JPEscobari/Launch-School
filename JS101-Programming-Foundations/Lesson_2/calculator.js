// Ask for the first number.
// Ask for the second number.
// Ask for the operator.
// Send all three to the 'calc' function.
// calc() checks the operator.
// perform the operation.
// print the result.

const readline = require("readline-sync");
const message = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === ''  || Number.isNaN(Number(number));
}

function operate(operation, number1, number2) {
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
  };
};

function main() {
  prompt(message.message_1);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(message.message_invalid);
    number1 = readline.question();
  }


  prompt(message.message_2);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(message.message_invalid);
    number2 = readline.question();
  }

  prompt(message.operation_message);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(message.operation_error);
    operation = readline.question();
  }
  operate(operation, number1, number2);
};

console.log(message.welcome);

while (true) {
  main();
  prompt(message.continue);
  let option = readline.question();
  if (option.toUpperCase() === 'Y') {
    continue;
  } else {
    break;
  }
}
