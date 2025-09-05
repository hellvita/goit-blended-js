const calculateAverage = (...numbers) => {
  let result = "Numbers only allowed!";

  if (numbers.length === 0 || numbers.every((number) => number.length === 0)) {
    result = "Nothing to calculate!";
  } else if (numbers.every((number) => typeof number === "number")) {
    result =
      numbers.reduce((sum, number) => {
        return (sum += number);
      }, 0) / numbers.length;
  }

  return result;
};

console.log(
  'calculateAverage("a", "b", "c"): ',
  calculateAverage("a", "b", "c"),
  "\n"
);
console.log("calculateAverage(1, 2, 3): ", calculateAverage(1, 2, 3), "\n");
console.log("calculateAverage(): ", calculateAverage(), "\n");
console.log("calculateAverage([]): ", calculateAverage([]), "\n");
console.log(
  'calculateAverage(2, 10, [], "c", 13): ',
  calculateAverage(2, 10, [], "c", 13),
  "\n"
);
console.log("calculateAverage(50, 50): ", calculateAverage(50, 50), "\n");
