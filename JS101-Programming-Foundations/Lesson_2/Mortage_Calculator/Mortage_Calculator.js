// This is a mortage Calulator
// Import the readline-sync library.

const rl = require("readline-sync");

// Ask for the loan amount.
// Ask for the APR.
// Ask for the loan duration.

// Calculate the monthly interest rate (APR / 12).
// Calculate the loan duration in months.
// Calculate the (M) monthly payments.

// --------------------------- //
//     HELPER VARIABLES        //
// --------------------------- //
let loanAmount = 0;
let APR = 0;
let loanDuration = 0;
let monthlyInterestRate = 0 // Monthly Interest Rate

console.log("Insert the loan amount:");
loanAmount = rl.question();
console.log("Insert the Annual Percentage Rate [APR]:");
APR = rl.question();
monthlyInterestRate = APR / 12;
console.log("Insert the loan duration in months:");
loanDuration = rl.question();

// Calculate the Mo. Payment:
let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));
console.log(`Your monthly payments are: \$ ${monthlyPayment}`);


