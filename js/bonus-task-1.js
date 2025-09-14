const products = [
  { name: "Milk", price: 20 },
  { name: "Bread", price: 10 },
  { name: "Eggs", price: 15 },
];
console.table(products);

const result = products
  .filter((product) => product.price > 10)
  .reduce((sum, product) => sum + product.price, 0);
console.log("result: ", result);
