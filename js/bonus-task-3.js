class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  calculateArea() {
    return this.width * this.height;
  }
}

const rectangle1 = new Rectangle(20, 50);
console.log("rectangle1.calculateArea(): ", rectangle1.calculateArea());
