const rl = require("readline-sync");

const currentYear = new Date().getFullYear();

function prompt(str) {
  console.log(`==> ${str}`);
}

prompt("What is your Age?");
const age = rl.questionInt();

prompt("At what age would you like to retire?");
const retirementAge = rl.questionInt();

const yearsOfWorkRemaining = retirementAge - age;
const lastYearOfWork = currentYear + yearsOfWorkRemaining;

console.log(`It's ${currentYear}. You will retire in ${lastYearOfWork}.`);
console.log(`You have only ${yearsOfWorkRemaining} years of work to go!`);