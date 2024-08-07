"use strict";
// interface er maddome abstraction
class Vehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log("I am starting");
    }
    stopEngine() {
        console.log("I am stoping");
    }
    moveEngine() {
        console.log("I am moving");
    }
    test() {
        console.log("I am testing");
    }
}
const vehicle1 = new Vehicle("Range Rover", "Range", 2023);
vehicle1.startEngine();
// console.log(v);
// abstraction class
class Vehicle2 {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    moveEngine() {
        console.log("I am moving");
    }
    test() {
        console.log("I am testing");
    }
}
// jokhon class k abstract class banano hobe tokhon tar instance banano jabe na
// const car1 = new Vehicle2("Super Car", "Audi", 2023);
class Car extends Vehicle2 {
    startEngine() {
        console.log("I am starting");
    }
    stopEngine() {
        console.log("I am stoping");
    }
}
