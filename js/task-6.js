const findLongestWord = (string) => {
  const strArr = string.split(" ");
  const lengthArr = [];
  strArr.forEach((word) => lengthArr.push(word.length));
  return strArr[lengthArr.indexOf(Math.max(...lengthArr))];
};

console.log(
  "findLongestWord('London is the capital of Great Britan'): ",
  findLongestWord("London is the capital of Great Britan")
);
console.log(
  "findLongestWord('Aritakeno yume wo kage atsume'): ",
  findLongestWord("Aritakeno yume wo kage atsume")
);
