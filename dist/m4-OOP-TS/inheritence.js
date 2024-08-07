"use strict";
class Student {
    constructor(name, age, id, address) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.address = address;
    }
    StudnetInformation() {
        console.log(`I am ${this.name} & my address is ${this.address}`);
    }
}
const d = new Student("Farok", 27, 123, "Shukrabad");
d.StudnetInformation();
class Student2 {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `${this.name} will sleep ${hours} hours`;
    }
}
// const s = new Student2("Farok", 22, "Dhaka");
// s.makeSleep(8);
class Teacher {
    constructor(name, age, address, designatiion) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.designation = designatiion;
    }
    makeSleep(hours) {
        return `${this.name} will sleep for ${hours}`;
    }
    takeClasses(numOfClass) {
        return `This ${this.name} will take ${numOfClass} class`;
    }
}
// inheritence
class Parent {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `${this.name} will sleep ${hours} hours`;
    }
}
class Student3 extends Parent {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const s = new Student3("Farok Hossain", 27, "Dhaka");
const ss = s.makeSleep(8);
console.log(ss);
class Teacher3 extends Parent {
    constructor(name, age, address, designatiion) {
        super(name, age, address);
        this.designation = designatiion;
    }
    takeClasses(numOfClass) {
        return `This ${this.name} will take ${numOfClass} classes`;
    }
}
const t = new Teacher3("X", 55, "Dhanmondi", "Teacher");
const tt = t.takeClasses(3);
console.log(tt);
