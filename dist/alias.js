"use strict";
const crush1 = {
    name: "Tessa",
    age: 23,
    profession: "react developer",
    address: "usa",
};
const crush2 = {
    name: "Joye",
    profession: "next.js developer",
    address: "australia",
};
const courseNames = "Next Level Web Development";
const adds = (n1, n2) => {
    return n1 + n2;
};
const sum = adds(12, 23);
console.log(sum);
const calculate = (nm1, nm2, operation) => {
    return operation(nm1, nm2);
};
const result1 = calculate(11, 13, (x, y) => x + y);
const result2 = calculate(11, 13, (x, y) => x - y);
const result3 = calculate(11, 13, (x, y) => x * y);
console.log(`result1: ${result1}\nresult2: ${result2}\nresult3: ${result3}`);
