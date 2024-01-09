/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `area: ${this.area}, perimeter: ${this.perimeter}`;
  }
}

const shape = new Shape(30, 5);
console.log(shape.describe());
