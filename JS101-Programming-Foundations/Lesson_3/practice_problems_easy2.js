function question (questionNumber) {
  let subtitle = `Question ${questionNumber}`;
  let paddingCalculation = Math.floor((40 - subtitle.length) / 2);
  console.log("\n------------------------------------------------------");
  console.log(`   ${subtitle.padStart(subtitle.length + paddingCalculation)}`);
  console.log("------------------------------------------------------\n");
}

question(1);
// Given a string,
// return a new string that replaces
// every occurrence of the word "important" with "urgent"
let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.replace('important', 'urgent'));

question(2);
/*
Array.prototype.reverse: reverses the order of elements in an array,
Array.prototype.sort: rearrange the elements in a variety of ways (descending).
Both of these methods mutate the original array as shown below.
Write two distinct ways of reversing the array without mutating the original.
Use `reverse` for the first solution, and `sort` for the second.
*/

let numbers = [1, 2, 3, 4, 5];

function myReverse(numbers) {
  return numbers.slice().reverse();
}

function anotherReverse(numbers) {
  return [...numbers].sort((a, b) => b - a);
}

console.log(myReverse(numbers));
console.log(anotherReverse(numbers));

//----------------------------------------
question(3);
/*
Given a number and an array,
determine whether the number is included in the array.
*/

let numbers3 = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers3.includes(number1));
console.log(numbers3.includes(number2));

//------------------------------------------------------------------------------
question(4);
/*
Show two different ways to put the expected "Four score and " in front of it.
*/

let famousWords = "seven years ago...";

function inFront(addThis, str) {
  let words = str.split(" ");
  let words2 = addThis.split(" ");

  return ([...words2, ...words]).join(" ");
}

console.log(inFront('Four score and ', famousWords));

//------------------------------------------------------------------------------
question(5);
/*
Given an array of numbers [1, 2, 3, 4, 5],
mutate the array by removing the number at index 2,
so that the array becomes [1, 2, 4, 5].
*/

let array5 = [1, 2, 3 , 4, 5];

array5.splice(2, 1);
console.log(array5);

//------------------------------------------------------------------------------
question(6);
/*
Create a new array that contains all of the above values, 
but in an un-nested format:
*/

let flintstones = ["Fred", "Wilma"];
let flinstones2 = ["Barney", "Betty"];
let flinstones3 = ["Bambam", "Pebbles"];

let allFlinstones = [...flintstones, ...flinstones2, ...flinstones3];
console.log(allFlinstones);

//------------------------------------------------------------------------------
question(7);
/*
Create a new array that contains all of the above values,
but in an un-nested format:
*/

let flints = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

console.log(Object.entries(flints).find(([key]) => key === "Barney"));


//------------------------------------------------------------------------------
question(8);
/*
How would you check whether the objects assigned to
variables |numbers| and |table| below are arrays?
*/

let numbers8 = [1, 2, 3, 4]; // true
let table8 = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbers8));
console.log(Array.isArray(table8));

//------------------------------------------------------------------------------
question(9);
/*
Back in the stone age (before CSS), 
we used spaces to align things on the screen.
If we have a 40-character wide table of Flintstone family members,
how can we center the following title above the table with spaces?
*/

let title = "Flintstone Family Members";

let padding = Math.floor((40 - title.length) / 2);
let centeredTitle = title.padStart(title.length + padding);

console.log(centeredTitle);