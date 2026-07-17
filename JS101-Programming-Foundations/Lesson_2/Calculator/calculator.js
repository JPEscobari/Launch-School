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
      console.log(`${number1} + ${number2} = ${result}`);
      break;
    case "2":
      result = Number(number1) - Number(number2);
      console.log(`${number1} - ${number2} = ${result}`);
      break;
    case "3":
      result = Number(number1) * Number(number2);
      console.log(`${number1} * ${number2} = ${result}`);
      break;
    default:
      result = number1 / number2;
      console.log(`${number1} / ${number2} = ${result}`);
      break;
  };
};

function main(lang = "EN") {
  prompt(message[lang].message_1);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(message[lang].message_invalid);
    number1 = readline.question();
  }


  prompt(message[lang].message_2);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(message[lang].message_invalid);
    number2 = readline.question();
  }

  prompt(message[lang].operation_message);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(message[lang].operation_error);
    operation = readline.question();
  }
  operate(operation, number1, number2);
};

let lang = "EN";
// Welcome Messages.
console.log(message[lang].welcome);
console.log("Please Pick a Language.\n'ES': Español.\n'EN': English");
lang = readline.question();

// Calculator's Main Loop:
while (true) {
  main(lang);
  prompt(message[lang].continue);
  let option = readline.question();
  if (option.toUpperCase() === 'Y') {
    continue;
  } else {
    break;
  }
}
