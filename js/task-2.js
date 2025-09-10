const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];
console.table(data);

const arr = data.flatMap((obj) => obj.values);
console.log("arr: ", arr);
