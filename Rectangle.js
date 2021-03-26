// Rectangle.js
class Rectangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  isSquare() {
    if (this.a === this.b) {
      return 'This is a square';
    }
    return 'This is a rectangle';
  }

  getArea() {
    return `Area = ${this.a * this.b}`;
  }

  getPerimeter() {
    return `Perimeter = ${(this.a + this.b) * 2}`;
  }
}

module.exports = Rectangle;
