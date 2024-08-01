class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
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
  constructor(public name: string, public age: number, public gender: string) {}
  public information() {
    console.log(`Name: ${this.name}\nAge: ${this.age}\nGender: ${this.gender}`);
  }
}

const man = new Human("Farok", 27, "Male");
man.information();
