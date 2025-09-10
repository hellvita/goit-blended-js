class Calculator {
  static #onlyNumbers = "our Calculator works only with numbers";
  static #whyZero = "what do you expect to get by dividing by zero..?";
  static #notNumberMsg() {
    this.value = `${this.#onlyNumbers}...`;
  }
  static #divideByZeroMsg() {
    this.value = this.#whyZero;
  }
  static #notNumberAndZeroMsg() {
    this.value = `${this.#onlyNumbers} and ${this.#whyZero}`;
  }
  static #isNumber(...values) {
    return values.every((value) => typeof value === "number");
  }
  static #isZero(value) {
    return value === 0;
  }
  static #isZeroStr(value) {
    return value === "0";
  }

  static number(value) {
    if (this.#isNumber(value)) {
      this.value = value;
    } else {
      this.#notNumberMsg();
    }
    return this;
  }

  static add(value) {
    if (this.#isNumber(value, this.value)) {
      this.value += value;
    } else {
      this.#notNumberMsg();
    }

    return this;
  }

  static subtract(value) {
    if (this.#isNumber(value, this.value)) {
      this.value -= value;
    } else {
      this.#notNumberMsg();
    }
    return this;
  }

  static divide(value) {
    if (!this.#isZero(value) && this.#isNumber(value, this.value)) {
      this.value /= value;
    } else if (
      (this.#isZero(value) && !this.#isNumber(value, this.value)) ||
      this.#isZeroStr(value)
    ) {
      this.#notNumberAndZeroMsg();
    } else if (this.#isZero(value)) {
      this.#divideByZeroMsg();
    } else {
      this.#notNumberMsg();
    }

    return this;
  }

  static multiply(value) {
    if (this.#isNumber(value, this.value)) {
      this.value *= value;
    } else {
      this.#notNumberMsg();
    }
    return this;
  }

  static getResult() {
    return this.value;
  }
}

console.log(
  '25+5-"5"/0:',
  Calculator.number(25).add(5).subtract("5").divide(0).getResult()
);

console.log("10+15/0:", Calculator.number(10).add(15).divide(0).getResult());

console.log('33-"22":', Calculator.number(33).subtract("22").getResult());

console.log('77/"0":', Calculator.number(77).divide("0").getResult());

console.log(
  "['a', 'b']+false:",
  Calculator.number(["a", "b"]).add(false).getResult()
);

console.log(
  "10+5-3*4/2:",
  Calculator.number(10).add(5).subtract(3).multiply(4).divide(2).getResult()
);
