function addOne(num) {
  console.log("Running");
  return num + 1;
}

function mutater(adder){
  adder['a'] = 'mutated';
}

mutater(addOne);
console.log(addOne(1));
console.log(addOne());