const min = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a < b ? a : b;
  } else {
    return "Not a number!";
  }
};
console.log("min(5, 7);: ", min(5, 7));
console.log("min(15, 3): ", min(15, 3));
console.log('min(6, "4"): ', min(6, "4"));
