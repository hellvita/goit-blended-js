const stringArray = ["banana", "orange", "apple", "pear"];
console.log("stringArray: ", stringArray);

const arrSorted = stringArray.toSorted((a, b) => a.localeCompare(b));
console.log("arrSorted: ", arrSorted);
