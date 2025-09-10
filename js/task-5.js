const numbers = [2, 1, 6, 8, 9, 10, 12];
console.log("numbers: ", numbers);

const firstNotEven = numbers.find((number) => number % 2 !== 0);
console.log("firstNotEven: ", firstNotEven);
