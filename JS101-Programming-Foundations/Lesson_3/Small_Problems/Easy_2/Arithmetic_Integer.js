const rl = require("readline-sync");

const operationMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => Math.floor(a / b),
  '%': (a, b) => a % b,
  '**': (a, b) => a ** b,
};

function prompt(str) {
  console.log(`==> ${str}`);
}

prompt("Enter the first number: ");
const num1 = rl.questionInt();

prompt("Enter the second number: ");
const num2 = rl.questionInt();

Object.keys(operationMap).forEach(op => {
  console.log(`==> ${num1} ${op} ${num2} = ${operationMap[op](num1, num2)}`);
});