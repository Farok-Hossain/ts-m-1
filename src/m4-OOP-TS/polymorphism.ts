class Person {
  takeName(): void {
    console.log("i am sleeping 6 hours per day");
  }
}

class Students extends Person {
  takeName(): void {
    console.log("I am sleeping 8 hours per day");
  }
}

class Developer extends Person {
  takeName(): void {
    console.log("I am sleeping 5 hours per day");
  }
}

function getName(param: Person) {
  param.takeName();
}

const person1 = new Person();
const person2 = new Students();
const person3 = new Developer();

getName(person1);
getName(person2);
getName(person3);

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
}

function getAreaOfShape(param: Shape) {
  console.log(param.getArea());
}

getAreaOfShape(new Circle(5));
getAreaOfShape(new Rectangle(5, 8));
