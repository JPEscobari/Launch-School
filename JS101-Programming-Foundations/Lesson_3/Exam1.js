const VALID_COUNTRY_CATEGORIES = {
  formerOttomanEmpire: ["Macedonia", "Hungary", "Greece"],
  mostPopulous: "China",
};

function countryCategoryValidation(categorizedCountries) {
  for (let key in categorizedCountries) {
    if (VALID_COUNTRY_CATEGORIES[key] === categorizedCountries[key]) {
      console.log("correct");
    } else {
      console.log("incorrect");
    }
  }
}

countryCategoryValidation({
  mostPopulous: "China",
  formerOttomanEmpire: ["Macedonia", "Hungary", "Greece"],
});
// correct
// incorrect