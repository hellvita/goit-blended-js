const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};
let sum = 0;

const values = Object.values(salaries);
for (const value of values) {
  sum += value;
}

console.log("sum: ", sum);
