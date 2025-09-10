const users = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];
console.table(users);

const usersSorted = users.toSorted((a, b) => a.age - b.age);
console.table(usersSorted);
