const calcTotalPrice = (fruits, fruitName) => {
  const fruit = fruits.filter((fruit) => fruit.name === fruitName);
  if (fruit.length === 0) {
    return `Sorry, there is no ${fruitName}`;
  } else {
    return fruit.reduce(
      (sum, value) => (sum += value.price * value.quantity),
      0
    );
  }
};

const fruits = [
  { name: "Яблуко", price: 45, quantity: 7 },
  { name: "Апельсин", price: 60, quantity: 4 },
  { name: "Банан", price: 125, quantity: 8 },
  { name: "Груша", price: 350, quantity: 2 },
  { name: "Виноград", price: 440, quantity: 3 },
  { name: "Банан", price: 125, quantity: 3 },
];

console.log("Яблуко: ", calcTotalPrice(fruits, "Яблуко"));
console.log("Апельсин: ", calcTotalPrice(fruits, "Апельсин"));
console.log("Банан: ", calcTotalPrice(fruits, "Банан"));
console.log("Слива: ", calcTotalPrice(fruits, "'Слива'"));
