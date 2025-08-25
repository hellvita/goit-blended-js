const isAdult = (age) => (age >= 18 ? true : confirm("Continue anyway?"));
console.log("isAdult(22): ", isAdult(22));
console.log("isAdult(10): ", isAdult(10));
