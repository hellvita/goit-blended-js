const user = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];
console.table(user);

const above20 = user.filter((user) => user.age > 20);
console.table(above20);
