"use strict";
const userWithType = {
    name: "TypeAlias",
    age: 12,
};
console.log(userWithType.name);
const userWithInterface = {
    name: "Interface",
    age: 13,
};
console.log(userWithInterface.name);
const userWithInterfaceExtends = {
    name: "Extends",
    age: 22,
    role: "admin",
};
console.log(userWithInterfaceExtends.name, userWithInterfaceExtends.role);
// function a type alias use kora valo cause ata besi clean
const addNumbers = (number11, number12) => {
    return number11 + number12;
};
const addNumbers2 = (number11, number12) => {
    return number11 + number12;
};
const re = addNumbers(12, 11);
console.log(re);
const re2 = addNumbers2(12, 14);
console.log(re2);
const rollNumbers = [1, 2, 2, 3];
