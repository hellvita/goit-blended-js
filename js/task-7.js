const getNumbers = (min, max) => {
  let sum = 0;
  for (let i = max; i >= min; i--) {
    console.log("i: ", i);
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log("getNumbers(3,8): ", getNumbers(3, 8));
console.log("getNumbers(0,10): ", getNumbers(0, 10));
console.log("getNumbers(10,50): ", getNumbers(10, 50));
