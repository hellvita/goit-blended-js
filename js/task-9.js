const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.exist() ? this.a + this.b : "There are no properties";
  },
  mult() {
    return this.exist() ? this.a * this.b : "There are no properties";
  },
  exist() {
    return this.a && this.b;
  },
};

console.log("calculator: ", calculator);
console.log("calculator.sum(): ", calculator.sum());
console.log("calculator.mult(): ", calculator.mult());

calculator.read(2, 3);
console.log("calculator: ", calculator);
console.log("calculator.sum(): ", calculator.sum());
console.log("calculator.mult(): ", calculator.mult());
