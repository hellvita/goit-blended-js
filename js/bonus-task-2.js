const friends = [
  {
    passport: "03005988",
    name: "Joseph Francis Tribbiani Jr",
    age: 32,
    sex: "m",
  },
  { passport: "03005989", name: "Chandler Muriel Bing", age: 33, sex: "m" },
  { passport: "03005990", name: "Ross Eustace Geller", age: 33, sex: "m" },
  { passport: "03005991", name: "Rachel Karen Green", age: 31, sex: "f" },
  { passport: "03005992", name: "Monica Geller", age: 31, sex: "f" },
  { passport: "03005993", name: "Phoebe Buffay", age: 34, sex: "f" },
];
console.table(friends);

const getGirlsPassports = (arr) =>
  arr.filter((obj) => obj.sex === "f").map((girl) => girl.passport);
console.log("girlNumbers: ", getGirlsPassports(friends));
