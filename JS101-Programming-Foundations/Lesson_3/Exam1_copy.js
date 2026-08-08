// Example 2
function lod() {
  console.log("Running lod");
  return () => "";
}

let result;

if (lod()()) {
  result = "truthy";
} else {
  result = "falsy";
}

console.log(result); // falsy
