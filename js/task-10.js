const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("i: fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("i: buzz");
    } else if (i % 3 === 0) {
      console.log("i: fizz");
    } else {
      console.log("i: ", i);
    }
  }
};
fizzBuzz(30);
