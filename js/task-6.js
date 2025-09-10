const numbersArray = [4, 2, 5, 1, 3];
console.log("numbersArray: ", numbersArray);

const arrSorted = numbersArray.toSorted((a, b) => a - b);
console.log("arrSorted: ", arrSorted);
