/*
Write a function that returns:
a list that contains every other element of a list
that is passed in as an argument.

The values in the returned list:
should be those values that are in the 1st, 3rd, 5th,
and so on elements of the argument list.
*/

function oddities(array) {
  return array.filter((element, index) => index % 2 === 0);
}

console.log(oddities([2, 3, 4, 5, 6]) == [2, 4, 6]);  // True
console.log(oddities([1, 2, 3, 4]) == [1, 3]);        // True
console.log(oddities(["abc", "def"]) == ['abc']);     // True
console.log(oddities([123]) == [123]);                // True
console.log(oddities([]) == []);                      // True