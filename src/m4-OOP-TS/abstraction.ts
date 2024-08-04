interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  moveEngine(): void;
}
// interface er maddome abstraction
class Vehicle implements IVehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  startEngine(): void {
    console.log("I am starting");
  }
  stopEngine(): void {
    console.log("I am stoping");
  }
  moveEngine(): void {
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
abstract class Vehicle2 {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  abstract startEngine(): void;
  abstract stopEngine(): void;
  moveEngine(): void {
    console.log("I am moving");
  }
  test() {
    console.log("I am testing");
  }
}

// jokhon class k abstract class banano hobe tokhon tar instance banano jabe na
// const car1 = new Vehicle2("Super Car", "Audi", 2023);

class Car extends Vehicle2 {
  startEngine(): void {
    console.log("I am starting");
  }
  stopEngine(): void {
    console.log("I am stoping");
  }
}
