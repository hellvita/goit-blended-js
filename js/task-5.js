const findSmallestNumber = (numbers) => {
  let result = "Sorry, it is not an array!";
  if (Array.isArray(numbers)) {
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] < numbers[i + 1]) {
        result = numbers[i];
      } else {
        result = numbers[i + 1];
      }
    }
  }
  return result;
};

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
console.log("numbers: ", numbers);
console.log("findSmallestNumber(numbers): ", findSmallestNumber(numbers));
console.log("findSmallestNumber('3, 2, 1'): ", findSmallestNumber("3, 2, 1"));
console.log("findSmallestNumber([5, 2, 10]): ", findSmallestNumber([5, 2, 10]));
