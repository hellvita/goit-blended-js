const calculateAverage = (numbers) => {
  let result = "Numbers only allowed!";
  if (!numbers || numbers.length === 0) {
    result = "Nothing to calculate!";
  } else if (numbers.every((number) => typeof number === "number")) {
    result =
      numbers.reduce((sum, number) => {
        return (sum += number);
      }, 0) / numbers.length;
  }
  return result;
};

console.log("calculateAverage([5, 15]): ", calculateAverage([5, 15]));
console.log("calculateAverage(): ", calculateAverage());
console.log("calculateAverage([]): ", calculateAverage([]));
console.log(
  "calculateAverage(['a', 'b', 'c']): ",
  calculateAverage(["a", "b", "c"])
);
console.log(
  "calculateAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]): ",
  calculateAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);
