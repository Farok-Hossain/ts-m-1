"use strict";
// typeof guard
const addsss = (param1, param2) => {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + " " + param2.toString();
    }
};
const p = addsss(2, 23);
const p2 = addsss("Farok", "Hossain");
console.log(p);
console.log(p2);
function getUser(user) {
    if ("role" in user) {
        return `My role is ${user.role}`;
    }
    else {
        return `I am normal user`;
    }
}
const normalUser = { name: "Mr. X" };
const adminUser = { name: "Mr. Y", role: "Admin" };
console.log(getUser(normalUser));
console.log(getUser(adminUser));
// instanceof guard
class Animals {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log("I am making sound");
    }
}
class Dog extends Animals {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log("Lalu: I am barking");
    }
}
class Cat extends Animals {
    constructor(name, species) {
        super(name, species);
    }
    makeMeow() {
        console.log("Zika: I am meow");
    }
}
function getAnimal(animal) {
    if (animal instanceof Dog) {
        animal.makeBark();
    }
    else if (animal instanceof Cat) {
        animal.makeMeow();
    }
    else {
        animal.makeSound();
    }
}
//new Dog("Lalu", "Dog").makeBark();
//new Cat("Zika", "Cat").makeMeow();
const animal1 = new Dog("Lalu", "Dog");
const animal2 = new Cat("Zika", "Cat");
getAnimal(animal1);
getAnimal(animal2);
