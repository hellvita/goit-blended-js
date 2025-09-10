const people = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];
console.table(people);

const under20 = people.some((person) => person.age < 20);
console.log("under20: ", under20);
