const sum = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i] + arr[i + 1]);
  }
  return result;
};

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

console.log(sum(someArr));
console.log(sum([1, 2, 3]));
