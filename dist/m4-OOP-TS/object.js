"use strict";
class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
const cat = new Animal("Pika", "Cat", "Meow Meow");
cat.makeSound();
const dog = new Animal("Kalo", "Dog", "Ghew Ghew");
dog.makeSound();
class Human {
    // parameter properties
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    information() {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nGender: ${this.gender}`);
    }
}
const man = new Human("Farok", 27, "Male");
man.information();
