const numbers = [1, 2, 3, 4, 5];
console.log("numbers: ", numbers);

const sum = numbers.reduce((sum, number) => sum + number, 0);
console.log("sum: ", sum);
