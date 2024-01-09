/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * radius * radius, Math.PI * 2 * radius);
    this.radius = radius;
  }

  describe() {
    return `${super.describe()}, radius: ${this.radius}`;
  }
}

const circle = new Circle(8);
console.log(circle.describe());
