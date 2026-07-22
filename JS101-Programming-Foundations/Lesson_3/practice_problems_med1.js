function question (questionNumber) {
  let subtitle = `Question ${questionNumber}`;
  let paddingCalculation = Math.floor((40 - subtitle.length) / 2);
  console.log("\n------------------------------------------------------");
  console.log(`   ${subtitle.padStart(subtitle.length + paddingCalculation)}`);
  console.log("------------------------------------------------------\n");
}

question(1);
//
