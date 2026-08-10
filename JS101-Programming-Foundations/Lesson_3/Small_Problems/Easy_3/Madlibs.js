const rl = require("readline-sync");

// Create a simple Madlib program that 
// prompts for a noun, a verb an adverb and an adjective 
// and injects them into a story that you create.

const noun = rl.question("Enter a noun: ");
const verb = rl.question("Enter a verb: ");
const adjective = rl.question("Enter an adjective: ");
const adverb = rl.question("Enter and adverb: ");

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
