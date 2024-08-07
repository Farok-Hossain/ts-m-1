"use strict";
class Person {
    takeName() {
        console.log("i am sleeping 6 hours per day");
    }
}
class Students extends Person {
    takeName() {
        console.log("I am sleeping 8 hours per day");
    }
}
class Developer extends Person {
    takeName() {
        console.log("I am sleeping 5 hours per day");
    }
}
function getName(param) {
    param.takeName();
}
const person1 = new Person();
const person2 = new Students();
const person3 = new Developer();
getName(person1);
getName(person2);
getName(person3);
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
function getAreaOfShape(param) {
    console.log(param.getArea());
}
getAreaOfShape(new Circle(5));
getAreaOfShape(new Rectangle(5, 8));
